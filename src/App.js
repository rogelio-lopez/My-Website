import React, { useState } from 'react';
import './App.css';
import Burger from './menu/Burger';
import Menu from './menu/Menu';


function App() {

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="app">

      <div className="app__menu">
        <Burger openMenu={openMenu} setOpenMenu={setOpenMenu}/>
        <Menu openMenu={openMenu} />
      </div>

      <div className="app__sections">
        {/* Header */}

        {/* About */}

        {/* Skills */}

        {/* Projects */}

        {/* Contact */}
      </div>

    </div>
  );
}

export default App;
