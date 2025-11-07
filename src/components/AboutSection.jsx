import { Briefcase, Code, User } from "lucide-react";
 

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-6 text-foreground bg-transparent"
    >
      <div className="container mx-auto max-w-6xl">
        {/* 🌟 Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center animate-fade-in">
          About <span className="text-primary text-glow">Me</span>
        </h2>

        {/* 🧱 Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* 👨‍💻 Left: Description */}
          <div className="space-y-6 animate-fade-in-delay-1">
            <h3 className="text-2xl font-semibold text-primary">
              Passionate Web Developer & Tech Explorer
            </h3>

            <p className="text-lg text-muted-foreground leading-relaxed">
              A passionate and detail-oriented{" "}
              <span className="text-primary font-semibold">
                Computer Science Engineer
              </span>{" "}
              with strong skills in{" "}
              <span className="text-primary">Java</span>,{" "}
              <span className="text-primary">MySQL</span>,{" "}
              <span className="text-primary">JavaScript</span>, and{" "}
              <span className="text-primary">Python</span>. I enjoy building
              efficient software solutions and have a growing interest in{" "}
              <span className="text-primary">cybersecurity</span>,{" "}
              <span className="text-primary">data visualization</span>, and{" "}
              <span className="text-primary">deep learning</span>.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I am{" "}
              <span className="font-semibold text-primary">
                SAP Certified (ABAP Cloud)
              </span>{" "}
              and have completed professional certifications from{" "}
              <span className="text-primary">Google</span> and{" "}
              <span className="text-primary">Cisco</span> in cybersecurity. My
              goal is to continuously improve my technical expertise while
              contributing to innovative and impactful projects that make a
              real-world difference.
            </p>

            {/* 🔘 Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center sm:justify-start">
              <a href="#contact" className="cosmic-button text-center">
                Get in Touch
              </a>

              {/* ✅ Resume View */}
              <a
                href="https://drive.google.com/file/d/1lEgPXQIkNifhb5Zab64TOYnBAvJq5DsB/view?usp=drivesdk "
                className="px-6 py-2 rounded-full border border-primary text-primary font-medium hover:bg-primary/10 transition-all duration-300 text-center"
              >
                View Resume
              </a>
            </div>
          </div>

          {/* 💼 Right: Info Cards */}
          <div className="grid grid-cols-1 gap-8 animate-fade-in-delay-2">
            {/* Card 1 */}
            <div className="gradient-border p-6 card-hover animate-fade-in-delay-1">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-7 w-7 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive and modern web applications with
                    clean, efficient code.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="gradient-border p-6 card-hover animate-fade-in-delay-2">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-7 w-7 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Creative Problem Solver
                  </h4>
                  <p className="text-muted-foreground">
                    Skilled in designing efficient solutions and tackling
                    real-world challenges.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="gradient-border p-6 card-hover animate-fade-in-delay-3">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-7 w-7 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Continuous Learner
                  </h4>
                  <p className="text-muted-foreground">
                    Always exploring new technologies and improving through
                    self-learning and certifications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
