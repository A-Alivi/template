import React from 'react';


const projectsData = [
  {
    title: 'Project 1',
    description: 'Description of Project 1',
    imageUrl: 'project1.jpg',
    link: 'https://example.com/project1',
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2',
    imageUrl: 'project2.jpg',
    link: 'https://example.com/project2',
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project-list">
        {projectsData.map((project, index) => (
          <Projects
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
