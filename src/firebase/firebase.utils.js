import "firebase/firestore";
import "firebase/auth";

import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCdBRMxUtPnLCpiN21vT3VpLpj9sq1p4wo",
  authDomain: "ecommerce-react-dcb3f.firebaseapp.com",
  databaseURL: "https://ecommerce-react-dcb3f.firebaseio.com",
  projectId: "ecommerce-react-dcb3f",
  storageBucket: "",
  messagingSenderId: "544383671376",
  appId: "1:544383671376:web:8d1d15a4128abee9"
};

firebase.initializeApp(firebaseConfig);
export const createUserProfileDocument = async(userAuth, additionalData) => {
	if (!userAuth) {
		return;
	} else {
		const userRef = firestore.doc(`users/${userAuth.uid}`);

		const snapShot = await userRef.get();

		if (!snapShot.exists) {
			const { displayName, email } = userAuth;

			const createdAt = new Date();

			try {
				await userRef.set({
					displayName, email, createdAt,...additionalData
				})
			} catch(error) {
				console.error('error creating user', error.message);
				
			}
		}
		return userRef;
	}
}
export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// Always show google email accounts popup
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default signInWithGoogle;
