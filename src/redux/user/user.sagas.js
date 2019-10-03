import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  auth,
  createUserProfileDocument,
  googleProvider
} from "../../firebase/firebase.utils";
import { googleSignInFailure, googleSignInSuccess } from "./user.actions";

import UserActionTypes from "./user.types";

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(
      googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SING_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
