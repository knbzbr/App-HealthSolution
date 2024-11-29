import React from 'react'
import { useState } from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function Cadastro({ setCadastro }) {

    const [erro, setErro] = useState("");
    const [nome, setNome] = useState("");
    const [datanascimento, setDatanascimento] = useState("");
    const [sexo, setSexo] = useState("");
    const [cpf, setCpf] = useState("");
    const [endereco, setEndereco] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmada, setConfirmada] = useState("");

    function Cadastrar() {
        if (nome == "") {
            setErro("Campo obrigatório");
            return;
        }

        if (datanascimento == "") {
            setErro("Campo obrigatório");
            return;
        }

        if (sexo == "") {
            setErro("Campo obrigatório");
            return;
        }

        if (cpf == "") {
            setErro("Campo obrigatório");
            return;
        }

        if (endereco == "") {
            setErro("Campo obrigatório");
            return;
        }

        if (telefone == "") {
            setErro("Campo obrigatório");
            return;
        }

        if (email == "") {
            setErro("Campo obrigatório");
            return;
        }

        if (senha == "") {
            setErro("Campo obrigatório");
            return;
        }

        if (confirmada == "") {
            setErro("Campo obrigatório");
            return;
        }

        if (nome != ""
            && datanascimento != ""
            && sexo != ""
            && cpf != ""
            && endereco != ""
            && telefone != ""
            && email != ""
            && senha != ""
            && confirmada != "") {

        }
    }
    return (
        <View style={css.view}>
            <Image style={css.logo} source={require('../../assets/LogoHealthSolutions.png')} />
            <TouchableOpacity onPress={() => setCadastro( false )}>
                <MaterialCommunityIcons name="chevron-left" size={30} />
            </TouchableOpacity>
            <ScrollView>
                <TextInput
                    style={css.inputs}
                    placeholder="Nome Completo"
                    placeholderTextColor="black"
                    css={{
                        placeholderStyle: {
                            fontWeight: "bold",
                        },
                    }}
                    onChangeText={(digitado) => setNome(digitado)}
                    value={nome}
                />
                {erro && <Text style={css.erro}>{erro}</Text>}
                <TextInput style={css.inputs} placeholder="Data de Nascimento"
                    placeholderTextColor="black"
                    css={{
                        placeholderStyle: {
                            fontWeight: "bold",
                        },
                    }}
                    onChangeText={(digitado) => setDatanascimento(digitado)}
                    value={datanascimento}
                />
                {erro && <Text style={css.erro}>{erro}</Text>}
                <TextInput style={css.inputs} placeholder="Sexo"
                    placeholderTextColor="black"
                    css={{
                        placeholderStyle: {
                            fontWeight: "bold",
                        },
                    }}
                    onChangeText={(digitado) => setSexo(digitado)}
                    value={sexo}
                />
                {erro && <Text style={css.erro}>{erro}</Text>}
                <TextInput style={css.inputs} placeholder="CPF"
                    placeholderTextColor="black"
                    css={{
                        placeholderStyle: {
                            fontWeight: "bold",
                        },
                    }}
                    onChangeText={(digitado) => setCpf(digitado)}
                    value={cpf}
                />
                {erro && <Text style={css.erro}>{erro}</Text>}
                <TextInput style={css.inputs} placeholder="Endereço"
                    placeholderTextColor="black"
                    css={{
                        placeholderStyle: {
                            fontWeight: "bold",
                        },
                    }}
                    onChangeText={(digitado) => setEndereco(digitado)}
                    value={endereco}
                />
                {erro && <Text style={css.erro}>{erro}</Text>}
                <TextInput style={css.inputs} placeholder="Telefone"
                    placeholderTextColor="black"
                    css={{
                        placeholderStyle: {
                            fontWeight: "bold",
                        },
                    }}
                    onChangeText={(digitado) => setTelefone(digitado)}
                    value={telefone}
                />
                {erro && <Text style={css.erro}>{erro}</Text>}
                <TextInput style={css.inputs} placeholder="Email"
                    placeholderTextColor="black"
                    css={{
                        placeholderStyle: {
                            fontWeight: "bold",
                        },
                    }}
                    onChangeText={(digitado) => setEmail(digitado)}
                    value={email}
                />
                {erro && <Text style={css.erro}>{erro}</Text>}
                <TextInput style={css.inputs} placeholder="Senha" secureTextEntry={true}
                    placeholderTextColor="black"
                    css={{
                        placeholderStyle: {
                            fontWeight: "bold",
                        },
                    }}
                    onChangeText={(digitado) => setSenha(digitado)}
                    value={senha}
                />
                {erro && <Text style={css.erro}>{erro}</Text>}
                <TextInput style={css.inputs} placeholder="Confirmar Senha" secureTextEntry={true}
                    placeholderTextColor="black"
                    css={{
                        placeholderStyle: {
                            fontWeight: "bold",
                        },
                    }}
                    onChangeText={(digitado) => setConfirmada(digitado)}
                    value={confirmada}
                />
                {erro && <Text style={css.erro}>{erro}</Text>}
                <TouchableOpacity style={css.btn} onPress={setCadastro(true)}>
                    <Text style={css.btnText}>Cadastrar</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
} 2

const css = StyleSheet.create({
    view: {
        backgroundColor: '#F4F4F4',
        width: "100%",
        height: "100%",
        flex: 1,
        justifyContent: "center",
    },
    inputs: {
        borderRadius: 3,
        backgroundColor: 'white',
        width: '80%',
        height: 40,
        padding: 10,
        marginTop: 15,
        borderWidth: 0.3,
        marginBottom: 15,
        fontSize: 16,
        alignSelf: "center"
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        width: "100%",
        height: "100%"
    },
    logo: {
        width: "100%",
        height: "25%",
        resizeMode: "contain"
    },
    btn: {

        width: "80%",
        height: 40,
        color: "white",
        backgroundColor: "#4796A8",
        borderRadius: 5,
        marginTop: 18,
        marginBottom: 12,
        alignSelf: "center"
    },
    btnText: {
        color: "black",
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: "center",
        lineHeight: 40,
    },
    erro: {
        fontSize: 11,
        color: "red",
        alignSelf: "center",
        width: "85%",
        marginBottom: 10,
        marginTop: -15,
        marginLeft: 20
    },
})