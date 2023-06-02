import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { StackRouter } from '../stack'
import { Cart } from '../../pages/cart'
import { Menu } from '../../pages/menu'


import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export function Bottomnavigation(){
    return(
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#121212",
            tabBarStyle: {
                backgroundColor: "#fff",
                borderTopWidth: 0,
            },
        }}
        >
            <Tab.Screen
                name="HomeTab"
                component={StackRouter}
                options={{
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return (
                                <Ionicons
                                    name="home"
                                    color="#000"
                                    size={size}
                                />
                            );
                        } else {
                            return (
                                <Ionicons
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            );
                        }
                    },
                }}
            />
            <Tab.Screen
                name="cartTab"
                component={Cart}
                options={{
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return (
                                <Ionicons
                                    name="cart"
                                    color="#000"
                                    size={size}
                                />
                            );
                        } else {
                            return (
                                <Ionicons
                                    name="cart-outline"
                                    color={color}
                                    size={size}
                                />
                            );
                        }
                    },
                }}
            />
            <Tab.Screen
                name="menuTab"
                component={Menu}
                options={{
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return (
                                <Ionicons
                                    name="person"
                                    color="#000"
                                    size={size}
                                />
                            );
                        } else {
                            return (
                                <Ionicons
                                    name="person-outline"
                                    color={color}
                                    size={size}
                                />
                            );
                        }
                    },
                }}
            />

        </Tab.Navigator>
    )
}