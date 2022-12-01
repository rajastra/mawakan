import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";

const Login = () => {
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  return (
    <View className="flex-1 pt-5 justify-center items-center bg-neutral-200">
      <Text className="text-2xl font-bold mb-5">Login</Text>
      <Text className="text-sm font-bold mb-10">
        Silahkan login menggunakan akun yang anda
      </Text>
      <View className="flex w-80 gap-4">
        <TextInput
          className="px-5 py-3 bg-white rounded-xl"
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          className="px-5 py-3 bg-white rounded-xl"
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
        />
        <Pressable>
          <Text className="text-white bg-red-400 rounded-xl px-5 py-3 text-center">
            Login
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
