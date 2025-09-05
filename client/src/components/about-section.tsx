import profileImage from "@assets/undefined_help_me_to_generate__1757047162777.png";

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
              src={profileImage} 
              alt="Eric (Chaojie) Wang - Professional headshot" 
              className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto hover-lift" 
              data-testid="about-image"
            />
          </div>
          
          <div className="fade-in-up">
            <h3 className="text-2xl font-semibold text-primary mb-6" data-testid="about-subtitle">
7+ Years of Full-Stack Excellence
            </h3>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p data-testid="about-paragraph-1">
                With over 7 years of experience in full-stack development, I specialize in React, Angular, 
                Node.js, .NET, Python and cloud technologies. I've established CI/CD pipelines and enhanced 
                application security, resulting in significant improvements in user engagement.
              </p>
              
              <p data-testid="about-paragraph-2">
                I hold dual Bachelor's degrees in Computer Science and Electrical Engineering, plus a 
                Master's in Computer Science from University at Buffalo. I've worked with companies like 
                REI Systems and Ellucian, and currently own CADayToday.com.
              </p>
              
              <p data-testid="about-paragraph-3">
                Most notably, I've engineered responsive interfaces that led to 30% increase in user 
                interaction and reduced software rework by 40% through comprehensive test automation.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary" data-testid="stat-projects">20+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary" data-testid="stat-experience">7+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary" data-testid="stat-clients">40%</div>
                <div className="text-sm text-muted-foreground">Reduced Rework</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
