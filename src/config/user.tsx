import { db } from './firebase';
import { doc, getDoc, setDoc } from "firebase/firestore";

interface userType {
  uid: string
  name: string
  calorie: number
}

export const getUserData = (uid: string) => {
  return getDoc(doc(db, 'user', uid));
}

export const setUserData = (user: userType) => {
  return setDoc(doc(db, 'user'), user);
}
