import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Create mailto link
    const mailtoLink = `mailto:play.fer01@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`
    window.location.href = mailtoLink
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

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
                  <img src="/src/assets/email-logo.jpg" alt="" className="company-logo"/>
                </span>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:play.fer01@gmail.com">play.fer01@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">
                  <img src="/src/assets/whatsapp.png" alt="" className="company-logo"/>
                </span>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+523921232855">+52 392 123 2855</a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">
                  <img src="/src/assets/loc.webp" alt="" className="company-logo"/>
                </span>
                <div>
                  <h4>Location</h4>
                  <a>Guadalajara, Mexico</a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">
                  <img src="/src/assets/github.png" alt="" className="company-logo"/>
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
