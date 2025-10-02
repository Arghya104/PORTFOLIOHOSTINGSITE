import './Hero.css'
import spaceVideo from '../assets/videos/0_Wormhole_Space_3840x2160.mp4'
import { useEffect } from 'react'

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

  // Animated counter effect
  useEffect(() => {
    const animateCounters = () => {
      const counters = document.querySelectorAll('.counter')
      
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'))
        const duration = 2000 // 2 seconds
        const increment = target / (duration / 16) // 60fps
        let current = 0
        
        const updateCounter = () => {
          if (current < target) {
            current += increment
            counter.textContent = Math.floor(current)
            requestAnimationFrame(updateCounter)
          } else {
            counter.textContent = target
          }
        }
        
        // Start animation when element is in view
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              updateCounter()
              observer.unobserve(entry.target)
            }
          })
        })
        
        observer.observe(counter)
      })
    }

    // Delay to ensure DOM is ready
    const timer = setTimeout(animateCounters, 1000)
    return () => clearTimeout(timer)
  }, [])

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

      {/* Particle Effects */}
      <div className="particles-container">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Rotating Gradient Glow behind name */}
      <div className="name-glow"></div>

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
                <span className="role-text">Game Developer</span>
                <span className="role-text">Full Stack Developer</span>
                <span className="role-text">UI/UX Designer</span>
                <span className="role-text">Java Developer</span>
                <span className="role-text">React.js Developer</span>
                <span className="role-text">Node.js Developer</span>
              </div>
            </div>
            <div className="hero-tagline">
              Crafting immersive games & modern web experiences
            </div>
            <p className="hero-description">
              Passionate about creating innovative web solutions and bringing ideas to life through code. 
              I specialize in building scalable applications with modern technologies and engaging user experiences.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={scrollToProjects}>
                <span className="btn-text">View My Work</span>
                <span className="btn-icon">→</span>
              </button>
              <button className="btn-hire" onClick={() => window.location.href = '#contact'}>
                <span className="btn-text">Hire Me</span>
                <span className="btn-icon">💼</span>
              </button>
              <button className="btn-secondary" onClick={downloadCV}>
                <span className="btn-text">Download CV</span>
                <span className="btn-icon">↓</span>
              </button>
            </div>
          </div>

          {/* Right side - Visual elements */}
          <div className="hero-visual">
            {/* Profile Image Placeholder */}
            <div className="profile-container">
              <div className="profile-image">
                <div className="profile-placeholder">
                  <span className="profile-initials">AG</span>
                </div>
                <div className="profile-ring"></div>
                <div className="profile-glow"></div>
              </div>
            </div>

            {/* Achievement Cards with Timeline */}
            <div className="achievements-container">
              <div className="timeline-line"></div>
              
              <div className="floating-card achievement-card" data-delay="0">
                <div className="card-content">
                  <div className="card-icon">💻</div>
                  <div className="counter" data-target="5">0</div>
                  <h3>Projects</h3>
                  <p>Completed</p>
                </div>
                <div className="card-glow"></div>
              </div>
              
              <div className="floating-card achievement-card" data-delay="1">
                <div className="card-content">
                  <div className="card-icon">⚡</div>
                  <div className="counter" data-target="2">0</div>
                  <h3>Years</h3>
                  <p>Experience</p>
                </div>
                <div className="card-glow"></div>
              </div>
              
              <div className="floating-card achievement-card" data-delay="2">
                <div className="card-content">
                  <div className="card-icon">🚀</div>
                  <div className="counter" data-target="100">0</div>
                  <h3>%</h3>
                  <p>Learning</p>
                </div>
                <div className="card-glow"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="mouse-scroll">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <div className="scroll-arrows">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
