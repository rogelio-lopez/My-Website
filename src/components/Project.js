import React from 'react';
import './styles/Project.css';

function Project({title, index}) {
  return (
    <div className={(index % 2 === 0)? "project project-left" : "project project-right"}>
      <div className={(index % 2 === 0)? "project__content" : "project__content project__content-reverse"}>
        <div className="project__image"></div>
        
        <div className="project__text">
          <h3>{title}</h3>

          <p>This is a short description of the project and what it does.</p>

          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
          </ul>

          <a href="#">Check it out!</a>
        </div>
      </div>
      <div className="project__retroLines"><span></span></div>
    </div>
  )
}

export default Project;