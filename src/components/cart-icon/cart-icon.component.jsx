import "./cart-icon.component.scss";

import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
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

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
