import ShopActionsTypes from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  isLoading: false,
  errorMessage: undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionsTypes.GET_COLLECTIONS: {
      return {
        ...state,
        isLoading: true
      };
    }
    case ShopActionsTypes.GET_COLLECTIONS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        collections: action.payload.collectionsMap
      };
    }
    case ShopActionsTypes.GET_COLLECTIONS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload.error
      };
    }
    default:
      return state;
  }
};

export default shopReducer;
