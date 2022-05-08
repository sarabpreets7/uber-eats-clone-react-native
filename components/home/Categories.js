import { View, Text, Image, ScrollView,TouchableOpacity } from "react-native";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";


const items = [
    {
      image: require("../../assets/images/shopping-bag.png"),
      text: "Pick-up",
    },
    {
      image: require("../../assets/images/soft-drink.png"),
      text: "Soft Drinks",
    },
    {
      image: require("../../assets/images/bread.png"),
      text: "Bakery Items",
    },
    {
      image: require("../../assets/images/fast-food.png"),
      text: "Fast Foods",
    },
    {
      image: require("../../assets/images/deals.png"),
      text: "Deals",
    },
    {
      image: require("../../assets/images/coffee.png"),
      text: "Coffee & Tea",
    },
    {
      image: require("../../assets/images/desserts.png"),
      text: "Desserts",
    },
  ];
  

export default function Categories(props){

  const changeState =(option) =>{
      
      if(option == 'Pick-up'){
        props.setActiveState('Pickup')
      }
  }
    return(
        <View style={{paddingVertical:10,paddingLeft:20,backgroundColor:'#fff',marginTop:5}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                {items.map(function(item,index){
                    return(
                        <TouchableOpacity onPress={()=> changeState(item.text)} key={index} style={{marginRight:10,alignItems:'center'}}>
                            <Image style={{width:50,height:40,resizeMode:'contain'}} source={item.image}/>
                            <Text style={{fontSize:13,fontWeight: 'bold'}}>{item.text}</Text>
                        </TouchableOpacity>
                    )
                })}

            </ScrollView>
        </View>
        
    )
}