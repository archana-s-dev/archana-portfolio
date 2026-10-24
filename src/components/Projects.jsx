function Projects() {
  const projects = [
    {
      number: '01',
      title: 'Personal Portfolio Website',
      technologies: 'React, CSS',
      description:
        'High-performance React portfolio achieving 100 Lighthouse performance & 92 SEO score. Built with custom CSS, responsive design & SEO optimization.',
    },
    {
      number: '02',
      title: 'Task Manager App',
      technologies: 'React, Node.js, MongoDB',
      description:
        'A simple task management application to organize tasks and track progress.',
    },
    {
      number: '03',
      title: 'Weather App',
      technologies: 'React, API',
      description:
        'A weather forecasting application that displays real-time weather information.',
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

        <a href="#projects" className="text-link">
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
            <a href="#contact" className="text-link">
              View Project <span>→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
