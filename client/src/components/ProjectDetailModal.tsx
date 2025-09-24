import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, X } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  icon: any;
  highlights: string[];
  fullDescription?: string;
  challenges?: string[];
  outcomes?: string[];
  githubUrl?: string;
  demoUrl?: string;
}

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  if (!project) return null;

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <DialogTitle className="text-2xl leading-tight mb-2">
                {project.title}
              </DialogTitle>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary">{project.category}</Badge>
                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleExternalLink(project.githubUrl!)}
                      data-testid={`button-github-${project.id}`}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleExternalLink(project.demoUrl!)}
                      data-testid={`button-demo-${project.id}`}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  )}
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              data-testid="button-close-modal"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Overview */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Project Overview</h3>
            <DialogDescription className="text-base leading-relaxed">
              {project.fullDescription || project.description}
            </DialogDescription>
          </div>

          {/* Key Highlights */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Key Highlights</h3>
            <ul className="space-y-2">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-sm">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Challenges */}
          {project.challenges && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Technical Challenges</h3>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-sm">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Outcomes & Impact */}
          {project.outcomes && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Outcomes & Impact</h3>
              <ul className="space-y-2">
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-sm">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}