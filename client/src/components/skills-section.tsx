export default function SkillsSection() {
  const skillCategories = [
    {
      icon: "fab fa-react",
      title: "Frontend",
      color: "secondary",
      skills: ["React & Next.js", "Angular 8+", "TypeScript", "Vue.js"]
    },
    {
      icon: "fas fa-server",
      title: "Backend", 
      color: "accent",
      skills: [".NET Core & C#", "Node.js & Express", "Python", "ASP.NET MVC"]
    },
    {
      icon: "fas fa-database",
      title: "Database",
      color: "primary", 
      skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLServer"]
    },
    {
      icon: "fas fa-cloud",
      title: "Cloud & DevOps",
      color: "destructive",
      skills: ["AWS & Azure", "Docker & Kubernetes", "CI/CD Pipelines", "Jenkins"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4" data-testid="skills-heading">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto" data-testid="skills-description">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="bg-card rounded-2xl p-6 shadow-lg hover-lift border border-border fade-in-up" data-testid={`skill-card-${category.title.toLowerCase()}`}>
              <div className="text-center mb-4">
                <div className={`w-16 h-16 bg-${category.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${category.icon} text-3xl text-${category.color}`}></i>
                </div>
                <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center" data-testid={`skill-${category.title.toLowerCase()}-${skillIndex}`}>
                    <i className="fas fa-check text-secondary mr-3"></i>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
