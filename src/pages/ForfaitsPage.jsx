import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ForfaitsPage() {
  const [language, setLanguage] = useState("fr");

  useEffect(() => {
    window.scrollTo(0, 0);

    const savedLanguage = localStorage.getItem("dg_site_language");
    if (savedLanguage === "fr" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }
  }, []);

  const content = {
    fr: {
      title: "Forfaits",
      intro:
        "Choisissez la formule qui correspond à votre objectif, que ce soit pour découvrir le disc golf, progresser techniquement ou réserver une clinique sur mesure.",
      button: "Réserver",
      popular: "Populaire",
      items: [
        {
          name: "Clinique de groupe",
          price: "Sur demande",
          details:
            "Clinique offerte aux groupes, entreprises, écoles ou dans le cadre d’événements spéciaux.",
        },
        {
          name: "Séance individuelle",
          price: "Sur demande",
          details: "Séance privée de 60 minutes adaptée à votre niveau.",
        },
        {
          name: "Bloc individuel (3 séances)",
          price: "Sur demande",
          details:
            "Programme de 3 séances individuelles pour une progression structurée et durable.",
        },
      ],
    },

    en: {
      title: "Packages",
      intro:
        "Choose the option that best fits your goal, whether it’s discovering disc golf, improving your technique, or booking a custom clinic.",
      button: "Book",
      popular: "Most popular",
      items: [
        {
          name: "Group clinic",
          price: "On request",
          details:
            "Clinic designed for groups, companies, schools, or special events.",
        },
        {
          name: "Private session",
          price: "On request",
          details: "One 60-minute private session tailored to your level.",
        },
        {
          name: "3-session private package",
          price: "On request",
          details:
            "A structured 3-session private program designed for consistent improvement.",
        },
      ],
    },
  };

  const t = content[language] || content.fr;

  return (
    <div className="min-h-screen bg-black text-white">
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
              {t.items.map((plan, index) => {
                const isHighlight = index === 0;

                return (
                  <div
                    key={plan.name}
                    className={`relative rounded-3xl border p-8 shadow-lg shadow-black/30 ring-1 backdrop-blur-sm transition ${
                      isHighlight
                        ? "border-green-500 bg-gradient-to-br from-green-900/40 to-black ring-green-500 scale-105"
                        : "border-green-900 bg-white/5 ring-green-950"
                    }`}
                  >
                    {isHighlight && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green-600 px-4 py-1 text-xs font-semibold text-white shadow">
                        {t.popular}
                      </div>
                    )}

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
                      className={`mt-6 inline-flex rounded-2xl px-5 py-3 text-sm font-semibold text-white transition ${
                        isHighlight
                          ? "bg-green-600 hover:bg-green-500"
                          : "bg-green-700 hover:bg-green-600"
                      }`}
                    >
                      {t.button}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
