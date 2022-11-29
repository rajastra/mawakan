import { Text, View } from "react-native";
import React from "react";
import MainHeader from "../layout/MainHeader";
import Products from "../shop/Products";

const Home = ({ navigation }) => {
  const onPressHandler = () => {
    navigation.navigate("Cart");
  };
  return (
    <View className="flex-1 bg-gray-200 pt-5">
      <Text className="text-2xl text-center">Home</Text>
      <MainHeader onPressHandler={onPressHandler} />
      <Products />
    </View>
  );
};

export default Home;
