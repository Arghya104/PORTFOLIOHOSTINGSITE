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
      description: "Proficient in Java, JavaScript, TypeScript, Python, HTML, CSS, SQL, and C with 2+ years of hands-on experience",
      technologies: ["Java", "JavaScript", "TypeScript", "Python", "HTML", "CSS", "SQL", "C"]
    },
    {
      title: "Frontend Development",
      description: "Expert in React.js, Next.js, Redux, Bootstrap, Tailwind CSS, and jQuery for building responsive web applications",
      technologies: ["React.js", "Next.js", "Redux", "Bootstrap", "Tailwind CSS", "jQuery"]
    },
    {
      title: "Backend & API Development",
      description: "Skilled in Node.js, Express.js, Spring Boot, RESTful APIs, OAuth2, and JWT for scalable server-side solutions",
      technologies: ["Node.js", "Express.js", "Spring Boot", "REST APIs", "OAuth2", "JWT"]
    },
    {
      title: "Database & Development Tools",
      description: "Experienced with MySQL, PostgreSQL, Git, GitHub, Postman, VS Code, and IntelliJ IDEA for efficient development",
      technologies: ["MySQL", "PostgreSQL", "Git", "GitHub", "Postman", "VS Code"]
    },
    {
      title: "Cloud & DevOps",
      description: "Knowledgeable in AWS, CI/CD Pipelines, Jenkins, GitHub Actions, and Agile methodologies (Scrum, Kanban)",
      technologies: ["AWS", "CI/CD", "Jenkins", "GitHub Actions", "Agile", "Scrum"]
    },
    {
      title: "Additional Expertise",
      description: "Proficient in Unity development, API Security, DBMS, Problem-solving, and Team Collaboration",
      technologies: ["Unity", "API Security", "DBMS", "Problem-solving", "Team Work"]
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
          className="skills-title"
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
