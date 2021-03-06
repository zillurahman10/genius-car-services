import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About'
import './App.css';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header'
import Footer from './Pages/Shared/Footer/Footer'
import Services from './Pages/Home/Services/Services';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
