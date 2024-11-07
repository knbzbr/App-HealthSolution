import React from 'react'
import { useState } from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function Cadastro({ setLogado, setCadastro, setConcluido }) {

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

        if (cpf== "") {
            setErro("Campo obrigatório");
            return;
        }

        if (endereco== "") {
            setErro("Campo obrigatório");
            return;
        }

        if (telefone== "") {
            setErro("Campo obrigatório");
            return;
        }

        if (email== "") {
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
            setLogado(true);
            setCadastro(false);
            setConcluido(true);
        }
    }
    function Voltar() {
        setLogado(false);
        setCadastro(false);
    }
    return (
        <View style={css.view}>
                <Image style={css.logo} source={require('../../assets/LogoHealthSolutions.png')} />
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
                    <TouchableOpacity style={css.btn} onPress={Cadastrar}>
                        <Text style={css.btnText}>Cadastrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={css.btn} onPress={Voltar}>
                        <Text style={css.btnText}>Voltar</Text>
                    </TouchableOpacity>
                </ScrollView>
        </View>
    )
}

const css = StyleSheet.create({
    view: {
        width: "100%",
        height: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    inputs: {
        borderRadius: 5,
        backgroundColor: 'white',
        width: '85%',
        height: 50,
        padding: 10,
        marginTop: 15,
        borderWidth: 0.3,
        marginBottom: 15,
        fontSize: 16.5,
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
        width: "85%",
        height: 50,
        color: "white",
        backgroundColor: "#E2DAB9",
        borderRadius: 5,
        marginTop: 18,
        marginBottom: 12,
        alignSelf: "center"
    },
    btnText: {
        color: "black",
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center",
        lineHeight: 50,
    },
    erro: {
        fontSize: 11,
        color: "red",
        alignSelf: "center",
        width: "85%",
        marginBottom: 10,
        marginTop: -15
    },
})