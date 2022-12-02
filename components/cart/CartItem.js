import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { cartActions } from "../../store/cart-slice";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const { title, quantity, total, price, id } = item;
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(cartActions.addItemTocart({ id, title, price }));
  };
  return (
    <View className="flex flex-row p-3 space-x-3 bg-red-400 ">
      <View className="">
        <Image
          className="w-20 h-20 rounded-md "
          source={{
            uri: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80",
          }}
        />
      </View>
      <View className="flex flex-col ">
        <Text className="text-2xl">{title}</Text>
        <Text className="text-lg">RP {price}</Text>
        <View className="flex flex-row">
          <Text className="text-lg">Total : {total}</Text>
          <View className="flex flex-row bg-slate-400">
            <Pressable onPress={removeItemHandler}>
              <Text className="text-2xl px-1  bg-green-800">-</Text>
            </Pressable>
            <Text className="text-2xl px-1">{quantity}</Text>
            <Pressable onPress={addItemHandler}>
              <Text className="text-2xl px-1 bg-green-800">+</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
