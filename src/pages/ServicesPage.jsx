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

  const content = {
    fr: {
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
      <main>
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <p className="mb-4 text-sm uppercase tracking-widest text-green-400">
            {t.hero.badge}
          </p>

          <h1 className="mb-6 text-5xl font-black md:text-7xl">
            {t.hero.title}
          </h1>

          <p className="max-w-2xl text-lg text-gray-300">
            {t.hero.text}
          </p>
        </section>

        <section className="mx-auto grid max-w-7xl gap-6 px-6 py-20 md:grid-cols-3">
          {t.services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-green-900 bg-white/5 p-8 transition hover:border-green-700"
            >
              <h2 className="text-2xl font-semibold">{service.title}</h2>
              <p className="mt-4 text-gray-300">{service.text}</p>
            </div>
          ))}
        </section>

        <section className="mx-auto max-w-5xl px-6 py-20">
          <h3 className="mb-6 text-sm uppercase tracking-widest text-green-400">
            {t.extras.title}
          </h3>

          <ul className="grid gap-4 md:grid-cols-2">
            {t.extras.items.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-green-900 bg-black/60 p-4"
              >
                • {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="px-6 py-24 text-center">
          <h2 className="text-4xl font-bold">{t.cta.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-300">
            {t.cta.text}
          </p>

          <Link
            to="/contact"
            className="mt-6 inline-block rounded-2xl bg-green-700 px-6 py-3 hover:bg-green-600"
          >
            {t.cta.button}
          </Link>
        </section>
      </main>
    </div>
  );
}
