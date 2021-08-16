import React from 'react';
import Project from '../components/Project';
import './styles/Projects.css';

function Projects() {

  const projects = [
    {
      name: 'IWPS Services',
      description: 'IWPS Services is an international wealth planning company.',
      tech: ['html', 'css', 'react'],
      link: 'www.google.com'
    },
    {
      name: 'Kim\'s Kuban',
      description: 'Kim\'s Kuban is a popular Key West restaurant.',
      tech: ['html', 'css', 'react'],
      link: 'https://kimskuban.com/'
    },
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
