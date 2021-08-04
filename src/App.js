import React, { useState } from 'react';
import './App.css';
import PopupBox from './components/PopupBox';
import Home from './sections/Home';


function App() {

  const [ toggleInfoBox, setToggleInfoBox ] = useState(false);

  return (
    <div className="app">

      {/* Page Sections */}
      <main>

        <PopupBox 
          toggleInfoBox={toggleInfoBox}
          setToggleInfoBox={setToggleInfoBox}
        />

        {/* Home */}
        <Home 
          toggleInfoBox={toggleInfoBox}
          setToggleInfoBox={setToggleInfoBox}
        />
        
        <div id="projects"><h1>Hello</h1></div>


      </main>

    </div>
  );
}

export default App;
