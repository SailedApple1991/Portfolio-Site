import { useState } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-primary" data-testid="logo">EW</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a 
                href="#home" 
                className="text-muted-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
                onClick={(e) => handleNavClick(e, '#home')}
                data-testid="nav-home"
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-muted-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
                onClick={(e) => handleNavClick(e, '#about')}
                data-testid="nav-about"
              >
                About
              </a>
              <a 
                href="#skills" 
                className="text-muted-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
                onClick={(e) => handleNavClick(e, '#skills')}
                data-testid="nav-skills"
              >
                Skills
              </a>
              <a 
                href="#projects" 
                className="text-muted-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
                onClick={(e) => handleNavClick(e, '#projects')}
                data-testid="nav-projects"
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="text-muted-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
                onClick={(e) => handleNavClick(e, '#contact')}
                data-testid="nav-contact"
              >
                Contact
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              className="text-muted-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-button"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a 
                href="#home" 
                className="block text-muted-foreground hover:text-primary transition-colors px-3 py-2 text-base font-medium"
                onClick={(e) => handleNavClick(e, '#home')}
                data-testid="mobile-nav-home"
              >
                Home
              </a>
              <a 
                href="#about" 
                className="block text-muted-foreground hover:text-primary transition-colors px-3 py-2 text-base font-medium"
                onClick={(e) => handleNavClick(e, '#about')}
                data-testid="mobile-nav-about"
              >
                About
              </a>
              <a 
                href="#skills" 
                className="block text-muted-foreground hover:text-primary transition-colors px-3 py-2 text-base font-medium"
                onClick={(e) => handleNavClick(e, '#skills')}
                data-testid="mobile-nav-skills"
              >
                Skills
              </a>
              <a 
                href="#projects" 
                className="block text-muted-foreground hover:text-primary transition-colors px-3 py-2 text-base font-medium"
                onClick={(e) => handleNavClick(e, '#projects')}
                data-testid="mobile-nav-projects"
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="block text-muted-foreground hover:text-primary transition-colors px-3 py-2 text-base font-medium"
                onClick={(e) => handleNavClick(e, '#contact')}
                data-testid="mobile-nav-contact"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
