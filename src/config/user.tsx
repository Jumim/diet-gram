import { db } from './firebase';
import { doc, getDoc, setDoc } from "firebase/firestore";

interface userType {
  uid: string
  name: string
  calorie: number
}

export const getUserData = async (uid: string) => {
  const user = await getDoc(doc(db, 'USER', uid));

  if(user.exists()) {
    return {state: true, data: user.data()};
  } else {
    return {state: false, data: null};
  }
}

export const setUserData = (user: userType) => {
  return setDoc(doc(db, 'USER', user.uid), user);
}
