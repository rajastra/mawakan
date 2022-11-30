import { View, Text, Pressable } from "react-native";
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
    <View className="p-5">
      <Text>{title}</Text>
      <Text>{quantity}</Text>
      <Text>{total}</Text>
      <Text>{price}</Text>
      <Pressable>
        <Text onPress={removeItemHandler}>-</Text>
      </Pressable>
      <Pressable>
        <Text onPress={addItemHandler}>+</Text>
      </Pressable>
    </View>
  );
};

export default CartItem;
