import React from 'react';
import './styles/Footer.css';

function Footer() {
  return (
    <footer>

      <p>
        Made with <i className="fas fa-heart"></i> & <i className="fas fa-coffee"></i> by <a href="http://rogeliolopez.dev" target="_blank" rel="noreferrer">Rogelio Lopez</a>
      </p>

      <ul>
        <li>
          <a href="https://github.com/rogelio-lopez"
            target="_blank" 
            rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/roge-lopez/"
            target="_blank" 
            rel="noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/rojo_lopz/"
            target="_blank" 
            rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer;
