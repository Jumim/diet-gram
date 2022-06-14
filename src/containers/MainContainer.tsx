import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from "config/firebase";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/modules/rootReducer';
import { setAuth } from 'store/modules/auth';
import { getUserThunk } from 'store/modules/user';
import { DiaryList } from 'components';

export const MainContainer = () => {
  const navi = useNavigate();
  const dispatch = useDispatch();
  const date = useSelector((state: RootState) => state.date);

  useEffect(() => {
    // 로그인 여부 확인
    auth.onAuthStateChanged((user) => {
      if(user) {
        const authData = {
          authenticated: true,
          uid: user.uid
        }

        dispatch(getUserThunk(user.uid));
        dispatch(setAuth(authData));
      } else {
        // 메인페이지 접근 시, 로그아웃 상태면 로그인 페이지로 이동
        navi('/login');
      }
    });
  // eslint-disable-next-line
  }, []);

  return (
    <DiaryList
      hanbleWrite1={() => navi(`/write/${date}/${'breakfast'}`)}
      hanbleWrite2={() => navi(`/write/${date}/${'lunch'}`)}
      hanbleWrite3={() => navi(`/write/${date}/${'dinner'}`)}
      hanbleWrite4={() => navi(`/write/${date}/${'snack'}`)}
    />
  )
}
