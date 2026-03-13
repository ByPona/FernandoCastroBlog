export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Fernando Castro</h3>
            <p>Software Engineer in Test</p>
            <p className="footer-description">
              Building quality software solutions with a passion for testing and automation.
            </p>
          </div>

          <div className="footer-section">
            <h4>Social Links</h4>
            <ul className="footer-links">
              <li>
                <a href="https://github.com/ByPona" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/fernando-castro-52258221a/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Fernando Castro. All rights reserved.</p>
          <p className="footer-note">Designed and developed using React and Vite</p>
        </div>
      </div>
    </footer>
  )
}
