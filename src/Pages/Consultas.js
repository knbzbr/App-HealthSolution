import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View,  StyleSheet, Text, TouchableOpacity, FlatList, ScrollView  } from 'react-native'


const consulta = [
  {
     id: 1,
     title: 'Eletrocardiograma - Realizado no dia 30 de agosto de 2024',
   },
   {
     id: 2,
     title: 'Teste Quati (Questionário de Avaliação Tipológica) - Realizado no dia 08 de maio de 2024',
   },
   
 ];
 const exame = [
  {
     id: 1,
     title: 'Consulta com a Psicóloga - Realizada no dia 19 de setembro de 2024',
   },
   {
     id: 2,
     title: 'Consulta com o Fisioterapeuta - Realizada no dia 30 de agosto de 2024',
   },
   {
     id: 3,
     title: 'Consulta com a Psicóloga - Realizada no dia 08 de maio de 2024Third Item',
   },
   
 ];
 
 const Item = ({title}) => (
   <View style={styles.item}>
     <Text style={styles.title}>{title}</Text>
   </View>
 );
 

export default function Consultas() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.info} >
        <TouchableOpacity style={styles.Voltar}>
          <MaterialCommunityIcons name="chevron-left" size={30} />
          <Text style={styles.text} >Minhas Consultas:</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box1} >
        <Text style={styles.titulo}> Acesso aos exames realizados anteriormente </Text>
        <MaterialCommunityIcons style={styles.seta}  name="chevron-down" size={30} />
      </View>
      <FlatList
                data={consulta}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={item => item.id}
      />
      <View style={styles.esconder}>
        <View style={styles.box2} >
          <Text style={styles.titulo}> Acesso as consultas anteriores </Text>
          <MaterialCommunityIcons style={styles.seta} name="chevron-down" size={30} />
        </View>
        <FlatList
                  data={exame}
                  renderItem={({ item }) => <Item title={item.title} />}
                  keyExtractor={item => item.id}
        />
      </View>
    </ScrollView >
  )
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: " #F4F4F4",
  },
  Voltar: {
    marginLeft: 8,
    width: "100%",
    marginTop: 20,
    marginLeft:15
  },
  info: {
    flexDirection: "row",
    width: "100%",
  },
  box: {
    width: "100%",
    marginTop: 5,
    marginLeft:15
  },
  text: {
    color: "black",
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft:5,
    marginTop:8,
    marginBottom:15
  },
  item: {
    backgroundColor: '#8DCCDB',
    padding: 20,
    marginVertical: 18,
    marginHorizontal: 16,
    alignItems: "center",
    marginTop: 0,
    borderRadius:5
    
  },
  title: {
    fontSize: 18,
  },
  titulo:{
    color: "black",
    fontSize: 16,
    marginLeft:15,
    marginTop:18,
    marginBottom: 10,
    width:"85%"
  },
  box1:{
    width:"100%",
    display: "flex",
    flexDirection: "row"
  },
  seta:{
   marginTop:15,
  },
  box2:{
    width:"100%",
    display: "flex",
    flexDirection: "row"
  },
  
  

})

