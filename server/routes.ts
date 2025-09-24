import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // CV Download endpoint
  app.get("/api/download-cv", (req, res) => {
    try {
      const cvPath = path.join(process.cwd(), "attached_assets", "cv_phd_1758712202187.pdf");
      
      // Set appropriate headers for PDF download
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="Nehith_Sai_Vemulapalli_CV.pdf"');
      
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
        timestamp: new Date().toISOString()
      });

      // TODO: Integrate with email service (SendGrid, etc.)
      res.json({ 
        success: true, 
        message: "Thank you for your message! I'll get back to you soon." 
      });
    } catch (error) {
      console.error("Error in contact form:", error);
      res.status(500).json({ error: "Failed to send message" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
