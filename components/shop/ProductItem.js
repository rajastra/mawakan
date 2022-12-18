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
    <View className="flex rounded-2xl shadow-2xl bg-sky-900 drop-shadow-2xl my-1 mx-2 ">
      <Image
        className="w-full h-48 rounded-t-xl"
        source={{
          uri: img,
        }}
      />
      <View className="flex flex-row justify-between mx-5 my-1">
        <Text className="font-bold text-xl text-left text-white">{title}</Text>
        <Text className="font-bold text-xl text-right text-white">
          ${price}
        </Text>
      </View>
      <View className="items-end mr-5 my-2">
        <MaterialCommunityIcons
          name="basket-plus"
          size={30}
          color="lightgreen"
          onPress={addToCartHandler}
        />
      </View>
      <Text
        numberOfLines={2}
        className="my-2 mx-5 text-sm text-black/60 text-white"
      >
        {description}
      </Text>

      <Pressable onPress={detailHandler}>
        <Text className="text-center text-xl font-semibold mx-5 p-2 mb-2 rounded-2xl bg-gray-800 text-slate-50">
          Details
        </Text>
      </Pressable>
    </View>
  );
};

export default ProductItem;
