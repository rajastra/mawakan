import { View, Text, Pressable, Image, ScrollView } from "react-native";
import React from "react";
import { cartActions } from "../../store/cart-slice";
import { useDispatch } from "react-redux";
import { AntDesign } from "@expo/vector-icons";

const CartItem = ({ item }) => {
  const { title, quantity, total, price, id, img } = item;
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };
  console.log(img);

  const addItemHandler = () => {
    dispatch(cartActions.addItemTocart({ id, title, price, img }));
  };
  return (
    <ScrollView>
      <View className="flex flex-row mx-1 p-3 space-x-3 bg-gray-800 rounded-xl">
        <View className="">
          <Image
            className="w-20 h-24 rounded-md"
            source={{
              uri: img,
            }}
          />
        </View>
        <View className="flex flex-col ">
          <Text className="text-2xl text-white">{title}</Text>
          <Text className="text-lg text-white">${price}</Text>
          <View className="flex flex-row">
            <Text className="text-lg text-white">Total : ${total}</Text>
            <View className="absolute  mx-40 flex flex-row">
              <Pressable onPress={removeItemHandler}>
                <AntDesign name="minussquareo" size={24} color="white" />
              </Pressable>
              <Text className="font-bold text-xl px-1 text-white">
                {quantity}
              </Text>
              <Pressable onPress={addItemHandler}>
                <AntDesign name="plussquareo" size={24} color="white" />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CartItem;
