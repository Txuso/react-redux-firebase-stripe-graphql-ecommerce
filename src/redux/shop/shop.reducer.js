import SHOP_DATA from "../../pages/shop/shop.data";
import ShopActionsTypes from "./shop.types";

const INITIAL_STATE = {
  collections: SHOP_DATA
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionsTypes.UPDATE_COLLECTIONS: {
      return {
        ...state,
        collections: action.payload.collectionsMap
      };
    }
    default:
      return state;
  }
};

export default shopReducer;
