import { Product } from "@/constants/Mocks";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, ReactNode, useEffect, useState } from "react";

export interface CartProduct extends Product {
  quantity: number;
}

interface CartContextType {
  products: CartProduct[];
  addProduct: (product: CartProduct) => void;
  removeProduct: (productId: number) => void;
  updateProductQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
}

// Crie o contexto
export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CART_STORAGE_KEY = "@cart_products";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([]);

  // Função para carregar o carrinho do AsyncStorage ao iniciar
  useEffect(() => {
    const loadCart = async () => {
      try {
        const storedCart = await AsyncStorage.getItem(CART_STORAGE_KEY);
        if (storedCart) {
          setProducts(JSON.parse(storedCart));
        }
      } catch (error) {
        console.error("Falha ao carregar o carrinho", error);
      }
    };

    loadCart();
  }, []);

  // Função para salvar o carrinho no AsyncStorage sempre que ele mudar
  const saveCart = async (updatedProducts: Product[]) => {
    try {
      await AsyncStorage.setItem(
        CART_STORAGE_KEY,
        JSON.stringify(updatedProducts)
      );
    } catch (error) {
      console.error("Falha ao salvar o carrinho", error);
    }
  };

  const addProduct = (product: CartProduct) => {
    setProducts((prev) => {
      const existingProduct = prev.find((p) => p.id === product.id);
      const updatedProducts = existingProduct
        ? prev.map((p) =>
            p.id === product.id
              ? { ...p, quantity: p.quantity + product.quantity }
              : p
          )
        : [...prev, product];

      saveCart(updatedProducts);
      return updatedProducts;
    });
  };

  const removeProduct = (productId: number) => {
    setProducts((prev) => {
      const updatedProducts = prev.filter((p) => p.id !== productId);
      saveCart(updatedProducts);
      return updatedProducts;
    });
  };

  const updateProductQuantity = (productId: number, change: number) => {
    setProducts((currentItems) => {
      const updatedItems = currentItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(0, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0);
      saveCart(updatedItems);
      return updatedItems;
    });
  };

  const clearCart = () => {
    setProducts([]);
    saveCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        products,
        addProduct,
        removeProduct,
        updateProductQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
