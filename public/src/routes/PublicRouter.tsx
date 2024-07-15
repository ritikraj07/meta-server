import { Routes, Route } from "react-router-dom";
import { Portfolio } from "../pages";

function PublicRouter() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
    </Routes>
  );
}

export default PublicRouter;
