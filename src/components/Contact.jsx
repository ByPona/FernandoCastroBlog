import loc from '../assets/loc.webp';
import email from '../assets/email-logo.jpg';
import whatsapp from '../assets/whatsapp.png';
import github from '../assets/github.png';

export default function Contact() {

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect!</h3>
            <p>
              I am available for new opportunities, collaborations, and exciting projects. 
              Feel free to get in touch with me.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">
                  <img src={email} alt="" className="company-logo"/>
                </span>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:play.fer01@gmail.com">play.fer01@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">
                  <img src={whatsapp} alt="" className="company-logo"/>
                </span>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+523921232855">+52 392 123 2855</a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">
                  <img src={loc} alt="" className="company-logo"/>
                </span>
                <div>
                  <h4>Location</h4>
                  <a>Guadalajara, Mexico</a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">
                  <img src={github} alt="" className="company-logo"/>
                </span>
                <div>
                  <h4>GitHub</h4>
                  <a href="https://github.com/ByPona" target="_blank" rel="noopener noreferrer">
                    github.com/ByPona
                  </a>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/ByPona" target="_blank" rel="noopener noreferrer" className="social-link">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/fernando-castro-52258221a" target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
