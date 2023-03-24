import {
  CHECK_USER_SESSION,
  EMAIL_SIGN_IN_START,
  GOOGLE_SIGN_IN_START,
  SET_CURRENT_USER,
  SIGN_IN_FAILED,
  SIGN_IN_SUCCESS,
  SIGN_OUT_FAILED,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_UP_FAILED,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
} from "./user.types";
import { User } from "firebase/auth";

export const setCurrentUser = (user: User | null) => {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
};

export const checkUserSession = () => {
  return {
    type: CHECK_USER_SESSION,
  };
};

export const googleSignInStart = () => {
  return {
    type: GOOGLE_SIGN_IN_START,
  };
};

export const emailSingInStart = (email: string, password: string) => {
  return {
    type: EMAIL_SIGN_IN_START,
    payload: { email, password },
  };
};

export const signInSuccess = (user: {}) => {
  return {
    type: SIGN_IN_SUCCESS,
    payload: user,
  };
};

export const signInFailed = (error: Error) => {
  return {
    type: SIGN_IN_FAILED,
    payload: error,
  };
};

export const signOutStart = () => {
  return {
    type: SIGN_OUT_START,
  };
};

export const signOutSuccess = () => {
  return {
    type: SIGN_OUT_SUCCESS,
  };
};

export const signOutFailed = (error: Error) => {
  return {
    type: SIGN_OUT_FAILED,
    payload: error,
  };
};

export const signUpStart = (
  email: string,
  password: string,
  displayName: string
) => {
  return {
    type: SIGN_UP_START,
    payload: { email, password, displayName },
  };
};

export const signUpSuccess = (user: User | null, additionalInfo: string) => {
  return {
    type: SIGN_UP_SUCCESS,
    payload: { user, additionalInfo },
  };
};

export const signUpFailed = (error: Error) => {
  return {
    type: SIGN_UP_FAILED,
    payload: error,
  };
};
