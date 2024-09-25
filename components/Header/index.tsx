import styled from "styled-components/native";
import React from "react";

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => (
  <HeaderContainer>
    <HeaderTitle>{title}</HeaderTitle>
  </HeaderContainer>
);

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: #ffffff;
`;

export const HeaderTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;
