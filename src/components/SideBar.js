import React from 'react';
import './styles/SideBar.css';
import Resume from '../images/Rogelio_Lopez_Resume.pdf';

function SideBar({toggleSidebar, setToggleSidebar, togglePopupBox, setTogglePopupBox}) {

  const closeSideBar = () =>{
    setToggleSidebar(!toggleSidebar);
  }
  const handleContactButton = () => {
    closeSideBar();

    setTimeout(() => {
      setTogglePopupBox(!togglePopupBox);
    }, 460)
  }

  return (
    <nav className={(toggleSidebar)? "sidebar sidebar-active" : 'sidebar'}>

      <ul className="sidebar__nav">
        <li><a href="#home" onClick={closeSideBar}>Home</a></li>
        <li><a href="#projects" onClick={closeSideBar}>Projects</a></li>
        <li><p onClick={handleContactButton}>Contact</p></li>
      </ul>

      <a className='sidebar__resume'
         href={Resume}
         target="_blank" 
         rel="noreferrer">Resume</a>

      <ul className="sidebar__links">
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
      </ul> 
      
    </nav>
  )
}

export default SideBar;
