import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { cartActions } from "../../store/cart-slice";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const { title, quantity, total, price, id, img } = item;
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };
  console.log(img)

  const addItemHandler = () => {
    dispatch(cartActions.addItemTocart({ id, title, price, img}));
  };
  return (
    <View className="flex flex-row p-3 space-x-3 bg-red-400 ">
      <View className="">
        <Image
          className="w-20 h-20 rounded-md "
          source={{
            uri: img,
          }}
        />
      </View>
      <View className="flex flex-col ">
        <Text className="text-2xl">{title}</Text>
        <Text className="text-lg">${price}</Text>
        <View className="flex flex-row">
          <Text className="text-lg">Total : ${total}</Text>
          <View className="absolute mx-40 flex flex-row">
            <Pressable
              className="bg-emerald-600 border-2 rounded-lg"
              onPress={removeItemHandler}
            >
              <Text className="text-xl px-0.5"> - </Text>
            </Pressable>
            <Text className="text-xl px-1">{quantity}</Text>
            <Pressable
              className="bg-emerald-600 border-2 rounded-lg"
              onPress={addItemHandler}
            >
              <Text className="text-xl"> + </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
