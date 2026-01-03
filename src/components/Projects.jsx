import React, { useState } from 'react';
import { projects } from '../data/projects';
import './Projects.css';

const ProjectCard = ({ project, isExpanded, onToggle }) => {
  return (
    <article className={`project-card ${project.featured ? 'featured' : ''}`}>
      <div className="project-header" onClick={onToggle}>
        <div className="project-title-row">
          <h3 className="project-title">{project.title}</h3>
          <button className="project-toggle" aria-label="Toggle details">
            {isExpanded ? '−' : '+'}
          </button>
        </div>
        <p className="project-problem">{project.problem}</p>
        <div className="project-stack">
          {project.stack.map((tech, index) => (
            <span key={index} className="project-tech">{tech}</span>
          ))}
        </div>
      </div>

      {isExpanded && (
        <div className="project-details">
          <div className="project-section">
            <h4>What I Handled</h4>
            <ul>
              {project.myRole.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="project-section">
            <h4>Challenges</h4>
            <ul>
              {project.challenges.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="project-section project-result">
            <h4>Result</h4>
            <p>{project.result}</p>
          </div>
        </div>
      )}
    </article>
  );
};

const Projects = () => {
  const [expandedId, setExpandedId] = useState(1);
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll 
    ? projects 
    : projects.filter(p => p.featured);

  const handleToggle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Real work, real problems, real results. Click any project to see 
          what I actually did - not just what technologies were involved.
        </p>

        <div className="projects-grid">
          {displayedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isExpanded={expandedId === project.id}
              onToggle={() => handleToggle(project.id)}
            />
          ))}
        </div>

        {!showAll && projects.length > displayedProjects.length && (
          <button 
            className="btn btn-secondary projects-more"
            onClick={() => setShowAll(true)}
          >
            Show More Projects
          </button>
        )}
      </div>
    </section>
  );
};

export default Projects;
