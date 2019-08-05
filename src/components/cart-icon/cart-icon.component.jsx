import "./cart-icon.component.scss";

import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { setCartVisibility } from "../../redux/cart/cart.actions";

const CartIcon = ({ setCartVisibility, itemCount }) => {
  return (
    <div onClick={() => setCartVisibility()} className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  setCartVisibility: () => dispatch(setCartVisibility())
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  )
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
