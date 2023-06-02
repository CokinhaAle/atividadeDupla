import { View, Text, StyleSheet } from "react-native"; 

export function Cart(){
    return(
        <View style={styles.container}>
            <Text>Olá Mundo Cart</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'blue'
    }
})