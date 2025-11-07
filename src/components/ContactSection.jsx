import { Mail, Phone, MapPin, Instagram, Linkedin, Send } from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useRef } from "react";

export const ContactSection = () => {
  const { success, error } = useToast();
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Show success toast
    success("Your message has been sent successfully!");

    // ✅ Reset form fields
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to collaborate. Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-primary" />
                <a
                  href="mailto:bishnumaharan001@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  bishnumaharan001@gmail.com
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-primary" />
                <a
                  href="tel:+916371336539"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 6371336539
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-primary" />
                <p className="text-muted-foreground">Bengaluru, India</p>
              </div>

              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Bishnu..."
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  placeholder="Hello, I'd like to discuss..."
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                <Send size={16} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
