import { colors } from "@/constants/Colors";
import React from "react";
import { Text, TextInputProps, View } from "react-native";
import styled from "styled-components/native";

interface InputProps extends TextInputProps {
  label?: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  error?: string;
  isError?: boolean;
}

export function TextInput({
  label,
  leftIcon,
  rightIcon,
  error,
  isError,
  ...rest
}: InputProps) {
  return (
    <View>
      {label && <Text>{label}</Text>}
      <TextInputWrapper>
        {leftIcon && (
          <IconContainer style={{ left: 10 }}>{leftIcon}</IconContainer>
        )}
        <StyledTextInput
          isError={!!error}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          {...rest}
        />
        {rightIcon && (
          <IconContainer style={{ right: 10 }}>{rightIcon}</IconContainer>
        )}
      </TextInputWrapper>
      {error && <ErrorText>{error}</ErrorText>}
    </View>
  );
}

export const TextInputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StyledTextInput = styled.TextInput<InputProps>`
  width: 100%;
  height: 40px;
  border-color: ${colors.gray300};
  border-width: 1px;
  border-radius: 5px;
  padding-left: ${({ leftIcon }) => (leftIcon ? "32px;" : "16px")};
  padding-right: ${({ rightIcon }) => (rightIcon ? "32px;" : "16px")};
  border-color: ${({ isError }) => (isError ? colors.danger : colors.gray300)};
`;

export const IconContainer = styled.View`
  position: absolute;
`;

export const ErrorText = styled.Text`
  color: ${colors.danger};
  font-size: 12px;
`;
