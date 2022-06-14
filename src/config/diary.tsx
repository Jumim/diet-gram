import { db } from './firebase';
import { doc, getDoc, setDoc } from "firebase/firestore";

export const getUserData = async (uid: string) => {
  const diary = await getDoc(doc(db, 'DIARY', uid));

  if(diary.exists()) {
    return {state: true, data: diary.data()};
  } else {
    return {state: false, data: null};
  }
}

export const setUserData = (diary: any) => {
  return setDoc(doc(db, 'DIARY', diary.uid), diary.data);
}
