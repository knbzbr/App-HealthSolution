import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Image, Button, Alert, TouchableOpacity, ScrollView } from "react-native";

const DATA = [
    {
        id: 1,
        imagem: require("../../assets/psico.jpg"),
        title: 'Dra.Sandra',
        subtitulo: 'Psicóloga'
    },
    {
        id: 2,
        imagem: require("../../assets/teo.jpg"),
        title: 'Dra.Mayara',
        subtitulo: 'Terapeuta Ocupacional'
    },
    {
        id: 3,
        imagem: require("../../assets/fono.jpg"),
        title: 'Dra.Amanda',
        subtitulo: 'Fonoaudióloga'
    },
    {
        id: 4,
        imagem: require("../../assets/fisio.jpg"),
        title: 'Dr.Guilherme',
        subtitulo: 'Fisioterapeuta'
    },
    {
        id: 5,
        imagem: require("../../assets/pilates.jpg"),
        title: 'Dr.João Felipe',
        subtitulo: 'Instrutor de Pilates'
    },
];



const Item = ({ imagem, title, subtitulo, id }) => (
    <TouchableOpacity style={styles.item} key={id}>
        <Image source={imagem} resizeMode="cover" style={styles.image} />
        <View style={styles.textbox}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitulo}>{subtitulo}</Text>
        </View>
    </TouchableOpacity>
);


const onPress = () => {
    Alert.alert('Agendamento', 'Seu agendamento foi concluído com sucesso!');
};


