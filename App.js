import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import "./styles.css";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-500">
      <Text>Halo kamu</Text>
      <StatusBar style="auto" />
    </View>
  );
}
