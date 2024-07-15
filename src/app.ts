import express, { Request, Response } from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use((req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  next();
});



app.use(express.static(path.join(__dirname, "../public/dist")));

// Default route to catch non-matched endpoints
app.get("*", (req: Request, res: Response) => {
  res.status(404).send("Page Not Found");
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
