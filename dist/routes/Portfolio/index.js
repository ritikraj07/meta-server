import express from "express";
import path from "path";
import { getDirnameAndFilename } from "../../utils/utils.js";
const { __dirname } = getDirnameAndFilename(import.meta.url);
const router = express.Router();
// console.log("dirname", __dirname)
router.get("/image", (req, res) => {
    const fileName = req.query.image;
    const filePath = path.resolve(__dirname, "../../../src/media/Portfolio", fileName);
    // console.log("filePath", filePath)
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error("Error sending file:", err);
            res.status(500).send("Error sending file");
        }
    });
});
router.get("/resume", (req, res) => {
    const filePath = path.resolve(__dirname, "../../../src/media/Portfolio", "Ritik Raj Fullstack Developer.pdf");
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error("Error sending file:", err);
            res.status(500).send("Error sending file");
        }
    });
});
export default router;
