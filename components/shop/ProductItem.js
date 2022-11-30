import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

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
      <Text className="text-2xl">{title}</Text>
      <Text className="text-xl">${price}</Text>
      <Text className="text-lg">{description}</Text>
      <TouchableOpacity onPress={detailHandler}>
        <Text className="text-lg">View Details</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={addToCartHandler}>
        <Text className="text-lg">Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;
