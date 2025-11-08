import { useState } from "react";
import introVideo from "@/assets/introVideo.mp4";

export const IntroVideo = ({ onVideoEnd }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [done, setDone] = useState(false);

  const handleVideoEnd = () => {
    setFadeOut(true);
    setTimeout(() => {
      setDone(true);
      onVideoEnd();
    }, 1000); // smooth + quick fade
  };

  if (done) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ backgroundColor: "black" }} // always black behind video
    >
      <video
        src={introVideo}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="w-full h-full object-cover"
      />
    </div>
  );
};
