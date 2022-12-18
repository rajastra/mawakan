import {
  View,
  Text,
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../cart/CartItem";
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <CartItem
      item={{
        id: item.id,
        title: item.name,
        quantity: item.quantity,
        total: item.totalPrice,
        price: item.price,
        img: item.img,
      }}
    />
  );

  const checkoutHandler = () => {
    navigation.navigate("Checkout", { totalAmount, item: cartItems });
  };

  return (
    <FlatList
      data={cartItems}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      // make flat list spacing each item
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      ListFooterComponent={
        <SafeAreaView>
          <Pressable onPress={checkoutHandler}>
            <Text className="font-arial text-xl mx-2 mt-7">
              Total Amount : $. {totalAmount}
            </Text>
            <Text className="text-center text-xl font-semibold mx-5 p-2 mb-3 mt-3 rounded-2xl bg-green-700 text-white">
              Checkout
            </Text>
          </Pressable>
        </SafeAreaView>
      }
    />
  );
};

export default Cart;
