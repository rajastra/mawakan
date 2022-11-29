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
    description: "The second book I ever wrote",
  },
];

const Products = () => {
  const renderItem = ({ item }) => <ProductItem {...item} />;

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
