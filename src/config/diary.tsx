import { db } from './firebase';
import { doc, getDoc, setDoc, getDocs, collection, deleteDoc } from "firebase/firestore";
import { DiaryItemProps } from 'types';

export const getDiaryList = async (item: DiaryItemProps) => {
  const diary = await getDocs(collection(db, 'DIARY', item.uid));

  console.log(diary.empty);
}

export const getDiaryData = async (item: DiaryItemProps) => {
  const diary = await getDocs(collection(db, 'DIARY', item.uid, item.date));

  const newData = diary.docs.map((doc) => ({
    ...doc.data()
  }));

  if(!diary.empty) {
    return {state: true, data: newData}
  } else {
    return {state: false, data: newData}
  }
}

export const setDiaryData = (item: DiaryItemProps) => {
  return setDoc(doc(db, 'DIARY', item.uid, item.date, item.sort), item.data);
}

export const deleteDiaryData = (item: DiaryItemProps) => {
  return deleteDoc(doc(db, 'DIARY', item.uid, item.date, item.sort));
}
