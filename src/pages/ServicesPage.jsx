import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ServicesPage() {
  const [language, setLanguage] = useState("fr");

  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem("dg_site_language");
      if (savedLanguage === "fr" || savedLanguage === "en") {
        setLanguage(savedLanguage);
      }
    } catch (error) {
      console.error("Language load error:", error);
    }

    window.scrollTo(0, 0);
  }, []);

  const changeLanguage = (lang) => {
    try {
      setLanguage(lang);
      localStorage.setItem("dg_site_language", lang);
    } catch (error) {
      console.error("Language save error:", error);
    }
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
          text: "Séances personnalisées pour travailler ta technique, corriger certains mouvements, développer de meilleures habitudes et progresser plus rapidement avec un encadrement adapté à ton niveau.",
        },
        {
          title: "Clinics de groupe",
          text: "Formule idéale pour les clubs, événements, entreprises ou groupes privés qui veulent découvrir le disc golf, apprendre les bases ou progresser ensemble dans un format dynamique.",
        },
        {
          title: "Analyse technique",
          text: "Travail ciblé sur le putting, le drive, les approches, les angles de lancer, la lecture de ligne et les choix stratégiques pour améliorer la qualité globale de ton jeu.",
        },
      ],
      extras: {
        title: "Pourquoi choisir cette approche",
        items: [
          "Coaching simple, concret et structuré",
          "Approche adaptée aux débutants, intermédiaires et joueurs compétitifs",
          "Progression axée sur la technique, la régularité et le plaisir",
          "Formats disponibles en privé, en groupe ou pour événements spéciaux",
        ],
      },
      cta: {
        title: "Prêt à réserver ?",
        text: "Tu peux réserver une séance, poser une question ou discuter d’une formule adaptée à ton objectif directement via la page contact.",
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
        text: "Whether you are new to disc golf or looking to refine your game, each option is built to help you improve your technique, consistency and confidence on the course.",
      },
      services: [
        {
          title: "Private lessons",
          text: "Personalized sessions to work on your technique, correct specific movements, build better habits and improve faster with coaching adapted to your level.",
        },
        {
          title: "Group clinics",
          text: "An ideal format for clubs, events, companies or private groups who want to discover disc golf, learn the fundamentals or improve together in a dynamic setting.",
        },
        {
          title: "Technical analysis",
          text: "Focused work on putting, driving, approaches, release angles, line reading and strategic decisions to improve the overall quality of your game.",
        },
      ],
      extras: {
        title: "Why choose this approach",
        items: [
          "Simple, practical and structured coaching",
          "Approach adapted to beginners, intermediate and competitive players",
          "Progress focused on technique, consistency and enjoyment",
          "Available in private, group or special event formats",
        ],
      },
      cta: {
        title: "Ready to book?",
        text: "You can book a session, ask a question or discuss the best format for your goals directly through the contact page.",
        button: "Open contact form",
      },
    },
  };

  const t = content[language] || content.fr;

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-30 border-b border-green-950/80 bg-black/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="flex items-center gap-3 text-2xl font-bold tracking-tight text-white">
              David Gagné
              <img
                src="/DG_logowhite.png"
                alt="DG Logo"
                className="h-7 w-7 object-contain"
              />
            </div>
            <div className="text-sm text-gray-300">{t.meta.headerSubtitle}</div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden overflow-hidden rounded-2xl border border-green-900 bg-white/5 sm:flex">
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

            <Link
              to="/"
              className="rounded-2xl border border-green-900 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-green-700 hover:bg-white/10"
            >
              {t.nav.back}
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="relative isolate overflow-hidden bg-black">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-green-950/55" />
          <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-green-400">
              {t.hero.badge}
            </p>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl">
              {t.hero.title}
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
              {t.hero.text}
            </p>
          </div>
        </section>

        <section className="bg-black py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 md:grid-cols-3">
              {t.services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-3xl border border-green-900 bg-white/5 p-8 shadow-lg shadow-black/30 ring-1 ring-green-950"
                >
                  <h2 className="text-2xl font-semibold text-white">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-gray-300">
                    {service.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-black to-green-950/15 py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="rounded-3xl border border-green-900 bg-gradient-to-br from-green-950 to-black p-8 shadow-lg shadow-black/30 ring-1 ring-green-950">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
                {t.extras.title}
              </div>

              <ul className="mt-6 grid gap-4 md:grid-cols-2">
                {t.extras.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl bg-black/60 p-4 text-base text-gray-200 ring-1 ring-green-900/70"
                  >
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-green-950 bg-black py-24">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              {t.cta.title}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-300">
              {t.cta.text}
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex rounded-2xl bg-green-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
            >
              {t.cta.button}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
