import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

export default function Login(){
    return(
        <View>
        <View style={css.header}>
            <Image style={css.logo} source={require("../assets/LogoHealthSolutions.png")} />
            
        </View>
        </View>
    )
}

