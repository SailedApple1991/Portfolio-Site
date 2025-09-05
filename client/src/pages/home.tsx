import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    // Fade in animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);
    
    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach(el => observer.observe(el));

    // Navigation highlight on scroll
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('nav a[href^="#"]');
    
    const highlightCurrentSection = () => {
      const scrollY = window.pageYOffset;
      
      sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navItems.forEach(item => {
            item.classList.remove('text-primary');
            item.classList.add('text-muted-foreground');
            if (item.getAttribute('href') === `#${sectionId}`) {
              item.classList.remove('text-muted-foreground');
              item.classList.add('text-primary');
            }
          });
        }
      });
    };
    
    window.addEventListener('scroll', highlightCurrentSection);

    return () => {
      window.removeEventListener('scroll', highlightCurrentSection);
      fadeElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
