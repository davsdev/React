import React from 'react';
import './App.css';
import linkedin from './linkedin.png';
import github from './github-sign.png';

function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <div className="copyright">
          <p>&copy; 2023</p>
          <p>Davi da Silva</p>
        </div>
      </div>
      <div className="footer-right">
        <div className="social">
          <p>Social</p>
          <p>
            <a href="https://www.linkedin.com/in/davi-da-silva" target="_blank" className="social-icon">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://github.com/davsdev" target="_blank" className="social-icon">
              <img src={github} alt="GitHub" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
