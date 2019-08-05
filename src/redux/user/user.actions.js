import { UserActionTypes } from "./user.types";

export const setCurrenUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: { user: user }
});
