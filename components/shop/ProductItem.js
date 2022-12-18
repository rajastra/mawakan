import {
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  ScrollView,
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
  img,
  onPressDetailHandler,
}) => {
  const dispatch = useDispatch();
  const detailHandler = () => {
    const item = {
      id,
      title,
      price,
      description,
      img,
    };
    onPressDetailHandler(item);
  };

  const addToCartHandler = () => {
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
    <View className="flex rounded-xl bg-red-400 my-1 mx-1">
      <Image
        className="w-full h-24 rounded-t-xl"
        source={{
          uri: img,
        }}
      />
      <View className="flex flex-row justify-between mx-5">
        <Text className="text-xl text-left ">{title}</Text>
        <Text className="text-xl text-right">${price}</Text>
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
        <Text className="text-center text-xl font-semibold mx-5 p-2 mb-2 rounded-2xl bg-green-700">
          Details
        </Text>
      </Pressable>
    </View>
  );
};

export default ProductItem;
