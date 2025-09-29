import './Projects.css'

function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js. Features include user authentication, payment processing, and admin dashboard.",
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Portfolio Website",
      description: "A minimalist portfolio website showcasing projects and skills. Built with modern web technologies and optimized for performance.",
      liveDemo: "#",
      github: "#"
    }
  ]

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="projects-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
