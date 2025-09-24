import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleExternalLink = (platform: string) => {
    console.log(`Opening ${platform} profile`);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log("Scrolling to top");
  };

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Nehith Sai Vemulapalli</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                PhD candidate in Robotics & AI with expertise in computer vision, 
                SLAM, and 3D reconstruction. Passionate about advancing autonomous 
                systems and cultural heritage preservation through innovative technology.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">Robotics Researcher</Badge>
                <Badge variant="outline" className="text-xs">AI Engineer</Badge>
                <Badge variant="outline" className="text-xs">PhD Candidate</Badge>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <button 
                  onClick={() => console.log("Navigate to Publications")}
                  className="text-left text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-link-publications"
                >
                  Publications
                </button>
                <button 
                  onClick={() => console.log("Navigate to Projects")}
                  className="text-left text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-link-projects"
                >
                  Projects
                </button>
                <button 
                  onClick={() => console.log("Navigate to Experience")}
                  className="text-left text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-link-experience"
                >
                  Experience
                </button>
                <button 
                  onClick={() => console.log("Navigate to Skills")}
                  className="text-left text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-link-skills"
                >
                  Skills
                </button>
                <button 
                  onClick={() => console.log("Navigate to Contact")}
                  className="text-left text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-link-contact"
                >
                  Contact
                </button>
                <button 
                  onClick={() => console.log("Download CV")}
                  className="text-left text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-link-cv"
                >
                  Download CV
                </button>
              </div>
            </div>

            {/* Contact & Social */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Connect</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>vemulapallinehith@gmail.com</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  London, United Kingdom
                </div>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleExternalLink("GitHub")}
                  data-testid="footer-link-github"
                >
                  <Github className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleExternalLink("LinkedIn")}
                  data-testid="footer-link-linkedin"
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground text-center sm:text-left">
              <p className="flex items-center gap-1">
                © {currentYear} Nehith Sai Vemulapalli. Built with 
                <Heart className="w-3 h-3 text-red-500" /> 
                for academic excellence.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={scrollToTop}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="button-scroll-top"
              >
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}