import { View, Text, TextInput, Button, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { BASE_URL } from "../tools/url";

const Register = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const navigation = useNavigation();
  const submitHandler = async () => {
    // cek if data is empty
    if (username === "" || password === "" || email === "" || name === "")
      return;
    fetch(`${BASE_URL}/users/registrasi`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: username,
        password: password,
        email: email,
        name: name,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.log(error);
      });

  };

  return (
    <View className="flex-1 pt-5 justify-center items-center bg-gray-200">
      <Text className="text-2xl font-bold mb-5">Register</Text>
      <Text className="text-sm font-bold mb-10">
        Selamat datang di aplikasi makawan
      </Text>
      <View className="flex w-80 gap-4">
        <TextInput
          className="px-5 py-3 bg-white rounded-xl"
          placeholder="Name"
          onChangeText={setName}
          value={name}
        />
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
        <TextInput
          className="px-5 py-3 bg-white rounded-xl"
          placeholder="Username"
          onChangeText={setUsername}
          value={username}
        />
        <Pressable onPress={submitHandler}>
          <Text className="text-white bg-red-400 rounded-xl px-5 py-3 text-center">
            Register
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Register;
