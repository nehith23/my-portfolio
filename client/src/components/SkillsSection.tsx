import { Code, Cpu, Wrench, Database, Microscope } from "lucide-react";
import { motion } from "framer-motion";

interface SkillCategory {
  id: string;
  title: string;
  icon: any;
  skills: string[];
}

export default function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      id: "programming",
      title: "Programming Languages",
      icon: Code,
      skills: [
        "Python (Proficient)",
        "C++ (Working Knowledge)",
        "MATLAB",
        "LaTeX",
      ],
    },
    {
      id: "frameworks",
      title: "Computer Vision & SLAM",
      icon: Database,
      skills: [
        "ORB-SLAM",
        "COLMAP",
        "OpenCV",
        "Open3D",
        "Object Detection",
        "Sensor Fusion",
        "Multi-sensor Fusion",
        "Point Cloud Processing",
      ],
    },
    {
      id: "robotics",
      title: "Robotics & Simulation",
      icon: Cpu,
      skills: [
        "ROS/ROS2",
        "Gazebo",
        "RViz",
        "Aerostack2",
        "PyBullet",
        "Webots",
        "Arduino",
        "Raspberry Pi",
        "Pinocchio",
      ],
    },
    {
      id: "tools",
      title: "Machine Learning & Development Tools",
      icon: Wrench,
      skills: [
        "PyTorch",
        "TensorFlow",
        "Keras",
        "Scikit-learn",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Git",
        "Docker",
        "Linux",
        "Fusion 360",
        "SolidWorks",
        "3D Printing",
      ],
    },
    {
      id: "research",
      title: "3D Reconstruction & Sensing",
      icon: Microscope,
      skills: [
        "3D Gaussian Splatting",
        "LiDAR Processing",
        "Photogrammetry",
        "CloudCompare",
        "SLAM & Visual Odometry",
        "Motion Planning",
        "Multi-Agent Systems",
        "Reinforcement Learning",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Comprehensive technical skillset spanning robotics perception, AI/ML
            frameworks, and autonomous systems development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="h-full bg-card/30 backdrop-blur-sm border border-white/5 rounded-xl p-8 hover:border-accent/30 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-display font-medium">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm rounded-lg bg-white/5 text-muted-foreground hover:bg-accent/10 hover:text-accent transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
