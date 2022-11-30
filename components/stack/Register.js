import { View, Text, TextInput, Button } from "react-native";
import React from "react";

const Register = () => {
  // user":"rajastra",
  //  "password":"raja12345",
  //  "email": "rajasaputera@gmail.com",
  //  "name":"raja saputera"
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
    <View className="flex-1 pt-5">
      <TextInput
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
      />
      <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
      <TextInput placeholder="Name" onChangeText={setName} value={name} />
      <Button title="Register" onPress={submitHandler} />
    </View>
  );
};

export default Register;
