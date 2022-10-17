import {Route, Routes} from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import QuizzPage from './components/Qpage/QuizzPage';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/qpage' element={<QuizzPage />}></Route>
     </Routes>
    </div>
  );
}

export default App;
