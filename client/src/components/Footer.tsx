import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 64, behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Publications", id: "publications" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="border-t border-white/5 bg-background">
      <div className="container mx-auto px-6 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-medium">Nehith Sai Vemulapalli</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Master's Graduate in Robotics & AI from UCL, specializing in computer vision, SLAM, and 3D reconstruction.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-medium">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left text-muted-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="/my-portfolio/attached_assets/Nehith_Vemulapalli_Resume.pdf"
                download="Nehith_Vemulapalli_Resume.pdf"
                className="text-left text-muted-foreground hover:text-accent transition-colors"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-medium">Connect</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="mailto:vemulapallinehith@gmail.com" className="block hover:text-accent transition-colors">
                vemulapallinehith@gmail.com
              </a>
              <p>London, United Kingdom</p>
            </div>
            <div className="flex gap-3">
              <a
                href="https://github.com/nehith23"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/nehith-v"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:vemulapallinehith@gmail.com"
                className="p-2 rounded-lg bg-white/5 text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Nehith Sai Vemulapalli
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}