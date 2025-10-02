import './Projects.css'
import spaceImage from '../assets/images/5532919.jpg'

function Projects() {
  const projects = [
    {
      title: "Admin Dashboard (Aditya Birla Hindalco)",
      description: "Developed a forklift simulator game integrated with a full-stack admin dashboard using React, Node.js, Express, and MySQL for real-time monitoring and analytics. Built secure REST APIs and implemented authentication for performance analysis and decision-making.",
      liveDemo: "#",
      github: "#"
    },
    {
      title: "User Page (Aditya Birla Hindalco)",
      description: "Developed a responsive and interactive User Page using React to allow participants to access and engage with the forklift simulation system. Integrated authentication and session management with backend APIs for user data tracking and performance logging.",
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Full-Stack Web Applications",
      description: "Developed and maintained 5+ full-stack web applications using Java, React.js, Node.js, and MySQL. Built scalable REST APIs with Spring Boot and Node.js, reducing API latency by 25% and increasing user engagement by 20%.",
      liveDemo: "#",
      github: "#"
    }
  ]

  return (
    <section id="projects" className="section projects-section">
      <div className="projects-background">
        <img src={spaceImage} alt="Space background" className="projects-bg-image" />
        <div className="projects-overlay"></div>
      </div>
      <div className="container">
        <h2 className="projects-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-link" title="Live Demo">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15,3 21,3 21,9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" title="GitHub">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
