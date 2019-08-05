import "./cart-icon.component.scss";

import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { setCartVisibility } from "../../redux/cart/cart.actions";

const CartIcon = ({ setCartVisibility }) => {
  return (
    <div onClick={() => setCartVisibility()} className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  setCartVisibility: () => dispatch(setCartVisibility())
});
export default connect(
  null,
  mapDispatchToProps
)(CartIcon);
