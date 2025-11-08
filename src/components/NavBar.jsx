import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-[1000] transition-all duration-300 backdrop-blur-sm",
        isScrolled ? "bg-background/20 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
        {/* 🌟 Logo */}
        <button
          onClick={() => {
            const section = document.querySelector("#home");
            if (section) section.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-3xl font-extrabold flex items-center hover:scale-105 transition-transform"
        >
          <span className="relative z-10">
            <span className="text-glow text-[hsl(var(--primary))]">Bishnu</span>{" "}
            Portfolio
          </span>
        </button>

        {/* 🖥️ Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                const section = document.querySelector(item.href);
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-lg font-semibold text-foreground hover:text-[hsl(var(--primary))] transition-transform duration-300 transform hover:scale-110"
            >
              {item.name}
            </button>
          ))}
          <div className="ml-6">
            <ThemeToggle />
          </div>
        </div>

        {/* 📱 Mobile Menu */}
        <button
          className="md:hidden text-foreground hover:text-[hsl(var(--primary))] transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/80 backdrop-blur-md border-t border-border shadow-md">
          <div className="flex flex-col items-center space-y-5 py-5">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  const section = document.querySelector(item.href);
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
                className="text-lg font-semibold text-foreground hover:text-[hsl(var(--primary))] transition-transform duration-300 transform hover:scale-110"
              >
                {item.name}
              </button>
            ))}
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};
