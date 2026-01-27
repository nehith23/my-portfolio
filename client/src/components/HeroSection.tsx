import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, Linkedin, ArrowDown, ExternalLink } from "lucide-react";
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
        <div className="flex flex-col items-start max-w-4xl">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Badge variant="outline" className="mb-8 px-4 py-1 text-xs tracking-[0.2em] uppercase border-white/10 text-muted-foreground">
              Robotics & AI Engineer
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-6xl sm:text-7xl lg:text-8xl font-display font-medium leading-[1.1] mb-8 tracking-tight"
          >
            Intelligent Systems <br />
            <span className="text-muted-foreground/50">That Perceive.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl sm:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-12 font-light"
          >
            Bridging the gap between raw sensor data and intelligent perception.
            I build autonomous systems that don't just see the world—they <span className="text-foreground">understand</span> it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-wrap gap-6"
          >
            <Button
              onClick={scrollToProjects}
              className="h-14 px-8 rounded-full bg-foreground text-background hover:bg-foreground/90 text-lg tracking-wide font-medium"
            >
              Explore Research
            </Button>

            <Button
              variant="outline"
              className="h-14 px-8 rounded-full border-white/10 hover:bg-white/5 text-lg tracking-wide font-medium group"
              onClick={() => handleExternalLink("https://github.com/nehith23")}
            >
              <Github className="w-5 h-5 mr-3 text-muted-foreground group-hover:text-foreground transition-colors" />
              Github
            </Button>

            <Button
              variant="outline"
              className="h-14 px-8 rounded-full border-white/10 hover:bg-white/5 text-lg tracking-wide font-medium group"
              onClick={() => handleExternalLink("https://linkedin.com/in/nehith-v")}
            >
              <Linkedin className="w-5 h-5 mr-3 text-muted-foreground group-hover:text-foreground transition-colors" />
              LinkedIn
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground/50">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </motion.div>
    </section>
  );
}
