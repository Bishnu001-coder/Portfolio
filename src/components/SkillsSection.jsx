import { useState } from "react";

export const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const skills = [
    // 🧠 Programming
    { name: "Java", level: 90, category: "Programming" },
    { name: "Python", level: 75, category: "Programming" },
    { name: "DSA (Data Structures & Algorithms)", level: 70, category: "Programming" },

    // 🎨 Frontend
    { name: "HTML", level: 90, category: "Frontend" },
    { name: "CSS", level: 85, category: "Frontend" },
    { name: "JavaScript", level: 80, category: "Frontend" },

    // ⚙️ Tools
    { name: "DBMS", level: 85, category: "Tools" },
    { name: "SQL", level: 80, category: "Tools" },
    { name: "MySQL", level: 80, category: "Tools" },
    { name: "Oracle", level: 75, category: "Tools" },
    { name: "SAP ABAP (Basic)", level: 70, category: "Tools" },
    { name: "SAP GUI", level: 70, category: "Tools" },
    { name: "TensorFlow", level: 65, category: "Tools" },
    { name: "Google Colab", level: 65, category: "Tools" },

    // 🔐 Cybersecurity
    { name: "Cloud Security", level: 70, category: "Cybersecurity" },
    { name: "Threat & Vulnerability Management", level: 68, category: "Cybersecurity" },
    { name: "Risk Assessment", level: 65, category: "Cybersecurity" },
    { name: "IAM (Access Management)", level: 65, category: "Cybersecurity" },
  ];

  const categories = ["All", "Programming", "Frontend", "Tools", "Cybersecurity"];

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        {/* 🔹 Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* 🔹 Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-transparent border-primary/40 text-foreground hover:bg-primary/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 🔹 Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-card/70 border border-border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium text-foreground">{skill.name}</span>
                <span className="text-muted-foreground text-sm">{skill.level}%</span>
              </div>
              <div className="w-full bg-secondary/40 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full animate-[grow_1.5s_ease-out_forwards]"
                  style={{
                    width: `${skill.level}%`,
                    animation: "grow 1.5s ease-out forwards",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
