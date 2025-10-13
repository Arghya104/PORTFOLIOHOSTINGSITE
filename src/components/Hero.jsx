import './Hero.css'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef } from 'react'
import galaxyImage from '../assets/images/galaxy-night-landscape.jpg'
import spaceImage from '../assets/images/5532919.jpg'
import nebulaImage from '../assets/images/rm314-aew-19.jpg'
import arghyaPhoto from '../assets/images/Arghya_Ghosh.jpg'

function Hero() {
  const containerRef = useRef(null)
  const textRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])

  const isInView = useInView(textRef, { once: true, margin: "-100px" })

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadCV = () => {
    const link = document.createElement('a')
    link.href = '#'
    link.download = 'Arghya_Ghosh_CV.pdf'
    link.click()
  }

  return (
    <section className="hero" ref={containerRef}>
      {/* Parallax Background Images */}
      <motion.div 
        className="hero-background"
        style={{ y, scale, opacity }}
      >
        <div className="bg-layer bg-layer-1" style={{ backgroundImage: `url(${galaxyImage})` }}></div>
        <div className="bg-layer bg-layer-2" style={{ backgroundImage: `url(${spaceImage})` }}></div>
        <div className="bg-layer bg-layer-3" style={{ backgroundImage: `url(${nebulaImage})` }}></div>
      </motion.div>

      {/* Overlay */}
      <div className="hero-overlay"></div>
      
      <div className="container">
        <div className="hero-content">
          {/* Left side - Text content */}
          <motion.div 
            className="hero-text"
            ref={textRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="hero-greeting"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Welcome, I am
            </motion.div>
            
            <motion.h1 
              className="hero-name"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Arghya Ghosh
            </motion.h1>
            
            <motion.div 
              className="hero-role"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Senior Full Stack Developer
            </motion.div>
            
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Crafting exceptional digital experiences through innovative web solutions. 
              I specialize in building scalable applications with cutting-edge technologies, 
              delivering robust solutions that drive business growth and user engagement.
            </motion.p>
            
            <motion.div 
              className="hero-stats"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.button 
                className="btn-primary" 
                onClick={scrollToProjects}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Explore Portfolio
              </motion.button>
              
              <motion.button 
                className="btn-secondary" 
                onClick={downloadCV}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Download Resume
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right side - Profile Picture */}
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="profile-container">
              <div className="profile-image">
                <img 
                  src={arghyaPhoto} 
                  alt="Arghya Ghosh" 
                  className="profile-photo"
                />
                <div className="profile-ring"></div>
                <div className="profile-glow"></div>
              </div>
              <div className="profile-info">
                <h3>Arghya Ghosh</h3>
                <p>Senior Full Stack Developer</p>
                <div className="profile-badges">
                  <span className="badge">React Expert</span>
                  <span className="badge">Node.js</span>
                  <span className="badge">AWS Certified</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="scroll-mouse"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="mouse-wheel"></div>
        </motion.div>
        <motion.div
          className="scroll-text"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Scroll Down
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
