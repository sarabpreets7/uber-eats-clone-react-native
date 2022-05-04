import React ,{ useState }from "react";
import {View, Text, TouchableOpacity} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SearchBar(){
    
    return (
        <View style={{marginTop:15,flexDirection:'row',}}>
            <GooglePlacesAutocomplete placeholder="Search" styles={
                {
                    textInput:{
                        backgroundColor:'#eee',
                        borderRadius:20,
                        fontWeight:'700',
                        marginTop:7

                    },
                    textInputContainer: {
                        backgroundColor: "#eee",
                        borderRadius: 50,
                        flexDirection: "row",
                        alignItems: "center",
                        marginRight: 10,
                      },
                }
            } renderLeftButton={()=>(
                <View style={{marginLeft:10}}>
                    <Ionicons name="location-sharp" size={24}/>
                </View>
            )}

            renderRightButton={()=>(
                <TouchableOpacity style={{backgroundColor:'white',marginRight:10,padding:5,borderRadius:12,flexDirection:'row',alignItems:'center'}}>
                    <AntDesign
              name="clockcircle"
              size={11}
              style={{ marginRight: 6 }}
            />
                    <Text>Search</Text>
                </TouchableOpacity>
            )}
            />
        </View>
    )

}
