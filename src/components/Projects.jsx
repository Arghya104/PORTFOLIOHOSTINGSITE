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
