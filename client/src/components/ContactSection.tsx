import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Download } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    console.log(`Updated ${field}:`, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Replace with actual form submission
  };

  const handleExternalLink = (platform: string) => {
    console.log(`Opening ${platform} profile`);
  };

  const downloadCV = () => {
    console.log("Downloading CV...");
    // TODO: Replace with actual CV download functionality
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Interested in collaboration, PhD opportunities, or research discussions? 
              I'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="hover-elevate">
                <CardHeader>
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">
                        vemulapallinehith@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">
                        +44 7936 634011
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">
                        London, United Kingdom
                      </p>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <p className="font-medium mb-4">Connect with me</p>
                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleExternalLink("GitHub")}
                        data-testid="link-github-contact"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleExternalLink("LinkedIn")}
                        data-testid="link-linkedin-contact"
                      >
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </Button>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <Button
                      onClick={downloadCV}
                      className="w-full"
                      data-testid="button-download-cv-contact"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download CV
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Research Interests */}
              <Card className="hover-elevate">
                <CardHeader>
                  <CardTitle className="text-xl">Research Interests</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Computer Vision</Badge>
                    <Badge variant="secondary">3D Reconstruction</Badge>
                    <Badge variant="secondary">SLAM</Badge>
                    <Badge variant="secondary">Robotics</Badge>
                    <Badge variant="secondary">AI/ML</Badge>
                    <Badge variant="secondary">Autonomous Systems</Badge>
                    <Badge variant="secondary">Cultural Heritage</Badge>
                    <Badge variant="secondary">Space Exploration</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="hover-elevate">
              <CardHeader>
                <CardTitle className="text-xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your name"
                        data-testid="input-contact-name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        data-testid="input-contact-email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="Research collaboration, PhD opportunity, etc."
                      data-testid="input-contact-subject"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell me about your research interests, collaboration ideas, or any questions you have..."
                      rows={5}
                      data-testid="input-contact-message"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    data-testid="button-send-message"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Open to Opportunities</h3>
                <p className="text-muted-foreground mb-4">
                  I'm actively seeking PhD positions and research collaborations in robotics, 
                  computer vision, and AI. I'm particularly interested in projects involving 
                  3D reconstruction, autonomous systems, and practical applications of AI in robotics.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="outline">PhD Positions</Badge>
                  <Badge variant="outline">Research Collaborations</Badge>
                  <Badge variant="outline">Industry Projects</Badge>
                  <Badge variant="outline">Conference Speaking</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}