import { View, Text, TextInput, Button, Pressable } from "react-native";
import React from "react";

const Register = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const submitHandler = async () => {
    fetch("http://192.168.1.23:8000/api/v1/users/registrasi", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: "rajass",
        password: "12345678910",
        email: "rajsa@gmail.com",
        name: "raja lah",
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View className="flex-1 pt-5 justify-center items-center bg-gray-200">
      <Text className="text-2xl font-bold mb-5">Register</Text>
      <Text className="text-sm font-bold mb-10">Selamat datang di aplikasi makawan</Text>
      <View className="flex w-80 gap-4">
      <TextInput className="px-5 py-3 bg-white rounded-xl" placeholder="Name" onChangeText={setName} value={name} />
      <TextInput className="px-5 py-3 bg-white rounded-xl" placeholder="Email" onChangeText={setEmail} value={email} />
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
  
      <Pressable>
        <Text className="text-white bg-red-400 rounded-xl px-5 py-3 text-center">Register</Text>
      </Pressable>
      </View>
    </View>
  );
};

export default Register;
