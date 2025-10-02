import './Certifications.css'
import spaceImage from '../assets/images/rm314-aew-19.jpg'
import { useEffect, useRef, useState } from 'react'

function Certifications() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2024",
      progress: 100,
      level: "Professional"
    },
    {
      title: "Oracle Certified Java Programmer",
      issuer: "Oracle Corporation",
      year: "2024",
      progress: 100,
      level: "Professional"
    },
    {
      title: "Open-source contributor on GitHub",
      issuer: "GitHub",
      year: "Ongoing",
      progress: 85,
      level: "Active"
    }
  ]

  const competencies = [
    "Strong communication & collaboration",
    "Problem-solving & critical thinking",
    "Time management & adaptability",
    "Attention to detail",
    "Quick learner & proactive attitude"
  ]

  return (
    <section 
      id="certifications" 
      className={`section certifications-section ${isVisible ? 'visible' : ''}`}
      ref={sectionRef}
    >
      <div className="certifications-background">
        <img src={spaceImage} alt="Space background" className="certifications-bg-image" />
        <div className="certifications-overlay"></div>
      </div>
      <div className="container">
        <h2 className="certifications-title">Certifications & Achievements</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-item">
              <h3>{cert.title}</h3>
              <p className="issuer">{cert.issuer}</p>
              <p className="year">{cert.year}</p>
              <div className="certification-progress">
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${cert.progress}%` }}
                  ></div>
                </div>
                <span className="progress-text">{cert.progress}% Complete</span>
                <span className="certification-level">{cert.level}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="competencies-section">
          <h3 className="competencies-title">Core Competencies</h3>
          <div className="competencies-list">
            {competencies.map((competency, index) => (
              <span key={index} className="competency-tag">{competency}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
