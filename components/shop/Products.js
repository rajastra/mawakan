import { View, Text, FlatList, Pressable } from "react-native";
import React from "react";
import ProductItem from "./ProductItem";
import { useEffect } from "react";
import { useState } from "react";

const Products = ({ onPressDetailHandler, query }) => {
  const [products, setProducts] = useState([]);
  const renderItem = ({ item }) => (
    <ProductItem {...item} onPressDetailHandler={onPressDetailHandler} />
  );

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    fetch("https://go-product-a501f-default-rtdb.firebaseio.com/products.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const loadedProducts =data.map(product => {
          return {
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price,
            img : product.images[0]
          }
        });
        setProducts(loadedProducts);
      }
      );
  }, []);

  return (
    <View className="mt-3">
      {/* <Text >Buy your favorite product</Text> */}
      {/* make styling text above*/}
      <Text className="text-2xl font-bold text-center mb-5">Buy your favorite product</Text>
      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        // make separator
        ItemSeparatorComponent={() => <View className="my-2" />}
      />
    </View>
  );
};

export default Products;
