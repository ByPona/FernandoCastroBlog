export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "QA Automation Engineer | Full-Stack Developer",
      company: "C3.ai",
      period: "Sep 2024 - Feb 2026",
      description: "Developed custom React components and frontend features integrated with the C3 backend. Implemented automated test plans for low-code solutions and built a Manager Dashboard to track regression builds, bug reports, and quality metrics. Collaborated with developers to validate patches and releases.",
      skills: ["Playwright", "API Testing", "Postman", "SQL", "JS", "CI/CD", "Express.js", "React"],
      logo: "/src/assets/c3ai.png"
    },
    {
      id: 2,
      title: "Support Executive | ETL",
      company: "Tata Consultancy Services (TCS)",
      period: "Jan 2024 - Sep 2024",
      description: "Delivered technical support for enterprise systems, developed SQL scripts and data pipelines within Snowflake ecosystems, and automated recurring ETL processes and data workflows using Selenium.",
      skills: ["Technical Support", "Bug Debugging", "SQL", "Snowflake", "AWS", "ETL"],
      logo: "/src/assets/tcs.png"
    },
    {
      id: 3,
      title: "Software Tester Intern – Operating System Testing",
      company: "Toshiba Global Commerce Solutions",
      period: "Jan 2023 - Dec 2023",
      description: "Worked in the Operating System testing area, validating performance, stability, and system-level configurations. Automated testing workflows through Jenkins pipelines and GitHub repositories, managed deployments and error capture using Ansible, and applied Linux/Unix scripting and embedded Python to configure and validate system environments.",
      skills: ["Manual and Automated Testing", "Selenium", "Jenkins", "Ansible", "Python"],
      logo: "/src/assets/tgcs.webp"
    },
    {
      id: 4,
      title: "Developer | Research 'SignAPROS'",
      company: "University of Guadalajara",
      period: "Nov 2021 - Dec 2023",
      description: "Developed a modular system for biosignal acquisition, processing, and intelligent analysis. Research from this project was published in ScienceDirect. \nArticle Link: \nhttps://www.sciencedirect.com/science/article/pii/S2665963825000016",
      skills: ["React", "Express", "WebSockets", "PostgreSQL", "Electron"],
      logo: "/src/assets/udg.webp"
    },
    {
      id: 5,
      title: "Web Developer",
      company: "Nuevo Amanecer",
      period: "Aug 2021 - Dec 2021",
      description: "Developed scalable web applications for event publishing using Django and PostgreSQL, implemented RESTful APIs to enhance functionality and user experience, and managed cloud infrastructure on AWS optimizing performance and reducing costs. Conducted code reviews and collaborated with cross-functional teams to gather requirements and deliver solutions efficiently.",
      skills: ["Django", "Python", "HTML", "CSS", "Material UI", "Bootstrap"],
      logo: "/src/assets/nuevoamanecer.webp"
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 id="experience-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="exp-header">
                  <img src={exp.logo} alt={exp.company} className="company-logo" />
                  <h3>{exp.title}</h3>
                  <span className="company">{exp.company}</span>
                </div>
                <p className="period">{exp.period}</p>
                <p className="description">{exp.description}</p>
                <div className="skills-tags">
                  {exp.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>


            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
