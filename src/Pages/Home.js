import React from 'react'
import { StyleSheet, View, Text, Image, Touchable, TouchableOpacity } from 'react-native'


export default function Home() {
  return (
    <View style={css.container}>
      <View style={css.body}>
        <View>
          <Image style={css.banner} source={require("../../assets/Bicudo.png")} />
        </View>
        <Text style={css.Cnh}>Conheça nossos profissionais</Text>
        <View style={css.fotosPrf}>
          <View style={css.cxPrf}>
            <Image style={css.prf} source={require("../../assets/psico.jpg")} />
            <Text style={css.txt}>Psicóloga</Text>
          </View>
          <View style={css.cxPrf}>
            <Image style={css.prf} source={require("../../assets/TerapiaOcupacional.jpeg")} />
            <Text style={css.txt}>Terapeuta </Text>
          </View>
          <View style={css.cxPrf}>
            <Image style={css.prf} source={require("../../assets/fono.jpg")} />
            <Text style={css.txt}>Fonoaudiólogo</Text>
          </View >
          <View style={css.cxPrf}>
            <Image style={css.prfp} source={require("../../assets/Fisioterapeuta.jpeg")} />
            <Text style={css.txt}>Fisioterapeuta</Text>
          </View>
          <View style={css.cxPrf}>
            <Image style={css.prfs} source={require("../../assets/Pilates.jpeg")} />
            <Text style={css.txt}>Pilates</Text>
          </View>
        </View>
        <TouchableOpacity style={css.Agnd}>
          <Text style={css.btnTxt}>Agende já sua consulta</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const css = StyleSheet.create({
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
    flexWrap:"wrap",
    marginTop:40
  },
  prf:{
    width:110,
    height:110,
    borderRadius:100
  },
  prfs:{
    width:110,
    height:110,
    borderRadius:100,
  },
  prfp:{
    width:110,
    height:110,
    borderRadius:100,
  },
  Agnd:{
    width:170,
    height:40,
    backgroundColor:"#4796A8",
    borderRadius:4,
    textAlign:"center",
    alignItems:"center",
    justifyContent:"center",
    marginTop:30,
    marginLeft:120,
  },
  cxPrf:{
    textAlign:"center",
    alignItems:"center",
  },
  txt:{
    marginBottom:30
  },
  btnTxt:{
    color:"white"
  }
})
