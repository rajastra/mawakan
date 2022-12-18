import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { BASE_URL } from "../tools/url";
import { useNavigation } from "@react-navigation/native";

const Checkout = ({ route }) => {
  const { totalAmount, item } = route.params;
  const token = useSelector((state) => state.token.token);
  // print token type data

  const checkoutItem = async () => {
    const navigation = useNavigation();
    const sendItems = item.map((i) => {
      const result = {
        description: i.name,
        itemCode: i.id,
        quantity: i.quantity,
        price: i.price,
      };
      return result;
    });
    // const order = async () => {
    //   const response = await fetch(
    //     "http://192.168.91.1:8000/api/v1/transacation/orders",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //         // authorization: `Bearer ${token}`,
    //         "Authorization": `${token}`,
    //       },
    //       body: JSON.stringify({
    //         customerName: "Raja Saputera",
    //         items: sendItems,
    //       }),
    //     }
    //   );
    //   if (!response.ok) {
    //     throw new Error("Something went wrong!");
    //   }
    //   const resData = await response.json();
    //   return resData;
    // };
    // try {
    //   const data = await order();
    //   console.log(data)
    // } catch (error) {
    //   console.log(error);
    // }
    fetch(`${BASE_URL}/transacation/orders`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        customerName: "Raja Saputera",
        items: sendItems,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        navigation.navigate("Home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View className="flex-1 justify-center items-center gap-5">
      <Text className="text-xl text-center">
        Checkout Pembayaran dengan dana dengan total harga :
      </Text>
      <Text className="text-xl text-center">${totalAmount}</Text>
      <Image source={require("../img/qr-dana.jpeg")} />
      <Pressable onPress={checkoutItem}>
        <Text className="text-center text-xl font-semibold mx-5 p-4 mb-3 mt-3 rounded-2xl bg-green-600 text-white">
          Confirm
        </Text>
      </Pressable>
    </View>
  );
};

export default Checkout;
