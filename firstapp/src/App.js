import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Registration from './Registration';
import Login from './Login';
import Nav from './Nav';
import Users from './Users';

function App() {
  return (
    <>
      < BrowserRouter >
        <Routes>
          <Route  path='/' element={<Registration/>}/>
          <Route  path='/Login' element={<Login/>}/>
          <Route  path='/nav' element={<Nav/>}/>
          <Route  path='/users' element={<Users/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
