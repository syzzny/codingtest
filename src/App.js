import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Detail from './pages/Detail'
import {Routes, Router, Route} from 'react-router-dom'
import Create from './pages/Create';
import Modify from './pages/Modify';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/detail/:idx' element={<Detail/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/modify/:idx' element={<Modify/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
