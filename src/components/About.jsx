import './About.css'
import galaxyImage from '../assets/images/galaxy-night-landscape.jpg'

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="about-background">
        <img src={galaxyImage} alt="Galaxy background" className="about-bg-image" />
        <div className="about-overlay"></div>
      </div>
      <div className="container">
        <div className="about-content dm-serif-text-regular ">
          <div>
            <h2>About Me</h2>
          </div>
          <div className="about-text">
            <p>
              I'm a passionate Full Stack Developer with expertise in Java, JavaScript, Python, 
              HTML, CSS, and SQL. I specialize in building modern web applications using React.js, 
              Next.js, Bootstrap, and Tailwind CSS for the frontend, along with Node.js, Express.js, 
              and REST APIs for backend solutions.
            </p>
            <p>
              Currently working as a Web Developer at Eframe Infomedia Pvt. Ltd, where I 
              develop and maintain full-stack web applications, work with MySQL databases, 
              and implement CI/CD pipelines using GitHub Actions that streamline development 
              workflows and automate deployments.
            </p>
            <p>
              I'm passionate about delivering impactful solutions and have contributed to 
              open source projects on GitHub. I'm proficient with development tools like Git, 
              GitHub, and Postman, and also have experience in Unity development. My strong 
              problem-solving skills and ability to work effectively in teams help me deliver 
              high-quality solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
