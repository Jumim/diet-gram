import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setUser, RootState } from 'store';
import { auth } from "./config/firebase";
import { LoginPage, MainPage, JoinPage } from 'components';
import './App.scss';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user) {
        console.log('로그인 ok');
        dispatch(setUser(true));
      } else {
        dispatch(setUser(false));
      }
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage authenticated={user.authenticated} />} />
        <Route path='/login' element={<LoginPage authenticated={user.authenticated} />} />
        <Route path='/join' element={<JoinPage authenticated={user.authenticated} />} />
      </Routes>
    </div>
  );
}

export default App;
