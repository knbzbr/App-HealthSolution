import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity, ScrollView } from "react-native";
import { AuthContext } from "../Context/AuthContext";
import CalendarPicker from "react-native-calendar-picker";


export default function Agendamento() {
    const [profissional, setProfissional] = useState(null);
    const [profissionais, setProfissionais] = useState([]);
    const [tipoProfissionais, setTipoProfissionais] = useState([]);
    const [hora, setHora] = useState(null);
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [obsConsulta, setObsConsulta] = useState();

    const horarios1 = ["08:00", "09:00", "10:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];

    const { usuario } = useContext(AuthContext);

    async function getProfissionais() {
        try {
            const response = await fetch('http://10.133.22.29:5251/api/Profissional/GetAllProfissional', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
            const json = await response.json();
            setProfissionais(json);
        } catch (err) {
            console.error('Erro ao obter profissionais:', err);
        }
    }

    async function getTipoProfissionais() {
        try {
            const response = await fetch('http://10.133.22.29:5251/api/TipoProfissional/GetAllTipoProfissional', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
            const json = await response.json();
            setTipoProfissionais(json);
        } catch (err) {
            console.error('Erro ao obter tipos de profissionais:', err);
        }
    }

    async function agendarConsulta() {
        await fetch('http://10.133.22.29:5251/api/Consulta/CreateConsulta', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                pacienteId: usuario.usuarioId,
                obsConsulta: obsConsulta,
                profissionalId: profissional,
                dataConsulta: selectedStartDate + "T" + hora + ":00Z"
            })
        })
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.log(err))

        Alert.alert('Agendamento', 'Seu agendamento foi concluído com sucesso!');
    }

    useEffect(() => {
        getProfissionais();
        getTipoProfissionais();
    }, []);

    const onDateChange = (date) => {
        setSelectedStartDate(date.toISOString().split('T')[0]);
    };

    const Item = ({ imagem, title, subtitulo, id }) => (
        <TouchableOpacity
            style={[styles.item, { backgroundColor: profissional === id ? "#0B8AA8" : "#8DCCDB" }]}
            onPress={() => { setProfissional(id); setObsConsulta(title + " - " + subtitulo) }}
        >
            <Image source={imagem} resizeMode="cover" style={styles.image} />
            <View style={styles.textbox}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitulo}>{subtitulo}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Text style={styles.titulo}>Agendamento</Text>

            <View>
                <Text style={styles.text2}>Selecione o profissional:</Text>
            </View>

            {profissionais && tipoProfissionais && profissionais.map((item) => (
                <Item
                    imagem={item.imagem}
                    title={item.nomeProfissional}
                    subtitulo={tipoProfissionais.find(value => value.tipoProfissionalId === item.tipoProfissionalId)?.nomeTipoProfissional}
                    id={item.profissionalId}
                    key={item.profissionalId}
                />
            ))}

            <View style={styles.box}>
                <Text style={styles.text}>Selecione o dia de sua preferência:</Text>
                <CalendarPicker
                    onDateChange={onDateChange}
                    months={["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]}
                    weekdays={["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]}
                    nextTitle="Próximo"
                    previousTitle="Anterior"
                />
            </View>

            <View style={styles.box2}>
                <Text style={styles.text3}>Confira os horários disponíveis:</Text>
                <View style={styles.boxdia2}>
                    {horarios1.map((horaItem) => (
                        <TouchableOpacity key={horaItem} onPress={() => setHora(horaItem)}>
                            <View style={[styles.image3, { backgroundColor: hora === horaItem ? "#0B8AA8" : "#8DCCDB" }]}>
                                <Text style={styles.dia2}>{horaItem}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <View>
                <TouchableOpacity style={styles.button} onPress={agendarConsulta}>
                    <Text style={styles.buttontext}>Concluir agendamento</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
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
        height: 200
    },
    box2: {
        marginTop: 175
    },
    boxdia2: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        gap: 20,
        paddingHorizontal: 20,
        flexWrap: "wrap",
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