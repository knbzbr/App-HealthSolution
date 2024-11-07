import { SectionList, StyleSheet, Text, View } from "react-native";

const lista = [
    {
        title: 'Selecione o Profissional:',
        data: [
            {
                id: 1,
                imagem: require("../assets/psico.jpg"),
                nomeProfissional: "Dra.Sandra",
                profissao: "Psicóloga"
            },
            
        ],
    }
]

export default function Agendamento() {
    return (
        <View style={styles.container}>
                <SectionList
                    sections={lista}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => (
                        <OnibusLista nomeProfissional={item.nomeProfissional} profissao={item.profissao} imagem={item.imagem} />
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.titleHeader}>{title}</Text>
                    )}
                    numCollums={2}
                />
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