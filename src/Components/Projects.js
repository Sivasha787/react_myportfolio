import React, { useState } from 'react';import './Styles.css'
import './Styles.css'
import projectImg from "../assets/Rectangle.png"
import linkIcon from "../assets/link.svg"
import githubIcon from "../assets/github.svg"

// const projects = new Array(6).fill({
//   title: 'Project Title goes here',
//   description: 'Short description of the project, what it does, and technologies used.',
//   image: projectImg,
// });

const projectsData = [
  {
    title: 'Gradient Sky',
    description: 'A colorful gradient project using React.',
    image: projectImg,
    tech: ['HTML', 'JavaScript', 'React'],
    liveLink: '#',
    codeLink: '#'
  },
  {
    title: 'Fluid Art',
    description: 'A creative art project built with HTML and CSS.',
    image: projectImg,
    tech: ['HTML', 'SASS'],
    liveLink: '#',
    codeLink: '#'
  },
  {
    title: 'Abstract Vibes',
    description: 'An abstract design demo with React and SASS.',
    image: projectImg,
    tech: ['HTML', 'JavaScript', 'SASS', 'React'],
    liveLink: '#',
    codeLink: '#'
  },
  {
    title: 'Soft Sunset',
    description: 'A calming sunset view styled with SASS.',
    image: projectImg,
    tech: ['HTML', 'SASS'],
    liveLink: '#',
    codeLink: '#'
  },
  {
    title: 'Splash Motion',
    description: 'Fluid animated background using React.',
    image: projectImg,
    tech: ['HTML', 'JavaScript', 'React'],
    liveLink: '#',
    codeLink: '#'
  },
  {
    title: 'Golden Abstract',
    description: 'An artistic display using CSS and JS.',
    image: projectImg,
    tech: ['HTML', 'JavaScript', 'SASS'],
    liveLink: '#',
    codeLink: '#'
  }
];

const Projects = () => {

  const [selectedTech, setSelectedTech] = useState('All');
  const techStacks = ['All', ...new Set(projectsData.flatMap(p => p.tech))];

  const filteredProjects =
    selectedTech === 'All'
      ? projectsData
      : projectsData.filter(project => project.tech.includes(selectedTech));

  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <p>Things I've built so far</p>
      {/* <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href="#">View Project →</a>
            </div>
          </div>
        ))}
      </div> */}

      <div className="filter">
        {techStacks.map((tech) => (
          <button
            key={tech}
            onClick={() => setSelectedTech(tech)}
            className={selectedTech === tech ? "active" : ""}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>
                <strong>Tech stack:</strong> {project.tech.join(", ")}
              </p>
              <div className="links">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linkIcon}
                    alt="Live Preview"
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  Live Preview
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={githubIcon}
                    alt="GitHub"
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;