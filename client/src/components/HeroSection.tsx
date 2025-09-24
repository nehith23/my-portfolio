import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, Linkedin, MapPin, GraduationCap } from "lucide-react";

export default function HeroSection() {
  const handleContactClick = () => {
    console.log("Scrolling to contact section");
  };

  const handleExternalLink = (platform: string) => {
    console.log(`Opening ${platform} profile`);
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Introduction */}
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">
              <GraduationCap className="w-3 h-3 mr-1" />
              PhD Candidate in Robotics & AI
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Nehith Sai Vemulapalli
            </h1>
            <div className="flex items-center justify-center text-muted-foreground mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              <span>London, United Kingdom</span>
            </div>
          </div>

          {/* Research Focus */}
          <div className="mb-8">
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 leading-relaxed">
              Master's graduate in Robotics and AI with extensive experience in{" "}
              <span className="text-foreground font-medium">computer vision</span>,{" "}
              <span className="text-foreground font-medium">SLAM</span>, and{" "}
              <span className="text-foreground font-medium">3D reconstruction</span>.
              My research focuses on developing hybrid reconstruction pipelines for 
              cultural heritage preservation and autonomous robotics systems.
            </p>
          </div>

          {/* Key Achievements */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <Badge variant="outline">6 Peer-Reviewed Publications</Badge>
              <Badge variant="outline">UCL Xplore Winner</Badge>
              <Badge variant="outline">MSc Robotics & AI</Badge>
              <Badge variant="outline">First Class Honours</Badge>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>vemulapallinehith@gmail.com</span>
              </div>
              <div className="flex items-center">
                <span>+44 7936 634011</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              onClick={handleContactClick}
              size="lg"
              data-testid="button-contact-me"
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => console.log("Viewing research projects")}
              data-testid="button-view-research"
            >
              View Research
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleExternalLink("GitHub")}
              data-testid="link-github"
            >
              <Github className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleExternalLink("LinkedIn")}
              data-testid="link-linkedin"
            >
              <Linkedin className="w-5 h-5" />
            </Button>
          </div>

          {/* Research Highlights */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-2">6+</div>
              <div className="text-sm text-muted-foreground">Publications</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">8+</div>
              <div className="text-sm text-muted-foreground">Research Projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}