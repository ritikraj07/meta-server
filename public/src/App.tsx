import { Suspense } from "react";
import PublicRouter from "./routes/PublicRouter";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PublicRouter />
    </Suspense>
  );
}

export default App;
