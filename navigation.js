import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";
import { createStackNavigator } from "@react-navigation/stack";
import configureStore from "./redux/store";
import { Provider as ReduxProvider } from "react-redux";

const store = configureStore();

export default function RootNavigation() {

    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false,
    };

    return (
        <ReduxProvider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
                </Stack.Navigator>
            </NavigationContainer>
        </ReduxProvider>
    )
}