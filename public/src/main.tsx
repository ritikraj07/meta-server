import React from "react";
import ReactDOM from "react-dom/client"; // Rendering the root of the React app
import App from "./App.tsx"; // Main App component
import "./styles/index.css"; // Global CSS styles
import { BrowserRouter } from "react-router-dom"; // Enables routing
import { HelmetProvider } from "react-helmet-async"; // Manages document head changes
import { CssBaseline } from "@mui/material"; // MUI's CSS baseline
import { Provider } from "react-redux"; // Provides Redux store to the app
import { store } from "./redux/store.ts"; // The Redux store

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Provider store={store}>
          <CssBaseline />
          <App />
        </Provider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
