import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  NextOrObserver,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";
import { Category } from "../../store/category/category.reducer";

const firebaseConfig = {
  apiKey: "AIzaSyARdUo4Hh875aoVqWV9ORSGo-2HQtA-CDw",
  authDomain: "crown-clothing-f653a.firebaseapp.com",
  projectId: "crown-clothing-f653a",
  storageBucket: "crown-clothing-f653a.appspot.com",
  messagingSenderId: "169538242629",
  appId: "1:169538242629:web:d5f243a5888b0f3ec7fb2c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const db = getFirestore();

export const addCollectionsAndDocuments = async (
  collectionKey: string,
  objectsToAdd: Category[]
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLocaleLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const snapShot = await getDocs(q);

  return snapShot.docs.map((docSnapShot) => docSnapShot.data());
};

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInfo = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      if (error instanceof Error) {
        console.log("Error creating the user: ", error.message);
      }
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  return await signInWithEmailAndPassword(auth, email, password);
};
export const signOutUser = async () => {
  return await signOut(auth);
};

export const onAuthStateChangeListener = (callBack: NextOrObserver<User>) => {
  return onAuthStateChanged(auth, callBack);
};
