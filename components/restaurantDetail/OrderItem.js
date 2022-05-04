import React from "react";
import { View, Text } from "react-native";

export default function OrderItem(props) {
  
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#999",
        width:'100%'
      }}
    >
      <Text style={{ fontWeight: "600", fontSize: 16 }}>{props.title}</Text>
      <Text style={{ opacity: 0.7, fontSize: 16 }}>{props.price}</Text>
    </View>
  );
}