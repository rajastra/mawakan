import { loginActions } from "./login-slice";
import { uiActions } from "./ui-slice";


export const loginHandler = (username, password) => {
  return async (dispatch) => {
    const login = async () => {
      const response = await fetch("http://localhost:8000/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      if (!response.ok) {
        throw new Error("Login failed!");
      }
      const data = await response.json();
      return data;
    };
    try {
      const loginData = await login();
      dispatch(
        loginActions.login({
          token: loginData.token,
          user: loginData.user,
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
