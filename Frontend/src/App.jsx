import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './home/nav';
import Home from './home/home';
import Service from './home/event';
import About from './home/about';
import Footer from './home/footer';
import Indoor from './eventmana.jsx/indoor';
import Outdoor from './eventmana.jsx/outdoor';
import Registration from './login/Registration';
import Customer from './login/customer';
import Todo from './admin_access/todo';
import './App.css';
import Indoorsee from './eventmana.jsx/Seemore/indoorsee';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn');
    if (loginStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <>
      <BrowserRouter>
        <Nav isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          <Route path='/home' element={isLoggedIn ? <Home /> : <Customer setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/service' element={isLoggedIn ? <Service /> : <Customer setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/about' element={isLoggedIn ? <About /> : <Customer setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/foot' element={isLoggedIn ? <Footer /> : <Customer setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/home/service' element={isLoggedIn ? <Indoor /> : <Customer setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/home/service1' element={isLoggedIn ? <Outdoor /> : <Customer setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/' element={<Customer setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/Registration' element={<Registration />} />
          <Route path='/admin' element={isLoggedIn ? <Todo /> : <Customer setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/home/service/seemore' element={<Indoorsee />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
