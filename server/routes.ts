import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { existsSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve attached assets (PDFs, images, etc.)
  app.use(
    "/attached_assets",
    express.static(path.join(process.cwd(), "attached_assets")),
  );

  // Helper function to find resume.pdf in dev or production
  const getResumePath = () => {
    // Try multiple possible locations
    const locations = [
      path.join(process.cwd(), "resume.pdf"), // Dev environment
      path.join(process.cwd(), "dist/public/resume.pdf"), // Production
      path.join(__dirname, "../resume.pdf"), // Relative to bundled server
      path.join(__dirname, "../../resume.pdf"), // Fallback
    ];

    for (const loc of locations) {
      if (existsSync(loc)) {
        return loc;
      }
    }

    // Default to root resume.pdf
    return path.join(process.cwd(), "resume.pdf");
  };

  // CV Download endpoint
  app.get("/api/download-cv", (req, res) => {
    try {
      const cvPath = getResumePath();

      // Set appropriate headers for PDF download with requested filename 'resume.pdf'
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", 'attachment; filename="resume.pdf"');

      // Send the file
      res.sendFile(cvPath, (err) => {
        if (err) {
          console.error("Error sending CV file:", err);
          res.status(404).json({ error: "CV file not found" });
        }
      });
    } catch (error) {
      console.error("Error in CV download:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Serve CV for viewing with filename 'resume.pdf'
  app.get("/resume.pdf", (req, res) => {
    try {
      const cvPath = getResumePath();
      res.setHeader("Content-Type", "application/pdf");
      // inline so browser opens it, but suggest filename as resume.pdf
      res.setHeader("Content-Disposition", 'inline; filename="resume.pdf"');
      res.sendFile(cvPath, (err) => {
        if (err) {
          console.error("Error serving resume:", err);
          res.status(404).send("Resume not found");
        }
      });
    } catch (err) {
      console.error("Error in resume route:", err);
      res.status(500).send("Internal server error");
    }
  });

  // Contact form submission endpoint
  app.post("/api/contact", (req, res) => {
    try {
      const { name, email, subject, message } = req.body;

      // Basic validation
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: "All fields are required" });
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Invalid email format" });
      }

      // Log the contact form submission (in a real app, you'd send an email)
      console.log("Contact form submission:", {
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString(),
      });

      // TODO: Integrate with email service (SendGrid, etc.)
      res.json({
        success: true,
        message: "Thank you for your message! I'll get back to you soon.",
      });
    } catch (error) {
      console.error("Error in contact form:", error);
      res.status(500).json({ error: "Failed to send message" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
