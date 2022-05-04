import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    transactions: "delivery pickup",
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://luxurylaunches.com/delhi/wp-content/uploads/2014/04/benihana-690x459.jpg",
    transactions: "delivery",
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    transactions: "delivery",
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
  {
    name: "Nopa",
    image_url:
      "https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2723%2Ftrend20200219060910.jpg",
    transactions: "pickup",
    price: "$$",
    reviews: 1200,
    rating: 4.1,
  },
  {
    name: "Burger King",
    image_url:
      "https://media.istockphoto.com/photos/delicious-meal-picture-id1295387240?b=1&k=20&m=1295387240&s=170667a&w=0&h=KtWYFjSBgpNgVkE3P-WKZ2F6V-VxyUBBtJIP_k8IANM=",
    transactions: "pickup",
    price: "$$",
    reviews: 900,
    rating: 4.4,
  },
  {
    name: "Tandoori King",
    image_url:
      "https://media.timeout.com/images/105825245/750/422/image.jpg",
    transactions: "pickup",
    price: "$$",
    reviews: 300,
    rating: 4.0,
  },
  {
    name: "Bona-a-petit",
    image_url:
      "https://media.vanityfair.com/photos/624db93288fcf914e1a594bc/master/w_1600%2Cc_limit/Steven%2520Joyce-JOS2021050D00077.jpg",
    transactions: "delivery",
    price: "$$",
    reviews: 200,
    rating: 3.7,
  },


];


export default function RestaurantItems({navigation,...props}) {
  return (
    <View style={{ marginTop: 10 }}>
      {props.localRestaurants.map(function (item, index) {
        return (
          <TouchableOpacity key={index} activeOpacity={1} onPress={()=>{
            navigation.navigate("RestaurantDetail",{
              name:item.name,
              image:item.image_url,
              reviews:item.reviews,
              rating:item.rating

            })
          }}>
            <View  style={{ padding: 10, backgroundColor: 'white', marginBottom: 20 }}>
              <RestuarantImage image_url={item.image_url} />
              <RestuarantInfo name={item.name} rating={item.rating} />
            </View>
          </TouchableOpacity>
        )
      })}

    </View>
  )

}

const RestuarantImage = (props) => (
  <>
    <View>
      <Image style={{ width: "100%", height: 180 }} source={{ uri: props.image_url }} />
      <TouchableOpacity style={{ position: 'absolute', top: 10, right: 10 }}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
      </TouchableOpacity>
    </View>
  </>
)
const RestuarantInfo = (props) => (
  <>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

      <View style={{ marginTop: 5 }}>
        <Text style={{ fontWeight: 'bold' }}>{props.name}</Text>
        <Text style={{ fontSize: 13, color: "gray" }}>30 - 45 mins</Text>
      </View>

      <View style={{ justifyContent: 'center', width: 30, height: 30, borderRadius: 30 / 2, backgroundColor: '#eee', alignItems: 'center', alignSelf: 'center' }}>
        <Text style={{ fontWeight: 'bold' }} >{props.rating}</Text>
      </View>

    </View>
  </>
)