export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4" data-testid="footer-name">Alex Thompson</h3>
            <p className="text-primary-foreground/80 leading-relaxed" data-testid="footer-description">
              Full Stack Developer passionate about creating innovative digital experiences 
              and solving complex problems through code.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="footer-links-heading">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="footer-link-home">Home</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="footer-link-about">About</a></li>
              <li><a href="#skills" onClick={(e) => handleNavClick(e, '#skills')} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="footer-link-skills">Skills</a></li>
              <li><a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="footer-link-projects">Projects</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="footer-link-contact">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="footer-connect-heading">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-all" data-testid="footer-social-github">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-all" data-testid="footer-social-linkedin">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-all" data-testid="footer-social-twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-all" data-testid="footer-social-email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
            <div className="mt-4">
              <p className="text-primary-foreground/60 text-sm" data-testid="footer-availability">
                Available for freelance work and collaboration
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60" data-testid="footer-copyright">
            © 2024 Alex Thompson. All rights reserved. Built with ❤️ and code.
          </p>
        </div>
      </div>
    </footer>
  );
}
