import { CartActionTypes } from "./cart.types";

const INITIAL_STATE = {
  showCart: false,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.SET_CART_VISIBILITY:
      return {
        ...state,
        showCart: !state.showCart
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload.item]
      };
    default:
      return state;
  }
};

export default cartReducer;
