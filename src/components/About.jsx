export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <h1>Hey, I'm Fernando</h1>
            <p>A Software Engineer in Test based in Guadalajara, México.</p>

            <p>
              I specialize in building test automation frameworks and quality tooling that help development teams ship with confidence. My work sits at the intersection of testing and development — I don't just find bugs, I build the systems that catch them, and the dashboards that make quality visible across the entire release cycle.
            </p>

            <p>
              Over the years I've worked across a range of environments: from AI platforms and enterprise IT to OS testing and academic research. That variety has shaped how I think about software — always with a quality-first mindset, but with a deep enough understanding of the full stack to speak the same language as the developers I work with.
            </p>

            <p>
              When I'm not writing test automation or debugging pipelines, I enjoy exploring new technologies and finding ways to make complex systems more reliable and easier to understand.
            </p>

            <p>
              I'm currently open to new opportunities — if you're looking for an engineer who bridges the gap between development and quality assurance, <a href="mailto:play.fer01@gmail.com">let's talk</a>.
            </p>
            <div className="stats">
              <div className="stat">
                <h3>3+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>3+</h3>
                <p>Companies</p>
              </div>
              <div className="stat">
                <h3>100%</h3>
                <p>Automating and Improving</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="avatar-placeholder">
              <div className="avatar-icon"><img src="/src/assets/about.jpg" alt="" className="about-image" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
