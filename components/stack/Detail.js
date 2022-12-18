import { View, Text, Image } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const Detail = ({ route }) => {
  const { item } = route.params;
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    const { id, title, price, img } = item;
    dispatch(
      cartActions.addItemTocart({
        id,
        title,
        price,
        img,
      })
    );
  };
  return (
    <View className="flex">
      <Image
        className="w-full h-40 rounded-b-2xl"
        source={{
          uri: item.img,
        }}
      />
      <View>
        <View className="flex flex-row justify-between mx-4 my-2">
          <Text className="text-2xl text-left">{item.title}</Text>
          <Text className="font-bold text-2xl text-right">${item.price}</Text>
        </View>
        <View className="border rounded-xl p-3 m-1">
          <Text className="text-lg">Description Product</Text>
          <Text className="text-sm text-justify">{item.description}</Text>
        </View>
        <View className="border rounded-full p-3 bg-stone-900 mx-6 my-14">
          <Text
            className="text-white text-xl text-center"
            onPress={addToCartHandler}
          >
            Add To Cart
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Detail;
