import React from 'react';
import Project from '../components/Project';
import './styles/Projects.css';

function Projects() {

  const projects = [
    {
      name: 'Project One',
      description: 'This is a short description of the project one',
      tech: ['html', 'css', 'js'],
      link: 'www.google.com'
    },
    {
      name: 'Project two',
      description: 'This is a short description of the project two',
      tech: ['html', 'css', 'js'],
      link: 'www.google.com'
    },
    {
      name: 'Project three',
      description: 'This is a short description of the project three',
      tech: ['html', 'css', 'js'],
      link: 'https://www.google.com'
    }
  ]

  return (
    <section id="projects">
      
      <h2>Projects</h2>

      <div className="projects__list">
        {projects.map((proj, index) => {
          return(
            <Project proj={proj} index={index} key={proj.name}/>
          )
        })}
      </div>
    </section>
  )
}

export default Projects;
