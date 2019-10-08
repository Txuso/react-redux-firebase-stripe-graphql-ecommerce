import { CartActionTypes } from './cart.types';

export const setCartVisibility = () => ({
	type: CartActionTypes.SET_CART_VISIBILITY
});

export const addCartItem = (item) => ({
	type: CartActionTypes.ADD_ITEM,
	payload: { item: item }
});

export const clearItemFromCart = (item) => ({
	type: CartActionTypes.CLEAR_ITEM_FROM_CART,
	payload: { item: item }
});

export const removeItem = (item) => ({
	type: CartActionTypes.REMOVE_ITEM,
	payload: { item: item }
});

export const clearCart = () => ({
	type: CartActionTypes.CLEAR_CART
});
