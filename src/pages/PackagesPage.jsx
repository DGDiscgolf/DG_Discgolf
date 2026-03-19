import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PackagesPage() {
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
      title: "Forfaits",
      intro:
        "Choisissez la formule qui correspond à votre objectif, que ce soit pour découvrir le disc golf, progresser techniquement ou réserver une clinique sur mesure.",
      button: "Réserver",
      items: [
        {
          name: "Découverte",
          price: "40 $",
          details: "Séance individuelle de 60 minutes.",
        },
        {
          name: "Progression",
          price: "120 $",
          details: "Bloc de 3 séances.",
        },
        {
          name: "Clinic groupe",
          price: "Sur demande",
          details: "Clinics pour clubs ou événements.",
        },
      ],
    },
    en: {
      back: "← Back to site",
      brand: "DG Disc Golf",
      title: "Packages",
      intro:
        "Choose the option that matches your goal, whether it is discovering disc golf, improving your technique, or booking a custom clinic.",
      button: "Book",
      items: [
        {
          name: "Discovery",
          price: "40 $",
         details: "One 60-minute individual session.",
        },
        {
          name: "Progression",
          price: "120 $",
          details: "Block of 3 sessions.",
        },
        {
          name: "Group clinic",
          price: "On request",
          details: "Clinics for clubs or events.",
        },
      ],
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

      <main>
        <section className="bg-gradient-to-b from-black to-green-950/20 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold text-white md:text-5xl">
                {t.title}
              </h1>
              <p className="mt-5 text-lg leading-8 text-gray-300">
                {t.intro}
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {t.items.map((plan) => (
                <div
                  key={plan.name}
                  className="rounded-3xl border border-green-900 bg-white/5 p-8 shadow-lg shadow-black/30 ring-1 ring-green-950 backdrop-blur-sm"
                >
                  <div className="text-sm uppercase tracking-[0.2em] text-gray-400">
                    {plan.name}
                  </div>
                  <div className="mt-3 text-4xl font-bold text-white">
                    {plan.price}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-gray-300">
                    {plan.details}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex rounded-2xl bg-green-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
                  >
                    {t.button}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
