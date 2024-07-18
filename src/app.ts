import express, { Request, Response } from "express";
import path from "path";
import { getDirnameAndFilename } from "./utils/utils.js"
import portfolioRouter from "./routes/Portfolio/index.js";

const { __dirname } = getDirnameAndFilename(import.meta.url);

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "../public/dist")));

// Mount the portfolio router
app.use("/api/v1/portfolio", portfolioRouter);

// Default route to catch non-matched endpoints
app.get("*", (req: Request, res: Response) => {
  res.status(404).send("Page Not Found");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
