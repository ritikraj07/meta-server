import express, { Request, Response } from "express";
import path from "path";
import { getDirnameAndFilename } from "./utils/utils.js";
import portfolioRouter from "./routes/Portfolio/index.js";
import cors from "cors";
import https from "https"; // or axios if you prefer

const { __dirname } = getDirnameAndFilename(import.meta.url);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public/dist")));

// Health check endpoint (REQUIRED for Render)
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ 
    status: "OK", 
    timestamp: new Date().toISOString(),
    service: "Portfolio Backend",
    environment: process.env.NODE_ENV || "development"
  });
});

// Mount the portfolio router
app.use("/api/v1/portfolio", portfolioRouter);

// Default route to catch non-matched endpoints
app.get("*", (req: Request, res: Response) => {
  res.status(404).json({ error: "Page Not Found" });
});

// Keep-alive function to prevent Render sleep
const keepAlive = () => {
  setInterval(() => {
    const options = {
      hostname: 'ritikraj.onrender.com',
      port: 443,
      path: '/health',
      method: 'GET',
      timeout: 10000
    };

    const req = https.request(options, (res) => {
      console.log(`🔄 Keep-alive ping: ${res.statusCode}`);
    });

    req.on('error', (err) => {
      console.log('❌ Keep-alive failed:', err.message);
    });

    req.on('timeout', () => {
      console.log('❌ Keep-alive timeout');
      req.destroy();
    });

    req.end();
  }, 5 * 60 * 1000); // Ping every 5 minutes (Render sleeps after 15 mins of inactivity)
};

// Start keep-alive only in production
if (process.env.NODE_ENV === 'production') {
  keepAlive();
  console.log('🔔 Keep-alive service started');
}

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
});