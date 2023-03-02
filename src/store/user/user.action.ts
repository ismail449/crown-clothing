import { SET_CURRENT_USER } from "./user.types";
import { User } from "firebase/auth";

export const setCurrentUser = (user: User | null) => {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
};
