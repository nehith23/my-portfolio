import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Users } from "lucide-react";

interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  status: "published" | "in-preparation";
  abstract?: string;
  keywords: string[];
}

export default function PublicationsSection() {
  // TODO: Replace with actual publication data
  const publications: Publication[] = [
    {
      id: "1",
      title: "Face Detection with Landmark using YOLOv8",
      authors: "Vemulapalli, N. S.",
      venue: "IEEE 3rd International Conference on Electronics, Future Technologies and Engineering Trends (ICEFEET)",
      year: "2023",
      status: "published",
      keywords: ["Computer Vision", "Deep Learning", "Object Detection"],
    },
    {
      id: "2",
      title: "Application of Unsupervised Learning in Detecting Behavioural Patterns in E-commerce Customers",
      authors: "Vemulapalli, N. S.",
      venue: "5th International Conference on Data Science, Machine Learning and Applications (ICDSMLA)",
      year: "2024",
      status: "published",
      keywords: ["Machine Learning", "Unsupervised Learning", "Data Analysis"],
    },
    {
      id: "3",
      title: "Reinforcement Learning-Based Autonomous Landing of AirSim Simulated Quadcopter in Unreal Engine",
      authors: "Vemulapalli, N. S.",
      venue: "IEEE 15th International Conference on Computing, Communication and Networking Technologies (ICCCNT)",
      year: "2024",
      status: "published",
      keywords: ["Reinforcement Learning", "Autonomous Systems", "Simulation"],
    },
    {
      id: "4",
      title: "Strategic Network Intervention: Simulating and Blocking Contagion Spread Using Dominating Sets",
      authors: "Vemulapalli, N. S.",
      venue: "World Congress on Smart Computing",
      year: "2025",
      status: "published",
      keywords: ["Network Analysis", "Graph Theory", "Optimization"],
    },
    {
      id: "5",
      title: "Hybrid 3D Reconstruction Pipeline for Cultural Heritage Preservation in Extreme Environments",
      authors: "Vemulapalli, N. S.",
      venue: "Target Journal: IEEE Transactions on Robotics",
      year: "2025",
      status: "in-preparation",
      keywords: ["3D Reconstruction", "Computer Vision", "Cultural Heritage"],
    },
    {
      id: "6",
      title: "Self-Reconfigurable Robots for Space Exploration & Morphology-Shifting Simulation",
      authors: "Vemulapalli, N. S.",
      venue: "Target Journal: Robotics and Autonomous Systems",
      year: "2025",
      status: "in-preparation",
      keywords: ["Robotics", "Space Exploration", "Reconfigurable Systems"],
    },
  ];

  const handleViewPublication = (id: string) => {
    console.log(`Viewing publication: ${id}`);
  };

  return (
    <section id="publications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Publications & Research
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Peer-reviewed publications spanning computer vision, robotics, and AI with focus on 
              practical applications and novel methodologies.
            </p>
          </div>

          {/* Publications Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {publications.map((publication) => (
              <Card key={publication.id} className="hover-elevate">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-lg leading-tight mb-2">
                        {publication.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Users className="w-4 h-4" />
                        <span>{publication.authors}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{publication.year}</span>
                      </div>
                    </div>
                    <Badge 
                      variant={publication.status === "published" ? "default" : "secondary"}
                      className="flex-shrink-0"
                    >
                      {publication.status === "published" ? "Published" : "In Preparation"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground italic">
                      {publication.venue}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {publication.keywords.map((keyword) => (
                      <Badge key={keyword} variant="outline" className="text-xs">
                        {keyword}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleViewPublication(publication.id)}
                    data-testid={`button-view-publication-${publication.id}`}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Publication Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-background rounded-lg border">
              <div className="text-2xl font-bold text-primary mb-2">6</div>
              <div className="text-sm text-muted-foreground">Total Publications</div>
            </div>
            <div className="p-6 bg-background rounded-lg border">
              <div className="text-2xl font-bold text-primary mb-2">4</div>
              <div className="text-sm text-muted-foreground">Published Papers</div>
            </div>
            <div className="p-6 bg-background rounded-lg border">
              <div className="text-2xl font-bold text-primary mb-2">2</div>
              <div className="text-sm text-muted-foreground">In Preparation</div>
            </div>
            <div className="p-6 bg-background rounded-lg border">
              <div className="text-2xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">Research Areas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}