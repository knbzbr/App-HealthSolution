import { StatusBar } from "expo-status-bar";
import AuthProvider from "./src/Context/AuthContext";
import Rotas from "./src/Routes/Rotas";
import { Image, StyleSheet, View } from "react-native";
import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./src/Pages/Login";

const Tab = createBottomTabNavigator();

export default function App() {

  const [logado, setLogado] = useState(false);
  const [cadastro, setCadastro] = useState(false);

  if (!logado) {
    return (<Login setLogado={setLogado} setCadastro={setCadastro}/>)
  }
  if (cadastro) {
    return (<Cadastro setCadastro={setCadastro} setLogado={setLogado} />)
   }

  return (
    <AuthProvider>
      <View style={css.header}>
        <Image style={css.logo} source={require("./assets/LogoHealthSolutions.png")} />
      </View>
      <StatusBar style="light" />
      <Rotas />
    </AuthProvider>
  );
}
const css = StyleSheet.create ({
  header: {
    width: "100%",
    height: 120,
    backgroundColor: "#4796A8",
    marginTop: "100px",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "flex-end",

  },
  logo: {
    height: 130,
    width: 140,
    marginBottom: -24
  }
})