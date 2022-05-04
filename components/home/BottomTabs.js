import React ,{ useState }from "react";
import {View, Text, TouchableOpacity} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTabs(){

    return(
        <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',marginTop:5,padding:5,marginBottom:6}}>

            <Icon icon="home" text="Home" />
            <Icon icon="search" text="Browse" />
            <Icon icon="shopping-bag" text="Grocery" />
            <Icon icon="receipt" text="Orders" />
            <Icon icon="user" text="Account" />

        </View>
        
    )
}

const Icon =(props) =>(
    <TouchableOpacity>
        <View style={{alignItems:'center'}}>
            <FontAwesome5
            name={props.icon}
            size={19}
            style={{
            marginBottom: 3,
            alignSelf: "center",
            }}
      />
      <Text style={{fontSize:12}}>{props.text}</Text>
        </View>
    </TouchableOpacity>
)