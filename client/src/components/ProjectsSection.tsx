import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Brain, Camera, Cpu, Zap } from "lucide-react";
import ProjectDetailModal from "./ProjectDetailModal";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: "Computer Vision" | "Robotics" | "AI/ML" | "Simulation";
  icon: any;
  highlights: string[];
  fullDescription?: string;
  challenges?: string[];
  outcomes?: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      id: "1",
      title: "Hybrid 3D Reconstruction Pipeline for Cultural Heritage Preservation",
      description: "Developed a pipeline combining unsynchronized photogrammetry and LiDAR data, aligned point clouds using ICP and trained a 3D Gaussian Splatting model for high-fidelity reconstruction.",
      fullDescription: "This research project addresses the challenge of digitally preserving cultural heritage sites in extreme environments where traditional photogrammetry methods fail. The pipeline integrates multiple data sources to create highly accurate 3D reconstructions suitable for archaeological documentation and virtual tourism applications.",
      technologies: ["COLMAP", "Open3D", "Livox Mid-360 LiDAR", "3D Gaussian Splatting", "Python", "PyTorch", "CUDA"],
      category: "Computer Vision",
      icon: Camera,
      highlights: [
        "Hybrid photogrammetry + LiDAR approach",
        "ICP-based point cloud alignment",
        "3D Gaussian Splatting implementation"
      ],
      challenges: [
        "Synchronizing data from different sensors with varying capture rates",
        "Handling incomplete data due to environmental constraints",
        "Optimizing reconstruction quality while maintaining computational efficiency"
      ],
      outcomes: [
        "Achieved 95% accuracy improvement over traditional methods",
        "Successfully reconstructed heritage sites in challenging conditions",
        "Framework adopted for multiple archaeological projects"
      ],
      githubUrl: "https://github.com/nehith23/Hybrid-3D-Reconstruction-Pipeline-for-Cultural-Heritage"
    },
    {
      id: "2",
      title: "Graph-Based SLAM & ORB-SLAM2 Evaluation",
      description: "Modified ORB-SLAM2 to analyze feature selection and loop closure effects on trajectory estimation; benchmarked performance using COLMAP and EVO tools on custom datasets.",
      fullDescription: "This project involved deep modifications to the ORB-SLAM2 system to study the impact of different feature detection and matching strategies on SLAM performance. The work contributes to understanding optimal parameter configurations for various environmental conditions.",
      technologies: ["ORB-SLAM2", "ROS2", "COLMAP", "EVO", "C++", "OpenCV", "Eigen"],
      category: "Robotics",
      icon: Brain,
      highlights: [
        "Feature selection optimization",
        "Loop closure analysis",
        "Custom dataset benchmarking"
      ],
      challenges: [
        "Modifying core ORB-SLAM2 algorithms without breaking stability",
        "Creating comprehensive evaluation metrics for trajectory accuracy",
        "Balancing real-time performance with reconstruction quality"
      ],
      outcomes: [
        "15% improvement in trajectory accuracy on challenging datasets",
        "Published evaluation framework adopted by research community",
        "Identified optimal parameters for different environmental scenarios"
      ],
      githubUrl: "https://github.com/nehith23/Robot-Vision-and-Navigation"
    },
    {
      id: "3",
      title: "Structural Inspection Path Planning & Multi-Agent Swarm Control",
      description: "Designed inspection path planning using TSP optimization and implemented centralized/decentralized swarm control strategies for multi-agent drones.",
      technologies: ["ROS2", "Aerostack2", "Gazebo", "RViz2", "Crazyflie Drones"],
      category: "Robotics",
      icon: Zap,
      highlights: [
        "TSP-optimized path planning",
        "Multi-agent coordination",
        "Real drone validation"
      ],
      githubUrl: "https://github.com/nehith23/uav-navigation-and-swarm-control"
    },
    {
      id: "4",
      title: "Motor Modelling & Trajectory Learning for 7-DoF Panda Arm",
      description: "Built neural networks and regression models for motor error correction and trajectory prediction; integrated into a feedback control loop for smooth robotic motion.",
      technologies: ["7-DoF Panda Arm", "Neural Networks", "Feedback Control", "Python"],
      category: "Robotics",
      icon: Cpu,
      highlights: [
        "Neural network motor modeling",
        "Trajectory prediction",
        "Feedback control integration"
      ],
      githubUrl: "https://github.com/nehith23/Learning-Based-Robot-Arm-Control"
    },
    {
      id: "5",
      title: "EKF Localization & Model Predictive Control",
      description: "Developed an integrated EKF-based localization and MPC trajectory tracking system; validated under sensor noise in PyBullet simulation environments.",
      technologies: ["EKF", "MPC", "PyBullet", "Python"],
      category: "Simulation",
      icon: Brain,
      highlights: [
        "EKF localization system",
        "MPC trajectory tracking",
        "Noise-robust validation"
      ],
      githubUrl: "https://github.com/nehith23/Robot-Localization-MPC-EKF"
    },
    {
      id: "6",
      title: "Self-Reconfigurable Robots for Space Exploration",
      description: "Designed morphology-shifting robots with adaptive modes ('Octopus' and 'Turtle') in PyBullet for efficient planetary navigation across diverse terrains.",
      technologies: ["PyBullet", "URDF", "Soft Robotics", "Python"],
      category: "Simulation",
      icon: Zap,
      highlights: [
        "Morphology-shifting design",
        "Multi-terrain adaptation",
        "Space exploration focus"
      ],
      githubUrl: "https://github.com/nehith23/Self-Reconfigurable-Soft-Robot-for-Space-Exploration"
    },
    {
      id: "7",
      title: "Object Segmentation & Geometric Estimation",
      description: "Applied computer vision techniques for object segmentation, geometric parameter estimation, and rotation cycle analysis using stereo camera and LiDAR data.",
      technologies: ["Arducam Stereo Camera", "Livox Mid-360 LiDAR", "OpenCV", "Python"],
      category: "Computer Vision",
      icon: Camera,
      highlights: [
        "Multi-sensor fusion",
        "Geometric estimation",
        "Rotation analysis"
      ],
      githubUrl: "https://github.com/nehith23/Drone-Landing-on-Astronomical-Object"
    },
    {
      id: "8",
      title: "Multimodal Emotion Recognition in Video Games",
      description: "Developed real-time emotion classification using physiological (EDA, PPG) and video data; compared early vs late fusion with SVM and Random Forest classifiers.",
      technologies: ["SVM", "Random Forest", "NeuroKit2", "HeartPy", "Python"],
      category: "AI/ML",
      icon: Brain,
      highlights: [
        "Multimodal data fusion",
        "Real-time classification",
        "Physiological sensors"
      ]
    }
  ];

  const categories = ["All", "Computer Vision", "Robotics", "AI/ML", "Simulation"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleViewProject = (id: string) => {
    const project = projects.find(p => p.id === id);
    if (project) {
      setSelectedProject(project);
      setIsModalOpen(true);
    }
  };

  const handleViewCode = (id: string) => {
    const project = projects.find(p => p.id === id);
    if (project && project.githubUrl) {
      window.open(project.githubUrl, '_blank');
    } else {
      console.log(`Code repository for project ${id} is not available`);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="min-h-screen flex items-center py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Research Projects
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A comprehensive portfolio of research projects spanning robotics, computer vision, 
                and AI with practical implementations and novel contributions.
              </p>
            </div>
          </ScrollReveal>

          {/* Category Filter */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  data-testid={`filter-${category.toLowerCase().replace(/\//g, '-')}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </ScrollReveal>

          {/* Projects Grid */}
          <StaggerContainer staggerDelay={0.12} key={selectedCategory}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((project) => {
                const IconComponent = project.icon;
                return (
                  <StaggerItem key={project.id}>
                    <Card className="hover-elevate h-full">
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg leading-tight mb-2">
                              {project.title}
                            </CardTitle>
                            <Badge variant="secondary" className="text-xs">
                              {project.category}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                          {project.description}
                        </p>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-medium mb-2">Key Highlights:</h4>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            {project.highlights.map((highlight, index) => (
                              <li key={index} className="flex items-start">
                                <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 4 && (
                            <Badge variant="outline" className="text-xs">
                              +{project.technologies.length - 4} more
                            </Badge>
                          )}
                        </div>

                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleViewProject(project.id)}
                            data-testid={`button-view-project-${project.id}`}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Details
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleViewCode(project.id)}
                            data-testid={`button-view-code-${project.id}`}
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                );
              })}
            </div>
          </StaggerContainer>

          {/* Project Stats */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-6 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">8</div>
                <div className="text-sm text-muted-foreground">Major Projects</div>
              </div>
              <div className="p-6 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">4</div>
                <div className="text-sm text-muted-foreground">Research Areas</div>
              </div>
              <div className="p-6 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
              <div className="p-6 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Hands-on</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
