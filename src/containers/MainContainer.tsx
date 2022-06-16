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

  const totalInfo = () => {
    var totalCalorie = 0;
    var totalCarbs = 0;
    var totalProtain = 0;
    var totalFat = 0;

    console.log('칼로리 정보');  // 3번씩 렌더링 되는거 수정

    Object.values(diary).forEach((data: any) => {
      totalCalorie += (data.totalCal === undefined ? 0 : data.totalCal)
      totalCarbs += (data.totalCarbs === undefined ? 0 : data.totalCarbs)
      totalProtain += (data.totalProtain === undefined ? 0 : data.totalProtain)
      totalFat += (data.totalFat === undefined ? 0 : data.totalFat)
    });

    const totalData = [
      {
        id: '탄수화물(g)',
        value: totalCarbs
      },
      {
        id: '단백질(g)',
        value: totalProtain
      },
      {
        id: '지방(g)',
        value: totalFat
      }
    ];

    return [totalCalorie, totalData];
  }

  return (
    <>
      <CalorieInfo
        userData={userData}
        totalInfo={totalInfo()}
      />
      <DiaryList
        diary={diary}
        navi={navi}
        deleteDiaryItem={deleteDiaryItem}
      />
    </>
  )
}
