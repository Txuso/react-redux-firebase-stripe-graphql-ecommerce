import UserActionTypes from "./user.types";

export const setCurrenUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: { user: user }
});

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SING_IN_START
});

export const googleSignInSuccess = user => ({
  type: UserActionTypes.GOOGLE_SING_IN_SUCCESS,
  payload: { user: user }
});

export const googleSignInFailure = error => ({
  type: UserActionTypes.GOOGLE_SING_IN_FAILURE,
  payload: { error: error }
});

export const emailSignInStart = emailAndPassword => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: { emailAndPassword: emailAndPassword }
});

export const emailSignInSuccess = user => ({
  type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
  payload: { user: user }
});

export const emailSignInFailure = error => ({
  type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
  payload: { error: error }
});
