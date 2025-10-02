import './Hero.css'
import spaceVideo from '../assets/videos/0_Wormhole_Space_3840x2160.mp4'

function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadCV = () => {
    // You can replace this with your actual CV download link
    const link = document.createElement('a')
    link.href = '#' // Replace with your CV file path
    link.download = 'Arghya_Ghosh_CV.pdf'
    link.click()
  }

  return (
    <section className="hero">
      <video 
        className="hero-video" 
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src={spaceVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Animated geometric shapes */}
      <div className="geometric-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
      </div>

      <div className="hero-overlay"></div>
      
      <div className="container">
        <div className="hero-content">
          {/* Left side - Text content */}
          <div className="hero-text">
            <div className="hero-greeting">
              <span className="greeting-text">Hello, I'm</span>
            </div>
            <h1 className="hero-name">
              <span className="name-first">Arghya</span>
              <span className="name-last">Ghosh</span>
            </h1>
            <div className="hero-role-container">
              <span className="role-prefix">I'm a</span>
              <div className="role-rotating">
                <span className="role-text">Full Stack Developer</span>
                <span className="role-text">Java Developer</span>
                <span className="role-text">React.js Developer</span>
                <span className="role-text">Node.js Developer</span>
              </div>
            </div>
            <p className="hero-description">
              Passionate about creating innovative web solutions and bringing ideas to life through code. 
              I specialize in building scalable applications with modern technologies.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={scrollToProjects}>
                <span className="btn-text">View My Work</span>
                <span className="btn-icon">→</span>
              </button>
              <button className="btn-secondary" onClick={downloadCV}>
                <span className="btn-text">Download CV</span>
                <span className="btn-icon">↓</span>
              </button>
            </div>
          </div>

          {/* Right side - Visual elements */}
          <div className="hero-visual">
            <div className="floating-card">
              <div className="card-content">
                <div className="card-icon">💻</div>
                <h3>5+ Projects</h3>
                <p>Completed</p>
              </div>
            </div>
            <div className="floating-card">
              <div className="card-content">
                <div className="card-icon">⚡</div>
                <h3>2+ Years</h3>
                <p>Experience</p>
              </div>
            </div>
            <div className="floating-card">
              <div className="card-content">
                <div className="card-icon">🚀</div>
                <h3>Always</h3>
                <p>Learning</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span className="scroll-text">Scroll Down</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
