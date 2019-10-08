import UserActionTypes from './user.types';

export const setCurrenUser = (user) => ({
	type: UserActionTypes.SET_CURRENT_USER,
	payload: { user: user }
});

export const googleSignInStart = () => ({
	type: UserActionTypes.GOOGLE_SING_IN_START
});

export const signInSuccess = (user) => ({
	type: UserActionTypes.SING_IN_SUCCESS,
	payload: { user: user }
});

export const signInFailure = (error) => ({
	type: UserActionTypes.SING_IN_FAILURE,
	payload: { error: error }
});

export const emailSignInStart = (email, password) => ({
	type: UserActionTypes.EMAIL_SIGN_IN_START,
	payload: { email: email, password: password }
});

export const checkUserSession = () => ({
	type: UserActionTypes.CHECK_USER_SESSION
});
