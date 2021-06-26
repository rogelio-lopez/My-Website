import React, { useState } from 'react';
import './App.css';
import SideBar from './components/SideBar';


function App() {

  const [toggleSideBar, setToggleSideBar] = useState(false);

  return (
    <div className="app">

      <div className="email">
        <div className="email-container">
          <a href="mailto:rogejlopez@gmail.com">rogejlopez@gmail.com</a>
        </div>
      </div>

      <SideBar 
        toggleSideBar={toggleSideBar} 
        setToggleSideBar={setToggleSideBar} 
      />


      {/* https://brittanychiang.com/ */}


      {/* On togglesidebar:
        - translateZ for 3d effect 
        - blurr (add top absolute layer to main)
      */}
      <main className="app-main">
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
      </main>

    </div>
  );
}

export default App;
