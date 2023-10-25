
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './Header';
import Addtask from './Addtask';
import Task from './Task';
import Map from './Map';

function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>

     <Route path='/' element={<Header/>}/>
     <Route path='/addtask' element={<Addtask/>}/>
     <Route path='/task' element={<Task/>}/>
     <Route path='/map' element={<Map/>}/>

    </Routes> 
    </BrowserRouter>
    </>
  );
}

export default App;
