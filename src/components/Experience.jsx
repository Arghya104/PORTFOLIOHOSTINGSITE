import './Experience.css'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import spaceImage from '../assets/images/watercolour_night_sky_background_2607.jpg'

function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      company: "Eframe Infomedia Pvt. Ltd",
      position: "Web Developer",
      period: "Nov 2024 - Present",
      location: "Remote",
      type: "Full-time",
      achievements: [
        "Developed and maintained 5+ full-stack web applications using Java, React.js, Node.js, and MySQL",
        "Built scalable REST APIs with Spring Boot and Node.js, reducing API latency by 25%",
        "Integrated OAuth2/JWT authentication for secure, role-based access",
        "Implemented CI/CD pipelines using Jenkins and GitHub Actions, reducing deployment time by 40%",
        "Collaborated in Agile Scrum teams for efficient project delivery",
        "Contributed to UI/UX improvements, increasing user engagement by 20%"
      ]
    }
  ]

  return (
    <section id="experience" className="experience-section">
      <div className="experience-background">
        <img src={spaceImage} alt="Space background" className="experience-bg-image" />
        <div className="experience-overlay"></div>
        <div className="experience-particles"></div>
      </div>
      
      <div className="experience-container">
        <motion.div 
          className="experience-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="experience-title">Professional Experience</h2>
          <p className="experience-subtitle">Building digital solutions with passion and precision</p>
        </motion.div>

        <div className="experience-timeline" ref={ref}>
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="experience-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="card-header">
                <div className="position-info">
                  <h3 className="position-title">{exp.position}</h3>
                  <div className="company-info">
                    <span className="company-name">{exp.company}</span>
                    <span className="experience-type">{exp.type}</span>
                  </div>
                  <div className="experience-meta">
                    <span className="period">{exp.period}</span>
                    <span className="location">{exp.location}</span>
                  </div>
                </div>
                <div className="card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              
              <div className="achievements-section">
                <h4 className="achievements-title">Key Achievements</h4>
                <ul className="achievements-list">
                  {exp.achievements.map((achievement, idx) => (
                    <motion.li 
                      key={idx} 
                      className="achievement-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.6, delay: (index * 0.2) + (idx * 0.1) }}
                    >
                      <div className="achievement-bullet"></div>
                      <span className="achievement-text">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
