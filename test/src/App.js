import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import New from './New';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='' element={<New/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
