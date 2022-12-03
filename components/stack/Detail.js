import { View, Text } from "react-native";
import React from "react";

const Detail = ({ route }) => {
  const { item } = route.params;
  return (
    <View>
      <Text className="text-xl">{item.title}</Text>
      <Text>Halo</Text>
    </View>
  );
};

export default Detail;
