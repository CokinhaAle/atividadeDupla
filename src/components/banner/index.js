import { View, Image, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

export function Banner({ data }){
    return(
        <View>
            <Image source={{uri: data.img}}
                style={{
                    height: 200 *2,
                    width: 250 *2,
                }} />
        </View>
    )
}