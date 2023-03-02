import { User } from "firebase/auth";
import { SET_CURRENT_USER } from "./user.types";

const INITIAL_STATE: { currentUser: User | null } = { currentUser: null };

export const userReducer = (
  state = INITIAL_STATE,
  action: { type: string; payload: User | null }
) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};
