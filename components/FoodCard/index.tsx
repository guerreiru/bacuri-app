import { colors } from "@/constants/Colors";
import { formatCurrency } from "@/utils/formatCurrency";
import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import Prato from "../../assets/images/prato.png";

interface FoodCardProps {
  title: string;
  details: string;
  price: number;
  onPress: () => void;
}

export const FoodCard = ({ title, details, price, onPress }: FoodCardProps) => {
  console.log(details);

  return (
    <TouchableOpacity onPress={onPress}>
      <Card>
        <CardImage source={Prato} />
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardPrice>{formatCurrency(price)}</CardPrice>
        </CardContent>
      </Card>
    </TouchableOpacity>
  );
};

export const Card = styled.View`
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  align-self: flex-start;
  width: 160px;
  align-items: center;
  flex: 1;
  border-width: 1px;
  border-color: ${colors.gray300};
`;

export const CardImage = styled.Image`
  width: 64px;
  height: 64px;
`;

export const CardContent = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  gap: 4px;
`;

export const CardTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const CardDetails = styled.Text`
  font-size: 14px;
  color: gray;
  text-align: center;
`;

export const CardPrice = styled.Text`
  font-size: 16px;
  color: green;
  font-weight: bold;
`;
