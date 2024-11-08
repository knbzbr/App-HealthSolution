import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { StyleSheet } from 'react-native';


const consulta = [
      {
          id: 1,
          title:"Eletrocardiograma - Realizado no dia 30 de agosto de 2024"
      },
      {
          id: 2,
          title:"Teste Quati (Questionário de Avaliação Tipológica) - Realizado no dia 08 de maio de 2024"
      },
    
]
const exame = [
        {
            id: 1,
            title:"Consulta com a Psicóloga - Realizada no dia 19 de setembro de 2024"
        },
        {
            id: 2,
             title:"Consulta com o Fisioterapeuta - Realizada no dia 30 de agosto de 2024"
        },
        {
            id: 3,
             title:"Consulta com a Psicóloga - Realizada no dia 08 de maio de 2024"
        },
  ]

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function Consultas() {
  return (
    <View contentContainerStyle={styles.container}>
      <View style={styles.info} >
        <TouchableOpacity style={styles.Voltar}>
          <MaterialCommunityIcons name="arrow-left" size={30} />
          <Text style={styles.text} >Minhas Consultas e Exames:</Text>
        </TouchableOpacity>
      </View>
      <View >
        <Text style={styles.titulo}> Acesso aos exames realizados anteriormente: </Text>
      </View>
      <FlatList
                data={consulta}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={item => item.id}
      />
      <View >
        <Text style={styles.titulo}> Acesso as consultas anteriores: </Text>
      </View>
      <FlatList
                data={exame}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={item => item.id}
      />
    </View >
  )
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: " #F4F4F4",
    alignItems: "center",
  },
  Voltar: {
    marginLeft: 8,
    width: "100%",
    marginTop: 100,
    marginLeft:15
  },
  info: {
    flexDirection: "row",
    width: "100%"
  },
  box: {
    width: "100%",
    marginTop: 5,
  },
  text: {
    color: "black",
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft:10,
    marginTop:13
  },
  item: {
    backgroundColor: '#8DCCDB',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: "center"
  },
  title: {
    fontSize: 18,
  },
  titulo:{
    color: "black",
    fontSize: 18,
    marginLeft:10,
    marginTop:18
  }
})

