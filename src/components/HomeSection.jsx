import { ArrowDown } from "lucide-react";

export const HomeSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-snug">
            <span className="opacity-0 animate-fade-in">Hi</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1 ml-2">
              I’m
            </span>
            <span className="ml-2 text-glow text-primary opacity-0 animate-fade-in-delay-2">
              Bishnu
            </span>
          </h1>
          <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto animate-fade-in-delay-3">
            A passionate developer crafting clean, creative, and interactive web experiences.
          </p>
          <div className="pt-2 opacity-0 max-w-2xl mx-auto animate-fade-in-delay-4" >
            <button
  onClick={() => {
    const section = document.querySelector("#projects");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  }}
  className="cosmic-button"
>
  View My Work
</button>

          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/1.7 transform-translate-x-1/2 flex flex-col items-center animate-bounce">
      <span className="text-sm text-muted-foreground mb-2 ">Scroll</span>
      <ArrowDown className="h-5 w-5 text-primary"/>
      </div>
    </section>
  );
};
