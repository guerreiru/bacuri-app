import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface LayoutProps {
  children: React.ReactNode;
  style?: any;
  px?: number;
  py?: number;
  mx?: number;
  my?: number;
  mt?: number;
  mb?: number;
  mr?: number;
  ml?: number;
  flex?: number;
  horizontal?: boolean;
  size?: number;
}

export const Container = ({ children, style }: LayoutProps) => {
  return (
    <SafeAreaView style={[{ backgroundColor: "#fff", flex: 1 }, style]}>
      {children}
    </SafeAreaView>
  );
};

export const Center = ({ children, style, flex = 1 }: LayoutProps) => {
  const center = {
    flex,
    alignItems: "center",
    justifyContent: "center",
  };
  return <View style={[center, style]}>{children}</View>;
};

export const Wrapper = ({
  children,
  style,
  px,
  py,
  mx,
  my,
  mt,
  mb,
  mr,
  ml,
}: LayoutProps) => {
  const wrapperStyle = {
    paddingHorizontal: px,
    paddingVertical: py,
    marginHorizontal: mx,
    marginVertical: my,
    marginTop: mt,
    marginBottom: mb,
    marginRight: mr,
    marginLeft: ml,
    width: "100%",
  };
  return <View style={[wrapperStyle, style]}>{children}</View>;
};

export const Spacer = ({ size = 10, horizontal = false }: LayoutProps) => {
  const spacerStyle = {
    [horizontal ? "width" : "height"]: size,
  };
  return <View style={spacerStyle} />;
};
