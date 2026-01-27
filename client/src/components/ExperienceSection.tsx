import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, Award } from "lucide-react";
import { motion } from "framer-motion";

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
      organization: "UCL HereEast",
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

  return (
    <section id="experience" className="min-h-screen py-24 relative">
      {/* Background Ambience similar to Hero */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Professional and academic experience spanning research, entrepreneurship,
            and academic leadership.
          </p>
        </motion.div>

        <div className="relative border-l border-white/10 ml-0 md:ml-4 space-y-16">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-background" />

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Header Info */}
                <div className="lg:col-span-1">
                  <h3 className="text-2xl font-display font-medium mb-2">{experience.organization}</h3>
                  <div className="text-lg text-primary mb-4">{experience.title}</div>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span>{experience.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="mt-4 border-white/10">{experience.type}</Badge>
                </div>

                {/* Details */}
                <div className="lg:col-span-2">
                  <div className="bg-card/30 backdrop-blur-sm border border-white/5 rounded-xl p-6 md:p-8 hover:border-accent/30 transition-colors duration-300">
                    <ul className="space-y-4 mb-8">
                      {experience.description.map((desc, i) => (
                        <li key={i} className="flex items-start text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 mr-3 flex-shrink-0" />
                          <span className="leading-relaxed">{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {experience.achievements && (
                      <div className="flex flex-wrap gap-2">
                        {experience.achievements.map((achievement) => (
                          <Badge key={achievement} variant="outline" className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 px-3 py-1 transition-colors">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
