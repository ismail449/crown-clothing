import { FirebaseError } from "firebase/app";
import { AuthErrorCodes, User } from "firebase/auth";
import { takeLatest, put, all, call } from "typed-redux-saga/macro";
import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
  signOutUser,
  createAuthUserWithEmailAndPassword,
  AdditionalInfo,
} from "../../utils/firebase/firebase.utils";

import {
  signInSuccess,
  signInFailed,
  signOutSuccess,
  signUpSuccess,
  signUpFailed,
  signOutFailed,
} from "./user.action";
import {
  CHECK_USER_SESSION,
  EMAIL_SIGN_IN_START,
  GOOGLE_SIGN_IN_START,
  SIGN_OUT_START,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
} from "./user.types";

export function* getSnapshotFromUserAuth(
  userAuth: User,
  additionalInfo?: AdditionalInfo
) {
  try {
    const userSnapshot = yield* call(
      createUserDocumentFromAuth,
      userAuth,
      additionalInfo
    );
    if (userSnapshot) {
      yield* put(
        signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
      );
    }
  } catch (error) {
    if (error instanceof Error) {
      yield* put(signInFailed(error));
    }
  }
}

export function* isUserAuthenticated() {
  try {
    const authUser = yield* call(getCurrentUser);
    if (!authUser) {
      return;
    }
    yield* call(getSnapshotFromUserAuth, authUser);
  } catch (error) {
    if (error instanceof Error) {
      yield* put(signInFailed(error));
    }
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield* call(signInWithGooglePopup);
    yield* call(getSnapshotFromUserAuth, user);
  } catch (error) {
    if (error instanceof Error) {
      yield* put(signInFailed(error));
    }
  }
}

export function* signInWithEmail({
  payload,
}: {
  payload: { email: string; password: string };
  type: string;
}) {
  const { email, password } = payload;
  try {
    const { user } = yield* call(
      signInUserWithEmailAndPassword,
      email,
      password
    );
    yield* call(getSnapshotFromUserAuth, user);
  } catch (error) {
    if (error instanceof Error) {
      yield* put(signInFailed(error));
    }
  }
}

export function* signOut() {
  try {
    yield* call(signOutUser);
    yield* put(signOutSuccess());
  } catch (error) {
    if (error instanceof Error) yield* put(signOutFailed(error));
  }
}

export function* singInAfterSignUp({
  payload,
}: {
  payload: { user: User; additionalInfo: string };
  type: string;
}) {
  const { additionalInfo, user } = payload;
  yield* call(getSnapshotFromUserAuth, user, { displayName: additionalInfo });
}

export function* signUp({
  payload,
}: {
  payload: { email: string; password: string; displayName: string };
  type: string;
}) {
  const { email, password, displayName } = payload;
  try {
    const { user } = yield* call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield* put(signUpSuccess(user, displayName));
  } catch (error) {
    if (error instanceof FirebaseError) {
      if (error.code === AuthErrorCodes.EMAIL_EXISTS) {
        yield alert("Email already used please use another email");
      } else {
        yield alert("Could not sign up" + error.message);
      }
      yield* put(signUpFailed(error));
    }
  }
}

export function* onCheckUserSession() {
  yield* takeLatest(CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onGoogleSignInStart() {
  yield* takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onUserEmailSignInStart() {
  yield* takeLatest(EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignOutUser() {
  yield* takeLatest(SIGN_OUT_START, signOut);
}

export function* onSignUpUser() {
  yield* takeLatest(SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield* takeLatest(SIGN_UP_SUCCESS, singInAfterSignUp);
}
export function* userSaga() {
  yield* all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onUserEmailSignInStart),
    call(onSignOutUser),
    call(onSignUpUser),
    call(onSignUpSuccess),
  ]);
}
