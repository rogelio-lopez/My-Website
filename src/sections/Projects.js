import React, { useState } from 'react';
import Project from '../components/Project';
import './styles/Projects.css';

function Projects() {

  const projects = [
    'Project One',
    'Project Two',
    'Project Three'
  ]

  return (
    <section id="projects">
      
      <h2>Projects</h2>

      <div className="projects__list">
        {projects.map((proj, index) => {
          return(
            <Project title={proj} index={index}/>
          )
        })}
      </div>
    </section>
  )
}

export default Projects;
