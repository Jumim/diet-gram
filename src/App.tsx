import { Routes, Route } from "react-router-dom";
import { LoginPage, MainPage, JoinPage, WritePage, EditPage } from 'components';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/write/:sort' element={<WritePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/join' element={<JoinPage />} />
        <Route path='/edit/:sort' element={<EditPage />} />
      </Routes>
    </div>
  );
}

export default App;
