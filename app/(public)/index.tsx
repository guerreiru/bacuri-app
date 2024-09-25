import { Button } from "@/components/Button";
import { Center, Wrapper } from "@/components/Layout";
import { useOAuth } from "@clerk/clerk-expo";
import { Image } from "expo-image";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Logo from "../../assets/images/logo.png";

WebBrowser.maybeCompleteAuthSession();

export default function SignIn() {
  const googleOAuth = useOAuth({ strategy: "oauth_google" });
  const [isLoading, setIsLoading] = useState(false);

  async function handleGoogleSignIn() {
    try {
      setIsLoading(true);
      const redirectUrl = Linking.createURL("(auth)");

      const oAuthFlow = await googleOAuth.startOAuthFlow({ redirectUrl });
      if (oAuthFlow.authSessionResult?.type === "success") {
        if (oAuthFlow.setActive) {
          oAuthFlow.setActive({
            session: oAuthFlow.createdSessionId,
          });
        }
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    WebBrowser.warmUpAsync();

    return () => {
      WebBrowser.coolDownAsync();
    };
  }, []);

  return (
    <Center>
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Image
          source={Logo}
          style={{
            width: 108,
            height: 108,
          }}
        />
      </View>

      <Wrapper px={20} py={20}>
        <Button
          title="Entrar"
          icon="logo-google"
          isLoading={isLoading}
          onPress={handleGoogleSignIn}
          bgColor="orange"
        />
      </Wrapper>
    </Center>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
