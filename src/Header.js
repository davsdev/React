import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './logo.png';
import darkmode from './darkmode.svg';
import { slide as Menu } from 'react-burger-menu';
import { Link, useLocation } from 'react-router-dom';

function Header({ isDarkMode, toggleDarkMode }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    const handleLocationChange = () => {
      // Atualiza o estado isSmallScreen ao mudar a localização
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('popstate', handleLocationChange);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, [location]);

  return (
    <header className={isDarkMode ? 'dark-mode' : ''}>
      <div id="logo" className={isSmallScreen ? 'small-screen' : ''}>
        <Link to="/">
          <img src={logo} alt="logotipo" />
        </Link>
      </div>

      {isSmallScreen ? (
        <Menu right isOpen={false}>
          <Link to="/" className="menu-item" onClick={() => setIsSmallScreen(false)}>
            Home
          </Link>
          <Link to="/pages/Sobre" className="menu-item" onClick={() => setIsSmallScreen(false)}>
            Sobre mim
          </Link>
          <Link to="/pages/Artigos" className="menu-item" onClick={() => setIsSmallScreen(false)}>
            Artigos
          </Link>
        </Menu>
      ) : (
        <nav className="menu-pc">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pages/Sobre">Sobre mim</Link>
            </li>
            <li>
            <Link to="/pages/Artigos">Artigos</Link>
            </li>
          </ul>
        </nav>
      )}

      <img
        id="dark"
        src={darkmode}
        alt="Dark Mode"
        onClick={toggleDarkMode}
        style={{ width: '40px', height: '40px' }}
      />
    </header>
  );
}

export default Header;
