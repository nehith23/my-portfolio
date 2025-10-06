import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, Award } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

interface Experience {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  type: "research" | "startup" | "ambassador";
  description: string[];
  achievements?: string[];
}

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      id: "1",
      title: "Graduate Research Project",
      organization: "UCL Hereeast",
      location: "London, UK",
      period: "May 2025 – September 2025",
      type: "research",
      description: [
        "Developed a hybrid 3D reconstruction pipeline for cultural heritage preservation, combining COLMAP, LiDAR data and 3D Gaussian Splatting for robust reconstruction.",
        "Designed and implemented structural inspection path planning and multi-agent swarm control for Crazyflie mini drones using ROS2, Gazebo, and RViz2 as part of the Aerial Robotics module.",
        "Collaborated with cross-functional faculty and peers to conduct experiments and advance research objectives."
      ],
      achievements: [
        "Novel hybrid reconstruction approach",
        "Multi-agent drone coordination",
        "Faculty collaboration"
      ]
    },
    {
      id: "2",
      title: "Founder",
      organization: "AquaScout",
      location: "London, UK",
      period: "November 2024 – March 2025",
      type: "startup",
      description: [
        "Conceived and led AquaScout, a drone-based water quality testing startup, winning the UCL Xplore programme competition.",
        "Advanced through a 12-week Venture Builder programme, refining the business model, technical roadmap, and go-to-market strategy."
      ],
      achievements: [
        "UCL Xplore Winner",
        "Venture Builder Graduate",
        "Technical Leadership"
      ]
    },
    {
      id: "3",
      title: "Student Ambassador",
      organization: "UCL Department of Computer Science",
      location: "London, UK",
      period: "December 2024 – September 2025",
      type: "ambassador",
      description: [
        "Organized technical talks and networking sessions with visiting faculty and researchers.",
        "Coordinated student engagement activities and logistics for departmental academic events."
      ],
      achievements: [
        "Faculty networking",
        "Event coordination",
        "Student engagement"
      ]
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "research":
        return <Award className="w-4 h-4" />;
      case "startup":
        return <Building className="w-4 h-4" />;
      case "ambassador":
        return <MapPin className="w-4 h-4" />;
      default:
        return <Building className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "research":
        return "bg-primary/10 text-primary";
      case "startup":
        return "bg-primary/10 text-primary";
      case "ambassador":
        return "bg-primary/10 text-primary";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="experience" className="min-h-screen flex items-center py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Research Experience
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Professional and academic experience spanning research, entrepreneurship, 
                and academic leadership roles.
              </p>
            </div>
          </ScrollReveal>

          {/* Experience Timeline */}
          <StaggerContainer staggerDelay={0.15}>
            <div className="space-y-6">
              {experiences.map((experience, index) => (
                <StaggerItem key={experience.id}>
                  <Card className="hover-elevate">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`p-2 rounded-lg ${getTypeColor(experience.type)}`}>
                              {getTypeIcon(experience.type)}
                            </div>
                            <div>
                              <CardTitle className="text-xl">
                                {experience.title}
                              </CardTitle>
                              <p className="text-lg font-medium text-primary">
                                {experience.organization}
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{experience.period}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>{experience.location}</span>
                            </div>
                          </div>
                        </div>
                        <Badge variant="outline" className="capitalize">
                          {experience.type}
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-3">Key Responsibilities:</h4>
                          <ul className="space-y-2">
                            {experience.description.map((desc, descIndex) => (
                              <li key={descIndex} className="flex items-start text-sm text-muted-foreground">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                                {desc}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {experience.achievements && (
                          <div>
                            <h4 className="font-medium mb-3">Key Achievements:</h4>
                            <div className="flex flex-wrap gap-2">
                              {experience.achievements.map((achievement) => (
                                <Badge key={achievement} variant="secondary" className="text-xs">
                                  {achievement}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          {/* Education Section */}
          <div className="mt-16">
            <ScrollReveal direction="up" delay={0.1}>
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                Education
              </h3>
            </ScrollReveal>
            
            <StaggerContainer staggerDelay={0.15}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <StaggerItem>
                  <Card className="hover-elevate h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Award className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">
                            MSc Robotics and Artificial Intelligence
                          </CardTitle>
                          <p className="text-sm text-primary font-medium">
                            University College London
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>September 2025</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>London, UK</span>
                        </div>
                        <div className="mt-4">
                          <p className="text-sm font-medium mb-2">Thesis:</p>
                          <p className="text-sm text-muted-foreground">
                            Hybrid 3D Reconstruction Pipeline for Cultural Heritage Preservation in Extreme Environments
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>

                <StaggerItem>
                  <Card className="hover-elevate h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Award className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">
                            BTech Artificial Intelligence Engineering
                          </CardTitle>
                          <p className="text-sm text-primary font-medium">
                            Amrita Vishwa Vidyapeetham
                          </p>
                          <Badge variant="outline" className="text-xs mt-1">
                            First Class with Distinction
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>June 2024</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>Kerala, India</span>
                        </div>
                        <div className="mt-4">
                          <p className="text-sm font-medium mb-2">Thesis:</p>
                          <p className="text-sm text-muted-foreground">
                            Reinforcement Learning-Based Autonomous Landing of AirSim Simulated Quadcopter in Unreal Engine
                          </p>
                        </div>
                      </div>
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
