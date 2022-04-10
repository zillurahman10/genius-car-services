import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About'
import './App.css';
import Home from './Pages/Home/Home/Home';
import Header from ''

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
