import React, { useContext, useEffect, useState } from 'react'
import { Image, ImageBackground, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Home from '../Pages/Home';
import { AuthContext } from '../Context/AuthContext';


export default function Login({setCadastro}) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const { Login, error } = useContext( AuthContext );

    useEffect(() => {
        if (error){
            setErrorMessage("Email ou senha incorreto")
        }
    }, [error]);

    const Handerlogin = () => {
        setErrorMessage("");
        Login(email, senha);
    }

    return (
        <View style={css.view}>

                <Image style={css.logo} source={require('../../assets/LogoHealthSolutions.png')} />

                <TextInput placeholder="Nome do Usuário"
                    placeholderTextColor="black"
                   
                    css={{
                        placeholderStyle: {
                            fontWeight: "bold",
                        },
                    }}
                    style={css.inputs} onChangeText={(digitado) => setEmail(digitado)} value={email}
                />
                <TextInput secureTextEntry={true} placeholder="Senha"
                    placeholderTextColor="black"
                    css={{
                        placeholderStyle: {
                            fontWeight: "bold",
                        },
                    }}
                    style={css.inputs} onChangeText={(digitado) => setSenha(digitado)} value={senha} 
                />
                <Text style={css.senha}>Esqueci minha senha</Text>
                {errorMessage ? <Text style={css.text}> {errorMessage} </Text> : null}
                <TouchableOpacity onPress={Handerlogin} style={css.btn} >
                    <Text style={css.btnText}>Login</Text>
                </TouchableOpacity>

                <Text style={css.cadastrado}>Não é cadastrado?</Text>
                <TouchableOpacity onPress={() => NavigationPreloadManager.navigate("Cadastro")}>
                    <Text style={css.cadastrar} >Cadastrar</Text>
                </TouchableOpacity>          
        </View>
    )
}

const css = StyleSheet.create({
    view: {
        width: "100%",
        height: "100%",
        flex: 1,
    },
    text:{
        color: "black"
    },
    inputs: {
        borderRadius: 5,
        backgroundColor: 'white',
        width: '85%',
        height: 50,
        padding: 10,
        marginTop: 15,
        marginBottom: 15,
        borderWidth: 0.8,
        alignSelf: "center",
        fontSize: 16.5
    },

    logo: {
        width: "100%",
        height: "30%",
        resizeMode: "contain",
        marginTop: '5%'
    },
    btn: {
        width: "85%",
        height: 50,
        color: "white",
        backgroundColor: "#4796A8",
        borderRadius: 5,
        alignSelf: "center",
        marginTop: 40,
        marginBottom: 80
    },
    btnText: {
        color: "black",
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center",
        lineHeight: 50,
    },
    cadastrar: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: "center"
    },
    cadastrado: {
        textAlign: "center",
        fontSize: 14.2
    },
    senha: {
        width: "84%",
        alignSelf: "center",
        marginTop: -10
    }
})   


