import React from 'react';
import Project from '../components/Project';
import './styles/Projects.css';
import KimsPage from '../images/KimsPage.png';
import IwpsPage from '../images/IwpsPage.png';
import AmazonClone from '../images/AmazonClone.png';

function Projects() {

  const projects = [
    {
      name: 'Kim\'s Kuban',
      description: 'Kim\'s Kuban is a popular Key West restaurant.',
      tech: ['html', 'css', 'react'],
      link: 'https://kimskuban.com/',
      img: KimsPage,
    },
    {
      name: 'IWPS Services',
      description: 'IWPS Services is an international wealth planning company.',
      tech: ['html', 'css', 'react'],
      link: 'https://iwps-services.web.app',
      img: IwpsPage,
    },
    {
      name: 'Amazon Clone',
      description: 'Amazon clone using React and Firebase authentication.',
      tech: ['html', 'css', 'react'],
      link: 'https://clone-92a6d.web.app/',
      img: AmazonClone,
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
