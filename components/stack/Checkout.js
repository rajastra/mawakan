import { View, Text, Image, Pressable } from "react-native";
import React from "react";

const Checkout = ({ route }) => {
  const { totalAmount } = route.params;
  return (
    <View className="flex-1 justify-center items-center gap-5">
      <Text className="text-xl text-center">
        Checkout Pembayaran dengan dana dengan total harga : 
      </Text>
      <Text className="text-xl text-center">${totalAmount}</Text>
      <Image source={require("../img/qr-dana.jpeg")} />
      <Pressable>
        <Text className="bg-green-300 px-5 py-3 mt-5 self-center">Confirm</Text>
      </Pressable>
    </View>
  );
};

export default Checkout;
