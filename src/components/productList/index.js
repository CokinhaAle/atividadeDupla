import { Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import { useNavigation } from "@react-navigation/native";

export function ProductList({ data }) {
    const navigation = useNavigation();

    function handleNavigator(){
        navigation.navigate("DetailTab", { data: data})
    }
    return (
            <TouchableOpacity onPress={handleNavigator} style={{ marginStart: 25, marginVertical: 20, backgroundColor: '#fff', width: 200, borderRadius: 10 }}>
                <Image source={{ uri: data.linkImgBase }} style={styles.cover} />
                <Text style={styles.text}>{data.modelo}</Text>
                <Text numberOfLines={1} style={styles.text}>{data.nome}</Text>
                <Text style={{fontSize: 15, paddingLeft: 10, fontWeight: 400, marginTop: 5 }}>Lowest Ask</Text>
                <Text numberOfLines={1} style={{fontSize: 25, fontWeight: 600, color: '#2b2b2b', marginBottom: 5, marginStart: 10 }}>${data.price}</Text>
                <TouchableOpacity style={styles.button} ><Text style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: 18, textAlign: 'center' }}>COMPRAR</Text></TouchableOpacity>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cover: {
        height: 160,
        borderRadius: 10,

    },
    text: {
        fontFamily: 'default',
        color: '#2b2b2b',
        font: 19,
        fontWeight: 500,
        paddingHorizontal: 10,
        leterSpacing: 1,

    },
    button: {
        border: 'solid',
        borderColor: '#2b2b2b',
        fontFamily: 'monospace',
        fontWeight: 700,
        fontSize: 18,
        borderRadius: 30,
        paddingHorizontal: 8,
        letterSpacing: 1,
        paddingVertical: 8,
        marginHorizontal: 5,
        marginVertical: 5
    },
})