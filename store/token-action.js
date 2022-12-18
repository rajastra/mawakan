import { tokenActions } from "./token-slice";

export const addToken = (token) => {
  return (dispatch) => {
    dispatch(tokenActions.setToken({token: token}));
  };
};
