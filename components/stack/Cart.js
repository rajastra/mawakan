import { View, Text, FlatList, Pressable, Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../cart/CartItem";
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const navigation = useNavigation();
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
        // make flat list spacing each item
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
      {/* make button with pressable and styling*/}
      <Pressable onPress={() => navigation.navigate("Checkout")}>
        <Text className="bg-green-300 px-5 py-3 mt-5 self-center">Checkout</Text>
      </Pressable>
    </View>
  );
};

export default Cart;
