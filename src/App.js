import React, { useState } from 'react';
import './App.css';
import PopupBox from './components/PopupBox';
import Home from './sections/Home';


function App() {

  const [ togglePopupBox, setTogglePopupBox ] = useState(false);

  return (
    <div className="app">

      {/* Page Sections */}
      <main>

        {/* About Me / Contact Email Pop-up */}
        <div className={(togglePopupBox)? "popupBox__bg" : ''}></div>
        <PopupBox 
          togglePopupBox={togglePopupBox}
          setTogglePopupBox={setTogglePopupBox} />

        {/* Home */}
        <Home 
          togglePopupBox={togglePopupBox}
          setTogglePopupBox={setTogglePopupBox} />
        
        <div id="projects"><h1>Hello</h1></div>


      </main>

    </div>
  );
}

export default App;
