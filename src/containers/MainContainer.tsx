import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from "config/firebase";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/modules/rootReducer';
import { setAuth, getUserThunk, getDiaryDataThunk } from 'store/modules';
import { DiaryList } from 'components';

export const MainContainer = () => {
  const navi = useNavigate();
  const dispatch = useDispatch();
  const date = useSelector((state: RootState) => state.date);
  const diary = useSelector((state: RootState) => state.diary);
  const userInfo = useSelector((state: RootState) => state.user);

  useEffect(() => {
    // 로그인 여부 확인
    auth.onAuthStateChanged((user) => {
      if(user) {
        const authData = {
          authenticated: true,
          uid: user.uid
        }

        if(userInfo.uid === '') {
          dispatch(getUserThunk(user.uid));
        }

        if(diary.length === 0) {
          dispatch(getDiaryDataThunk({uid: user.uid, date: date}));
        }

        dispatch(setAuth(authData));
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

  return (
    <DiaryList
      hanbleWrite1={() => navi(`/write/${date}/${'아침'}`)}
      hanbleWrite2={() => navi(`/write/${date}/${'점심'}`)}
      hanbleWrite3={() => navi(`/write/${date}/${'저녁'}`)}
      hanbleWrite4={() => navi(`/write/${date}/${'간식'}`)}
    />
  )
}
