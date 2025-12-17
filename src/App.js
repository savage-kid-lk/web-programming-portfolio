import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './common/Header';
import Footer from './common/Footer';
import Home from './pages/Home';
import Hero from './common/Hero';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

// internal scroll utility
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header /> 
        
        <Routes>
          <Route path="/" element={<><Hero /> <Home /></>} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;