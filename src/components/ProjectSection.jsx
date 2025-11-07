import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Brain Tumor Classification using Deep Learning",
    description:
      "Developed a deep learning model to classify brain tumors from MRI images with high accuracy.",
    tags: ["Python", "TensorFlow", "Keras", "CNN"],
    image: "/Projects/project-1.webp",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Image Encryption and Decryption using Triple DES",
    description:
      "Implemented a secure Triple DES-based encryption and decryption system for images using Python.",
    tags: ["Python", "Cryptography", "Triple DES"],
    image: "/Projects/download.jpeg",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Image Caption Generation using Deep Learning",
    description:
      "Created an image caption generator using CNN and LSTM models for automated image description generation.",
    tags: ["Python", "TensorFlow", "Keras", "RNN", "CNN"],
    image: "/Projects/project-3.webp",
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative bg-secondary/10">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          I have worked on multiple deep learning and security-based projects,
          including Brain Tumor Classification using Deep Learning, Image
          Encryption and Decryption using Triple DES, and Image Caption
          Generation using CNN and LSTM — blending computer vision and NLP.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-md card-hover border border-border hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Info */}
              <div className="p-6 text-left">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex space-x-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    title={`${project.title} demo`}
                    aria-label={`${project.title} demo`}
                  >
                    <ExternalLink size={20} />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    title={`${project.title} GitHub`}
                    aria-label={`${project.title} GitHub`}
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Bishnu001-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button w-fit inline-flex items-center mx-auto gap-2"
            aria-label="View all projects on GitHub"
          >
            <Github size={16} />
            Check My GitHub
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
