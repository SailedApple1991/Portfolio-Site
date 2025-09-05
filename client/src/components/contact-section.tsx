import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertContactSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import type { z } from "zod";

type ContactFormData = z.infer<typeof insertContactSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: (error) => {
      console.error("Contact form error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
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
                  <div className="text-foreground font-medium" data-testid="contact-email">alex@example.com</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-phone text-accent"></i>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <div className="text-foreground font-medium" data-testid="contact-phone">+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-map-marker-alt text-primary"></i>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="text-foreground font-medium" data-testid="contact-location">San Francisco, CA</div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-primary mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all" data-testid="social-github">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all" data-testid="social-linkedin">
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
          
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border fade-in-up">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">First Name</Label>
                  <Input 
                    id="firstName" 
                    {...form.register("firstName")}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all" 
                    placeholder="John"
                    data-testid="input-first-name"
                  />
                  {form.formState.errors.firstName && (
                    <p className="text-destructive text-sm mt-1">{form.formState.errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">Last Name</Label>
                  <Input 
                    id="lastName" 
                    {...form.register("lastName")}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all" 
                    placeholder="Doe"
                    data-testid="input-last-name"
                  />
                  {form.formState.errors.lastName && (
                    <p className="text-destructive text-sm mt-1">{form.formState.errors.lastName.message}</p>
                  )}
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</Label>
                <Input 
                  type="email" 
                  id="email" 
                  {...form.register("email")}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all" 
                  placeholder="john@example.com"
                  data-testid="input-email"
                />
                {form.formState.errors.email && (
                  <p className="text-destructive text-sm mt-1">{form.formState.errors.email.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">Subject</Label>
                <Input 
                  id="subject" 
                  {...form.register("subject")}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all" 
                  placeholder="Project Inquiry"
                  data-testid="input-subject"
                />
                {form.formState.errors.subject && (
                  <p className="text-destructive text-sm mt-1">{form.formState.errors.subject.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</Label>
                <Textarea 
                  id="message" 
                  {...form.register("message")}
                  rows={5}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none" 
                  placeholder="Tell me about your project..."
                  data-testid="input-message"
                />
                {form.formState.errors.message && (
                  <p className="text-destructive text-sm mt-1">{form.formState.errors.message.message}</p>
                )}
              </div>
              
              <Button 
                type="submit" 
                disabled={contactMutation.isPending}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg font-semibold transition-all hover-lift"
                data-testid="button-send-message"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
