export default function HeroSection() {
  const handleViewWork = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Modern geometric background with gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-primary" data-testid="hero-name">Eric (Chaojie) Wang</span>
            <span className="block gradient-text mt-2" data-testid="hero-title">Senior Full Stack Developer</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed" data-testid="hero-description">
Results-driven full-stack developer with over 7 years of experience in creating dynamic web applications and optimizing user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg font-semibold transition-all hover-lift"
              onClick={handleViewWork}
              data-testid="button-view-work"
            >
              View My Work
            </button>
            <a 
              href="/Chaojie-Wang-Resume.pdf" 
              download="Chaojie-Wang-Senior-Fullstack-Engineer-Resume.pdf"
              className="border border-border text-foreground hover:bg-muted px-8 py-4 rounded-lg font-semibold transition-all hover-lift inline-block text-center" 
              data-testid="button-download-resume"
            >
              Download Resume
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-2xl" data-testid="link-github">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/eric-chaojie-wang-903117112/" className="text-muted-foreground hover:text-primary transition-colors text-2xl" data-testid="link-linkedin">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-2xl" data-testid="link-twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="mailto:ericwang8@outlook.com" className="text-muted-foreground hover:text-primary transition-colors text-2xl" data-testid="link-email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
