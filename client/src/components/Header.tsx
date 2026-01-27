import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, FileText, Menu, X } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeaderProps {
  activeSection?: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isDark, setIsDark] = useState(true); // Default to dark for this theme
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 50], [0, 0.9]);
  const headerBlur = useTransform(scrollY, [0, 50], ["0px", "8px"]);
  const borderOpacity = useTransform(scrollY, [0, 50], [0, 1]);

  useEffect(() => {
    const root = window.document.documentElement;
    // Enforce dark mode for this new theme primarily, but allow toggle
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "publications", label: "Publications" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const viewCV = () => {
    window.open("/my-portfolio/attached_assets/cv_phd_1760007892664.pdf", '_blank');
  };

  return (
    <>
      <motion.header
        style={{
          backgroundColor: `rgba(var(--background), ${headerOpacity})`, // Dynamic background would need RGB vars, using simplistic fallback for now
          backdropFilter: "blur(12px)",
        }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5"
      >
        {/* Dynamic Background Overlay */}
        <motion.div
          className="absolute inset-0 bg-background/80 z-[-1]"
          style={{ opacity: headerOpacity }}
        />

        {/* Border Overlay */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-border z-[-1]"
          style={{ opacity: borderOpacity }}
        />

        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <h1 className="text-xl font-display font-medium tracking-wide">
              NSV<span className="text-accent"></span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm tracking-widest uppercase transition-colors hover:text-accent ${activeSection === item.id ? "text-accent" : "text-muted-foreground"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <button
              onClick={viewCV}
              className="group relative px-6 py-2 overflow-hidden rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="absolute inset-0 w-0 bg-accent transition-all duration-[250ms] ease-out group-hover:w-full opacity-10" />
              <span className="relative flex items-center text-sm font-medium tracking-wide">
                <FileText className="w-4 h-4 mr-2" />
                Resume
              </span>
            </button>

            <button
              onClick={() => setIsDark(!isDark)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu Button - Visible below LG breakpoint */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="text-muted-foreground hover:text-foreground transition-colors mr-2"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-foreground p-2"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl"
        >
          <div className="p-6 flex justify-between items-center border-b border-white/10 h-20">
            <span className="font-display font-medium text-xl pl-2">Menu</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-foreground hover:text-accent transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] space-y-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-3xl font-display font-light tracking-wider hover:text-accent transition-colors"
              >
                {item.label}
              </button>
            ))}

            <div className="pt-8 flex flex-col items-center gap-6">
              <button
                onClick={viewCV}
                className="flex items-center px-8 py-3 rounded-full bg-accent text-accent-foreground font-medium text-lg hover:opacity-90 transition-opacity"
              >
                <FileText className="w-5 h-5 mr-3" />
                Resume
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}