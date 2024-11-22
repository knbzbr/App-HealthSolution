import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';

import Home from '../Pages/Home';
import Consultas from '../Pages/Consultas';
import Agendamento from '../Pages/Agendamento';
import Login from '../Pages/Login';
import Perfil from '../Pages/Perfil';
import { Pressable } from 'react-native';
import { Text } from 'react-native';
import Cadastro from '../Pages/Cadastro';



    const Tab = createBottomTabNavigator();

export default function Rotas() {

    const { logado } = useContext(AuthContext);
    const [ cadastro, setCadastro ] = useState(false);

    if (!logado && !cadastro ) {
      return (<Login/>)
    }

    if( !logado && cadastro ) {
        return ( <Cadastro/> )
    }

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: '#4796A8',
                    },
                    tabBarActiveTintColor: "white"
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home-outline" color={"black"} size={35} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Consultas"
                    component={Consultas}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="map" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Agendamento"
                    component={Agendamento}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="calendar" color={"black"} size={35} />
                        ),
                    }}
                />
                  <Tab.Screen
                    name="Perfil"
                    component={Perfil}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="account-circle-outline" color={"black"} size={35} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}