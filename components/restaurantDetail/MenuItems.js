import { Image, ScrollView, Text, View } from "react-native";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";


export default function MenuItems(props) {

    useEffect(()=>{
     
    },[])

    const dispatch = useDispatch();

    const cartItems = useSelector(
        (state) => state.cartReducer.selectedItems.items
      );

    const isFoodInCart = (food,cartItems)=>{

        var exists = contains(food,cartItems)
        return exists
    }
    function contains(obj) {
        var i;
        for (i = 0; i < cartItems.length; i++) {
            if (cartItems[i].title === obj.title) {
                return true;
            }
           
        }
    
        return false;
    }

    const selectItem =(food,checkboxValue)=>{
       
        let name = props.restaurantName
        dispatch({
            type: "ADD_TO_CART",
            payload: {
              ...food,
              restaurantName: name,
              checkBoxValue: checkboxValue,
            },

        })
    }

    return (

        <View vertical style={{ marginHorizontal: 5 }}>
            
            {props.foods.map(function (food, index) {
                return (
                    <View key={index} style={{ marginBottom: 20 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10, marginBottom: 20 }}>

                            <BouncyCheckbox iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                                fillColor="green" onPress={(checkboxValue)=>{selectItem(food,checkboxValue)}}
                                isChecked={isFoodInCart(food,cartItems)}/>
                            <ItemInfo title={food.title} desc={food.description} price={food.price} />
                            <ItemImage image={food.image} />

                        </View>
                        <Divider
                            width={0.5}
                            orientation="vertical" 
                            marginHorizontal={20}/>

                    </View>
                )
            })}
           

        </View>

    )

}


const ItemInfo = (props) => (
    <View style={{ width: '58%', height: 85, justifyContent: 'space-around' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{props.title}</Text>
        <Text style={{ fontSize: 12 }}>{props.desc}</Text>
        <Text style={{ fontSize: 12 }}>{props.price}</Text>
    </View>
)

const ItemImage = (props) => (
    <Image style={{ width: 90, height: 90, borderRadius: 12 }} source={{ uri: props.image }} />
)