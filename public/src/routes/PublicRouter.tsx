import { Routes, Route } from "react-router-dom";
import { Portfolio } from "../pages";
import UnderConstruction from "../pages/UnderConstruction";

function PublicRouter() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="*" element={<UnderConstruction />} />
    </Routes>
  );
}

export default PublicRouter;
