import { SectionList, StyleSheet, Text, View } from "react-native";

const lista = [
    {
        title: 'Selecione o Profissional:',
        data: [
            {
                id: 1,
                imagem: require("../../assets/psico.jpg"),
                nomeProfissional: "Dra.Sandra",
                profissao: "Psicóloga"
            },
        ],
    }
]

export default function Agendamento() {
    return (
        <View style={styles.container}>
            <Text>OIIIIII</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleHeader: {
        fontSize: 18,
        marginLeft: 22,
        marginTop: 25,
        fontWeight: "bold"
    }
})