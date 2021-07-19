import React, { useState } from 'react';
import RetroLines from '../components/RetroLines';
import Burger from '../components/Burger';
import './styles/Home.css';
import SideBar from '../components/SideBar';

function Home() {

  const [ toggleSidebar, setToggleSidebar ] = useState(false);

  return (
    <section id="home">

      {/* Burger (only for tablets and phones) */}
      <Burger toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />

      {/* Nav Links */}
      <nav className="home__nav">
        <ul className="home__navList">
          <li><a>Projects</a></li>
          <li><a>Contact</a></li>
          <li className="home__resumeBtn">
            <a>
              <i className="far fa-file-alt"></i>Resume
            </a>
          </li>
        </ul>
      </nav>

      {/* SideBar (only for tablets and phones) */}
      <SideBar toggleSidebar={toggleSidebar}/>

      <main className="home__content">
        <h1>Rogelio Lopez</h1>
        <p>Web Developer</p>
        <button>About me</button>
      </main>

      {/* Social Links */}
      <aside className="home__links">
        <ul>
          <li><a><i className="fab fa-github"></i></a></li>
          <li><a><i className="fab fa-linkedin-in"></i></a></li>
          <li><a><i className="fab fa-instagram"></i></a></li>
        </ul> 
      </aside>

      {/* Retro Lines Decorations */}
      <RetroLines />

    </section>
  )
}

export default Home;
