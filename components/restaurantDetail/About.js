import { Text, View } from "react-native";
import { Image } from "react-native";



export default function About(props){

    return(
        <View>
            <ImagePart image={props.restaurantImage}/>
            <InfoPart rating={props.rating} reviews={props.reviews} name={props.restaurantName}/>

        </View>
    )

}

const ImagePart =(props) =>(
    <View>
        <Image source={{uri:props.image}} style={{width:'100%',height:180}}/>
    </View>
)

const InfoPart =(props) =>(

    <View >
        <Text style={{
      fontSize: 29,
      fontWeight: 'bold',
      marginTop: 10,
      marginHorizontal: 15,
    }}>{props.name}</Text>

    <Text style={{marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,}}>Thai ● Comfort Food ● $$ ● {props.rating} ⭐ ({props.reviews})</Text>
    </View>
)