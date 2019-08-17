import {
  convertCollectionsSnapshotToMap,
  firestore
} from "../../firebase/firebase.utils";

import ShopActionsTypes from "./shop.types";

export const getCollections = () => ({
  type: ShopActionsTypes.GET_COLLECTIONS
});

export const getCollectionsAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");
    dispatch(getCollections());

    collectionRef
      .get()
      .then(snapShot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
        dispatch(getCollectionsSuccess(collectionsMap));
      })
      .catch(error => dispatch(getCollectionsFailure(error)));
  };
};

export const getCollectionsSuccess = collectionsMap => ({
  type: ShopActionsTypes.GET_COLLECTIONS_SUCCESS,
  payload: { collectionsMap: collectionsMap }
});

export const getCollectionsFailure = error => ({
  type: ShopActionsTypes.GET_COLLECTIONS_FAILURE,
  payload: { error: error }
});
