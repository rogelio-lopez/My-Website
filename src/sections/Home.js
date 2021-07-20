import React, { useState } from 'react';
import './styles/Home.css';

import RetroLines from '../components/RetroLines';
import Burger from '../components/Burger';
import SideBar from '../components/SideBar';

import Resume from '../images/First_Resume.PDF';

function Home() {

  const [ toggleSidebar, setToggleSidebar ] = useState(false);

  return (
    <section id="home">

      {/* Burger (only for tablets and phones) */}
      <Burger toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />

      {/* Nav Links */}
      <nav className="home__nav">
        <ul className="home__navList">
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li className="home__resumeBtn">
            <a 
              href={Resume}
              target="_blank" 
              rel="noreferrer">
              <i className="far fa-file-alt"></i>Resume
            </a>
          </li>
        </ul>
      </nav>

      {/* SideBar (only for tablets and phones) */}
      <SideBar toggleSidebar={toggleSidebar}/>

      {/* Content */}
      <main className="home__content">
        <h1>Rogelio Lopez</h1>
        <p>Web Developer</p>
        <button>
          <span>
            <i className="fas fa-hand-point-right"></i>
            About Me
            <i className="fas fa-hand-point-left"></i>
          </span>
        </button>
      </main>

      {/* Social Links */}
      <aside className="home__links">
        <ul>
          <li>
            <a 
              href="https://github.com/rogelio-lopez"
              target="_blank" 
              rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a 
              href="https://www.linkedin.com/in/roge-lopez/"
              target="_blank" 
              rel="noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a 
              href="https://www.instagram.com/rojo_lopz/"
              target="_blank" 
              rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul> 
      </aside>

      {/* Retro Lines Decorations */}
      <RetroLines />

    </section>
  )
}

export default Home;
