import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Github, Linkedin, Send, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:vemulapallinehith@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank');
  };

  const downloadCV = () => {
    window.open("/my-portfolio/attached_assets/Nehith_Vemulapalli_Resume.pdf", '_blank');
  };

  return (
    <section id="contact" className="min-h-screen py-24 relative flex items-center">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-medium mb-8">
              Let's Connect
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Interested in collaboration, PhD opportunities, or research discussions?
              I'm always open to exploring new frontiers in robotics and perception.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="p-3 rounded-full bg-white/5 border border-white/10">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-lg font-medium text-foreground mb-1">Email</p>
                  <a href="mailto:vemulapallinehith@gmail.com" className="text-muted-foreground hover:text-accent transition-colors text-lg">
                    vemulapallinehith@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-3 rounded-full bg-white/5 border border-white/10">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-lg font-medium text-foreground mb-1">Location</p>
                  <p className="text-muted-foreground text-lg">London, United Kingdom</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                variant="outline"
                className="h-12 px-6 rounded-full border-white/10 hover:bg-white/5 transition-colors"
                onClick={() => handleExternalLink("https://github.com/nehith23")}
              >
                <Github className="w-5 h-5 mr-3" />
                GitHub
              </Button>
              <Button
                variant="outline"
                className="h-12 px-6 rounded-full border-white/10 hover:bg-white/5 transition-colors"
                onClick={() => handleExternalLink("https://linkedin.com/in/nehith-v")}
              >
                <Linkedin className="w-5 h-5 mr-3" />
                LinkedIn
              </Button>
              <Button
                className="h-12 px-6 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
                onClick={downloadCV}
              >
                <Download className="w-5 h-5 mr-3" />
                Resume
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card/50 backdrop-blur-sm border border-white/5 p-8 md:p-10 rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium tracking-wide text-muted-foreground uppercase">Name</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="bg-background/50 border-white/10 focus:border-accent h-12 text-lg"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium tracking-wide text-muted-foreground uppercase">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-background/50 border-white/10 focus:border-accent h-12 text-lg"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium tracking-wide text-muted-foreground uppercase">Subject</label>
                <Input
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  className="bg-background/50 border-white/10 focus:border-accent h-12 text-lg"
                  placeholder="Collaboration Request"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium tracking-wide text-muted-foreground uppercase">Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="bg-background/50 border-white/10 focus:border-accent min-h-[160px] text-lg resize-none p-4"
                  placeholder="How can we work together?"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-14 rounded-full text-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-all font-medium"
              >
                Send Message
                <Send className="w-5 h-5 ml-3" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
