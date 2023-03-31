import {
  CHECK_USER_SESSION,
  EMAIL_SIGN_IN_START,
  GOOGLE_SIGN_IN_START,
  SIGN_IN_FAILED,
  SIGN_IN_SUCCESS,
  SIGN_OUT_FAILED,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_UP_FAILED,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
} from "./user.types";
import {
  withMatcher,
  Action,
  ActionWithPayload,
  createAction,
} from "../../utils/reducer/reducer.utils";
import { User } from "firebase/auth";
import { UserData } from "../../utils/firebase/firebase.utils";

export type SignInSuccess = ActionWithPayload<typeof SIGN_IN_SUCCESS, UserData>;
export type CheckUserSession = Action<typeof CHECK_USER_SESSION>;
export type SignOutSuccess = Action<typeof SIGN_OUT_SUCCESS>;
export type SignInFailed = ActionWithPayload<typeof SIGN_IN_FAILED, Error>;
export type SignOutFailed = ActionWithPayload<typeof SIGN_OUT_FAILED, Error>;
export type SignUpFailed = ActionWithPayload<typeof SIGN_UP_FAILED, Error>;

export const signInSuccess = withMatcher(
  (user: UserData & { id: string }): SignInSuccess => {
    return createAction(SIGN_IN_SUCCESS, user);
  }
);

export const signOutSuccess = withMatcher((): SignOutSuccess => {
  return createAction(SIGN_OUT_SUCCESS);
});

export const signInFailed = withMatcher((error: Error): SignInFailed => {
  return createAction(SIGN_IN_FAILED, error);
});

export const signOutFailed = withMatcher((error: Error): SignOutFailed => {
  return createAction(SIGN_OUT_FAILED, error);
});

export const signUpFailed = withMatcher((error: Error): SignUpFailed => {
  return createAction(SIGN_UP_FAILED, error);
});

export const checkUserSession = withMatcher((): CheckUserSession => {
  return createAction(CHECK_USER_SESSION);
});

export const googleSignInStart = () => {
  return createAction(GOOGLE_SIGN_IN_START);
};

export const emailSingInStart = (email: string, password: string) => {
  return createAction(EMAIL_SIGN_IN_START, { email, password });
};

export const signOutStart = () => {
  return createAction(SIGN_OUT_START);
};

export const signUpStart = (
  email: string,
  password: string,
  displayName: string
) => {
  return createAction(SIGN_UP_START, { email, password, displayName });
};

export const signUpSuccess = (user: User, additionalInfo: string) => {
  return createAction(SIGN_UP_SUCCESS, { user, additionalInfo });
};
