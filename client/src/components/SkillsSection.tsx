import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Cpu, Wrench, Database, Terminal } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

interface SkillCategory {
  id: string;
  title: string;
  icon: any;
  skills: Array<{
    name: string;
    level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
    description?: string;
  }>;
}

export default function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      id: "programming",
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: "Expert", description: "Primary language for research and development" },
        { name: "C++", level: "Intermediate", description: "Working knowledge for robotics applications" },
        { name: "MATLAB", level: "Intermediate", description: "Used for algorithm prototyping and analysis" },
      ]
    },
    {
      id: "frameworks",
      title: "Frameworks & Libraries",
      icon: Database,
      skills: [
        { name: "PyTorch", level: "Advanced", description: "Deep learning and neural networks" },
        { name: "TensorFlow", level: "Advanced", description: "Machine learning model development" },
        { name: "OpenCV", level: "Expert", description: "Computer vision and image processing" },
        { name: "Open3D", level: "Advanced", description: "3D data processing and visualization" },
        { name: "NumPy/Pandas/Matplotlib", level: "Expert", description: "Scientific computing and data analysis" },
        { name: "Scikit-learn", level: "Advanced", description: "Machine learning algorithms" }
      ]
    },
    {
      id: "robotics",
      title: "Robotics Tools",
      icon: Cpu,
      skills: [
        { name: "ROS2", level: "Advanced", description: "Robot Operating System for distributed robotics" },
        { name: "Gazebo", level: "Advanced", description: "Robot simulation and testing" },
        { name: "RViz2", level: "Advanced", description: "Robotics visualization and debugging" },
        { name: "PyBullet", level: "Advanced", description: "Physics simulation and robotics" },
        { name: "Arduino", level: "Intermediate", description: "Microcontroller programming and prototyping" },
        { name: "Raspberry Pi", level: "Intermediate", description: "Embedded systems and IoT applications" }
      ]
    },
    {
      id: "tools",
      title: "3D & Development Tools",
      icon: Wrench,
      skills: [
        { name: "CloudCompare", level: "Advanced", description: "Point cloud processing and analysis" },
        { name: "Fusion 360", level: "Intermediate", description: "CAD design and 3D modeling" },
        { name: "Git", level: "Advanced", description: "Version control and collaboration" },
        { name: "Docker", level: "Intermediate", description: "Containerization and deployment" },
        { name: "LaTeX", level: "Expert", description: "Academic writing and documentation" }
      ]
    },
    {
      id: "environment",
      title: "Environment & Systems",
      icon: Terminal,
      skills: [
        { name: "Linux", level: "Advanced", description: "Primary development environment" },
        { name: "Anaconda/Mamba", level: "Advanced", description: "Python environment management" },
        { name: "CUDA", level: "Intermediate", description: "GPU computing and acceleration" },
        { name: "AWS/Google Cloud", level: "Intermediate", description: "Cloud computing and deployment" }
      ]
    }
  ];

  const getLevelProgress = (level: string) => {
    switch (level) {
      case "Beginner": return 25;
      case "Intermediate": return 50;
      case "Advanced": return 75;
      case "Expert": return 95;
      default: return 0;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "text-muted-foreground";
      case "Intermediate": return "text-primary/80";
      case "Advanced": return "text-primary";
      case "Expert": return "text-primary";
      default: return "text-muted-foreground";
    }
  };

  return (
    <section id="skills" className="min-h-screen flex items-center py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Technical Skills & Expertise
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive technical skillset spanning programming, robotics, AI/ML frameworks, 
                and development tools with hands-on research experience.
              </p>
            </div>
          </ScrollReveal>

          {/* Skills Categories */}
          <StaggerContainer staggerDelay={0.15}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {skillCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <StaggerItem key={category.id}>
                    <Card className="hover-elevate h-full">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <CardTitle className="text-xl">
                            {category.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {category.skills.map((skill) => (
                            <div key={skill.name} className="space-y-2">
                              <div className="flex items-center justify-between">
                                <h4 className="font-medium text-sm">{skill.name}</h4>
                                <Badge 
                                  variant="outline" 
                                  className={`text-xs ${getLevelColor(skill.level)}`}
                                >
                                  {skill.level}
                                </Badge>
                              </div>
                              <Progress 
                                value={getLevelProgress(skill.level)} 
                                className="h-2"
                              />
                              {skill.description && (
                                <p className="text-xs text-muted-foreground">
                                  {skill.description}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                );
              })}
            </div>
          </StaggerContainer>

          {/* Skills Summary */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">3</div>
                <div className="text-sm text-muted-foreground">Programming Languages</div>
              </div>
              <div className="p-6 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
              <div className="p-6 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">5</div>
                <div className="text-sm text-muted-foreground">Skill Categories</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Research Areas */}
          <div className="mt-12">
            <ScrollReveal direction="up" delay={0.1}>
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Research Specializations
              </h3>
            </ScrollReveal>
            <StaggerContainer staggerDelay={0.15}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StaggerItem>
                  <Card className="text-center hover-elevate h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-blue-500/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h4 className="font-semibold mb-2">Computer Vision</h4>
                      <p className="text-sm text-muted-foreground">
                        3D reconstruction, SLAM, object detection, and environmental monitoring
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>
                
                <StaggerItem>
                  <Card className="text-center hover-elevate h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-green-500/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <Cpu className="w-6 h-6 text-green-600 dark:text-green-400" />
                      </div>
                      <h4 className="font-semibold mb-2">Robotics & Control</h4>
                      <p className="text-sm text-muted-foreground">
                        Aerial robotics (UAV, drones), autonomous systems, and path planning
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>
                
                <StaggerItem>
                  <Card className="text-center hover-elevate h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-purple-500/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <Database className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <h4 className="font-semibold mb-2">AI & Machine Learning</h4>
                      <p className="text-sm text-muted-foreground">
                        Deep learning, reinforcement learning, and pattern recognition
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              </div>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
