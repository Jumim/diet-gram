import { useEffect } from 'react';
import { auth } from "config/firebase";
import { useDispatch, useSelector, batch } from 'react-redux';
import { RootState } from 'store/modules/rootReducer';
import { setAuth, getUserThunk, getDiaryDataThunk } from 'store/modules';
import { Routes, Route, useNavigate } from "react-router-dom";
import { LoginPage, MainPage, JoinPage, WritePage, EditPage, NotFoundPage } from 'components';
import './App.scss';

function App() {
  const navi = useNavigate();
  const dispatch = useDispatch();
  const date = useSelector((state: RootState) => state.date);

  useEffect(() => {
    // 로그인 여부 확인
    auth.onAuthStateChanged((user) => {
      if (user) {
        const authData = {
          authenticated: true,
          uid: user.uid
        }

        batch(() => {
          dispatch(setAuth(authData))
          dispatch(getUserThunk(user.uid))
          dispatch(getDiaryDataThunk({ uid: user.uid, date: date }))
        });
      } else {
        // 메인페이지 접근 시, 로그아웃 상태면 로그인 페이지로 이동
        navi('/login');
      }
    });
    // eslint-disable-next-line
  }, [auth]);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/write/:sort' element={<WritePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/join' element={<JoinPage />} />
        <Route path='/edit/:sort' element={<EditPage />} />
        <Route path={'*'} element={<NotFoundPage />}/>
      </Routes>
    </div>
  );
}

export default App;
