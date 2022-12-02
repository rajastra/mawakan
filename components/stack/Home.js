import { Pressable, Text, View } from "react-native";
import React, { useEffect } from "react";
import Products from "../shop/Products";
import { fetchCartData, sendCartData } from "../../store/cart-action";
import { useSelector, useDispatch } from "react-redux";
import { loginActions } from "../../store/login-slice";
import { AntDesign } from "@expo/vector-icons";
import { Searchbar } from 'react-native-paper';

let isInitial = true;

const Home = ({ navigation }) => {
  const [search, updateSearch] = React.useState("");
  const onChangeSearch = (query) => updateSearch(query);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  const onPressHandler = () => {
    navigation.navigate("Cart");
  };

  const onPressDetailHandler = (item) => {
    navigation.navigate("Detail", {
      item,
    });
  };
  const onLogoutHandler = () => {
    dispatch(loginActions.logout());
  };
  return (
    <View className="flex-1 bg-gray-200 pt-7">
      <View className="flex-row justify-between px-3">
        <Text>MainHeader</Text>
        <AntDesign
          name="shoppingcart"
          size={24}
          color="black"
          onPress={onPressHandler}
        />
      </View>
      <Searchbar
          className="mt-3 h-10"
          inputStyle={{ fontSize: 14 }}
          placeholder="Cari product anda..."
          onChangeText={onChangeSearch}
          value={search}
        />
      
      <Products onPressDetailHandler={onPressDetailHandler} />
      <Pressable onPress={onLogoutHandler}>
        <Text className="bg-red-500 p-5 mt-5 self-center">Logout</Text>
      </Pressable>
    </View>
  );
};

export default Home;
