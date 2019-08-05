import "./collection-item.component.scss";

import CustomButton from "../custom-button/custom-button.component";
import React from "react";
import { addCartItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

const CollectionItem = ({ item, addCartItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name"> {name}</span>
        <span className="price">{price} </span>
      </div>
      <CustomButton onClick={() => addCartItem(item)} inverted>
        Add to Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addCartItem: item => dispatch(addCartItem(item))
});
export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
