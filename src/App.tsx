import { Routes, Route } from "react-router-dom";
import { LoginPage, MainPage, JoinPage } from 'components';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/join' element={<JoinPage />} />
      </Routes>
    </div>
  );
}

export default App;
