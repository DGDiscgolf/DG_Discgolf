import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import PrivacyPage from "./pages/PrivacyPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import PackagesPage from "./pages/PackagesPage.jsx";
import CliniquePage from "./pages/CliniquePage.jsx";
import FormationPage from "./pages/FormationPage.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/confidentialite" element={<PrivacyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/forfaits" element={<PackagesPage />} />
        <Route path="/clinique" element={<CliniquePage />} />
        <Route path="/formation" element={<FormationPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
