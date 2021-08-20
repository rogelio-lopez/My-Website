import React, { useState } from 'react';
import './styles/Home.css';

import RetroLines from '../components/RetroLines';
import Burger from '../components/Burger';
import SideBar from '../components/SideBar';

import Resume from '../images/Rogelio_Lopez_Resume.pdf';

function Home({togglePopupBox, setTogglePopupBox}) {

  const [ toggleSidebar, setToggleSidebar ] = useState(false);

  const handleOpenPopup = () =>{
    setTogglePopupBox(!togglePopupBox);
  }

  return (
    <section id="home">

      {/* Retro Lines Decorations */}
      <RetroLines />

      {/* Burger (only for tablets and phones) */}
      <Burger toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />

      {/* SideBar (only for tablets and phones) */}
      <SideBar 
        toggleSidebar={toggleSidebar}
        setToggleSidebar={setToggleSidebar}
        togglePopupBox={togglePopupBox}
        setTogglePopupBox={setTogglePopupBox}/>

      {/* Nav Links */}
      <nav className="home__nav">
        <ul>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact" onClick={handleOpenPopup}>Contact</a></li>
          <li>
            <a href={Resume}
               target="_blank" 
               rel="noreferrer">
              Resume
            </a>
          </li>
        </ul>
      </nav>

      {/* Social Links */}
      <aside className="home__socials">
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
      </aside>

      {/* Content */}
      <main className="home__content">
        <h1>Rogelio <span>Lopez</span></h1>
        <p>Web Developer</p>
        <button onClick={handleOpenPopup}>
          <i className="fas fa-hand-point-right"></i>
          About Me
          <i className="fas fa-hand-point-left"></i>
        </button>
      </main>

    </section>
  )
}

export default Home;
