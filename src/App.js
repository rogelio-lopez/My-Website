import React, { useState } from 'react';
import './App.css';
import PopupBox from './components/PopupBox';
import Footer from './sections/Footer';
import Home from './sections/Home';
import Projects from './sections/Projects';


function App() {

  const [ togglePopupBox, setTogglePopupBox ] = useState(false);

  return (
    <div className="app">

      <div className={(togglePopupBox)? "popupBox__bg" : ''}></div>
      <PopupBox 
        togglePopupBox={togglePopupBox}
        setTogglePopupBox={setTogglePopupBox} />

      {/* Home */}
      <Home 
        togglePopupBox={togglePopupBox}
        setTogglePopupBox={setTogglePopupBox} />
      
      {/* Projects */}
      <Projects />

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
