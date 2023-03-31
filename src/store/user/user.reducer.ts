import { AnyAction } from "redux";
import {
  signInSuccess,
  signInFailed,
  signOutFailed,
  signUpFailed,
  signOutSuccess,
} from "./user.action";
import { UserData } from "../../utils/firebase/firebase.utils";

type initialStateType = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: initialStateType = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (
  state = INITIAL_STATE,
  action: AnyAction
): initialStateType => {
  if (signInSuccess.match(action)) {
    return { ...state, currentUser: action.payload };
  }

  if (
    signInFailed.match(action) ||
    signOutFailed.match(action) ||
    signUpFailed.match(action)
  ) {
    return { ...state, error: action.payload };
  }

  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null };
  }
  return state;
};
