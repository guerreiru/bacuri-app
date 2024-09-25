import { colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { styles } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean;
  icon?: keyof typeof Ionicons.glyphMap;
  bgColor?: string;
  textColor?: string;
}

export function Button({
  title,
  isLoading = false,
  icon,
  bgColor = "orange",
  textColor = "#fff",
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      {...props}
      disabled={isLoading}
      activeOpacity={0.8}
      style={[
        styles.container,
        { backgroundColor: colors[bgColor as keyof typeof colors] },
      ]}
    >
      {isLoading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <>
          {icon && (
            <Ionicons name={icon} style={[styles.icon, { color: textColor }]} />
          )}
          <Text style={[styles.text, { color: textColor }]}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
}
