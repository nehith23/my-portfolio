import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Brain, Camera, Cpu, Zap, ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectDetailModal from "./ProjectDetailModal";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: "Computer Vision" | "Robotics" | "AI/ML";
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
      fullDescription: "This master's research project investigates hybrid 3D reconstruction for cultural heritage documentation by fusing unsynchronized photogrammetry and LiDAR datasets into metrically consistent models. The work demonstrates how neural rendering via 3D Gaussian Splatting can enhance photometric realism while maintaining metric accuracy using consumer-grade hardware.",
      technologies: ["COLMAP", "Open3D", "LiDAR", "3D Gaussian Splatting", "PyTorch"],
      category: "Computer Vision",
      icon: Camera,
      highlights: [
        "Unsynchronized photogrammetry-LiDAR fusion",
        "Neural rendering with 3D Gaussian Splatting",
        "Controlled illumination study"
      ],
      challenges: [
        "Resolving photogrammetric scale ambiguity through LiDAR-based ICP alignment",
        "Fusing unsynchronized sensor data with varying capture rates",
        "Achieving high-quality results with consumer-grade hardware"
      ],
      outcomes: [
        "Demonstrated reproducible ICP-based alignment without survey-grade control points",
        "Validated 3D Gaussian Splatting for heritage workflows",
        "Proof of concept for low-cost, high-quality 3D documentation"
      ],
      githubUrl: "https://github.com/nehith23/Hybrid-3D-Reconstruction-Pipeline-for-Cultural-Heritage"
    },
    {
      id: "2",
      title: "Graph-Based SLAM & ORB-SLAM2 Evaluation",
      description: "Modified ORB-SLAM2 to analyze feature selection and loop closure effects on trajectory estimation; benchmarked performance using COLMAP and EVO tools.",
      fullDescription: "This project documents major tasks in localization, mapping, and state estimation. It compares classical filtering methods (EKF) with modern graph-based optimization techniques (g2o/ORB-SLAM2) applied to real-world and benchmark datasets.",
      technologies: ["ORB-SLAM2", "ROS2", "COLMAP"],
      category: "Robotics",
      icon: Brain,
      highlights: [
        "Factor graph SLAM outperforming EKF",
        "Systematic ORB-SLAM2 parameter evaluation",
        "Custom SfM reconstruction"
      ],
      challenges: [
        "Implementing factor graph frameworks for real-time SLAM",
        "Managing computational efficiency with loop closure",
        "Handling cumulative drift in large-scale environments"
      ],
      outcomes: [
        "Factor graphs prevented cumulative drift better than sequential EKF",
        "Identified optimal feature counts for KITTI accuracy",
        "Generated detailed 3D point clouds for indoor/outdoor scenes"
      ],
      githubUrl: "https://github.com/nehith23/Robot-Vision-and-Navigation"
    },
    {
      id: "3",
      title: "Structural Inspection Path Planning & Multi-Agent Swarm",
      description: "Designed inspection path planning using TSP optimization and implemented centralized/decentralized swarm control strategies for multi-agent drones.",
      fullDescription: "Research progressing from single-agent path planning to multi-agent swarm coordination. Simulates structural inspection using Simulated Annealing for TSP and A* for collision-free 3D planning. Implementation of centralized vs decentralized control for formation flight.",
      technologies: ["Python", "ROS2", "Simulated Annealing", "A*", "Swarm Intelligence"],
      category: "Robotics",
      icon: Zap,
      highlights: [
        "TSP optimization via Simulated Annealing",
        "3D A* pathfinding with voxel obstacle avoidance",
        "Hybrid swarm control strategies"
      ],
      challenges: [
        "Optimizing waypoint visit order in 3D",
        "Real-time pathfinding in dense obstacle fields",
        "Managing emergent behavior in Boids-based swarms"
      ],
      outcomes: [
        "100% success rate in single-agent inspection tasks",
        "Superior scalability with decentralized control",
        "Identified hybrid approach as optimal for precision vs exploration"
      ],
      githubUrl: "https://github.com/nehith23/uav-navigation-and-swarm-control"
    },
    {
      id: "4",
      title: "Motor Modelling & Trajectory Learning for 7-DoF Panda Arm",
      description: "Built neural networks to correct motor models and predict trajectories from Cartesian goals, integrated into a feedback control loop.",
      fullDescription: "Applying data-driven techniques to control a simulated 7-DoF Franka Panda robot. Learning correction terms for erroneous motor models and training regressors to predict full joint trajectories from Cartesian goals.",
      technologies: ["PyTorch", "Franka Panda", "Neural Networks", "Feedback Control"],
      category: "Robotics",
      icon: Cpu,
      highlights: [
        "MLP-based correction learning for motor models",
        "Trajectory generation from Cartesian goals",
        "Smoothness analysis of MLP vs Random Forest"
      ],
      challenges: [
        "Learning corrections for systematic model errors",
        "Predicting smooth 7-joint trajectories from sparse inputs",
        "Mitigating discontinuities in regression outputs"
      ],
      outcomes: [
        "Validated MLP effectiveness for motor model correction",
        "Produced smoother trajectories compared to Random Forest",
        "Feasibility of learned inverse kinematics/dynamics"
      ],
      githubUrl: "https://github.com/nehith23/Learning-Based-Robot-Arm-Control"
    },
    {
      id: "5",
      title: "EKF Localization & Model Predictive Control",
      description: "Integrated EKF-based localization with MPC trajectory tracking, validated under sensor noise in PyBullet simulation.",
      fullDescription: "Robust localization and control system for a differential drive robot using Model Predictive Control (MPC) for real-time tracking and Extended Kalman Filter (EKF) for state estimation under noisy conditions.",
      technologies: ["MPC", "EKF", "PyBullet", "Python", "Control Theory"],
      category: "Robotics",
      icon: Brain,
      highlights: [
        "Real-time EKF state estimation",
        "MPC optimization with constraints",
        "Closed-loop adaptive control"
      ],
      challenges: [
        "Filtering varying levels of sensor noise",
        "Balancing MPC horizon with real-time performance",
        "Synchronizing estimation and control loops"
      ],
      outcomes: [
        "Stable navigation under noisy conditions",
        "Robust target stabilization",
        "Validated combined EKF-MPC architecture"
      ],
      githubUrl: "https://github.com/nehith23/Robot-Localization-MPC-EKF"
    },
    {
      id: "6",
      title: "Self-Reconfigurable Robots for Space Exploration",
      description: "Designed morphology-shifting robots in PyBullet with adaptive 'Octopus' and 'Turtle' modes for planetary navigation.",
      fullDescription: "Concept for a self-reconfigurable soft robot for planetary exploration. Autonomously switches between 'Turtle Mode' for efficient rolling and 'Octopus Mode' for crawling traversal of unstructured terrain.",
      technologies: ["PyBullet", "Soft Robotics", "Python", "Simulation"],
      category: "Robotics",
      icon: Zap,
      highlights: [
        "Bio-inspired morphological adaptation",
        "Dual locomotion modes (Rolling/Crawling)",
        "Procedurally generated terrain testing"
      ],
      challenges: [
        "Simulating soft-body deformation in rigid-body engines",
        "Generating traction for crawling motion",
        "Autonomous mode switching logic"
      ],
      outcomes: [
        "Stable rolling locomotion on uneven terrain",
        "Validated morphology switching strategy",
        "Feasibility for multi-terrain planetary missions"
      ],
      githubUrl: "https://github.com/nehith23/Self-Reconfigurable-Soft-Robot-for-Space-Exploration"
    },
    {
      id: "7",
      title: "Drone Landing on Astronomical Object",
      description: "Applied computer vision for segmentation, geometric estimation, and rotation analysis using stereo camera and LiDAR data.",
      fullDescription: "Perception algorithms for autonomous drone landing in space. Integrates segmentation, motion tracking, and rotation analysis to estimate geometric and dynamic properties of a target object.",
      technologies: ["OpenCV", "Stereo Vision", "LiDAR", "RANSAC", "features"],
      category: "Computer Vision",
      icon: Camera,
      highlights: [
        "Multi-method image segmentation",
        "Stereo depth for geometric estimation",
        "Rotation cycle detection"
      ],
      challenges: [
        "Robust segmentation under varying illumination",
        "Extracting geometry from noisy point clouds",
        "Real-time rotation estimation"
      ],
      outcomes: [
        "High segmentation accuracy (IoU/AUC)",
        "Precise geometric parameter extraction",
        "Actionable velocity estimates for control"
      ],
      githubUrl: "https://github.com/nehith23/Drone-Landing-on-Astronomical-Object"
    },
    {
      id: "8",
      title: "Multimodal Affective State Classification",
      description: "Real-time emotion classification using physiological signals (EDA, PPG) and ML models during cooperative gameplay.",
      fullDescription: "Classifying player affective state (Aroused vs Calm) using multimodal sensor data. Compared early vs late fusion strategies with SVM and Random Forest classifiers.",
      technologies: ["Machine Learning", "SVM", "Physiological Computing", "Python"],
      category: "AI/ML",
      icon: Brain,
      highlights: [
        "Early fusion multimodal strategy",
        "SVM classification of affective states",
        "Real-time signal processing"
      ],
      challenges: [
        "Inter-individual physiological variability",
        "Class imbalance handling",
        "Noisy signal feature extraction"
      ],
      outcomes: [
        "75% accuracy with early fusion SVM",
        "Demonstrated feasibility for gameplay adaptation",
        "Effective multimodal integration"
      ],
      githubUrl: "https://github.com/nehith23/Multimodal-Affective-State-Classification-in-Video-Games"
    }
  ];

  const categories = ["All", "Computer Vision", "Robotics", "AI/ML"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const filteredByCategory = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const filteredProjects = showAll ? filteredByCategory : filteredByCategory.slice(0, 4);
  const hasMore = filteredByCategory.length > 4;

  const handleViewProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="min-h-screen py-24 bg-background relative">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-medium mb-6"
          >
            Projects
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="w-full h-[1px] bg-white/10 mb-8"
          />

          {/* Categories */}
          <div className="flex flex-wrap gap-4">
            {categories.map((category, idx) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-sm tracking-widest uppercase py-2 px-1 relative transition-colors ${selectedCategory === category ? "text-accent" : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {category}
                {selectedCategory === category && (
                  <motion.div
                    layoutId="categoryIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative h-full"
              >
                <div
                  className="h-full bg-card/30 backdrop-blur-sm border border-white/5 p-8 rounded-xl hover:border-accent/30 transition-all duration-300 flex flex-col cursor-pointer"
                  onClick={() => handleViewProject(project)}
                >
                  <div className="flex justify-between items-start mb-6">
                    <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 font-normal tracking-wide">
                      {project.category}
                    </Badge>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transform group-hover:translate-x-1 transition-all" />
                  </div>

                  <h3 className="text-2xl font-display font-medium mb-4 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed flex-grow mb-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map(tech => (
                      <span key={tech} className="text-xs px-2 py-1 rounded-md bg-white/5 text-muted-foreground/70 uppercase tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More / Show Less */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 text-sm uppercase tracking-widest text-accent border border-accent/30 rounded-xl hover:bg-accent/10 transition-all duration-300"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </motion.div>
        )}
      </div>

      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
