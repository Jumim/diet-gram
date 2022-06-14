import { Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import { RootState } from 'store/modules/rootReducer';

import { LoginPage, MainPage, JoinPage } from 'components';
import './App.scss';

function App() {
  const authData = useSelector((state: RootState) => state.auth);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage authenticated={authData.authenticated} />} />
        <Route path='/join' element={<JoinPage authenticated={authData.authenticated} />} />
      </Routes>
    </div>
  );
}

export default App;
