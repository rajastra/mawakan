import { View, Text, FlatList } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../cart/CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const renderItem = ({ item }) => (
    <CartItem
      item={{
        id: item.id,
        title: item.name,
        quantity: item.quantity,
        total: item.totalPrice,
        price: item.price,
      }}
    />
  );

  return (
    <View>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Cart;
