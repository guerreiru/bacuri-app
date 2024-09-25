import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Container } from "@/components/Layout";
import { useAuth, useUser } from "@clerk/clerk-expo";
import React from "react";
import styled from "styled-components/native";

export default function Profile() {
  const { user } = useUser();
  const { signOut } = useAuth();

  return (
    <Container>
      <Header title="Perfil" />

      <LargeAvatar>
        <Avatar
          source={{
            uri: user?.imageUrl,
          }}
        />
      </LargeAvatar>

      <Content>
        <Section>
          <SectionTitle>Informações Pessoais</SectionTitle>
          <InfoItem>
            <Label>Nome</Label>
            <Value>{user?.fullName}</Value>
          </InfoItem>
        </Section>

        <Section>
          <SectionTitle>Informações de Contato</SectionTitle>
          <InfoItem>
            <Label>Número de telefone</Label>
            {user?.primaryPhoneNumber ? (
              <Value>{user?.primaryPhoneNumber.phoneNumber}</Value>
            ) : (
              <Value>Não informado</Value>
            )}
          </InfoItem>
          <InfoItem>
            <Label>Email</Label>
            <Value>{user?.primaryEmailAddress?.emailAddress}</Value>
          </InfoItem>
        </Section>

        <Button title="Sair" bgColor="danger" onPress={() => signOut()} />
      </Content>
    </Container>
  );
}

const Content = styled.View`
  padding: 16px;
`;

const LargeAvatar = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: #f0f0f0;
  align-self: center;
  margin: 20px 0;
`;

const Section = styled.View`
  margin-bottom: 20px;
`;

const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const InfoItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.Text`
  font-size: 16px;
  color: #666;
`;

const Value = styled.Text`
  font-size: 16px;
`;

const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;
