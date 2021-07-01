import React, { useState } from 'react';
import './App.css';
import SideBar from './components/SideBar';


function App() {

  const [toggleSideBar, setToggleSideBar] = useState(false);

  return (
    <div className="app">

      <aside id="email">
        <div className="email-container">
          <a href="mailto:rogejlopez@gmail.com">rogejlopez@gmail.com</a>
        </div>
      </aside>

      <SideBar 
        toggleSideBar={toggleSideBar} 
        setToggleSideBar={setToggleSideBar} 
      />


      <main className={(toggleSideBar)? 'main-sidebar-active' : ''}>

        {/* Head */}
        <section id="head">
          <div className="head-container">
              <h3>Hi, I'm</h3>
              <h1>Rogelio Lopez.</h1>
              <p>I am a Key West based Web Developer who loves to create experiences on the Internet, Real Life, and everything in between.</p>
          </div>

          <div className="head-bgImg">
              <div className="head-img"></div>
          </div>

          <div className="head-gradient"></div>
        </section>

        {/* About */}
        <section id="about">
          <div className="about-container">
            <h3>About Me</h3>
            <div className="about-content">
              <p>Mauris quis mauris lorem. Cras fringilla velit nec dui laoreet congue. Aenean in lacinia odio. Nullam dapibus vestibulum ligula, a condimentum enim dignissim cursus. Proin odio quam, commodo eu dui ac, auctor pharetra erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="about-languages">

            </div>
          </div>
        </section>

        {/* 
          Projects 
          - mixture of  
            - https://brittanychiang.com/
            - http://riccardozanutta.com/
        */}


        {/* Contact */}
      </main>

    </div>
  );
}

export default App;
