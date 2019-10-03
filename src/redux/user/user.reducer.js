import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
    case UserActionTypes.GOOGLE_SING_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload.user,
        error: null
      };

    case UserActionTypes.GOOGLE_SING_IN_FAILURE:
    case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default userReducer;
