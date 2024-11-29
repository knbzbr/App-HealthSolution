import { createContext, useState } from "react";

export const AuthContext = createContext(0);

function AuthProvider({ children }) {
    const [logado, setLogado] = useState(false);
    const [error, setError] = useState(false);
    const [ usuario, setUsuario ] = useState();

    async function Login(email, senha) {

        if (email != "" && senha != "") {
            await fetch('http://10.133.22.20:5251/api/Usuario/LoginUsuario', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    usuarioEmail: email,
                    usuarioSenha: senha
                })
            })
                .then(res => res.json() )
                .then(json => {
                    if( json.usuarioId > 0 ) {
                        setUsuario( json );
                        setLogado(true);
                        setError(false);
                        setUsuario( json );
                    }
                }
                )
                .catch(err => setError(true))
        } else {
            setError(true)
        }
    }

    return (
        <AuthContext.Provider value={{ logado: logado, Login, error: error, usuario }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;