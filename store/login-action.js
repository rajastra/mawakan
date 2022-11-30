import { loginActions } from "./login-slice";

export const loginHandler = (username, password) => {
  return async (dispatch) => {
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
      throw new Error("Sending cart data failed!");
    }
    const data = await response.json();
    dispatch(
      loginActions.login({
        token: data.token,
        isLogedIn: true,
      })
    );
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
