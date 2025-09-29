import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-content">
          <h2>Let's Work Together</h2>
          <p>
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, I'll try my 
            best to get back to you!
          </p>
          <div className="contact-links">
            <a href="mailto:john.doe@example.com">Email Me</a>
            <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
