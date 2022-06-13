import { useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setAuth, RootState } from 'store';
import { auth } from "./config/firebase";
import { LoginPage, MainPage, JoinPage } from 'components';
import './App.scss';

function App() {
  const navi = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user) {
        dispatch(setAuth(true));
        navi('/');
      } else {
        dispatch(setAuth(false));
        navi('/login');
      }
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage authenticated={user.authenticated} />} />
        <Route path='/join' element={<JoinPage authenticated={user.authenticated} />} />
      </Routes>
    </div>
  );
}

export default App;
