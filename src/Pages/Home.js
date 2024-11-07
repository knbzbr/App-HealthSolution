import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'


export default function Home() {
  return (
    <View>
      <View style={css.header}>
        <Image style={css.logo} source={require("../../assets/LogoHealthSolutions.png")} />
      </View>
      <View style={css.body}>
        <View>
          <Image style={css.banner} source={require("../../assets/Bicudo.png")} />
        </View>
        <Text style={css.Cnh}>Conheça nossos profissionais</Text>
        <View style={css.fotosPrf}>
          <View>
            <Image style={css.prf} source={require("../../assets/Psicologa.png")} />
          </View>
          <View>
            <Image style={css.prf} source={require("../../assets/TerapiaOcupacional.jpeg")} />
          </View>
          <View>
            <Image style={css.prf} source={require("../../assets/Fonoaudiologa.png")} />
          </View>
        </View>
        <View style={css.fotosPrf}>
          <View>
            <Image style={css.prf} source={require("../../assets/Fisioterapeuta.jpeg")} />
          </View>
          <View>
            <Image style={css.prf} source={require("../../assets/Pilates.jpeg")} />
          </View>
        </View>
      </View>
    </View>
  )
}

const css = StyleSheet.create({
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
  },
  banner: {
    width: "100%",
    height: 200,
    objectFit: "contain",
    marginTop: -34
  },
  Cnh: {
    textAlign: "center",
    fontSize: 17
  },
  fotosPrf:{
    display:"flex",
    flexDirection:"row",
    justifyContent: "space-around",
  },
  prf:{
    width:100,
    height:110,

  }
})
