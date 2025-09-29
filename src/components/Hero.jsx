import './Hero.css'
import spaceVideo from '../assets/videos/0_Wormhole_Space_3840x2160.mp4'

function Hero() {
  return (
    <section className="hero">
      <video 
        className="hero-video" 
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src={spaceVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1>Arghya Ghosh</h1>
          <p>Full Stack Developer | Java Developer | React.js Developer | Node.js Developer</p>
          <button>View My Work</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
