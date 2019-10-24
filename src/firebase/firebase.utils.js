import firebase, { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCysA5rzWbiPgtJDmm0BIe_pA3Ybo4utB8',
  authDomain: 'char-clothing.firebaseapp.com',
  databaseURL: 'https://char-clothing.firebaseio.com',
  projectId: 'char-clothing',
  storageBucket: 'char-clothing.appspot.com',
  messagingSenderId: '5338180925',
  appId: '1:5338180925:web:d7e11f2e08e2ebc4f0e954',
  measurementId: 'G-10LW2X1PEE',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
