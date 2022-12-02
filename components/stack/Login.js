import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../store/login-slice";

const Login = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  const submitHandler = async () => {
    dispatch(loginActions.login({ email, password }));    
  };
  return (
    <View className="flex-1 pt-5 justify-center items-center bg-gray-200">
      <Text className="text-2xl font-bold mb-5">Login</Text>
      <Text className="text-sm font-bold mb-10">
        Silahkan login menggunakan akun yang anda sudah buat
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
        <Pressable onPress={submitHandler}>
          <Text className="text-white bg-red-400 rounded-xl px-5 py-3 text-center">
            Login
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
