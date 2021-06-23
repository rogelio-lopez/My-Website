import React, { useState } from 'react';
import './App.css';


function App() {

  const [menuClick, setmenuClick] = useState(false);

  const toggleMenu = () => setmenuClick(!menuClick); 

  return (
    <div className="app">

      <div className="rightSide">
        <div className="email">
          <a>rogejlopez@gmail.com</a>
        </div>
      </div>

      <div className={(menuClick)? 'leftSide menu-active' : 'leftSide'}>
        
        <i className="menu-burger fas fa-bars" onClick={toggleMenu}></i>

        {/* On active burger */}
        <div className="nav">
          <p>Navigation</p>
          <ul className="nav-list">
            <li><a>About</a></li>
            <li><a>Projects</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        {/* On active burger */}
        <div className="resume">
          <a>resume 📙</a>
        </div>

        <div className="socials-container">
          <p>Socials</p>
          <div className="socials-list">
            <ul className="socials">
              <li><a><i className="fab fa-github"></i></a></li>
              <li><a><i className="fab fa-linkedin-in"></i></a></li>
              <li><a><i className="fab fa-codepen"></i></a></li>
              <li><a><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>

      </div>


      {/* https://brittanychiang.com/ */}


      <div className="app__main">
        {/* 
          Header 
          - Hello message
          - Quick introduction
            - what i do 
            - what i like 
        */}

        {/* 
          About 
          - about myself (paragraph- short and to the point)
          - Skills (add the ones most used- frontend)
        */}

        {/* 
          Projects 
          - mixture of  
            - https://brittanychiang.com/
            - http://riccardozanutta.com/
        */}


        {/* Contact */}
      </div>

    </div>
  );
}

export default App;
