import { Text, View } from "react-native";
import React, { useEffect } from "react";
import MainHeader from "../layout/MainHeader";
import Products from "../shop/Products";
import { fetchCartData, sendCartData } from "../../store/cart-action";
import { useSelector, useDispatch } from "react-redux";

let isInitial = true;

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  const onPressHandler = () => {
    navigation.navigate("Cart");
  };

  const onPressDetailHandler = (item) => {
    navigation.navigate("Detail", {
      item,
    });
  };
  return (
    <View className="flex-1 bg-gray-200 pt-6">
      <Text className="text-2xl text-center">Home</Text>
      <MainHeader onPressHandler={onPressHandler} />
      <Products onPressDetailHandler={onPressDetailHandler} />
    </View>
  );
};

export default Home;
