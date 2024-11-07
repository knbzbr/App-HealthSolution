import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, View } from 'react-native'

export default function Consultas() {
  return (
    <ScrollView contentContainerStyle={css.container}>
        <View style={css.info} >
                    <TouchableOpacity onPress={Voltar} style={css.Voltar}>
                        <MaterialCommunityIcons name="arrow-left" size={30} />
                    </TouchableOpacity>
                </View>
    </ScrollView >
  )
}

