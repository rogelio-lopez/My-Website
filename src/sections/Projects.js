import React from 'react';
import Project from '../components/Project';
import './styles/Projects.css';

function Projects() {

  const projects = [
    {
      name: 'Kim\'s Kuban',
      description: 'Kim\'s Kuban is a popular Key West restaurant.',
      tech: ['html', 'css', 'react'],
      link: 'https://kimskuban.com/'
    },
    {
      name: 'IWPS Services',
      description: 'IWPS Services is an international wealth planning company.',
      tech: ['html', 'css', 'react'],
      link: 'https://iwps-a87bf.web.app/'
    },
    {
      name: 'Amazon Clone',
      description: 'Amazon clone using React and Firebase authentication.',
      tech: ['react'],
      link: 'https://clone-92a6d.web.app/'
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
