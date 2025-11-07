import { useState, useEffect } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    setMeteors(generateMeteors());

    // Regenerate stars when window resizes
    window.addEventListener("resize", generateStars);

    // Optional: regenerate meteors every few seconds
    const meteorInterval = setInterval(() => {
      setMeteors(generateMeteors());
    }, 8000); // every 8 seconds new meteors appear

    return () => {
      window.removeEventListener("resize", generateStars);
      clearInterval(meteorInterval);
    };
  }, []);

  // 🌟 Generate Stars
  const generateStars = () => {
    const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 1000);
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1, // px
        x: Math.random() * 100, // %
        y: Math.random() * 100, // %
        opacity: Math.random() * 0.5 + 0.5,
        blinkSpeed: Math.random() * 3 + 2, // 2–5s random blink
      });
    }

    setStars(newStars);
  };

  // 🌠 Generate Meteors
  const generateMeteors = () => {
    const numberOfMeteors = Math.floor(Math.random() * 3) + 2; // 2–4 meteors
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
       size: Math.random() * 2 + 1,
       x: Math.random() * 100, // %
       y: Math.random() * 20, // %
       delay: Math.random() * 0.5+ 0.5, // s
       animationDuration: Math.random() * 4+2, // px
      });
    }

    return newMeteors;
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* 🌟 Stars */}
      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
          className="star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.y}%`,
            left: `${star.x}%`,
            opacity: star.opacity,
            animationDuration: `${star.blinkSpeed}s`,
          }}
        />
      ))}

      {/* 🌠 Meteors */}
      {meteors.map((meteor) => (
        <div
          key={`meteor-${meteor.id}`}
          className="meteor"
          style={{
            width:meteor.size *50+"px",
            height:meteor.size*2+"px",
            left:meteor.x+"%",
            top:meteor.y+"%",
            animationDelay:meteor.delay,
            animationDuration:meteor.animationDuration+"s",
          }}
        />
      ))}
    </div>
  );
};
