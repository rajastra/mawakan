import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/stack/Home";
import Cart from "./components/stack/Cart";
import Detail from "./components/stack/Detail";
import Register from "./components/stack/Register";
import Login from "./components/stack/Login";
import User from "./components/stack/User";
import { useSelector } from "react-redux";
import Checkout from "./components/stack/Checkout";

const Stack = createNativeStackNavigator();
const Base = () => {
  const token = useSelector((state) => state.token.token);
  const isLogedIn = token ? true : false;
  console.log(token);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogedIn ? (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="Checkout" component={Checkout} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="User"
              component={User}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default Base;
