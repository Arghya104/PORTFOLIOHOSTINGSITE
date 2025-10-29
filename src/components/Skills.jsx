import './Skills.css'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import skillsImage from '../assets/images/rm314-aew-19.jpg'

function Skills() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const skills = [
    {
      title: "Programming Languages",
      description: "Proficient in Java, JavaScript, Python, HTML, CSS, and SQL.",
      technologies: ["Java", "JavaScript", "Python", "HTML", "CSS", "SQL"]
    },
    {
      title: "Frontend Development",
      description: "Skilled in React.js, Next.js, Bootstrap, and Tailwind CSS for building modern web interfaces.",
      technologies: ["React.js", "Next.js", "Bootstrap", "Tailwind CSS"]
    },
    {
      title: "Backend & API Development",
      description: "Experienced in Node.js, Express.js, and REST APIs for server-side solutions.",
      technologies: ["Node.js", "Express.js", "REST APIs"]
    },
    {
      title: "Database & Development Tools",
      description: "Experienced with MySQL, Git, GitHub, and Postman for robust development workflows.",
      technologies: ["MySQL", "Git", "GitHub", "Postman"]
    },
    {
      title: "Cloud Management",
      description: "Knowledgeable in CI/CD and GitHub Actions to automate deployments.",
      technologies: ["CI/CD", "GitHub Actions"]
    },
    {
      title: "Additional Expertise",
      description: "Also competent in Unity development, problem-solving, and teamwork.",
      technologies: ["Unity", "Problem-solving", "Team Work"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="skills" className="section skills-section" ref={containerRef}>
      <div className="skills-background">
        <img src={skillsImage} alt="Skills background" className="skills-bg-image" />
        <div className="skills-overlay"></div>
      </div>

      <div className="container">
        <motion.h2 
          className="skills-title dm-serif-text-regular"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Technical Expertise
        </motion.h2>
        
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="skill-item"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="skill-header">
                <h3>{skill.title}</h3>
              </div>
              
              <p className="skill-description">
                {skill.description}
              </p>
              
              <div className="skill-technologies">
                {skill.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="tech-tag"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Skills
