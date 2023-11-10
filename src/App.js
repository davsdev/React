import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Artigos from './pages/Artigos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle('dark-mode'); 
  };

  return (
    <Router>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="pages/Home" element={<Home />} />
        <Route path="pages/Sobre" element={<Sobre />} />
        <Route path="pages/Artigos" element={<Artigos />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
