import path from "path";
import { fileURLToPath } from "url";
// Utility function to get __dirname and __filename in ES modules
export const getDirnameAndFilename = (importMetaUrl) => {
    const __filename = fileURLToPath(importMetaUrl);
    const __dirname = path.dirname(__filename);
    return { __filename, __dirname };
};
