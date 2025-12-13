import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './common/Header';
import Footer from './common/Footer';
import Home from './pages/Home';
import Hero from './common/Hero';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<><Header /> <Hero /> <Home /> <Footer /></>} />
          <Route path="/About" element={<><Header /> <About /> <Footer /></>} />
          <Route path="/Contact" element={<><Header /> <Contact /> <Footer /></>} />
          <Route path="/Projects" element={<><Header /> <Projects /> <Footer /></>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
