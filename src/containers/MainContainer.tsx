import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from "config/firebase";
import { useDispatch, useSelector } from 'react-redux';
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

        dispatch(setAuth(authData));
        dispatch(getUserThunk(user.uid));
        dispatch(getDiaryDataThunk({ uid: user.uid, date: date }));
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

  useEffect(() => {
    if (userData.uid !== '') {
      dispatch(getDiaryDataThunk({ uid: userData.uid, date: date }));
    }
  }, [date]);

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
        breakfastData={diary.breakfast}
        lunchData={diary.lunch}
        dinnerData={diary.dinner}
        snackData={diary.snack}
        hanbleWrite1={() => navi(`/write/breakfast`)}
        hanbleWrite2={() => navi(`/write/lunch`)}
        hanbleWrite3={() => navi(`/write/dinner`)}
        hanbleWrite4={() => navi(`/write/snack`)}
        deleteDiaryItem={deleteDiaryItem}
      />
    </>
  )
}
