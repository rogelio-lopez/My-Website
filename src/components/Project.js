/* eslint-disable no-unreachable */
import React from 'react';
import './styles/Project.css';

function Project({proj, index}) {

  const returnTechIcon = (techName) => {

    switch(techName){
      case 'html':
        return (<i className="fab fa-html5"></i>);
        break;
      case 'css':
        return (<i className="fab fa-css3-alt"></i>);
        break;
      case 'js':
        return (<i className="fab fa-js"></i>);
        break;
      case 'react':
        return (<i className="fab fa-react"></i>);
        break;
      default:
        console.log('Technology not found');
    }
    
  }

  return (
    <div className={(index % 2 === 0)? "project project-left" : "project project-right"}>
      <div className={(index % 2 === 0)? "project__content" : "project__content project__content-reverse"}>
        <div 
          className="project__image" 
          style={{backgroundImage: `url(${proj.img})`}}>
        </div>
        
        <div className="project__text">
          <h3>{proj.name}</h3>

          <p>{proj.description}</p>

          <ul>
            {proj.tech.map((tech) => {
              return(
                <li key={tech.name}>{
                  returnTechIcon(tech)
                }</li>
              )
            })}
          </ul>

          <a href={proj.link} target="_blank" rel="noreferrer">Check it out!</a>
        </div>
      </div>
      <div className="project__retroLines"><span></span></div>
    </div>
  )
}

export default Project;