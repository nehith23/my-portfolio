import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, Linkedin, MapPin, GraduationCap } from "lucide-react";

export default function HeroSection() {
  const handleContactClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      const headerHeight = 64;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleExternalLink = (platform: string) => {
    const urls = {
      GitHub: "https://github.com/nehith23",
      LinkedIn: "https://linkedin.com/in/nehith-v"
    };
    
    const url = urls[platform as keyof typeof urls];
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Introduction */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Nehith Sai Vemulapalli
            </h1>
            <Badge variant="secondary" className="mb-6">
              <GraduationCap className="w-3 h-3 mr-1" />
              Master's Graduate in Robotics & AI
            </Badge>
            <div className="flex items-center justify-center text-muted-foreground mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              <span>London, United Kingdom</span>
            </div>
          </div>

          {/* Research Focus */}
          <div className="mb-8">
            <p className="text-xl sm:text-2xl font-medium text-foreground mb-6 leading-relaxed">
              Building intelligent systems that see, understand, and preserve our world
            </p>
            <p className="text-lg text-muted-foreground">
              In a world where robots struggle to truly understand what they see, I bridge the gap between raw sensor data 
              and intelligent perception. By combining advanced computer vision with SLAM and 3D reconstruction, I create 
              systems that don't just capture images—they comprehend environments, enabling autonomous systems to navigate 
              and interact with the complexity of our real world.
            </p>
          </div>

          {/* Key Achievements */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <Badge variant="outline">4 Publications</Badge>
              <Badge variant="outline">UCL Xplore Winner</Badge>
              <Badge variant="outline">MSc Robotics & AI</Badge>
              <Badge variant="outline">BTech First Class Honours</Badge>
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
              Let's Connect
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const element = document.getElementById('projects');
                if (element) {
                  const headerHeight = 64;
                  const elementPosition = element.offsetTop - headerHeight;
                  
                  window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              data-testid="button-view-research"
            >
              Explore My Projects
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
          <div className="mt-12 flex justify-center gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-2">4</div>
              <div className="text-sm text-muted-foreground">Publications</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">8+</div>
              <div className="text-sm text-muted-foreground">Research Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}