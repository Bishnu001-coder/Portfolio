import { Github, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative w-full bg-background/30 backdrop-blur-sm border-t border-border py-8 mt-16 z-30">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        
        {/* 🌙 Left — Brand */}
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} <span className="text-primary font-semibold">Bishnu Prasad Maharana</span>. All rights reserved.
        </p>

        {/* 🔗 Center — Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm text-muted-foreground">
          <a href="#home" className="hover:text-primary transition-colors">Home</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>

        {/* 🌐 Right — Social Icons */}
        <div className="flex space-x-5 text-muted-foreground justify-center md:justify-end">
          <a
            href="https://github.com/Bishnu001-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/bishnu-prasad-maharana-1438b7258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/bishnu_maharana_?utm_source=qr&igsh=a2E2MzVlNG1mc2l5 "
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
