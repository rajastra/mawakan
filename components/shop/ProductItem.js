import { View, Text, Pressable } from "react-native";
import React from "react";

const ProductItem = ({ title, price, description }) => {
  return (
    <View className="flex">
      <Text className="text-2xl">{title}</Text>
      <Text className="text-xl">${price}</Text>
      <Text className="text-lg">{description}</Text>
      <Pressable>
        <Text>I'm pressable!</Text>
      </Pressable>
    </View>
  );
};

export default ProductItem;
