export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and Stripe integration. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      title: "Task Management App", 
      description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features. Built with modern web technologies.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"]
    },
    {
      title: "Analytics Dashboard",
      description: "A comprehensive data visualization platform that transforms complex datasets into intuitive charts and insights. Features real-time data processing and interactive visualizations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "D3.js", "Python", "FastAPI"]
    },
    {
      title: "Social Network App",
      description: "A cross-platform social networking application with real-time messaging, media sharing, and advanced privacy controls. Built with React Native for mobile and web.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React Native", "Firebase", "GraphQL", "AWS"]
    }
  ];

  const getTechColor = (tech: string) => {
    const colors = {
      'React': 'secondary',
      'Node.js': 'accent', 
      'MongoDB': 'primary',
      'Stripe': 'destructive',
      'Vue.js': 'secondary',
      'Express': 'accent',
      'Socket.io': 'primary',
      'PostgreSQL': 'destructive',
      'D3.js': 'accent',
      'Python': 'primary',
      'FastAPI': 'destructive',
      'React Native': 'secondary',
      'Firebase': 'accent',
      'GraphQL': 'primary',
      'AWS': 'destructive'
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
