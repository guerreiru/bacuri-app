import { CartProvider } from "@/context/cartContext";
import { tokenCache } from "@/storage/tokenCache";
import { ClerkLoaded, ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { router, Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { ActivityIndicator } from "react-native";

function InitialLayout() {
  const { isSignedIn, isLoaded } = useAuth();

  useEffect(() => {
    if (!isLoaded) return;

    if (isSignedIn) {
      router.replace("/(auth)" as const);
    } else {
      router.replace("/(public)" as const);
    }
  }, [isSignedIn]);

  return isLoaded ? (
    <Slot />
  ) : (
    <ActivityIndicator
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    />
  );
}

export default function RootLayout() {
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

  if (!publishableKey) {
    throw new Error(
      "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
    );
  }

  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <ClerkLoaded>
        <CartProvider>
          <StatusBar style="dark" />
          <InitialLayout />
        </CartProvider>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
