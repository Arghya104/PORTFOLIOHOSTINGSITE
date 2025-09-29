import './Skills.css'

function Skills() {
  const skills = [
    {
      title: "Frontend Development",
      description: "React, Vue.js, JavaScript, TypeScript, HTML5, CSS3"
    },
    {
      title: "Design & UI/UX",
      description: "Figma, Adobe Creative Suite, User Research, Prototyping"
    },
    {
      title: "Backend & Tools",
      description: "Node.js, Express, MongoDB, Git, Webpack, Vite"
    },
    {
      title: "Mobile Development",
      description: "React Native, Progressive Web Apps, Responsive Design"
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
