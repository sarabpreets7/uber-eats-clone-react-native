import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet,ScrollView } from "react-native";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";

export default function ViewCart({navigation},props) {

  const [modal, setModal] = useState(false);

  useEffect(() => {
    // console.log(cartItems);
  }, [])

  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );


  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);


    const checkout =() =>{
      navigation.navigate('OrderCompleted')
    }
  return (<>
    {modal ? <Modal  onRequestClose={()=> setModal(false)} transparent={true} animationType='slide' visible={modal}>
      <ModelContent checkout={checkout} restaurantName={props.restaurantName} totalPrice={total} cartItems={items} setModal={setModal} />
    </Modal> : <></>}
    {total != 0 ?
      <View style={{
        position: 'absolute',
        bottom: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'

      }}>
        <TouchableOpacity onPress={() => { setModal(true) }} style={{
          backgroundColor: "black",
          alignItems: "center",
          padding: 13,
          borderRadius: 30,
          width: 300, position: "relative", zIndex: 99
        }}>

          <Text style={{ color: "white", fontSize: 20 }}>View Cart</Text>
          <Text
            style={{
              position: "absolute",
              right: 20,
              color: "white",
              fontSize: 15,
              top: 17,
            }}
          >
            ${total}
          </Text>

        </TouchableOpacity>

      </View> : <></>}

  </>
  )
}

const ModelContent = (props) => (

  <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.7)", justifyContent: 'flex-end' ,height:'100%'}}>

    <View style={{ height: 400, backgroundColor: 'white' }}>
      <View style={{ marginHorizontal: 0, alignItems: 'center', marginVertical: 20 }}>
        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{props.restaurantName}</Text>
        <ScrollView showsVerticalScrollIndicator={false} style={{ width: '90%' ,maxHeight:220}}>
          
          {props.cartItems.map(function(data){
            return(
              <OrderItem  title={data.title} price={data.price} />
            )
          })}
         
          {/* <OrderItem title='lasagna' price='$13' />
          <OrderItem title='lasagna' price='$13' />
          <OrderItem title='lasagna' price='$13' /> */}
        </ScrollView>

        <View style={{width:'96%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
          <Text>Subtotal</Text>
          <Text>${props.totalPrice}</Text>
        </View>

        <TouchableOpacity onPress={() => { props.checkout() }} style={{
          backgroundColor: "black",
          marginTop:20,
          alignItems: "center",
          padding: 13,
          borderRadius: 30,
          width: 300, position: "relative", zIndex: 99
        }}>

          <Text style={{ color: "white", fontSize: 20 }}>Checkout</Text>
          <Text
            style={{
              position: "absolute",
              right: 20,
              color: "white",
              fontSize: 15,
              top: 17,
            }}
          >
            ${props.totalPrice}
          </Text>

        </TouchableOpacity>
        
      </View>
      
      

    </View>

  </View>
)
