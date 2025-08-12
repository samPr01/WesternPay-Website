import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { handleSendEmail } from "./routes/send-email";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);
  app.post("/api/send-email", handleSendEmail);

  // SPA fallback routing - serve React app for all non-API routes
  app.get(["/about-page", "/faqs-page", "/privacy-policy", "/refunds-cancellation", "/login", "/signup", "/services", "/features", "/contact", "/about"], (req, res) => {
    // In development, let Vite handle this
    // In production, this would serve the built React app
    res.redirect("/");
  });

  return app;
}
