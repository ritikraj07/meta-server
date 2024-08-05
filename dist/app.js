import express from "express";
import path from "path";
import { getDirnameAndFilename } from "./utils/utils.js";
import portfolioRouter from "./routes/Portfolio/index.js";
import cors from "cors";
const { __dirname } = getDirnameAndFilename(import.meta.url);
const app = express();
// Use environment variable PORT or default to 3000
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public/dist")));
// Mount the portfolio router
app.use("/api/v1/portfolio", portfolioRouter);
// Default route to catch non-matched endpoints
app.get("*", (req, res) => {
    res.status(404).send("Page Not Found");
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
