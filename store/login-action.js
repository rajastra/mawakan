import { loginActions } from "./login-slice";
import { uiActions } from "./ui-slice";


export const loginHandler = (email, password) => {
  return async (dispatch) => {
    const login = async () => {
      const response = await fetch("http://192.168.1.21:8000/api/v1/users/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: password,
          email: email,
        }),
      })
      if (!response.ok) {
        throw new Error("Login failed!");
      }
      const data = await response.json();
      return data;
    };
    try {
      const loginData = await login();
      console.log("hallo", loginData);
      dispatch(
        loginActions.login({
          token: loginData.token,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Login failed!",
        })
      );
    }
  };
};

export const logoutHandler = () => {
  return async (dispatch) => {
    dispatch(
      loginActions.logout({
        token: "",
        isLogedIn: false,
      })
    );
  };
};
