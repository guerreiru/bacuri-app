import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Wrapper, Container } from "@/components/Layout";
import { useCart } from "@/hooks/userCart";
import { formatCurrency } from "@/utils/formatCurrency";
import React from "react";
import { Linking, ScrollView, Text } from "react-native";
import styled from "styled-components/native";

export default function Cart() {
  const { products, updateProductQuantity } = useCart();
  const total = products.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const formatOrderDetails = () => {
    let message = "Olá! Gostaria de fazer o seguinte pedido:\n\n";
    products.forEach((item) => {
      message += `${item.quantity}x ${item.name} - ${formatCurrency(
        item.price * item.quantity
      )}\n`;
    });
    message += `\nTotal: ${formatCurrency(total)}`;
    return message;
  };

  const sendWhatsAppMessage = () => {
    const phoneNumber = "+5588999254660"; // Substitua pelo número correto
    const message = formatOrderDetails();
    const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          console.log("WhatsApp não está instalado no dispositivo");
        }
      })
      .catch((err) => console.error("Erro ao abrir WhatsApp:", err));
  };

  return (
    <Container>
      <Header title="Detalhes do pedido" />

      {!products.length ? (
        <EmptyCartText>Carrinho vazio</EmptyCartText>
      ) : (
        <>
          <ScrollView>
            {products.map((item) => (
              <ItemContainer key={item.id}>
                <ItemInfo>
                  <ItemName>{item.name}</ItemName>
                  <ItemPrice>{formatCurrency(item.price)}</ItemPrice>
                </ItemInfo>
                <QuantityContainer>
                  <QuantityButton
                    onPress={() => updateProductQuantity(item.id, -1)}
                  >
                    <Text>-</Text>
                  </QuantityButton>
                  <Quantity>{item.quantity}</Quantity>
                  <QuantityButton
                    onPress={() => updateProductQuantity(item.id, 1)}
                  >
                    <Text>+</Text>
                  </QuantityButton>
                </QuantityContainer>
              </ItemContainer>
            ))}
          </ScrollView>

          <TotalContainer>
            <Total>Total: {formatCurrency(total)}</Total>
          </TotalContainer>

          <Wrapper px={16} py={16}>
            <Button
              onPress={() => sendWhatsAppMessage()}
              title="Fazer Meu Pedido"
            />
          </Wrapper>
        </>
      )}
    </Container>
  );
}

const ItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
`;

const ItemName = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const ItemInfo = styled.View`
  flex: 1;
`;

const ItemPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const QuantityContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const QuantityButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  background-color: #f0f0f0;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;

const Quantity = styled.Text`
  margin: 0 10px;
  font-size: 16px;
  min-width: 32px;
  text-align: center;
`;

const TotalContainer = styled.View`
  border-top-width: 1px;
  border-top-color: #e0e0e0;
  padding: 16px 16px 0;
`;

const Total = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

const EmptyCartText = styled.Text`
  font-size: 18px;
  color: #888;
  padding: 16px;
`;
