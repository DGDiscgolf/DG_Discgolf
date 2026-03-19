import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function FormationPage() {
  const [language, setLanguage] = useState("fr");

  useEffect(() => {
    window.scrollTo(0, 0);

    const savedLanguage = localStorage.getItem("dg_site_language");
    if (savedLanguage === "fr" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("dg_site_language", lang);
  };

  const content = {
    fr: {
      back: "← Retour au site",
      brand: "DG Disc Golf",
      badge: "Formation",
      title: "Introduction au disc golf",
      p1: "En plus des cliniques pratiques, je propose aussi une introduction complète au disc golf pour mieux comprendre le sport, son fonctionnement et les bases essentielles pour bien commencer.",
      p2: "Cette formule est idéale pour les nouveaux joueurs, les groupes, les clubs, les écoles ou les entreprises qui souhaitent découvrir le disc golf de façon simple, structurée et dynamique.",
      contentTitle: "Contenu possible",
      topics: [
        "Histoire du disc golf et origine du sport",
        "Présentation du panier et fonctionnement du jeu",
        "Les différents types de disques : Driver, Fairway, Midrange et Putter",
        "Comprendre les statistiques des disques : Speed, Glide, Turn et Fade",
        "Démonstration de lancers",
        "Mise en pratique sur le terrain",
      ],
      audienceTitle: "Idéal pour",
      audience: [
        "Les nouveaux joueurs qui veulent découvrir le disc golf",
        "Les clubs qui souhaitent proposer une activité structurée",
        "Les écoles et groupes jeunesse",
        "Les entreprises qui veulent offrir une activité originale",
      ],
      bookingTitle: "Réserver une formation",
      bookingText:
        "Disponible pour des introductions au disc golf, ateliers d’initiation et présentations adaptées à différents groupes.",
      bookingButton: "Réserver maintenant",
    },

    en: {
      back: "← Back to site",
      brand: "DG Disc Golf",
      badge: "Training",
      title: "Introduction to disc golf",
      p1: "In addition to practical clinics, I also offer a complete introduction to disc golf to better understand the sport, how it works and the key fundamentals to start the right way.",
      p2: "This format is ideal for new players, groups, clubs, schools or companies who want to discover disc golf in a simple, structured and engaging way.",
      contentTitle: "Possible content",
      topics: [
        "History of disc golf and origins of the sport",
        "Introduction to the basket and how the game works",
        "Different disc types: Driver, Fairway, Midrange and Putter",
        "Understanding disc flight numbers: Speed, Glide, Turn and Fade",
        "Throwing demonstrations",
        "On-course practice",
      ],
      audienceTitle: "Ideal for",
      audience: [
        "New players who want to discover disc golf",
        "Clubs looking to offer a structured activity",
        "Schools and youth groups",
        "Companies wanting to offer an original activity",
      ],
      bookingTitle: "Book a training session",
      bookingText:
        "Available for disc golf introductions, beginner workshops and presentations adapted to different groups.",
      bookingButton: "Book now",
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-green-950/80 bg-black/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            to="/"
            className="text-sm font-semibold text-green-400 transition hover:text-green-300"
          >
            {t.back}
          </Link>

          <div className="flex items-center gap-4">
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

            <div className="text-sm text-gray-400">{t.brand}</div>
          </div>
        </div>
      </header>

      <main className="bg-gradient-to-b from-black to-green-950/20 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-green-400">
                {t.badge}
              </p>

              <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
                {t.title}
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-300">
                {t.p1}
              </p>

              <p className="mt-4 text-lg leading-8 text-gray-300">
                {t.p2}
              </p>

              <div className="mt-8 rounded-3xl border border-green-900 bg-gradient-to-br from-green-950 to-black p-8 shadow-lg shadow-black/30 ring-1 ring-green-950">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
                  {t.bookingTitle}
                </div>

                <p className="mt-4 text-sm leading-7 text-gray-300">
                  {t.bookingText}
                </p>

                <Link
                  to="/contact"
                  className="mt-6 inline-flex rounded-2xl bg-green-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
                >
                  {t.bookingButton}
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-green-900 bg-white/5 p-8 shadow-lg shadow-black/30 ring-1 ring-green-950 backdrop-blur-sm">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
                  {t.contentTitle}
                </div>

                <ul className="mt-5 space-y-4 text-base text-gray-200">
                  {t.topics.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 text-green-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-green-900 bg-white/5 p-8 shadow-lg shadow-black/30 ring-1 ring-green-950 backdrop-blur-sm">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
                  {t.audienceTitle}
                </div>

                <ul className="mt-5 space-y-4 text-base text-gray-200">
                  {t.audience.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 text-green-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
