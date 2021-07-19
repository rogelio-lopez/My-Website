import React from 'react';
import './styles/SideBar.css';

function SideBar({toggleSidebar}) {
  return (
    <nav className={(toggleSidebar)? "sidebar sidebar-active" : 'sidebar'}>

      <ul className="sidebar__nav">
        <li><a>Home</a></li>
        <li><a>Projects</a></li>
        <li><a>Contact</a></li>
      </ul>

      <a className='sidebar__resume'>Resume</a>

      <ul className="sidebar__links">
        <li><a><i className="fab fa-github"></i></a></li>
        <li><a><i className="fab fa-linkedin-in"></i></a></li>
        <li><a><i className="fab fa-instagram"></i></a></li>
      </ul> 
      
    </nav>
  )
}

export default SideBar;
