import {
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
  ViewComponent,
} from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ProductItem = ({
  id,
  title,
  price,
  description,
  onPressDetailHandler,
}) => {
  const dispatch = useDispatch();
  const detailHandler = () => {
    const item = {
      id,
      title,
      price,
      description,
    };
    onPressDetailHandler(item);
  };

  const addToCartHandler = () => {
    // and then send Http request
    // fetch('firebase-url', { method: 'POST', body: JSON.stringify(newCart) })
    dispatch(
      cartActions.addItemTocart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <View className="flex bg-red-200">
      <Image
        className="w-full h-20 mt-3"
        source={{
          uri: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80",
        }}
      />
      <View className="flex flex-row justify-between mx-5">
        <Text className="text-2xl text-left ">{title}</Text>
        <Text className="text-2xl text-right">${price}</Text>
      </View>
      <View className="items-end mr-5 my-3">
        <MaterialCommunityIcons
          name="basket-plus"
          size={30}
          color="green"
          onPress={addToCartHandler}
        />
      </View>

      <Pressable onPress={detailHandler}>
        <Text className="text-center text-xl mx-5 p-2 mb-2 rounded-2xl bg-green-800">
          Details
        </Text>
      </Pressable>
    </View>
  );
};

export default ProductItem;
