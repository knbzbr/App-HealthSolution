import React, { useState } from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";

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

    async function Cadastrar() {
        // Validações de campos obrigatórios
        if (nome == "") {
            setErro("nome");
            return;
        }
        if (cpf == "") {
            setErro("cpf");
            return;
        }
        if (endereco == "") {
            setErro("endereco");
            return;
        }
        if (telefone == "") {
            setErro("telefone");
            return;
        }
        if (email == "") {
            setErro("email");
            return;
        }
        if (senha == "") {
            setErro("senha");
            return;
        }
        if (confirmada != senha) {
            setErro("confirmada");
            return;
        }

        // Se todos os campos estiverem preenchidos corretamente, chama a função para realizar o cadastro
        if (nome !== ""   && cpf !== "" && endereco !== "" && telefone !== "" && email !== "" && senha !== "") {
            Cadastrado();
                

        }
    }

    async function Cadastrado() {
        await fetch('http://10.133.22.39:5251/api/Usuario/CreateUsuario', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                usuarioNome: nome,
                usuarioCpf: cpf,
                usuarioEndereco: endereco,
                usuarioTelefone: telefone,
                usuarioEmail: email,
                usuarioSenha: senha,
                fotoUsuario: ""
            })
        })
        .then(res => res.json())
        .then(json => {
            setCadastro(true);
            Alert.alert('Cadastro', 'Seu cadastro foi realizado com sucesso!');
        })
        .catch(err => {
            console.log(err);
            Alert.alert('Erro', 'Ocorreu um erro ao realizar o cadastro. Tente novamente.');
        });
        setCadastro(false);
    }


    return (
        <View style={css.view}>
            <Image style={css.logo} source={require('../../assets/LogoHealthSolutions.png')} />
            <TouchableOpacity onPress={() => setCadastro(false)}>
                <MaterialCommunityIcons name="chevron-left" size={30} />
            </TouchableOpacity>
            <ScrollView>
                <TextInput
                    style={css.inputs}
                    placeholder="Nome Completo"
                    placeholderTextColor="black"
                    onChangeText={(digitado) => setNome(digitado)}
                    value={nome}
                />
                {erro === "nome" && <Text style={css.erro}>Campo obrigatório</Text>}

                <TextInput
                    style={css.inputs}
                    placeholder="CPF"
                    placeholderTextColor="black"
                    onChangeText={(digitado) => setCpf(digitado)}
                    value={cpf}
                />
                {erro === "cpf" && <Text style={css.erro}>Campo obrigatório</Text>}

                <TextInput
                    style={css.inputs}
                    placeholder="Endereço"
                    placeholderTextColor="black"
                    onChangeText={(digitado) => setEndereco(digitado)}
                    value={endereco}
                />
                {erro === "endereco" && <Text style={css.erro}>Campo obrigatório</Text>}

                <TextInput
                    style={css.inputs}
                    placeholder="Telefone"
                    placeholderTextColor="black"
                    onChangeText={(digitado) => setTelefone(digitado)}
                    value={telefone}
                />
                {erro === "telefone" && <Text style={css.erro}>Campo obrigatório</Text>}

                <TextInput
                    style={css.inputs}
                    placeholder="Email"
                    placeholderTextColor="black"
                    onChangeText={(digitado) => setEmail(digitado)}
                    value={email}
                />
                {erro === "email" && <Text style={css.erro}>Campo obrigatório</Text>}

                <TextInput
                    style={css.inputs}
                    placeholder="Senha"
                    secureTextEntry={true}
                    placeholderTextColor="black"
                    onChangeText={(digitado) => setSenha(digitado)}
                    value={senha}
                />
                {erro === "senha" && <Text style={css.erro}>Campo obrigatório</Text>}

                <TextInput
                    style={css.inputs}
                    placeholder="Confirmar Senha"
                    secureTextEntry={true}
                    placeholderTextColor="black"
                    onChangeText={(digitado) => setConfirmada(digitado)}
                    value={confirmada}
                />
                {erro === "confirmada" && <Text style={css.erro}>As senhas não coincidem</Text>}

                <TouchableOpacity style={css.btn} onPress={Cadastrar} >
                    <Text style={css.btnText}>Cadastrar</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

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
});
