import { Routes, Route } from "react-router-dom";
import { Portfolio } from "../pages";
import UnderConstruction from "../pages/UnderConstruction";
import Blog from "../pages/blog";
import BlogPost from "../pages/blog/blog";
import BlogWriter from "../pages/blog/writeblog";

function PublicRouter() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/blogWriter" element={<BlogWriter />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blog" element={<BlogPost />} />
      <Route path="*" element={<UnderConstruction />} />
    </Routes>
  );
}

export default PublicRouter;
