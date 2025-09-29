import './Skills.css'

function Skills() {
  const skills = [
    {
      title: "Programming Languages",
      description: "Java, JavaScript, TypeScript, Python, HTML, CSS, SQL, C"
    },
    {
      title: "Frontend Technologies",
      description: "React.js, Next.js, Redux, Bootstrap, Tailwind CSS, jQuery"
    },
    {
      title: "Backend & APIs",
      description: "Node.js, Express.js, Spring Boot, RESTful APIs, OAuth2, JWT"
    },
    {
      title: "Database & Tools",
      description: "MySQL, PostgreSQL, Git, GitHub, Postman, VS Code, IntelliJ IDEA"
    },
    {
      title: "Cloud & DevOps",
      description: "AWS, CI/CD Pipelines, Jenkins, GitHub Actions, Agile (Scrum, Kanban)"
    },
    {
      title: "Additional Skills",
      description: "Unity, API Security, DBMS, Problem-solving, Team Collaboration"
    }
  ]

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="skills-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
