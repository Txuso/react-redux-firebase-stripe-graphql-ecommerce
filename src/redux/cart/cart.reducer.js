import { addItemToCart, removeItemFromCart } from "./cart.utils";

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
        cartItems: addItemToCart(state.cartItems, action.payload.item)
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.item.id
        )
      };

    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload.item)
      };
    default:
      return state;
  }
};

export default cartReducer;
