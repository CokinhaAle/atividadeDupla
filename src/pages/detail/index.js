import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import { useRoute} from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { List } from "../../components/list";

const ww = Dimensions.get('window')

export function Detail(){

    const route = useRoute();
    return(
        <View style={{}}>
            <View>
                <Image style={{width: ww, height: 350}} source={{uri: route.params?.data.linkImgBase}} />
            </View>
            <View>
                <Text style={{fontWeight: 500, fontSize: 24, marginLeft: 20, marginTop: 20,}}>{route.params?.data.modelo}</Text>
                <Text style={{fontWeight: 400, fontSize: 20, marginLeft: 20}}>{(route.params?.data.nome)}</Text>
            </View>
            <View style={{}}>
                <Text style={{fontWeight: 500, fontSize: 14, marginLeft: 25, marginTop: 20}}><Ionicons style={{alignSelf: "flex-start",}} name="heart-outline" color="#ff4141" size={28} />Add to Favorites</Text>
                <Text style={{fontWeight: 500, fontSize: 14, marginLeft: 25, marginHorizontal: 5}}><Ionicons style={{alignSelf: "flex-start",}} name="cart-outline" color="#F4DA82" size={28} />Add to Cart</Text>
            </View>

            <View>
            {/* {route.params?.data.productDescription.map((item) => (
                <List key={item.id} data={item} />
            ))} */}
            </View>

        </View>
    )
}