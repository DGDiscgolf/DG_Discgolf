import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState("fr");
  const location = useLocation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("dg_site_language");
    if (savedLanguage === "fr" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }
  }, [location.pathname]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("dg_site_language", lang);
    setMobileMenuOpen(false);
    window.location.reload();
  };

  const content = {
    fr: {
      meta: {
        headerSubtitle: "Formation • Coaching • Cliniques",
      },
      nav: {
        services: "Services",
        clinique: "Clinique",
        formation: "Formation",
        apropos: "À propos",
        forfaits: "Forfaits",
        contact: "Contact",
        privacy: "Confidentialité",
        openMenu: "Ouvrir le menu",
        closeMenu: "Fermer le menu",
      },
    },
    en: {
      meta: {
        headerSubtitle: "Training • Coaching • Clinics",
      },
      nav: {
        services: "Services",
        clinique: "Clinic",
        formation: "Training",
        apropos: "About",
        forfaits: "Packages",
        contact: "Contact",
        privacy: "Privacy",
        openMenu: "Open menu",
        closeMenu: "Close menu",
      },
    },
  };

  const t = content[language] || content.fr;
  const isHome = location.pathname === "/";

  return (
    <header className="sticky top-0 z-30 border-b border-green-950/80 bg-black/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <Link
            to="/"
            className="flex items-center gap-3 text-2xl font-bold tracking-tight text-white"
          >
            David Gagné
            <img
              src="/DG_logowhite.png"
              alt="DG Logo"
              className="h-7 w-7 object-contain"
            />
          </Link>
          <div className="text-sm text-gray-300">{t.meta.headerSubtitle}</div>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex gap-6 text-sm text-white">
            {isHome ? (
              <a href="#apropos" className="transition hover:text-green-400">
                {t.nav.apropos}
              </a>
            ) : (
              <Link to="/#apropos" className="transition hover:text-green-400">
                {t.nav.apropos}
              </Link>
            )}

            <Link to="/services" className="transition hover:text-green-400">
              {t.nav.services}
            </Link>
            <Link to="/clinique" className="transition hover:text-green-400">
              {t.nav.clinique}
            </Link>
            <Link to="/formation" className="transition hover:text-green-400">
              {t.nav.formation}
            </Link>
            <Link to="/forfaits" className="transition hover:text-green-400">
              {t.nav.forfaits}
            </Link>
            <Link to="/contact" className="transition hover:text-green-400">
              {t.nav.contact}
            </Link>
          </nav>

          <div className="flex overflow-hidden rounded-2xl border border-green-900 bg-white/5">
            <button
              type="button"
              onClick={() => changeLanguage("fr")}
              className={`px-4 py-2 text-sm font-semibold transition ${
                language === "fr"
                  ? "bg-white text-black"
                  : "text-white hover:bg-white/10"
              }`}
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => changeLanguage("en")}
              className={`px-4 py-2 text-sm font-semibold transition ${
                language === "en"
                  ? "bg-white text-black"
                  : "text-white hover:bg-white/10"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        <button
          type="button"
          aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex items-center justify-center rounded-2xl border border-green-900 bg-white/5 p-3 text-white ring-1 ring-green-950 transition hover:border-green-700 hover:bg-white/10 md:hidden"
        >
          <div className="flex h-5 w-5 flex-col items-center justify-center gap-1">
            <span
              className={`block h-0.5 w-5 bg-white transition-transform duration-300 ${
                mobileMenuOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition-opacity duration-300 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition-transform duration-300 ${
                mobileMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-green-950/80 bg-black/95 px-6 py-4 md:hidden">
          <div className="mb-4 flex overflow-hidden rounded-2xl border border-green-900 bg-white/5">
            <button
              type="button"
              onClick={() => changeLanguage("fr")}
              className={`flex-1 px-4 py-3 text-sm font-semibold transition ${
                language === "fr"
                  ? "bg-white text-black"
                  : "text-white hover:bg-white/10"
              }`}
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => changeLanguage("en")}
              className={`flex-1 px-4 py-3 text-sm font-semibold transition ${
                language === "en"
                  ? "bg-white text-black"
                  : "text-white hover:bg-white/10"
              }`}
            >
              EN
            </button>
          </div>

          <nav className="flex flex-col gap-3 text-sm text-white">
            {isHome ? (
              <a
                href="#apropos"
                onClick={closeMobileMenu}
                className="rounded-2xl border border-green-900 bg-white/5 px-4 py-3 transition hover:border-green-700 hover:bg-white/10"
              >
                {t.nav.apropos}
              </a>
            ) : (
              <Link
                to="/#apropos"
                onClick={closeMobileMenu}
                className="rounded-2xl border border-green-900 bg-white/5 px-4 py-3 transition hover:border-green-700 hover:bg-white/10"
              >
                {t.nav.apropos}
              </Link>
            )}

            <Link
              to="/services"
              onClick={closeMobileMenu}
              className="rounded-2xl border border-green-900 bg-white/5 px-4 py-3 transition hover:border-green-700 hover:bg-white/10"
            >
              {t.nav.services}
            </Link>
            <Link
              to="/clinique"
              onClick={closeMobileMenu}
              className="rounded-2xl border border-green-900 bg-white/5 px-4 py-3 transition hover:border-green-700 hover:bg-white/10"
            >
              {t.nav.clinique}
            </Link>
            <Link
              to="/formation"
              onClick={closeMobileMenu}
              className="rounded-2xl border border-green-900 bg-white/5 px-4 py-3 transition hover:border-green-700 hover:bg-white/10"
            >
              {t.nav.formation}
            </Link>
            <Link
              to="/forfaits"
              onClick={closeMobileMenu}
              className="rounded-2xl border border-green-900 bg-white/5 px-4 py-3 transition hover:border-green-700 hover:bg-white/10"
            >
              {t.nav.forfaits}
            </Link>
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="rounded-2xl border border-green-900 bg-white/5 px-4 py-3 transition hover:border-green-700 hover:bg-white/10"
            >
              {t.nav.contact}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
