import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from "config/firebase";
import { useDispatch, useSelector, batch } from 'react-redux';
import { RootState } from 'store/modules/rootReducer';
import { setAuth, getUserThunk, getDiaryDataThunk, deleteDiaryDataThunk } from 'store/modules';
import { DiaryList, CalorieInfo } from 'components';
import { DiaryItemProps } from 'types';

export const MainContainer = () => {
  const navi = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.user);
  const date = useSelector((state: RootState) => state.date);
  const diary = useSelector((state: RootState) => state.diary);

  useEffect(() => {
    // 로그인 여부 확인
    auth.onAuthStateChanged((user) => {
      if (user) {
        const authData = {
          authenticated: true,
          uid: user.uid
        }

        batch(() => {
          dispatch(setAuth(authData));
          dispatch(getUserThunk(user.uid));
          dispatch(getDiaryDataThunk({ uid: user.uid, date: date }));
        });
      } else {
        // 메인페이지 접근 시, 로그아웃 상태면 로그인 페이지로 이동
        const authData = {
          authenticated: false,
          uid: ''
        }

        dispatch(setAuth(authData));
        navi('/login');
      }
    });
    // eslint-disable-next-line
  }, []);

  const deleteDiaryItem = (sort: string) => {
    const diaryItem: DiaryItemProps = {
      uid: userData.uid,
      date: date,
      sort: sort,
    };

    dispatch(deleteDiaryDataThunk(diaryItem));
  }

  return (
    <>
      <CalorieInfo
        userData={userData}
        totalInfo={diary.calorieInfo}
      />
      <DiaryList
        diary={diary}
        navi={navi}
        deleteDiaryItem={deleteDiaryItem}
      />
    </>
  )
}
