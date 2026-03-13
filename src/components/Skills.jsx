export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript", "SQL", "HTML/CSS"]
    },
    {
      category: "Frontend",
      skills: ["React", "Material UI", "Bootstrap", "Responsive Design", "Electron"]
    },
    {
      category: "Backend",
      skills: ["Django", "Express.js", "REST APIs", "WebSockets", "Node.js"]
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Snowflake"]
    },
    {
      category: "Automated Testing",
      skills: ["Selenium", "Playwright", "Postman", "Jenkins", "Ansible", "Github Actions", "CI/CD Pipelines"]
    },
    {
      category: "Cloud & DevOps",
      skills: ["CI/CD", "GitHub", "Linux"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "Jira", "VSCode"]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skill-list">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="skill-item">
                    <span className="skill-dot"></span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
