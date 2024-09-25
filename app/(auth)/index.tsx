import { FoodCard } from "@/components/FoodCard";
import { Header } from "@/components/Header";
import { Container, Wrapper } from "@/components/Layout";
import { TextInput } from "@/components/TextInput";
import { Product, ProductData, products } from "@/constants/Mocks";
import { useCart } from "@/hooks/userCart";
import { formatCurrency } from "@/utils/formatCurrency";
import { Feather } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { FlatList, Modal, Text } from "react-native";
import styled from "styled-components/native";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredCardData, setFilteredCardData] = useState<ProductData>({});
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const { addProduct } = useCart();

  useEffect(() => {
    const filtered = Object.keys(products).reduce((acc, category) => {
      acc[category] = products[category].filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return acc;
    }, {} as ProductData);
    setFilteredCardData(filtered);
  }, [searchTerm]);

  const handleCardPress = (item: Product) => {
    setSelectedProduct(item);
    setModalVisible(true);
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      addProduct({
        ...selectedProduct,
        quantity: 1,
      });
      setModalVisible(false);
    }
  };

  const renderCategory = ({ item: category }: { item: string }) => (
    <Wrapper key={category}>
      <Wrapper px={16} my={8}>
        <CategoryTitle>{category}</CategoryTitle>
      </Wrapper>
      <FlatList
        horizontal
        data={filteredCardData[category]}
        renderItem={({ item }) => (
          <FoodCard
            title={item.name}
            details={item.details}
            price={item.price}
            onPress={() => handleCardPress(item)}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardList}
      />
    </Wrapper>
  );

  return (
    <Container>
      <Header title="Início" />
      <Wrapper px={16} my={16}>
        <TextInput
          leftIcon={<Feather name="search" size={18} color="black" />}
          placeholder="Buscar por comidas"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </Wrapper>

      <FlatList
        data={Object.keys(filteredCardData)}
        renderItem={renderCategory}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.mainList}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <ModalContainer>
          <ModalContent>
            {selectedProduct && (
              <>
                <ModalTitle>{selectedProduct.name}</ModalTitle>
                <Text>{selectedProduct.details}</Text>
                <ModalPrice>{formatCurrency(selectedProduct.price)}</ModalPrice>
                <AddButton onPress={handleAddToCart}>
                  <AddButtonText>Adicionar ao Carrinho</AddButtonText>
                </AddButton>
              </>
            )}
            <CloseButton onPress={() => setModalVisible(false)}>
              <CloseButtonText>Fechar</CloseButtonText>
            </CloseButton>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </Container>
  );
}

export const CategoryTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-transform: capitalize;
`;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  align-items: center;
  max-width: 90%;
`;

export const ModalTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ModalPrice = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
`;

export const AddButton = styled.TouchableOpacity`
  background-color: green;
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;
`;

export const AddButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;

export const CloseButton = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const CloseButtonText = styled.Text`
  color: blue;
`;

export const styles = {
  cardList: {
    paddingLeft: 16,
    paddingRight: 16,
    gap: 8,
  },
  mainList: {
    paddingBottom: 20,
  },
};
