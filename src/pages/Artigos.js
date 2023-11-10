import React, { useState, useEffect } from 'react';
import '../App.css';
import manutencao from '../manutencao.png'
import back from '../back.svg';


function Artigos() {

    
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
      <div>
        <section id="artigos">
        <img src={manutencao} alt="avisomanutencao" />
        <p>Desculpe, esta página está em desenvolvimento.</p>
        </section>
        {showBackToTop && (
                <img
                  id="voltar-ao-topo"
                  src={back}
                  alt="Voltar ao Topo"
                  onClick={scrollToTop}
                />
              )}        
      </div>  
    );
  }
  
  export default Artigos;
  