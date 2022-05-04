import { View, Text } from "react-native";
import About from "./components/restaurantDetail/About";
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";
import RootNavigation from "./navigation";


export default function App() {
  return (
    // <View>
    //  <Home></Home>
    //  <RestaurantDetail/>
    // </View>
    
    <RootNavigation/>
  );
}
