import { View, Text, Image } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const Detail = ({ route, id, title, price }) => {
  const { item } = route.params;
  const dispatch = useDispatch({ item });
  const addToCartHandler = (item) => {
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
    <View className="flex">
      <Image
        className="w-full h-40 rounded-b-2xl"
        source={{
          uri: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80",
        }}
      />
      <View>
        <View className="flex flex-row justify-between mx-4 my-2">
          <Text className="text-2xl text-left ">{item.title}</Text>
          <Text className="text-2xl text-right">${item.price}</Text>
        </View>
        <View className="border rounded-xl p-3 m-1">
          <Text className="text-lg">Description Product</Text>
          <Text className="text-sm text-justify">{item.description}</Text>
        </View>
        <View className="border rounded-full p-3 bg-green-500 mx-4 my-14">
          <Text className="text-xl text-center" onPress={addToCartHandler}>
            ADD to CART
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Detail;
