import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'

export default function Consultas({ navigation }) {
  return (
    <ScrollView contentContainerStyle={css.container}>
      <View style={css.info} >
        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={css.Voltar}>
          <MaterialCommunityIcons name="arrow-left" size={30} />
        </TouchableOpacity>
      </View>
    </ScrollView >
  )
}

const css = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: " #F4F4F4",
    alignItems: "center",
  }

})