export default function Agendamento() {

    const [dia, setDia] = useState();
    const [hora, setHora] = useState();

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Text style={styles.titulo}>Agendamento</Text>
            <View>
                <Text style={styles.text2}>Selecione o profissional:</Text>
            </View>
            {DATA.map((item) =>
                <Item imagem={item.imagem} title={item.title} subtitulo={item.subtitulo} id={item.id} key={item.id} />
            )}
            <View style={styles.box}>
                <Text style={styles.text}>Selecione o dia de sua preferência:</Text>
                <View style={styles.boxdia}>

                    <TouchableOpacity onPress={() => setDia("Seg")}>
                        <View style={[styles.image2, { backgroundColor: dia == "Seg" ? "#0B8AA8" : "#8DCCDB" }]}
                            onPress={() => setSelected(!selected)}
                        >
                            <Text style={styles.dia}>Seg</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setDia("Ter")}>
                        <View style={[styles.image2, { backgroundColor: dia == "Ter" ? "#0B8AA8" : "#8DCCDB" }]}>
                            <Text style={styles.dia}>Ter</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setDia("Qua")}>
                        <View style={[styles.image2, { backgroundColor: dia == "Qua" ? "#0B8AA8" : "#8DCCDB" }]}>
                            <Text style={styles.dia}>Qua</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setDia("Qui")}>
                        <View style={[styles.image2, { backgroundColor: dia == "Qui" ? "#0B8AA8" : "#8DCCDB" }]}>
                            <Text style={styles.dia}>Qui</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setDia("Sex")}>
                        <View style={[styles.image2, { backgroundColor: dia == "Sex" ? "#0B8AA8" : "#8DCCDB" }]}>
                            <Text style={styles.dia}>Sex</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setDia("Sab")}>
                        <View style={[styles.image2, { backgroundColor: dia == "Sab" ? "#0B8AA8" : "#8DCCDB" }]}>
                            <Text style={styles.dia}>Sab</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
            <View style={styles.box2}>
                <Text style={styles.text3}>Confira os horários disponíveis:</Text>
                <View style={styles.boxdia2}>

                    <TouchableOpacity onPress={() => setHora("08:00")}>
                        <View style={[styles.image3, { backgroundColor: hora == "08:00" ? "#0B8AA8" : "#8DCCDB" }]}>
                            <Text style={styles.dia2}>08:00</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setHora("09:00")}>
                        <View style={[styles.image3, { backgroundColor: hora == "09:00" ? "#0B8AA8" : "#8DCCDB" }]}>
                            <Text style={styles.dia2}>09:00</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setHora("10:00")}>
                        <View style={[styles.image3, { backgroundColor: hora == "10:00" ? "#0B8AA8" : "#8DCCDB" }]}>
                            <Text style={styles.dia2}>10:00</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setHora("13:00")}>
                        <View style={[styles.image3, { backgroundColor: hora == "13:00" ? "#0B8AA8" : "#8DCCDB" }]}>
                            <Text style={styles.dia2}>13:00</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setHora("14:00")}>
                        <View style={[styles.image3, { backgroundColor: hora == "14:00" ? "#0B8AA8" : "#8DCCDB" }]}>
                            <Text style={styles.dia2}>14:00</Text>
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={styles.boxdia2}>

                    <TouchableOpacity onPress={() => setHora("15:00")}>
                        <View style={[styles.image3, { backgroundColor: hora == "15:00" ? "#0B8AA8" : "#8DCCDB" }]}>
                            <Text style={styles.dia2}>15:00</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setHora("16:00")}>
                        <View style={[styles.image3, { backgroundColor: hora == "16:00" ? "#0B8AA8" : "#8DCCDB" }]}>
                            <Text style={styles.dia2}>16:00</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setHora("17:00")}>
                        <View style={[styles.image3, { backgroundColor: hora == "17:00" ? "#0B8AA8" : "#8DCCDB" }]}>
                            <Text style={styles.dia2}>17:00</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setHora("18:00")}>
                        <View style={[styles.image3, { backgroundColor: hora == "18:00" ? "#0B8AA8" : "#8DCCDB" }]}>
                            <Text style={styles.dia2}>18:00</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setHora("19:00")}>
                        <View style={[styles.image3, { backgroundColor: hora == "19:00" ? "#0B8AA8" : "#8DCCDB" }]}>
                            <Text style={styles.dia2}>19:00</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text style={styles.buttontext}>Concluir agendamento</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titulo: {
        textAlign: "center",
        fontSize: 21,
        fontWeight: "bold",
        marginBottom: 45,
        marginTop: 40,
        color: "#2B2B2B",
    },
    item: {
        backgroundColor: '#8DCCDB',
        padding: 15,
        marginVertical: 12,
        marginHorizontal: 16,
        display: "flex",
        flexDirection: "row",
        borderRadius: 5,
        alignItems: "center"
    },
    title: {
        fontSize: 18,
        color: "black",
        fontWeight: "bold"
    },
    subtitulo: {
        fontSize: 16,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 100
    },
    image2: {
        width: 50,
        height: 50,
        borderRadius: 300,
        backgroundColor: "#8DCCDB",
        textAlign: "center",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
    },
    image3: {
        width: 50,
        height: 50,
        borderRadius: 300,
        backgroundColor: "#8DCCDB",
        textAlign: "center",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        marginBottom: 15
    },
    textbox: {
        marginLeft: 20
    },
    box: {
        width: "100%",
        height: 115
    },
    boxdia: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    boxdia2: {
        display: "flex",
        flexDirection: "row",
        gap: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        marginLeft: 16,
        fontSize: 16,
        color: "#2B2B2B",
        fontWeight: "bold",
        marginBottom: 20,
        marginTop: 50
    },
    text2: {
        marginLeft: 16,
        fontSize: 16,
        color: "#2B2B2B",
        fontWeight: "bold",
        marginBottom: 10
    },
    text3: {
        marginLeft: 16,
        fontSize: 16,
        color: "rgb(50,50,50)",
        fontWeight: "bold",
        marginBottom: 20,
        marginTop: 70
    },
    button: {
        width: "93%",
        height: 50,
        backgroundColor: "#8DCCDB",
        alignSelf: "center",
        borderRadius: 5,
        marginTop: 35,
        marginBottom: 30
    },
    buttontext: {
        textAlign: "center",
        padding: 14,
        fontSize: 18,
        color: "#2B2B2B",
        fontWeight: "bold"
    }
})