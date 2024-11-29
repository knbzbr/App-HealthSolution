import React, { useEffect, useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, StyleSheet, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import Animated, { BounceIn, BounceInUp, BounceOutUp, FadeIn, FadeInUp, FadeOut, FadeOutUp } from 'react-native-reanimated';


const Item = ({ item }) => (
    <View style={styles.item} key={item.consultaId}>
        <Text style={styles.title}>{item.consultaId} - {item.dataConsulta} </Text>
    </View>
);


export default function Consultas({navigation}) {

    const [showConsultas, SetShowConsultas] = useState();
    const [consultas, setConsultas ] = useState();

    async function getConsultas()
    {
        await fetch('http://10.133.22.9:5251/api/Consulta/GetAllConsulta', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json() )
            .then(json => {
                const filtro = json.filter( value => value.pacienteId == 1 );
                setConsultas( filtro );
            }
            )
            .catch(err => console.log(err))
    }


    useEffect( () => {
        getConsultas();
    }, [] );


    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.info} >
                <TouchableOpacity style={styles.Voltar} onPress={() => navigation.navigate( "Home" )}>
                    <MaterialCommunityIcons name="chevron-left" size={35} />
                    <Text style={styles.text} >Minhas Consultas:</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.box1} >
                <Text style={styles.titulo}> Acesso as consultas anteriores </Text>
                <MaterialCommunityIcons style={styles.seta} name={showConsultas ? "chevron-up" : "chevron-down"} size={30} onPress={() => SetShowConsultas(current => !current)} />
            </View>
            {showConsultas &&
                <Animated.View entering={FadeIn}>
                    {
                        consultas.map((item) =>
                            <Item item={item} />
                        )
                    }
                </Animated.View>
            }
           

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
        marginLeft: 15
    },
    info: {
        flexDirection: "row",
        width: "100%",
    },
    box: {
        width: "100%",
        marginTop: 5,
        marginLeft: 15
    },
    text: {
        color: "black",
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 5,
        marginTop: 8,
        marginBottom: 15
    },
    item: {
        backgroundColor: '#8DCCDB',
        padding: 20,
        marginVertical: 18,
        marginHorizontal: 16,
        alignItems: "center",
        marginTop: 0,
        borderRadius: 5

    },
    title: {
        fontSize: 18,
    },
    titulo: {
        color: "black",
        fontSize: 16,
        marginLeft: 15,
        marginTop: 18,
        marginBottom: 10,
        width: "85%"
    },
    box1: {
        width: "100%",
        display: "flex",
        flexDirection: "row"
    },
    seta: {
        marginTop: 15,
    },
    box2: {
        width: "100%",
        display: "flex",
        flexDirection: "row"
    },



})

