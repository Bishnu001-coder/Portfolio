import { useState, useEffect } from "react";
import { IntroVideo } from "../components/IntroVideo";
import { StarBackground } from "../components/StarBackground";
import { NavBar } from "../components/NavBar";
import { HomeSection } from "../components/HomeSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
export const Home = () => {
  const [showStars, setShowStars] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  // ✅ Detect theme and observe changes
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const darkActive = storedTheme === "dark";
    setIsDarkMode(darkActive);

    if (darkActive) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");

    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // 🎬 When the video ends
  const handleVideoEnd = () => {
    setVideoEnded(true);

    // Stars appear first
    setTimeout(() => setShowStars(true), 100);

    // Navbar fades in next
    setTimeout(() => setShowNavbar(true), 600);

    // Content appears after that
    setTimeout(() => setShowContent(true), 1000);
  };

  // ✅ Background — black for dark mode, white for light
  const backgroundClass = isDarkMode ? "bg-black" : "bg-white";

  return (
    <div
      className={`relative min-h-screen ${backgroundClass} text-foreground overflow-hidden transition-colors duration-500`}
    >
      {/* 🎬 Intro video plays first */}
      <IntroVideo onVideoEnd={handleVideoEnd} />

      {/* 🌌 Stars only after video ends in dark mode */}
      {videoEnded && isDarkMode && showStars && (
        <div className="absolute inset-0 z-0">
          <StarBackground />
        </div>
      )}

      {/* 🧭 Navbar — only visible after video ends */}
      {showNavbar && (
        <div className="fixed top-0 left-0 w-full z-[1000] animate-fade-in">
          <NavBar />
        </div>
      )}

      {/* 🏠 Main Content */}
      {showContent && (
        <main className="relative z-20 animate-fade-in">
          <HomeSection />
          <AboutSection />
          <SkillsSection />
          <ProjectSection/>
          <ContactSection/>
         <Footer />
        </main>
       
      )}
    </div>
  );
};
