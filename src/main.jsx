import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ServicesPage from "./pages/ServicesPage";
import CliniquePage from "./pages/CliniquePage";
import FormationPage from "./pages/FormationPage";
import ForfaitsPage from "./pages/ForfaitsPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPage from "./pages/PrivacyPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/clinique" element={<CliniquePage />} />
        <Route path="/formation" element={<FormationPage />} />
        <Route path="/forfaits" element={<ForfaitsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/confidentialite" element={<PrivacyPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
