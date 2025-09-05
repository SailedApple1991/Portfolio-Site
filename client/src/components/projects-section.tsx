export default function ProjectsSection() {
  const projects = [
    {
      title: "CADayToday.com",
      description: "A comprehensive deals aggregation platform that collects nationwide deals from 10+ websites. Features real-time comment system, user points reward system, and optimized SEO ranking. Enhanced user engagement by 30% through responsive design.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Next.js", "React", "TypeScript", "Node.js"]
    },
    {
      title: "Grants Management System", 
      description: "Web-enabled Grants Management and Performance Reporting applications at REI Systems. Designed responsive interfaces using Angular and .NET Core, resulting in 30% increase in user interaction and 25% improvement in operational efficiency.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Angular", ".NET Core", "MySQL", "Azure"]
    },
    {
      title: "CRM Platform Enhancement",
      description: "Developed innovative solutions for Ellucian's CRM platform using ASP.NET and SQL Server. Created versatile Web APIs and RESTful services, significantly enhancing college recruitment processes and user experience.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["ASP.NET", "SQL Server", "React", ".NET Core"]
    },
    {
      title: "Data Aggregation System",
      description: "Developed asynchronous, multi-threaded web scrapers using Node.js, TypeScript, Docker, and Kubernetes. Streamlined data collection processes and reduced data aggregation time through efficient large-scale data ingestion.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Node.js", "TypeScript", "Docker", "Kubernetes"]
    }
  ];

  const getTechColor = (tech: string) => {
    const colors = {
      'Next.js': 'secondary',
      'React': 'secondary',
      'TypeScript': 'accent', 
      'Node.js': 'accent',
      'Angular': 'primary',
      '.NET Core': 'destructive',
      'MySQL': 'primary',
      'Azure': 'accent',
      'ASP.NET': 'destructive',
      'SQL Server': 'primary',
      'Docker': 'secondary',
      'Kubernetes': 'accent'
    };
    return colors[tech as keyof typeof colors] || 'secondary';
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4" data-testid="projects-heading">Featured Projects</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto" data-testid="projects-description">
            A showcase of my recent work and creative solutions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-card rounded-2xl overflow-hidden shadow-lg hover-lift border border-border fade-in-up" data-testid={`project-card-${index}`}>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover" 
                data-testid={`project-image-${index}`}
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-primary" data-testid={`project-title-${index}`}>{project.title}</h3>
                  <div className="flex space-x-2">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid={`project-github-${index}`}>
                      <i className="fab fa-github text-lg"></i>
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid={`project-demo-${index}`}>
                      <i className="fas fa-external-link-alt text-lg"></i>
                    </a>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed" data-testid={`project-description-${index}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className={`px-3 py-1 bg-${getTechColor(tech)}/10 text-${getTechColor(tech)} text-sm rounded-full`}
                      data-testid={`project-tech-${index}-${techIndex}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="border border-border text-foreground hover:bg-muted px-8 py-4 rounded-lg font-semibold transition-all hover-lift" data-testid="button-view-all-projects">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
