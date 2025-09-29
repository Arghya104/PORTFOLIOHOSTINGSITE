import './Education.css'

function Education() {
  const education = [
    {
      institution: "Guru Nanak Institute of Technology",
      degree: "B.TECH in Computer Science",
      period: "Nov 2020 - May 2024",
      grade: "CGPA: 8.36"
    },
    {
      institution: "BT ROAD GOVT SPONSERED HIGH SCHOOL",
      degree: "Higher Secondary",
      period: "Nov 2018 - May 2020",
      grade: "Percentage: 74.3%"
    }
  ]

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="education-title">Education</h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <h3>{edu.institution}</h3>
              <p className="degree">{edu.degree}</p>
              <p className="period">{edu.period}</p>
              <p className="grade">{edu.grade}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
