import React, { useState } from 'react'
import { ScrollView } from 'react-native';
import { FlatList } from 'react-native';
import { StyleSheet, View, Text, Image, Touchable, TouchableOpacity, TextInput } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


//const [cpf, setCpf] = useState("");
//const [endereco, setEndereco] = useState("");
//const [telefone, setTelefone] = useState("");
//const [email, setEmail] = useState("");

export default function Perfil({navigation}) {
  return (
    <ScrollView>
      <View style={css.container}>
        <View style={css.cxfotoperfil}>
          <Image style={css.fotoperfil} source={require("../../assets/user.jpg")} />
        </View>
        <View style={css.caixaiconeum}>
          <View style={css.msginicial}>
            <Text>Olá,Kauan e Vitor!</Text>
          </View>
          <View>
            <MaterialCommunityIcons name="pencil" size={20} marginLeft={260} marginTop={-20} />
          </View>
        </View>
        <View>
          <TextInput
            style={css.input}
            placeholder="Cpf"
          />
          <View>
            <MaterialCommunityIcons name="pencil" size={20} marginLeft={350} marginTop={-25} />
          </View>
        </View>
        <View>
          <TextInput
            style={css.input}
            placeholder="Endereço"
          />
          <View>
            <MaterialCommunityIcons name="pencil" size={20} marginLeft={350} marginTop={-25} />
          </View>
        </View>
        <View>
          <TextInput
            style={css.input}
            placeholder="Telefone"
          />
          <View>
            <MaterialCommunityIcons name="pencil" size={20} marginLeft={350} marginTop={-25} />
          </View>
        </View>
        <View>
          <TextInput
            style={css.input}
            placeholder="Email"
          />
          <View>
            <MaterialCommunityIcons name="pencil" size={20} marginLeft={350} marginTop={-25} />
          </View>
        </View>
        <TouchableOpacity style={css.caixadois} onPress={() => navigation.navigate ("Consultas")}>
          <Text>Minhas Consultas</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="clipboard-check-multiple" size={25} marginTop={-25} marginLeft={25} onPress={() => navigation.navigate ("Consultas")}/>
        </TouchableOpacity>
        <View style={css.caixatres}>
          <Text>Configurações</Text>
        </View>
        <View>
          <MaterialCommunityIcons name="cog-outline" size={25} marginTop={-23} marginLeft={25} color={"black"} />
        </View>
        <View style={css.caixaquatro}>
          <Text style={css.caixacinco}>Ajuda</Text>
        </View>
        <View style={css.caixaseis}>
          <Text>Perguntas frequentes</Text>
        </View>
        <View>
          <MaterialCommunityIcons name="help-circle-outline" size={25} marginTop={-23} marginLeft={25} color={"black"} />
        </View>
        <View style={css.caixasete}>
          <Text>Suporte técnico</Text>
        </View>
        <View>
          <MaterialCommunityIcons name="headset" size={25} marginTop={-23} marginLeft={25} color={"black"} />
        </View>
        <View style={css.vz}></View>
      </View >
    </ScrollView>

  )
}

const css = StyleSheet.create({
  fotoperfil: {
    width: 100,
    height: 100,
    marginLeft: 150,
    marginTop: 60
  },
  msginicial: {
    marginLeft: 140,
    marginTop: 10
  },
  input: {
    width: "85%",
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginLeft: 20,
    marginTop: 20,
    padding: 4

  },
  caixadois: {
    marginLeft: 55,
    marginTop: 70
  },
  caixatres: {
    marginLeft: 55,
    marginTop: 10
  },
  caixaquatro: {
    marginLeft: 55,
    marginTop: 45
  },
  caixacinco: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: -35
  },
  caixaseis: {
    marginLeft: 55,
    marginTop: 10,
  },
  caixasete: {
    marginLeft: 55,
    marginTop: 10,
  },
  vz: {
    width:"100%",
    height:50
  }
})
