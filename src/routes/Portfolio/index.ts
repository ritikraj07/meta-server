import express, { Request, Response } from "express";
import path from "path";
import { getDirnameAndFilename } from "../../utils/utils.js"

const { __dirname } = getDirnameAndFilename(import.meta.url);

const router = express.Router();

router.get("/image", (req: Request, res: Response) => {
  const fileName = req.query.image as string;
  const filePath = path.join(__dirname, "../../media/Portfolio", fileName); 
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error("Error sending file:", err);
      res.status(500).send("Error sending file");
    }
  });
});

export default router;
