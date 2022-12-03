import { View, Text, FlatList, Pressable } from "react-native";
import React from "react";
import ProductItem from "./ProductItem";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "The first book I ever wrote",
  },
  {
    id: "p2",
    price: 5,
    title: "My Second Book",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

const Products = ({ onPressDetailHandler }) => {
  const renderItem = ({ item }) => (
    <ProductItem {...item} onPressDetailHandler={onPressDetailHandler} />
  );

  return (
    <View className="mt-3">
      <Text>Buy your favorite product</Text>
      <FlatList
        data={DUMMY_PRODUCTS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Products;
