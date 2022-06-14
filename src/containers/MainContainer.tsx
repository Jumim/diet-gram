import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from "config/firebase";
import { useDispatch } from 'react-redux';
import { setAuth } from 'store/modules/auth';

export const MainContainer = () => {
  const navi = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user) {
        const authData = {
          authenticated: true,
          uid: user.uid
        }

        dispatch(setAuth(authData));
        navi('/');
      } else {
        // 메인페이지 접근 시, 로그아웃 상태면 로그인 페이지로 이동
        navi('/login');
      }
    });
  }, []);

  return (
    <>
    </>
  )
}
