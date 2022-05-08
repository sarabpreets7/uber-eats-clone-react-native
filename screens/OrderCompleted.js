import { SafeAreaView, View,Text } from "react-native";
import LottieView from "lottie-react-native";
import MenuItems from "../components/restaurantDetail/MenuItems";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";


const foods = [
    {
      title: "Lasagna",
      description: "With butter lettuce, tomato and sauce bechamel",
      price: "$13.50",
      image:
        "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
    },
    {
      title: "Tandoori Chicken",
      description:
        "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
      price: "$19.20",
      image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
    },
    {
      title: "Chilaquiles",
      description:
        "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
      price: "$14.50",
      image:
        "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
    },
    {
      title: "Chicken Caesar Salad",
      description:
        "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
      price: "$21.50",
      image:
        "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
    },
    {
      title: "Lasagnaa",
      description: "With butter lettuce, tomato and sauce bechamel",
      price: "$13.50",
      image:
        "https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg",
    },
  ];


export default function OrderCompleted({navigation}){

    const cartItems = useSelector(
        (state) => state.cartReducer.selectedItems.items
      );


    return(
        
            <View style={{paddingTop:26,flex:1,justifyContent:'center',backgroundColor:'white'}}>
               
               <LottieView style={{ height: 100, alignSelf: "center", marginBottom: 15 }}
               source={require("../assets/animations/check-mark.json")}
               autoPlay
               speed={0.5}
               loop={false}/>

               <View style={{marginHorizontal:25,marginBottom:20}}>
                   <Text style={{fontSize:17,fontWeight:'bold'}}>Your order at Farmhouse Pizza has been placed for $76.5</Text>
               </View>

               <ScrollView showsVerticalScrollIndicator={false} style={{maxHeight:350,marginHorizontal:20}}>
                    <MenuItems checkbox={false} foods={cartItems}/>
               </ScrollView>

                <LottieView
                      style={{ height: 150, alignSelf: "center",margin:5 }}
                      source={require("../assets/animations/cooking.json")}
                      autoPlay
                      speed={0.5}/>
            </View>
        
    )
}