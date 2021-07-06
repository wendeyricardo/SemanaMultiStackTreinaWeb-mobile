import React, { useState } from "react";
import { Text, View } from "react-native";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import TextInput from "ui/components/inputs/TextInput/TextInput";
import { TextInputMask } from "react-native-masked-text";
import Button from "ui/components/inputs/Button/Button";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

const EcontrarDiaristas: React.FC = () => {
  const [cep, setCep] = useState("");

  return (
    <View>
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da rua localidade"
        }
      />
      <TextInputMask
        value={cep}
        onChangeText={setCep}
        type={"custom"}
        options={{ mask: "99.999-999" }}
        customTextInput={TextInput}
        customTextInputProps={{
          label: "Digite seu cep",
        }}
      />

      <Button mode={"contained"} style={{ marginTop: 32 }}>
        Buscar
      </Button>

      <UserInformation
        name={"Wendey Ricardo"}
        rating={4}
        picture={"https://github.com/wendeyricardo.png"}
        description={"Benfica"}
      />
    </View>
  );
};

export default EcontrarDiaristas;
