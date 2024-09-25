export interface Product {
  id: number;
  name: string;
  details: string;
  price: number;
  category: string;
}

// Definindo o tipo das categorias e dados
export interface ProductData {
  [key: string]: Product[];
}

export const products: ProductData = {
  "café da manhã": [
    {
      id: 1,
      name: "Café preto",
      price: 1.5,
      details: "",
      category: "café da manhã",
    },
    {
      id: 2,
      name: "Café com leite",
      price: 3,
      details: "",
      category: "café da manhã",
    },
    {
      id: 3,
      name: "Capuccino",
      price: 8,
      details: "",
      category: "café da manhã",
    },
    {
      id: 4,
      name: "Chocolate quente",
      price: 1,
      details: "",
      category: "café da manhã",
    },
    {
      id: 5,
      name: "Tapioca c/Came de sol",
      price: 1,
      details: "",
      category: "café da manhã",
    },
    {
      id: 6,
      name: "Tapioca c/frango",
      price: 8,
      details: "",
      category: "café da manhã",
    },
    {
      id: 7,
      name: "Tapioca c/queijo",
      price: 6,
      details: "",
      category: "café da manhã",
    },
    {
      id: 8,
      name: "Tapioca mista",
      price: 7,
      details: "",
      category: "café da manhã",
    },
    {
      id: 9,
      name: "Tapioca c/manteiga",
      price: 3,
      details: "",
      category: "café da manhã",
    },
    {
      id: 10,
      name: "Cuscuz c/carne moída",
      price: 1,
      details: "",
      category: "café da manhã",
    },
    {
      id: 11,
      name: "Cuscuz c/carne de 801",
      price: 8,
      details: "",
      category: "café da manhã",
    },
    {
      id: 12,
      name: "Cuscuz c/queijo",
      price: 1,
      details: "",
      category: "café da manhã",
    },
    {
      id: 13,
      name: "Cuscuz c/ovo",
      price: 6,
      details: "",
      category: "café da manhã",
    },
  ],
  "pão na chapa": [
    {
      id: 14,
      name: "Carioca c/ovos",
      price: 5,
      details: "",
      category: "pão na chapa",
    },
    {
      id: 15,
      name: "Carioca c/queijo coalho",
      price: 7,
      details: "",
      category: "pão na chapa",
    },
    {
      id: 16,
      name: "Carioca c/presunto",
      price: 4.5,
      details: "",
      category: "pão na chapa",
    },
    {
      id: 17,
      name: "Carioca c/queijo e presunto",
      price: 7,
      details: "",
      category: "pão na chapa",
    },
  ],
  "pratos executivos": [
    {
      id: 18,
      name: "Parmegiana de Frango",
      details: "Filé de frango, arroz branco, macarrão, salada e farofa",
      price: 35,
      category: "pratos executivos",
    },
    {
      id: 19,
      name: "Maminha à Bacuri",
      details: "Arroz à grega, purê, salada e farofa",
      price: 40,
      category: "pratos executivos",
    },
    {
      id: 20,
      name: "Picanha suína à Bacuri",
      details: "Arroz branco, macarrão, salada e farofa",
      price: 36,
      category: "pratos executivos",
    },
    {
      id: 21,
      name: "Bife à cavala",
      details: "Arroz temperado, macarrão, salada e farofa",
      price: 40,
      category: "pratos executivos",
    },
    {
      id: 22,
      name: "Filé com Fritas",
      details: "Arroz branco, macarrão, purê e farofa",
      price: 45,
      category: "pratos executivos",
    },
    {
      id: 23,
      name: "Filé de Frango com Fritas",
      details: "Arroz branco, macarrão, purê e farofa",
      price: 35,
      category: "pratos executivos",
    },
    {
      id: 24,
      name: "Carne de sol com macaxeira",
      details: "Arroz branco, macaxeira, salada e farofa",
      price: 40,
      category: "pratos executivos",
    },
    {
      id: 25,
      name: "Baby beef ao molho madeira",
      details: "Arroz branco, macarrão, salada e farofa",
      price: 38,
      category: "pratos executivos",
    },
    {
      id: 26,
      name: "Filé de Peixe ao molho de camarão",
      details: "Arroz branco, macarrão, salada e farofa",
      price: 42,
      category: "pratos executivos",
    },
    {
      id: 27,
      name: "Filé de Peixe com fritas",
      details: "Arroz, baião, salada e farofa",
      price: 42,
      category: "pratos executivos",
    },
  ],
  sobremesas: [
    {
      id: 28,
      name: "Chantininho",
      details: "",
      price: 20,
      category: "sobremesas",
    },
    { id: 29, name: "Pudim", details: "", price: 6, category: "sobremesas" },
    {
      id: 30,
      name: "Sobremesa de abacaxi",
      details: "",
      price: 6,
      category: "sobremesas",
    },
    {
      id: 31,
      name: "Sobremesa de maracujá",
      details: "",
      price: 6,
      category: "sobremesas",
    },
  ],
};
