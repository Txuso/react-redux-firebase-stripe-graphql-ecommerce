import { call, put, takeEvery } from "redux-saga/effects";
import {
  convertCollectionsSnapshotToMap,
  firestore
} from "../../firebase/firebase.utils";
import { getCollectionsFailure, getCollectionsSuccess } from "./shop.actions";

import ShopActionTypes from "./shop.types";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");

    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(getCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(getCollectionsFailure(error.message));
  }

  //   collectionRef
  //     .get()
  //     .then(snapShot => {
  //       const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
  //       dispatch(getCollectionsSuccess(collectionsMap));
  //     })
  //     .catch(error => dispatch(getCollectionsFailure(error)));
}
export function* getCollectionsStart() {
  yield takeEvery(ShopActionTypes.GET_COLLECTIONS, fetchCollectionsAsync);
}
