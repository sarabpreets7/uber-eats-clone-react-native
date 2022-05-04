import React, { useEffect, useState } from "react";
import {View, Text, SafeAreaView, ScrollView } from "react-native";
import Categories from "../components/home/Categories";
import HeaderTabs from "../components/home/HeaderTabs";
import RestaurantItems  from "../components/home/RestaurantItems";
import SearchBar from "../components/home/SearchBar";
import { localRestaurants } from "../components/home/RestaurantItems";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/home/BottomTabs";
import { restaurantData as mainData} from "../assets/data";
// const fs = require('fs');
// const stateFile = "./usersStateFile";

export default function Home({navigation}){

    // let restaurantArray = []

    const [city, setCity] = useState("San Francisco");
    const [restaurantData, setRestaurantData] = useState([mainData])
    const [activeState,setActiveState] = useState('Delivery')


    function filterRestaurants(){

      let filteredData = mainData.filter(function(data){
        //console.log(data);
        return data.transactions.includes(activeState.toLowerCase())
      })
      console.log(filteredData.length);
      setRestaurantData(filteredData)

    }
    const getApiInfo=()=>{

      const encodedParams = new URLSearchParams();
      encodedParams.append("language", "en_US");
      encodedParams.append("limit", "30");
      encodedParams.append("location_id", "297704");
      encodedParams.append("currency", "USD");
      
      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Host': 'worldwide-restaurants.p.rapidapi.com',
          'X-RapidAPI-Key': '277540f0b9msh759232998fb2c3cp173f33jsn7dedb58cf3e2'
        },
        body: encodedParams
      };


// {
//   name: "India's Grill",
//   image_url:
//     "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
//   transactions:"delivery",
//   price: "$$",
//   reviews: 700,
//   rating: 4.9,
// }
fetch('https://worldwide-restaurants.p.rapidapi.com/search', options)
	.then(response => response.json())
  .then(response => console.log(response))
	.then(response => response.results.data.forEach(function(item){

    let newItem={}
    newItem.name = item.name
    newItem.image_url = item.photo.images.large['url']
    newItem.transactions = "delivery"
    newItem.rating = item.rating

    console.log(newItem);
    restaurantArray.push(newItem)
  }))
  .then(()=>{console.log(restaurantArray);
        setRestaurantData(restaurantArray)

        const text = restaurantData.map(JSON.stringify).reduce((prev, next) => `${prev}\n${next}`);
        fs.writeFileSync(stateFile, text, 'utf-8');
  })
	.catch(err => console.error(err));

    }


  useEffect(()=>{
    filterRestaurants()
    // console.log('hh');
    //getApiInfo()
    //setRestaurantData(mainData)
      
  },[activeState])
  
    return(
        <View style={{paddingVertical:30,backgroundColor:'#eee',paddingBottom:0,width:'100%',height:'100%'}}>
            <View style={{backgroundColor:'white',padding:15}}>
                <HeaderTabs activeState={activeState} setActiveState={setActiveState}/>
                <SearchBar/>
               
            </View>
            <ScrollView vertical showsVerticalScrollIndicator={false}>
                <Categories/>
                <RestaurantItems navigation={navigation} localRestaurants={restaurantData}></RestaurantItems>
                
            </ScrollView>
            <Divider width={1}/>
            <BottomTabs/>

            
           
        </View>
        
    )

}

