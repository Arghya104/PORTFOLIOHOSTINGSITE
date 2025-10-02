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
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-card">
            <h1 className="hero-name">Arghya Ghosh</h1>
            <p className="hero-role">Full Stack Developer | Java Developer | React.js Developer | Node.js Developer</p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={scrollToProjects}>View My Work</button>
              <button className="btn-secondary" onClick={downloadCV}>Download CV</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
