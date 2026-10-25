function Projects() {
  const projects = [
    {
      number: '01',
      title: 'Personal Portfolio Website',
      technologies: 'React, CSS, Vite',
      description:
        'High-performance React portfolio achieving 100 Lighthouse performance & 92 SEO score. Built with custom CSS, responsive design & SEO optimization.',
      github: 'https://github.com/archana-s-dev/archana-portfolio',
      live: '#',
    },
    {
      number: '02',
      title: 'Task Manager App',
      technologies: 'React, Node.js, MongoDB',
      description:
        'A simple task management application to organize tasks and track progress.',
      github: 'https://github.com/archana-s-dev',
      live: '#',
    },
    {
      number: '03',
      title: 'Weather App',
      technologies: 'React, API',
      description:
        'A weather forecasting application that displays real-time weather information.',
      github: 'https://github.com/archana-s-dev',
      live: '#',
    },
  ];

  return (
    <section className="section projects" id="projects">
      <div className="projects-header">
        <div>
          <span className="section-number">02</span>
          <h2>Projects</h2>
          <p className="projects-description">
            Here are a few projects I've worked on.
            <br />
            Each one helped me learn, grow and explore
            new technologies.
          </p>
        </div>

        <a href="https://github.com/archana-s-dev" target="_blank" rel="noopener noreferrer" className="text-link">
          View All Projects <span>→</span>
        </a>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <span className="project-number">{project.number}</span>
            <h3>{project.title}</h3>
            <p className="project-tech">{project.technologies}</p>
            <p className="project-description">
              {project.description}
            </p>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-link">
              View Project <span>→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
