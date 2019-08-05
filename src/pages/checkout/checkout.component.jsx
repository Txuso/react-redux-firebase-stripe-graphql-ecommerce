import "./checkout.component.scss";

import {
  selectCartItems,
  selectCartTotalPrice
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const CheckoutPage = ({ cartItems, totalPrice }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem cartItem={cartItem} />
    ))}

    <div className="total-price">TOTAL: €{totalPrice}</div>
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotalPrice
});
export default connect(mapStateToProps)(CheckoutPage);
