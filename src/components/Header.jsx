import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [language, setLanguage] = useState("fr");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("dg_site_language");
    if (savedLanguage === "fr" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("dg_site_language", lang);
  };

  return (
    <header className="sticky top-0 z-30 border-b border-green-950/80 bg-black/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3 text-2xl font-bold">
          David Gagné
          <img src="/DG_logowhite.png" className="h-7 w-7" />
        </div>

        <nav className="hidden md:flex gap-6 text-sm">
          <a href="/#apropos">À propos</a>
          <Link to="/services">Services</Link>
          <Link to="/clinique">Clinique</Link>
          <Link to="/formation">Formation</Link>
          <Link to="/forfaits">Forfaits</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/confidentialite">Confidentialité</Link>
        </nav>

        <div className="flex gap-2">
          <button onClick={() => changeLanguage("fr")}>FR</button>
          <button onClick={() => changeLanguage("en")}>EN</button>
        </div>
      </div>
    </header>
  );
}
