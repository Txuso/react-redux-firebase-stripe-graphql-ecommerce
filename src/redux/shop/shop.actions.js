import ShopActionsTypes from "./shop.types";

export const updateCollections = collectionsMap => ({
  type: ShopActionsTypes.UPDATE_COLLECTIONS,
  payload: { collectionsMap: collectionsMap }
});
