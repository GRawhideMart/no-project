import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";
import WIP from "./WIP.page.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider context={{}}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<WIP />} />
          <Route path="/contact" element={<WIP />} />
          <Route path="/news" element={<WIP />} />
        </Routes>
      </Router>
    </HelmetProvider>
  </React.StrictMode>
);
