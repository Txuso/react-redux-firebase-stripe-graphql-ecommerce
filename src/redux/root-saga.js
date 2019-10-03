import { all, call } from "redux-saga/effects";

import { getCollectionsStart } from "./shop/shop.sagas";

export default function* rootSaga() {
  yield all([call(getCollectionsStart)]);
}
