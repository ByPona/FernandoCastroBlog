export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "SignAPROS - Biosignal Analysis System",
      description: "Real-time biosignal analysis and visualization system. Academic research published on ScienceDirect.",
      tech: ["React", "Express.js", "WebSockets", "PostgreSQL", "MongoDB", "Electron"],
      link: "https://www.sciencedirect.com/science/article/pii/S2665963825000016",
      type: "Academic Research | Full-Stack",
      icon: "📊",
      type: 'Article'
    },
    {
      id: 2,
      title: "Nuevo Amanecer - Event Publishing Platform",
      description: "Web platform for event publishing and management with authentication, advanced search and filtering.",
      tech: ["Django", "AWS", "PostgreSQL", "REST APIs"],
      link: "https://github.com/ByPona",
      type: null,
      icon: "🎫"
    },
    {
      id: 3,
      title: "C3.ai - Platform QA Dashboard",
      description: "Administrative dashboard for real-time monitoring and operations management. Implemented at C3.ai.",
      tech: ["React", "JavaScript", "Vercel", "Supabase", "JWT Authentication", "Github API", "Jira API", "Cronjobs"],
      link: "https://github.com/ByPona",
      type: null,
      icon: "📈"
    },{
      id: 4,
      title: "Plantation Management System (PMS)",
      description: "System to manage and track tasks for an avocado plantation—planting, sanitizing, harvesting—as well as profits and sales.",
      tech: ["React", "JavaScript", "Vercel", "Supabase", "JWT Authentication", "Github API", "Jira API", "React Native"],
      link: "https://github.com/ByPona",
      type: 'In progress...',
      icon: "📈"
    },{
      id: 5,
      title: "Friendly AI Chat Assistant",
      description: "A guided conversation tool using generative AI, designed for users unfamiliar with artificial intelligence. It helps them formulate questions and provides accurate answers tailored to their needs.",
      tech: ["React", "JavaScript", "Vercel", "Supabase", "JWT Authentication", "Github API", "Jira API", "React Native"],
      link: "https://github.com/ByPona",
      type: 'In progress...',
      icon: "🤖"
    },{
      id: 6,
      title: "Testing Playground",
      description: "A guided conversation tool using generative AI, designed for users unfamiliar with artificial intelligence. It helps them formulate questions and provides accurate answers tailored to their needs.",
      tech: ["React", "JavaScript", "Vercel", "Supabase", "JWT Authentication", "Github API", "Jira API", "React Native"],
      link: "https://github.com/ByPona",
      type: 'In progress...',
      icon: "🤖"
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 id="experience-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-icon"></div>
              <div className="project-type">{project.type ? project.type : 'Company Project'}</div>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                {project.type ? `View ${project.type} →` : 'Preview not available'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
