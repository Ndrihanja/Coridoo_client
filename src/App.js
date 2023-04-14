import { Routes, Route } from 'react-router-dom';
import Mainpage from './pages/mainpage/Mainpage';
import Login from './pages/login/Login.jsx'
import Register from './pages/register/Register.jsx'
import RegisterEns from './pages/register-ens/RegisterEns.jsx'

import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/coridoo/*' element={<Mainpage />} />
        <Route exact path='/' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/register-ens' element={<RegisterEns />} />
      </Routes>
    </div>
  );
}

export default App;
