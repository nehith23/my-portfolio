import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Users, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  status: "published" | "in-preparation";
  abstract?: string;
  keywords: string[];
  link?: string;
}

export default function PublicationsSection() {
  const publications: Publication[] = [
    {
      id: "1",
      title: "Face Detection with Landmark using YOLOv8",
      authors: "Nehith Sai Vemulapalli; P. Pruthvi; G. S. Prabhat; S. Abhishek; T. Anjali",
      venue: "2023 3rd International Conference on Emerging Frontiers in Electrical and Electronic Technologies (ICEFEET)",
      year: "2023",
      status: "published",
      keywords: ["Computer Vision", "Deep Learning", "Object Detection"],
      link: "https://ieeexplore.ieee.org/document/10452204/metrics#metrics",
    },
    {
      id: "2",
      title: "Application of Unsupervised Learning in Detecting Behavioral Patterns in E-commerce Customers",
      authors: "Nehith Sai Vemulapalli; P. Pruthvi; N. Moneesh; S. Rakshith; J. D. Udayan",
      venue: "Proceedings of the 5th International Conference on Data Science, Machine Learning and Applications; Volume 1 (pp.1208-1217)",
      year: "2024",
      status: "published",
      keywords: ["Machine Learning", "Unsupervised Learning", "Data Analysis"],
      link: "https://www.researchgate.net/publication/386110391_Application_of_Unsupervised_Learning_in_Detecting_Behavioral_Patterns_in_E-commerce_Customers",
    },
    {
      id: "3",
      title: "Reinforcement Learning-Based Autonomous Landing of AirSim Simulated Quadcopter in Unreal Engine",
      authors: "Nehith Sai Vemulapalli; P. Pruthvi; G. S. Prabhat; S. Don",
      venue: "2024 15th International Conference on Computing Communication and Networking Technologies (ICCCNT)",
      year: "2024",
      status: "published",
      keywords: ["Reinforcement Learning", "Autonomous Systems", "Simulation"],
      link: "https://ieeexplore.ieee.org/document/10725648",
    },
    {
      id: "4",
      title: "Strategic Network Intervention: Simulating and Blocking Contagion Spread Using Dominating Sets",
      authors: "Nehith Sai Vemulapalli; P. Pruthvi; N. Moneesh; S. Srivastav; J. D. Udayan",
      venue: "Chapter in World Congress on Smart Computing (pp.109-122)",
      year: "2025",
      status: "published",
      keywords: ["Network Analysis", "Graph Theory", "Optimization"],
      link: "https://www.researchgate.net/publication/390507848_Strategic_Network_Intervention_Simulating_and_Blocking_Contagion_Spread_Using_Dominating_Sets",
    },
    {
      id: "5",
      title: "Hybrid 3D Reconstruction Pipeline for Cultural Heritage Preservation in Extreme Environments",
      authors: "Vemulapalli, N. S.",
      venue: "Target Conference: International Conference on Robotics and Automation (ICRA)",
      year: "2025",
      status: "in-preparation",
      keywords: ["3D Reconstruction", "Computer Vision", "Cultural Heritage"],
    },
    {
      id: "6",
      title: "Self-Reconfigurable Robots for Space Exploration & Morphology-Shifting Simulation",
      authors: "Vemulapalli, N. S.",
      venue: "Target Conference: International Conference on Robotics and Automation (ICRA)",
      year: "2025",
      status: "in-preparation",
      keywords: ["Robotics", "Space Exploration", "Reconfigurable Systems"],
    },
  ];

  const handleViewPublication = (link?: string) => {
    if (link) window.open(link, '_blank');
  };

  return (
    <section id="publications" className="min-h-screen py-24 bg-black/20">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">
            Publications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Peer-reviewed publications spanning computer vision, robotics, and AI,
            focusing on practical applications and novel methodologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="group h-full bg-card/30 backdrop-blur-sm border border-white/5 rounded-xl p-8 hover:border-accent/30 transition-all duration-300 flex flex-col">
                <div className="flex justify-between items-start mb-4 gap-4">
                  <Badge
                    variant={pub.status === "published" ? "default" : "secondary"}
                    className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20"
                  >
                    {pub.status === "published" ? "Published" : "In Preparation"}
                  </Badge>
                  <span className="text-sm text-muted-foreground font-mono">{pub.year}</span>
                </div>

                <h3 className="text-xl font-display font-medium mb-3 leading-tight group-hover:text-accent transition-colors">
                  {pub.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                  {pub.venue}
                </p>

                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {pub.keywords.slice(0, 2).map((kw) => (
                      <span key={kw} className="text-xs text-muted-foreground/60 uppercase tracking-wider">
                        {kw}
                      </span>
                    ))}
                  </div>

                  {pub.link && (
                    <Button
                      variant="ghost"
                      onClick={() => handleViewPublication(pub.link)}
                      className="text-accent hover:text-accent hover:bg-accent/10 -mr-4"
                    >
                      Read Paper
                      <ArrowUpRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
