import { User } from "firebase/auth";
import {
  SIGN_IN_FAILED,
  SIGN_IN_SUCCESS,
  SIGN_OUT_FAILED,
  SIGN_OUT_SUCCESS,
  SIGN_UP_FAILED,
  SIGN_UP_SUCCESS,
} from "./user.types";

type initialStateType = {
  currentUser: User | null;
  isLoading: boolean;
  error: Error | null;
};

const INITIAL_STATE: initialStateType = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (
  state = INITIAL_STATE,
  action: { type: string; payload: any }
) => {
  const { type, payload } = action;
  switch (type) {
    case SIGN_IN_SUCCESS:
      return { ...state, currentUser: payload };
    case SIGN_IN_FAILED:
    case SIGN_OUT_FAILED:
    case SIGN_UP_FAILED:
      return { ...state, error: payload };
    case SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null };
    default:
      return state;
  }
};
