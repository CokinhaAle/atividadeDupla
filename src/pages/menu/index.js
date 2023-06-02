import { View, Text, StyleSheet } from "react-native"; 

export function Menu(){
    return(
        <View style={styles.container}>
            <Text>Olá Mundo Menu</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'green'
    }
})