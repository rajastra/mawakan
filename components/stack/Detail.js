import { View, Text } from "react-native";
import React from "react";

const Detail = ({ route }) => {
  const { item } = route.params;
  return (
    <View>
      <View>
        <Image
          className="w-full h-60"
          source={{
            uri: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80",
          }}
        />
        <View className="flex flex-row justify-between">
          <Text className="text-xl">{item.title}</Text>
          <Text className="text-xl text-right">RP {item.price}</Text>
        </View>
        <View className="mt-5 rounded-xl border-2 border-solid border-black">
          <Text className="px-3">Description product</Text>
          <Text className="px-3">{item.description}</Text>
        </View>
      </View>
    </View>
  );
};

export default Detail;
