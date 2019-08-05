import { CartActionTypes } from "./cart.types";

const INITIAL_STATE = {
  showCart: false
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.SET_CART_VISIBILITY:
      return {
        ...state,
        showCart: !state.showCart
      };
    default:
      return state;
  }
};

export default cartReducer;
