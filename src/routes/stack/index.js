import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from '../../pages/home'
import { Detail } from '../../pages/detail'

const Stack = createNativeStackNavigator();

export function StackRouter(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="HomeTab"
                component={Home}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name="DetailTab"
                component={Detail}
                options={{ headerShown: false}}
            />
        </Stack.Navigator>
    )
}