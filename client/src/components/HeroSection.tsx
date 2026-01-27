import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, Linkedin, ArrowDown, ExternalLink, GraduationCap, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Ambience moved to global layout */}

      <div className="container relative z-10 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center gap-4 mb-8"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-foreground">
              Nehith Sai Vemulapalli
            </h1>

            <div className="flex flex-col sm:flex-row items-center gap-3 text-muted-foreground">
              <div className="flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
                <GraduationCap className="w-4 h-4" />
                <span className="text-sm font-medium">Master's Graduate in Robotics & AI</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground/80">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">London, United Kingdom</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-4xl font-display font-medium leading-tight mb-8 text-foreground/90 max-w-4xl"
          >
            Building intelligent systems that see, understand, and preserve our world
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-10 font-light"
          >
            In a world where robots struggle to truly understand what they see, I bridge the gap between raw sensor data and intelligent perception. By combining advanced computer vision with SLAM and 3D reconstruction, I create systems that don't just capture images—they comprehend environments, enabling autonomous systems to navigate and interact with the complexity of our real world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {["4 Publications", "UCL Xplore Winner", "MSc Robotics & AI", "BTech First Class Honours"].map((award, i) => (
              <div key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-foreground/80 hover:bg-white/10 transition-colors cursor-default">
                {award}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-6 text-sm text-muted-foreground mb-10"
          >
            <a href="mailto:vemulapallinehith@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              vemulapallinehith@gmail.com
            </a>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +44 7936 634011
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-6 mb-16"
          >
            <Button
              onClick={() => handleExternalLink("https://linkedin.com/in/nehith-v")}
              className="h-12 px-8 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 text-base font-medium shadow-[0_0_20px_rgba(var(--accent),0.3)] hover:shadow-[0_0_30px_rgba(var(--accent),0.5)] transition-all"
            >
              Let's Connect
            </Button>

            <Button
              variant="outline"
              className="h-12 px-8 rounded-full border-white/10 hover:bg-white/5 text-base font-medium"
              onClick={scrollToProjects}
            >
              Explore My Projects
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex gap-4"
          >
            <a href="https://github.com/nehith23" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/nehith-v" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-20 flex gap-12 sm:gap-24 text-center"
          >
            <div>
              <div className="text-4xl font-bold text-accent mb-1">4</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Publications</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-1">8+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Research Projects</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
