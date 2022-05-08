import React ,{ useEffect, useState }from "react";
import {View, Text, TouchableOpacity} from "react-native";

export default function HeaderTabs(props){

    useEffect(()=>{
        console.log(props.activeState);

    },[props.activeState])
    
    return(
        <View style={{flexDirection:'row',alignItems:'center',width:'100%',justifyContent:'center'}}>
            <HeaderButton  title="Delivery" btnColor="black" txtColor="white" activeState={props.activeState} setActiveTab={props.setActiveState}/>
            <HeaderButton title="Pickup" btnColor="white" txtColor="black" activeState={props.activeState} setActiveTab={props.setActiveState}/>
        </View>
    )

}

const HeaderButton =(props)=> (
    <View>
        <TouchableOpacity style={
            {
                backgroundColor: props.activeState == props.title? 'black':'white',
                paddingVertical:6,
                paddingHorizontal:16,
                borderRadius:30
            }
        } onPress ={()=>{
            
            props.setActiveTab(props.title)
        }}>

            <Text style={{color:props.activeState == props.title? 'white':'black',fontSize:15,fontWeight:'bold' }}>{props.title}</Text>
        </TouchableOpacity>
    </View>
)