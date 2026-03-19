import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ServicesPage() {
  const [language, setLanguage] = useState("fr");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("dg_site_language");
    if (savedLanguage === "fr" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }
    window.scrollTo(0, 0);
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("dg_site_language", lang);
  };

  const content = {
    fr: {
      meta: {
        headerSubtitle: "Formation • Coaching • Clinics",
      },
      nav: {
        back: "← Retour au site",
      },
      hero: {
        badge: "Services",
        title: "Des services pensés pour accélérer ta progression.",
        text: "Que tu débutes en disc golf ou que tu veuilles raffiner ton jeu, chaque formule est conçue pour t’aider à améliorer ta technique, ta constance et ta confiance sur le parcours.",
      },
      services: [
        {
          title: "Cours privés",
          text: "Séances personnalisées pour travailler ta technique, corriger certains mouvements et progresser plus rapidement.",
        },
        {
          title: "Clinics de groupe",
          text: "Formule idéale pour clubs, entreprises ou groupes qui veulent apprendre et progresser ensemble.",
        },
        {
          title: "Analyse technique",
          text: "Travail ciblé sur le putting, le drive, les approches et la stratégie de jeu.",
        },
      ],
      extras: {
        title: "Pourquoi choisir cette approche",
        items: [
          "Coaching simple, concret et structuré",
          "Adapté à tous les niveaux",
          "Progression axée sur la constance et le plaisir",
          "Formats privés, groupes et événements",
        ],
      },
      cta: {
        title: "Prêt à réserver ?",
        text: "Accède à la page contact pour réserver une séance ou poser tes questions.",
        button: "Accéder au formulaire",
      },
    },

    en: {
      meta: {
        headerSubtitle: "Training • Coaching • Clinics",
      },
      nav: {
        back: "← Back to site",
      },
      hero: {
        badge: "Services",
        title: "Services designed to help you improve faster.",
        text: "Each option is built to improve your technique, consistency and confidence.",
      },
      services: [
        {
          title: "Private lessons",
          text: "Personalized coaching to improve faster and build better habits.",
        },
        {
          title: "Group clinics",
          text: "Perfect for clubs, events or groups wanting to improve together.",
        },
        {
          title: "Technical analysis",
          text: "Focused work on putting, driving and game strategy.",
        },
      ],
      extras: {
        title: "Why choose this approach",
        items: [
          "Simple and structured coaching",
          "Adapted to all skill levels",
          "Focus on consistency and enjoyment",
          "Private, group and event formats",
        ],
      },
      cta: {
        title: "Ready to book?",
        text: "Go to the contact page to book a session or ask questions.",
        button: "Open contact form",
      },
    },
  };

  const t = content[language] || content.fr;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-green-950/80 bg-black/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="flex items-center gap-3 text-2xl font-bold">
              David Gagné
              <img
                src="/DG_logowhite.png"
                alt="DG Logo"
                className="h-7 w-7"
              />
            </div>
            <div className="text-sm text-gray-300">
              {t.meta.headerSubtitle}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex rounded-2xl border border-green-900 bg-white/5 overflow-hidden">
              <button
                onClick={() => changeLanguage("fr")}
                className={`px-4 py-2 ${
                  language === "fr"
                    ? "bg-white text-black"
                    : "text-white hover:bg-white/10"
                }`}
              >
                FR
              </button>
              <button
                onClick={() => changeLanguage("en")}
                className={`px-4 py-2 ${
                  language === "en"
                    ? "bg-white text-black"
                    : "text-white hover:bg-white/10"
                }`}
              >
                EN
              </button>
            </div>

            <Link
              to="/"
              className="rounded-2xl border border-green-900 bg-white/5 px-4 py-2 hover:bg-white/10"
            >
              {t.nav.back}
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <p className="text-green-400 uppercase text-sm tracking-widest mb-4">
          {t.hero.badge}
        </p>
        <h1 className="text-5xl md:text-7xl font-black mb-6">
          {t.hero.title}
        </h1>
        <p className="text-gray-300 max-w-2xl text-lg">
          {t.hero.text}
        </p>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        {t.services.map((service) => (
          <div
            key={service.title}
            className="border border-green-900 rounded-3xl p-8 bg-white/5 hover:border-green-700 transition"
          >
            <h2 className="text-2xl font-semibold">{service.title}</h2>
            <p className="mt-4 text-gray-300">{service.text}</p>
          </div>
        ))}
      </section>

      {/* EXTRAS */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h3 className="text-green-400 uppercase tracking-widest text-sm mb-6">
          {t.extras.title}
        </h3>

        <ul className="grid md:grid-cols-2 gap-4">
          {t.extras.items.map((item) => (
            <li
              key={item}
              className="bg-black/60 border border-green-900 rounded-xl p-4"
            >
              • {item}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-6">
        <h2 className="text-4xl font-bold">{t.cta.title}</h2>
        <p className="text-gray-300 mt-4 max-w-xl mx-auto">
          {t.cta.text}
        </p>

        <Link
          to="/contact"
          className="mt-6 inline-block bg-green-700 px-6 py-3 rounded-2xl hover:bg-green-600"
        >
          {t.cta.button}
        </Link>
      </section>
    </div>
  );
}
