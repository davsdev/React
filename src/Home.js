import React, { useState, useEffect } from 'react';
import './App.css';
import Main from './Main';
import Work from './Work';
import back from './back.svg';


function App() {

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
    <Main />
    <Work />
    {showBackToTop && (
        <img
          id="voltar-ao-topo"
          src={back}
          alt="Voltar ao Topo"
          onClick={scrollToTop}
        />
      )}
    </>
  );
}

export default App;
