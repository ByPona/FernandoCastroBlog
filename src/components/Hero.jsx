export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="container">
        <h1>Fernando Castro</h1>
        <p className="subtitle">Software Engineer in Test</p>
        <p className="subtitle" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
          Computer Engineer passionate about technology, with experience in web development, test automation and enterprise solutions.
        </p>
        <div>
          <a href="https://github.com/ByPona" target="_blank" rel="noopener noreferrer" className="btn btn-primary">GitHub</a>
          <button className="btn btn-primary" onClick={() => scrollToSection('contact')} style={{ background: 'transparent', border: '2px solid white', color: 'white', marginLeft: '1rem' }}>Contact Me</button>
        </div>
      </div>
    </section>
  )
}