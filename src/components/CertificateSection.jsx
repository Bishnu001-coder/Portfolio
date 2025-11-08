import { ArrowRight, ExternalLink,Github } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "SAP Certified Associate  ABAP Cloud",
    description:
      "Certified by SAP as a Back-End Developer in ABAP Cloud. Acquired expertise in ABAP RESTful Application Programming Model and building secure, scalable business applications on SAP S/4HANA Cloud.",
    image: "Certificates/SAP ABAP cloud certificate.jpg", // ✅ stored in public/Certificates
    link: "https://drive.google.com/file/d/1HrC5yqXApmruCijVP8xhYbeUSeBTRP3b/view?usp=drivesdk ",
  },
  {
    id: 2,
    title: "Google Cybersecurity Certificate",
    description:
      "Earned an industry-recognized certification covering Linux, SQL, SIEM tools, IDS, and Python for security tasks. Developed skills to identify and mitigate cyber threats and prepare for cybersecurity roles.",
    image: "Certificates/Google cybersecurity.jpg",
    link: "https://drive.google.com/file/d/1q3nOgQ2PIXatpuPf_06cLSrPolQdTchC/view?usp=drivesdk  ",
  },
  {
    id: 3,
    title: "Cisco Networking Academy  Introduction to Cybersecuritys",
    description:
      "Completed a foundational course on cybersecurity, learning about online safety, cyber threats, and protection strategies. Gained insight into organizational security measures and cybersecurity career paths.",
    image: "Certificates/CISCO cyberseurity.jpg",
    link: "https://drive.google.com/file/d/1lYmDarFUsmBnFXfu1wyBEFrffiOwwXah/view?usp=drivesdk ",
  },
];

export const CertificateSection = () => {
  return (
    <section id="certificates" className="py-24 px-4 relative bg-secondary/10">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Certificates</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Here are some of my verified certifications that showcase my
          professional growth, technical expertise, and commitment to continuous
          learning.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificates.map((cert) => (
            <article
              key={cert.id}
              className="group bg-card rounded-lg overflow-hidden shadow-md card-hover border border-border hover:shadow-lg transition-all duration-300"
            >
              {/* Certificate Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Info */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                <div className="flex space-x-3">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cosmic-button inline-flex items-center gap-2"
                    title="View Certificate"
                  >
                    View Certificate
                    <ExternalLink size={16} />
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
