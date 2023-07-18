import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Detail from './pages/Detail'
import {Routes, Router, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/detail/:idx' element={<Detail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
