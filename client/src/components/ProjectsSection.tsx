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
      fullDescription: "This master's research project investigates hybrid 3D reconstruction for cultural heritage documentation by fusing unsynchronized photogrammetry and LiDAR datasets into metrically consistent models. The work demonstrates how neural rendering via 3D Gaussian Splatting can enhance photometric realism while maintaining metric accuracy using consumer-grade hardware. The complete workflow integrates three main stages: sparse and dense photogrammetric reconstruction using COLMAP, LiDAR point cloud integration using ICP alignment to resolve scale ambiguity, and neural rendering for photometrically consistent digital twins.",
      technologies: ["COLMAP", "Open3D", "Livox Mid-360 LiDAR", "3D Gaussian Splatting", "Python", "PyTorch", "CUDA"],
      category: "Computer Vision",
      icon: Camera,
      highlights: [
        "First demonstration of unsynchronized photogrammetry-LiDAR fusion with neural rendering validation",
        "ICP-based alignment solving scale ambiguity without survey-grade control",
        "Controlled illumination study quantifying lighting effects on hybrid 3D reconstruction"
      ],
      challenges: [
        "Resolving photogrammetric scale ambiguity through LiDAR-based ICP alignment",
        "Fusing unsynchronized sensor data with varying capture rates and coordinate frames",
        "Quantifying lighting intensity effects on both geometric and photometric reconstruction quality",
        "Achieving high-quality results with consumer-grade hardware (iPhone 15 Pro, Livox Mid-360)"
      ],
      outcomes: [
        "Successfully demonstrated reproducible ICP-based alignment without survey-grade control points",
        "Validated 3D Gaussian Splatting for heritage-oriented workflows using consumer hardware",
        "Proof of concept for low-cost, high-quality 3D documentation accessible to small institutions",
        "Developed evaluation framework comparing still versus video capture strategies"
      ],
      githubUrl: "https://github.com/nehith23/Hybrid-3D-Reconstruction-Pipeline-for-Cultural-Heritage"
    },
    {
      id: "2",
      title: "Graph-Based SLAM & ORB-SLAM2 Evaluation",
      description: "Modified ORB-SLAM2 to analyze feature selection and loop closure effects on trajectory estimation; benchmarked performance using COLMAP and EVO tools on custom datasets.",
      fullDescription: "This comprehensive project documents three major tasks in localization, mapping, and state estimation. The work compares classical filtering methods (EKF) with modern graph-based optimization techniques (g2o/ORB-SLAM2) applied to real-world and benchmark datasets (TUM, KITTI). Project includes factor graph-based state estimation for 2D mobile robots, systematic ORB-SLAM2 evaluation on benchmark datasets examining parameter sensitivity, and custom 3D reconstruction using structure-from-motion techniques.",
      technologies: ["ORB-SLAM2", "ROS2", "COLMAP", "EVO", "C++", "OpenCV", "Eigen", "g2o", "Python"],
      category: "Robotics",
      icon: Brain,
      highlights: [
        "Factor graph SLAM outperforming EKF in noisy scenarios through re-linearization",
        "Systematic ORB-SLAM2 parameter evaluation on TUM and KITTI datasets",
        "Custom SfM reconstruction comparing COLMAP with ORB-SLAM2 on self-captured sequences"
      ],
      challenges: [
        "Implementing and optimizing factor graph frameworks for real-time SLAM applications",
        "Balancing feature count reduction with trajectory accuracy maintenance",
        "Managing computational efficiency while maintaining global consistency through loop closure",
        "Handling cumulative drift in large-scale outdoor environments (KITTI)"
      ],
      outcomes: [
        "Demonstrated factor graphs prevent cumulative drift better than sequential EKF updates",
        "Identified optimal feature count (1500) improving KITTI accuracy to RMSE 4.91m",
        "Confirmed loop closure criticality: disabling caused 6.51m RMSE drift on KITTI",
        "Successfully generated detailed 3D point clouds for indoor corridors and outdoor street scenes"
      ],
      githubUrl: "https://github.com/nehith23/Robot-Vision-and-Navigation"
    },
    {
      id: "3",
      title: "Structural Inspection Path Planning & Multi-Agent Swarm Control",
      description: "Designed inspection path planning using TSP optimization and implemented centralized/decentralized swarm control strategies for multi-agent drones.",
      fullDescription: "This comprehensive UAV research progressed from solving single-agent path planning to multi-agent swarm coordination. The first project simulates structural inspection scenarios (like bridge inspection), using Simulated Annealing to solve TSP for optimal waypoint sequencing and A* algorithm for collision-free 3D path planning through voxel grids. The second project escalates to multi-drone coordination, implementing and comparing centralized control (Leader-Follower, MAPF with A*) versus decentralized control (Boids model) for formation flight, narrow passage traversal, and dynamic obstacle avoidance.",
      technologies: ["Python", "NumPy", "Matplotlib", "NetworkX", "PyBullet", "ROS2", "Simulated Annealing", "A*", "MAPF", "Boids"],
      category: "Robotics",
      icon: Zap,
      highlights: [
        "TSP optimization via Simulated Annealing for efficient inspection routes",
        "3D A* pathfinding with voxel-based obstacle avoidance",
        "Hybrid swarm control: centralized for precision, decentralized for adaptability"
      ],
      challenges: [
        "Optimizing waypoint visit order while ensuring collision-free paths in 3D environments",
        "Balancing computational complexity with real-time pathfinding in dense obstacle fields",
        "Achieving tight formation coordination through narrow passages with centralized control",
        "Managing emergent behavior unpredictability in decentralized Boids-based swarms"
      ],
      outcomes: [
        "Achieved 100% success rate in single-agent inspection tasks across all test environments",
        "Centralized control (MAPF): 100% success in formation flight and narrow passage tasks",
        "Decentralized control (Boids): Superior scalability and adaptability in dynamic environments",
        "Identified hybrid approach as optimal: centralized for precision tasks, decentralized for exploration"
      ],
      githubUrl: "https://github.com/nehith23/uav-navigation-and-swarm-control"
    },
    {
      id: "4",
      title: "Motor Modelling & Trajectory Learning for 7-DoF Panda Arm",
      description: "Built neural networks and regression models for motor error correction and trajectory prediction; integrated into a feedback control loop for smooth robotic motion.",
      fullDescription: "This machine learning for robotics project focuses on applying data-driven techniques to control a simulated 7-DoF Franka Panda robot. The work is divided into three main tasks: learning correction terms for an erroneous motor model that neglects damping effects, training MLP and Random Forest regressors to predict full 5-second joint trajectories from Cartesian goals, and applying learned trajectories in simulation using feedback linearization control with analysis of smoothness and tracking performance.",
      technologies: ["PyTorch", "Random Forest", "7-DoF Franka Panda", "Python", "Feedback Linearization", "Neural Networks"],
      category: "Robotics",
      icon: Cpu,
      highlights: [
        "MLP-based correction learning for damping-neglected motor models",
        "Trajectory generation from Cartesian goals using learned joint position regressors",
        "Comparative analysis of MLP vs Random Forest for trajectory smoothness"
      ],
      challenges: [
        "Learning accurate correction terms for motor models with systematic errors (missing damping)",
        "Predicting smooth, feasible joint trajectories for all 7 joints from only time and Cartesian goal inputs",
        "Balancing network capacity, learning rate, and batch size for stable convergence",
        "Mitigating Random Forest trajectory discontinuities through exponential moving average filtering"
      ],
      outcomes: [
        "Successfully trained MLPs to correct motor model errors across varying network capacities and hyperparameters",
        "MLP models produced smoother trajectories with stable torque responses compared to Random Forest",
        "Random Forest required EMA filtering for usable control performance due to inherent discontinuities",
        "Demonstrated feasibility of generating joint trajectories for arbitrary Cartesian goals using learned models"
      ],
      githubUrl: "https://github.com/nehith23/Learning-Based-Robot-Arm-Control"
    },
    {
      id: "5",
      title: "EKF Localization & Model Predictive Control",
      description: "Developed an integrated EKF-based localization and MPC trajectory tracking system; validated under sensor noise in PyBullet simulation environments.",
      fullDescription: "This project demonstrates a robust localization and control system for a differential drive robot in PyBullet simulation using Model Predictive Control (MPC) for real-time trajectory tracking and Extended Kalman Filter (EKF) for accurate state estimation under noisy sensor conditions. The system integrates MPC with EKF to enable reliable navigation to target positions while filtering sensor noise. The differential drive kinematic model simulates movement based on wheel velocities, predicting position over time. A continuous feedback loop allows the EKF's estimates to feed into MPC for adaptive control.",
      technologies: ["Model Predictive Control", "Extended Kalman Filter", "PyBullet", "Python", "Differential Drive Kinematics"],
      category: "Simulation",
      icon: Brain,
      highlights: [
        "Real-time EKF state estimation from noisy range-bearing measurements",
        "MPC optimization minimizing target deviation while respecting physical constraints",
        "Integrated feedback loop enabling adaptive control under changing conditions"
      ],
      challenges: [
        "Filtering noisy sensor data to provide reliable state estimates for control decisions",
        "Balancing MPC prediction horizon and computational efficiency for real-time performance",
        "Preventing trajectory overshoot while maintaining responsive control to target changes",
        "Synchronizing EKF prediction-correction cycles with MPC optimization timesteps"
      ],
      outcomes: [
        "Successfully demonstrated noise-robust navigation with EKF filtering improving MPC performance",
        "Achieved stable target stabilization under varying noise levels in PyBullet simulation",
        "Validated continuous feedback loop enabling adaptive responses to environmental changes",
        "Proved feasibility of combined EKF-MPC approach for real-world differential drive applications"
      ],
      githubUrl: "https://github.com/nehith23/Robot-Localization-MPC-EKF"
    },
    {
      id: "6",
      title: "Self-Reconfigurable Robots for Space Exploration",
      description: "Designed morphology-shifting robots with adaptive modes ('Octopus' and 'Turtle') in PyBullet for efficient planetary navigation across diverse terrains.",
      fullDescription: "This project explores a self-reconfigurable soft robot concept for planetary exploration, validating morphological adaptation as a strategy for navigating unpredictable, unstructured terrain like the Martian surface. The robot consists of a central spherical body with four symmetric appendages actuated through prismatic joints, mimicking pneumatic extension and retraction. It autonomously switches between two bio-inspired locomotion modes: Turtle Mode for efficient long-distance rolling movement with all appendages retracted into a compact sphere, and Octopus Mode for localized exploration using oscillating sine/cosine actuation patterns to generate crawling motion.",
      technologies: ["PyBullet", "URDF", "Prismatic Joints", "Python", "Soft Robotics Simulation"],
      category: "Simulation",
      icon: Zap,
      highlights: [
        "Bio-inspired morphological transformation for planetary exploration",
        "Dual locomotion modes: Turtle (rolling) and Octopus (crawling) with autonomous switching",
        "Procedurally generated Martian-like terrain with heightfield simulation"
      ],
      challenges: [
        "Overcoming PyBullet's rigid-body limitations preventing realistic soft-body deformation",
        "Generating effective traction for crawling motion without material compliance modeling",
        "Implementing autonomous mode switching instead of manual keyboard control",
        "Modeling pneumatic pressure, material fatigue, and space environment effects"
      ],
      outcomes: [
        "Successfully demonstrated stable rolling locomotion over randomized heightfields in Turtle Mode",
        "Validated morphological transformation as viable strategy for robust, energy-efficient mobility",
        "Proved feasibility of reconfigurable design for multi-terrain planetary navigation",
        "Identified soft-body dynamics integration as critical next step for realistic crawling performance"
      ],
      githubUrl: "https://github.com/nehith23/Self-Reconfigurable-Soft-Robot-for-Space-Exploration"
    },
    {
      id: "7",
      title: "Object Segmentation & Geometric Estimation for Autonomous Drone Landing",
      description: "Applied computer vision techniques for object segmentation, geometric parameter estimation, and rotation cycle analysis using stereo camera and LiDAR data.",
      fullDescription: "This computer vision and sensing project develops perception algorithms for autonomous drone landing and navigation in space environments. The system integrates segmentation, motion tracking, and rotation analysis to estimate geometric and dynamic properties of a suspended Astronomical Object. The pipeline includes HSV color thresholding and Hough Transform-based image segmentation with ROC curve evaluation, stereo-based geometric analysis for center tracking and height estimation, and ORB feature matching with RANSAC filtering for rotation cycle estimation.",
      technologies: ["OpenCV", "Arducam Stereo Camera", "Livox Mid-360 LiDAR", "ORB Features", "RANSAC", "Python", "scikit-learn"],
      category: "Computer Vision",
      icon: Camera,
      highlights: [
        "Multi-method segmentation combining HSV thresholding and Hough Transform for accuracy",
        "Stereo depth computation with calibrated cameras for precise height estimation",
        "ORB + RANSAC feature matching for reliable rotation cycle detection under noise"
      ],
      challenges: [
        "Achieving robust segmentation across diverse visual conditions with varying illumination",
        "Extracting accurate centroid and geometric parameters from noisy point cloud data",
        "Detecting rotation cycles reliably under real-time conditions with motion blur",
        "Fusing multi-sensor data (stereo cameras and LiDAR) for coherent geometric estimates"
      ],
      outcomes: [
        "Achieved high segmentation accuracy with strong IoU and AUC metrics across test datasets",
        "Successfully extracted precise geometric parameters: center position, diameter, and height",
        "Demonstrated robust rotation cycle estimation even under lighting and motion noise",
        "Derived actionable surface velocity parameters for drone navigation and control systems"
      ],
      githubUrl: "https://github.com/nehith23/Drone-Landing-on-Astronomical-Object"
    },
    {
      id: "8",
      title: "Multimodal Affective State Classification in Video Games",
      description: "Developed real-time emotion classification using physiological (EDA, PPG) and video data; compared early vs late fusion with SVM and Random Forest classifiers.",
      fullDescription: "This project investigates using physiological signals to classify player affective state during high-pressure cooperative gameplay. The research focuses on distinguishing between Aroused and Calm states using multimodal sensor data and machine learning models. Using 'Keep Talking and Nobody Explodes' as the experimental platform, the study collected EDA (electrodermal activity) and PPG (photoplethysmography) data, performed post-hoc manual annotation of 60-second segments, extracted features using NeuroKit2 with 15-second sliding windows, and compared SVM and Random Forest classifiers with early fusion (combining features before training) versus late fusion (averaging separate classifier predictions).",
      technologies: ["SVM", "Random Forest", "NeuroKit2", "HeartPy", "Electrodermal Activity (EDA)", "Photoplethysmography (PPG)", "Python"],
      category: "AI/ML",
      icon: Brain,
      highlights: [
        "Early fusion strategy outperforming late fusion for multimodal physiological classification",
        "SVM achieving 75% accuracy with balanced performance across participant groups",
        "Nested Leave-One-Group-Out cross-validation preventing data leakage"
      ],
      challenges: [
        "Addressing inter-individual differences in physiological responses through z-score normalization",
        "Managing class imbalance between Calm (majority) and Aroused (minority) states",
        "Selecting optimal fusion strategy between early and late multimodal integration",
        "Extracting meaningful features from noisy physiological signals in real-time conditions"
      ],
      outcomes: [
        "Early Fusion SVM achieved best performance: 75% accuracy, 0.52 F1 score, 0.56 recall for Aroused class",
        "Early fusion outperformed late fusion by learning joint nonlinear relationships between modalities",
        "Demonstrated feasibility of using physiological data for affective state classification during gameplay",
        "SVM's margin-based learning handled multimodal feature space more effectively than Random Forest"
      ],
      githubUrl: "https://github.com/nehith23/Multimodal-Affective-State-Classification-in-Video-Games"
    },
    {
      id: "9",
      title: "Pick-n-Place Manipulation using 7-DOF Robot Arm",
      description: "Implemented pick-and-place manipulation tasks using a 7-DOF robotic arm with inverse kinematics, motion planning, and precise object handling capabilities.",
      fullDescription: "This comprehensive robotic perception and manipulation project demonstrates advanced robotics capabilities through three progressively complex tasks using a Franka Emika Panda robot arm in Gazebo simulation. Task 1 focuses on precision pick-and-place with shape-specific grasp planning for crosses and noughts. Task 2 involves adaptive shape classification on variable-height tables using color-based table detection, height-adjusted filtering, and topological classification via contour hierarchy analysis. Task 3 tackles cluttered environment navigation with point cloud segmentation, dynamic object identification, and collision-free manipulation in complex scenes with obstacles.",
      technologies: ["Franka Emika Panda", "Gazebo", "ROS2", "Point Cloud Processing", "OpenCV", "Inverse Kinematics", "Motion Planning", "Python"],
      category: "Robotics",
      icon: Cpu,
      highlights: [
        "Advanced perception pipeline with point cloud segmentation and filtering",
        "Shape-specific grasp planning with orientation-aware approach strategies",
        "Dynamic environment adaptation for variable table heights and cluttered scenes"
      ],
      challenges: [
        "Achieving reliable object detection and classification across varying environmental conditions",
        "Planning collision-free paths in cluttered scenes with dynamic obstacle configurations",
        "Adapting grasp strategies based on object shape (crosses vs noughts) and orientation",
        "Maintaining robust perception despite height variations and complex point cloud data"
      ],
      outcomes: [
        "Successfully implemented shape-specific grasping achieving reliable pick-and-place operations",
        "Developed adaptive classification system robust to 0-50mm table height variations",
        "Demonstrated collision-free manipulation in cluttered environments with multiple obstacles",
        "Created comprehensive visualization system for real-time monitoring of grasp planning"
      ],
      githubUrl: "https://github.com/nehith23/Pick-n-Place-manipulation-using-7-DOF-robot-arm"
    },
    {
      id: "10",
      title: "YouBot Kinematics and Trajectory Planning",
      description: "Developed kinematics and trajectory planning algorithms for the KUKA YouBot mobile manipulator, enabling autonomous navigation and manipulation tasks.",
      fullDescription: "This project implements comprehensive kinematic computations and trajectory planning for the YouBot robot, designed to solve forward and inverse kinematics, calculate Jacobians, detect singularities, and plan smooth trajectories through multiple checkpoints using predefined joint positions. The system loads predefined target positions in both joint and Cartesian space, determines the most efficient checkpoint sequence based on Cartesian distances using permutation analysis, interpolates between checkpoints using matrix exponential and logarithmic operations for smooth transitions, converts trajectories to joint positions using iterative inverse kinematics, and publishes planned trajectories to ROS 2 controller for execution with RViz visualization.",
      technologies: ["KUKA YouBot", "Forward/Inverse Kinematics", "Jacobian Computation", "Trajectory Planning", "ROS 2", "Python", "NumPy", "SciPy", "RViz"],
      category: "Robotics",
      icon: Brain,
      highlights: [
        "Shortest path optimization through checkpoint permutations minimizing Cartesian distances",
        "Smooth trajectory generation using decoupled rotation and translation transformations",
        "Iterative inverse kinematics solver for joint position computation"
      ],
      challenges: [
        "Computing accurate inverse kinematics for redundant manipulator with multiple solutions",
        "Generating smooth interpolations between checkpoints avoiding jerky or discontinuous motion",
        "Optimizing checkpoint sequencing combinatorially for efficient path planning",
        "Detecting and handling kinematic singularities during trajectory execution"
      ],
      outcomes: [
        "Successfully implemented complete kinematic model solving forward/inverse kinematics with Jacobian computation",
        "Achieved smooth trajectory execution through multiple checkpoints with optimal sequencing",
        "Demonstrated ROS 2 integration with trajectory controller and RViz visualization",
        "Validated trajectory planning system with color-coded checkpoint markers showing traversal order"
      ],
      githubUrl: "https://github.com/nehith23/YouBot-Kinematics-and-Trajectory-Planning"
    }
  ];

  const categories = ["All", "Computer Vision", "Robotics", "AI/ML", "Simulation"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);
  
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

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
          <div className="relative">
            <StaggerContainer staggerDelay={0.12} key={selectedCategory}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {displayedProjects.map((project) => {
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
            
            {/* Fade overlay when not showing all */}
            {!showAll && filteredProjects.length > 6 && (
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
            )}
          </div>

          {/* Show More Button */}
          {filteredProjects.length > 6 && (
            <ScrollReveal direction="up" delay={0.3}>
              <div className="flex justify-center mt-8">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setShowAll(!showAll)}
                  data-testid="button-show-more-projects"
                >
                  {showAll ? "Show Less" : `Show More (${filteredProjects.length - 6} more projects)`}
                </Button>
              </div>
            </ScrollReveal>
          )}

          {/* Project Stats */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-6 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">10</div>
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
