import { all, call, put, takeLatest } from 'redux-saga/effects';
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import { getCollectionsFailure, getCollectionsSuccess } from './shop.actions';

import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
	try {
		const collectionRef = firestore.collection('collections');

		const snapshot = yield collectionRef.get();
		const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
		yield put(getCollectionsSuccess(collectionsMap));
	} catch (error) {
		yield put(getCollectionsFailure(error.message));
	}
}
export function* getCollectionsStart() {
	yield takeLatest(ShopActionTypes.GET_COLLECTIONS, fetchCollectionsAsync);
}

export function* shopSagas() {
	yield all([ call(getCollectionsStart) ]);
}
