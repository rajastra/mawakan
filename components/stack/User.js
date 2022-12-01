import { View, Text, Pressable } from "react-native";
import React from "react";

const User = ({navigation}) => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-xl mb-10">Selamat datang di aplikasi makawan</Text>
      <View className="flex flex-row gap-2">
        <Pressable
         // onpress navigate to login
            onPress={() => navigation.navigate("Login")}
        >
          <Text className="text-black bg-white px-5 py-3 text-center w-40">
            Login
          </Text>
        </Pressable>
        <Pressable
         // onpress navigate to register
            onPress={() => navigation.navigate("Register")}
        >
          <Text className="text-black bg-white px-5 py-3 text-center w-40">
            Register
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default User;
