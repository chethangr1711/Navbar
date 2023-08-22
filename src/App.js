import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact';
import Navbar from './pages/Navbar';
import Login from './pages/Login';
function App() {
  return (
    <>
    <nav>
      <div className='three'>
      <img src='https://cdn.logo.com/hotlink-ok/logo-social.png'></img>

      </div>
     <Navbar />
    </nav>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/login' element={<Login />}/>
    </Routes>
    </>
  );
}

export default App;
