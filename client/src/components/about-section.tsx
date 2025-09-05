export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4" data-testid="about-heading">About Me</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600" 
              alt="Professional headshot" 
              className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto hover-lift" 
              data-testid="about-image"
            />
          </div>
          
          <div className="fade-in-up">
            <h3 className="text-2xl font-semibold text-primary mb-6" data-testid="about-subtitle">
              Passionate Developer & Problem Solver
            </h3>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p data-testid="about-paragraph-1">
                With over 5 years of experience in full-stack development, I specialize in creating 
                scalable web applications using modern technologies like React, Node.js, and TypeScript.
              </p>
              
              <p data-testid="about-paragraph-2">
                My journey began with a Computer Science degree from Stanford University, and since then, 
                I've had the privilege of working with startups and Fortune 500 companies to bring 
                innovative digital solutions to life.
              </p>
              
              <p data-testid="about-paragraph-3">
                When I'm not coding, you'll find me contributing to open-source projects, mentoring 
                junior developers, or exploring the latest trends in web technology and design.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary" data-testid="stat-projects">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary" data-testid="stat-experience">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary" data-testid="stat-clients">20+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
