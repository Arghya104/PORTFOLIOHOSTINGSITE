import './Experience.css'
import spaceImage from '../assets/images/watercolour_night_sky_background_2607.jpg'

function Experience() {
  const experiences = [
    {
      company: "Eframe Infomedia Pvt. Ltd",
      position: "Web Developer",
      period: "Nov 2024 - Present",
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
    <section id="experience" className="section experience-section">
      <div className="experience-background">
        <img src={spaceImage} alt="Space background" className="experience-bg-image" />
        <div className="experience-overlay"></div>
      </div>
      <div className="container">
        <h2 className="experience-title">Professional Experience</h2>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <h3>{exp.position}</h3>
                <p className="company">{exp.company}</p>
                <p className="period">{exp.period}</p>
              </div>
              <ul className="achievements">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
