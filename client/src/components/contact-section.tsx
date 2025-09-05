import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const handleEmailClick = () => {
    const email = "ericwang8@outlook.com";
    const subject = "Project Inquiry - Portfolio Contact";
    const body = "Hi Eric,\n\nI saw your portfolio and would like to discuss a potential project opportunity.\n\nBest regards,";
    
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4" data-testid="contact-heading">Get In Touch</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto" data-testid="contact-description">
            Ready to start your next project? Let's discuss how we can work together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="fade-in-up">
            <h3 className="text-2xl font-semibold text-primary mb-8" data-testid="contact-info-heading">Let's Connect</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-envelope text-secondary"></i>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="text-foreground font-medium" data-testid="contact-email">ericwang8@outlook.com</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-phone text-accent"></i>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <div className="text-foreground font-medium" data-testid="contact-phone">+1 (240) 810-5541</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-map-marker-alt text-primary"></i>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="text-foreground font-medium" data-testid="contact-location">Los Angeles, CA</div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-primary mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all" data-testid="social-github">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/eric-chaojie-wang-903117112/" className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all" data-testid="social-linkedin">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all" data-testid="social-twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all" data-testid="social-dribbble">
                  <i className="fab fa-dribbble"></i>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Options */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border fade-in-up">
            <h3 className="text-2xl font-semibold text-primary mb-6 text-center">Ready to Work Together?</h3>
            <p className="text-muted-foreground text-center mb-8 leading-relaxed">
              I'm always excited to discuss new opportunities and projects. Click below to send me an email with your project details.
            </p>
            
            <div className="space-y-4">
              <Button 
                onClick={handleEmailClick}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg font-semibold transition-all hover-lift text-lg"
                data-testid="button-send-email"
              >
                <i className="fas fa-envelope mr-3"></i>
                Send Me an Email
              </Button>
              
              <div className="text-center text-muted-foreground">
                <p className="text-sm">or reach out directly at</p>
                <a 
                  href="mailto:ericwang8@outlook.com" 
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                  data-testid="email-direct-link"
                >
                  ericwang8@outlook.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
