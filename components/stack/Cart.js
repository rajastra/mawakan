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
    <View>
      <ScrollView>
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          // make flat list spacing each item
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        />
        {/* make button with pressable and styling*/}
        <Pressable onPress={checkoutHandler}>
          <Text className="font-arial text-xl">
            Total Amount : $. {totalAmount}
          </Text>
          <Text className="border-2 rounded-xl self-center">Checkout</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default Cart;
