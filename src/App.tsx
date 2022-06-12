import { Routes, Route } from "react-router-dom";
import { LoginPage } from 'components';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
