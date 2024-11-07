import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'


export default function Home() {
  return (
    <View>
        <View style={css.header}>
            <Image style={css.logo} source={require("../assets/LogoHealthSolutions.png")} />
            <Text>Bem-Vindo</Text>
        </View>
        <View style={css.body}>
            <Text></Text>
            <View style={css.fotosPrf}>

            </View>
            <View>

            </View>
        </View>
    </View>
  )
}

const css = StyleSheet.create({
    header:{
      width:"100%",
      height: 150,
      backgroundColor: "#4796A8",
      marginTop:"100px",
      textAlign:"center",
      alignItems:"center",
      justifyContent:"flex-end"

    },
})
