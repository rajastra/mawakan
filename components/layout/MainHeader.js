import { View, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const MainHeader = ({ onPressHandler }) => {
  return (
    <View className="flex-row justify-between px-3">
      <Text>MainHeader</Text>
      <AntDesign
        name="shoppingcart"
        size={24}
        color="black"
        onPress={onPressHandler}
      />
    </View>
  );
};

export default MainHeader;
