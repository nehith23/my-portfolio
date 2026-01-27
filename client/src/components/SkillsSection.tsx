import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Cpu, Wrench, Database, Terminal } from "lucide-react";
import { motion } from "framer-motion";

interface SkillCategory {
  id: string;
  title: string;
  icon: any;
  skills: Array<{
    name: string;
    level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
    description?: string;
    proficiency: number;
  }>;
}

export default function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      id: "programming",
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: "Expert", description: "Primary language for research and development", proficiency: 95 },
        { name: "C++", level: "Intermediate", description: "Working knowledge for robotics applications", proficiency: 70 },
        { name: "MATLAB", level: "Intermediate", description: "Used for algorithm prototyping and analysis", proficiency: 65 },
      ]
    },
    {
      id: "frameworks",
      title: "Frameworks & Libraries",
      icon: Database,
      skills: [
        { name: "PyTorch", level: "Advanced", description: "Deep learning and neural networks", proficiency: 85 },
        { name: "TensorFlow", level: "Advanced", description: "Machine learning model development", proficiency: 80 },
        { name: "OpenCV", level: "Expert", description: "Computer vision and image processing", proficiency: 90 },
        { name: "Open3D", level: "Advanced", description: "3D data processing and visualization", proficiency: 80 },
        { name: "NumPy/Pandas", level: "Expert", description: "Scientific computing and data analysis", proficiency: 95 },
      ]
    },
    {
      id: "robotics",
      title: "Robotics Tools",
      icon: Cpu,
      skills: [
        { name: "ROS2", level: "Advanced", description: "Robot Operating System for distributed robotics", proficiency: 85 },
        { name: "Gazebo", level: "Advanced", description: "Robot simulation and testing", proficiency: 80 },
        { name: "RViz2", level: "Advanced", description: "Robotics visualization and debugging", proficiency: 80 },
        { name: "PyBullet", level: "Advanced", description: "Physics simulation and robotics", proficiency: 75 },
      ]
    },
    {
      id: "tools",
      title: "Development Tools",
      icon: Wrench,
      skills: [
        { name: "Git", level: "Advanced", description: "Version control and collaboration", proficiency: 90 },
        { name: "Docker", level: "Intermediate", description: "Containerization and deployment", proficiency: 70 },
        { name: "CloudCompare", level: "Advanced", description: "Point cloud processing", proficiency: 85 },
        { name: "Linux", level: "Advanced", description: "Primary development environment", proficiency: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive technical skillset spanning robotics perception, AI/ML frameworks,
            and autonomous systems development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    <h3 className="text-2xl font-display font-medium">{category.title}</h3>
                  </div>

                  <div className="space-y-8">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="group">
                        <div className="flex justify-between items-baseline mb-2">
                          <h4 className="font-medium text-lg group-hover:text-accent transition-colors">
                            {skill.name}
                          </h4>
                          <span className="text-xs font-mono text-muted-foreground/60 uppercase tracking-wider">
                            {skill.level}
                          </span>
                        </div>

                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mb-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-full bg-accent/80 rounded-full"
                          />
                        </div>

                        {skill.description && (
                          <p className="text-sm text-muted-foreground line-clamp-1">
                            {skill.description}
                          </p>
                        )}
                      </div>
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
