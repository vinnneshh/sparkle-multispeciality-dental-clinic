import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // In-memory storage for appointments
  const appointments: any[] = [];

  // API Routes
  app.post("/api/appointments", (req, res) => {
    const { name, phone, service, message } = req.body;
    if (!name || !phone || !service) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const newAppointment = {
      id: Date.now(),
      name,
      phone,
      service,
      message,
      date: new Date().toLocaleString(),
    };
    appointments.push(newAppointment);
    res.status(201).json({ message: "Appointment requested successfully", appointment: newAppointment });
  });

  app.post("/api/admin/login", (req, res) => {
    const { username, password } = req.body;
    if (username === "admin" && password === "admin@sparkle") {
      res.json({ success: true, token: "mock-jwt-token" });
    } else {
      res.status(401).json({ success: false, error: "Invalid credentials" });
    }
  });

  app.get("/api/admin/appointments", (req, res) => {
    // In a real app, we'd check the token here
    res.json(appointments);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
