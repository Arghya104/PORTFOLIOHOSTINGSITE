import './Contact.css'
import galaxyImage from '../assets/images/galaxy-night-landscape.jpg'

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-background">
        <img src={galaxyImage} alt="Galaxy background" className="contact-bg-image" />
        <div className="contact-overlay"></div>
      </div>
      <div className="container">
        <div className="contact-content">
          <h2>Let's Work Together</h2>
          <p>
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, I'll try my 
            best to get back to you!
          </p>
          <div className="contact-links">
            <a href="mailto:arghyaghosh790@gmail.com">Email Me</a>
            <a href="https://linkedin.com/in/arghyaa-ghosh-48a046209" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/Arghya104" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
