import { View, Text, StyleSheet, Image } from "react-native";
import logo from '../../imgs/Florida.png'

export function Logo(){
    return(
        <View style={styles.logoArea}>
            <Image source={logo} title='Florida Sneakers' style={{width:'100px', height:'100px', alignSelf: "flex-start"}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    logoArea: {
        backgroundColor: "#f4f4f4",
        alignSelf: "flex-start",
        padding: 8,
        paddingleft: 16,
        paddingRight: 16,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 32,
        marginBottom: 15,
    },
    logo: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
    },
});