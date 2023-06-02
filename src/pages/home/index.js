import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, SafeAreaView, TextInput, StyleSheet, ScrollView,} from "react-native"; 

import { Logo } from "../../components/logo";
import { ProductList } from "../../components/productList";
import { Banner } from '../../components/banner'
import api from '../../services/api'

import { Ionicons } from "@expo/vector-icons";
export function Home(){
    const [product, setProduct] = useState([]);
    const [banner, setBanner] = useState([]);

    useEffect(() => {
        async function fetchApi() {
            const response = await api.get("/produtos");
            setProduct(response.data);
            const bann = await api.get("/banners");
            setBanner(bann.data);
        }
        fetchApi();

    }, []);

    return(
        <SafeAreaView style={styles.container}>
            <Logo />
            <View style={{}}>
            <View style={styles.form}>
                <TextInput
                    placeholder="Digite o nome de uma sneaker..."
                    style={styles.input}
                />
                <TouchableOpacity>
                    <Ionicons name="search" size={30} color="#F4DA82" />
                </TouchableOpacity>
            </View>
            </View>
        <ScrollView >
            <View>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={ banner }
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => <Banner data={item} /> }
                    pagingEnabled={true}
                />
            </View>

            <View style={{marginTop: 50}}>
                <Text style={{fontSize: 20, color: '#29251C'}}>Recommended For You</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={ product }
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => <ProductList data={item} />}
                />
                <TouchableOpacity style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}}>
                    <Text style={{fontWeight: 'bold', color: '#2b2b2b'}}>See All <Ionicons name="arrow-forward" color={'#000'} size={24}  /> </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#f4f4f4',
        flex: 1,
        paddingTop: 36,
        paddingStart: 14,
        paddingEnd: 14,
    },
    form: {
        backgroundColor: "#fff",
        width: "100%",
        borderRadius: 8,
        marginBottom: 16,
        marginTop: 16,
        borderWidth: 1,
        borderColor: "#ececec",
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    input: {
        width: "90%",
        height: 54,
        maxWidth: "90%",
    },
})