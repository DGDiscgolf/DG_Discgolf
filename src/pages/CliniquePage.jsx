import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CliniquePage() {
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
      badge: "Clinique de disc golf",
      title: "Découvre un nouveau sport et passe au niveau supérieur",
      p1: "Tu veux découvrir un nouveau sport et t’amuser, ou améliorer ton jeu pour lancer plus loin, être plus précis et baisser ton score ?",
      p2: "Mes cliniques de disc golf sont conçues pour te faire découvrir le disc golf ou élever ton niveau, peu importe ton expérience.",
      tags: [
        "Individuel ou groupe",
        "Débutant à intermédiaire",
        "Flexible selon le besoin",
      ],
      learn: [
        {
          badge: "01",
          title: "Bases du disc golf",
          text: "Règlements, sécurité, équipement et bonnes pratiques pour commencer sur de bonnes bases.",
        },
        {
          badge: "02",
          title: "Backhand et forehand",
          text: "Développer une meilleure technique de lancer pour gagner en fluidité, distance et contrôle.",
        },
        {
          badge: "03",
          title: "Approches et putting",
          text: "Améliorer le toucher, la constance et la confiance dans les moments importants.",
        },
        {
          badge: "04",
          title: "Lecture de lignes et stratégie",
          text: "Mieux lire le parcours, choisir le bon lancer et prendre de meilleures décisions.",
        },
      ],
      quote:
        "Le disc golf, c’est facile à apprendre, difficile à maîtriser, et incroyablement captivant.",
      forWhoLabel: "Pour qui ?",
      forWho: [
        "Les curieux qui veulent découvrir un nouveau sport",
        "Les débutants qui veulent partir sur de bonnes bases",
        "Les joueurs intermédiaires qui veulent gagner en constance",
      ],
      bookingTitle: "Réserver une clinique",
      bookingText:
        "Disponible pour une introduction au disc golf, du perfectionnement technique ou une clinique sur mesure.",
      bookingButton: "Réserver maintenant",
      infoCards: {
        format: { title: "Format", text: "Individuel ou groupe" },
        duration: { title: "Durée", text: "Flexible" },
        contact: { title: "Contact", text: "DM ou courriel" },
      },
    },

    en: {
      badge: "Disc golf clinic",
      title: "Discover a new sport and take your game to the next level",
      p1: "Do you want to discover a new sport and have fun, or improve your game to throw farther, be more precise and lower your score?",
      p2: "My disc golf clinics are designed to help you discover the sport or raise your level, no matter your experience.",
      tags: [
        "Individual or group",
        "Beginner to intermediate",
        "Flexible to your needs",
      ],
      learn: [
        {
          badge: "01",
          title: "Disc golf fundamentals",
          text: "Rules, safety, equipment and best practices to start the right way.",
        },
        {
          badge: "02",
          title: "Backhand and forehand",
          text: "Develop better throwing technique to gain fluidity, distance and control.",
        },
        {
          badge: "03",
          title: "Approach shots and putting",
          text: "Improve touch, consistency and confidence in key situations.",
        },
        {
          badge: "04",
          title: "Line shaping and strategy",
          text: "Read the course better, choose the right shot and make smarter decisions.",
        },
      ],
      quote:
        "Disc golf is easy to learn, hard to master, and incredibly addictive.",
      forWhoLabel: "Who is it for?",
      forWho: [
        "People curious to discover a new sport",
        "Beginners who want to start with strong fundamentals",
        "Intermediate players who want more consistency",
      ],
      bookingTitle: "Book a clinic",
      bookingText:
        "Available for disc golf introductions, technical improvement or custom clinics.",
      bookingButton: "Book now",
      infoCards: {
        format: { title: "Format", text: "Individual or group" },
        duration: { title: "Duration", text: "Flexible" },
        contact: { title: "Contact", text: "DM or email" },
      },
    },
  };

  const t = content[language] || content.fr;

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="relative overflow-hidden bg-gradient-to-b from-black via-black to-green-950/10 py-24">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-green-900/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-green-700/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-10 max-w-4xl">
            <div className="inline-flex items-center rounded-full border border-green-800/80 bg-green-950/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-green-400">
              {t.badge}
            </div>

            <h1 className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl">
              {t.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
              {t.p1}
            </p>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-300">
              {t.p2}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[2rem] border border-green-900/80 bg-white/5 p-6 shadow-2xl shadow-black/40 ring-1 ring-green-950 backdrop-blur-sm md:p-8">
              <div className="mb-8 flex flex-wrap gap-3">
                {t.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-green-800/70 bg-black/60 px-4 py-2 text-sm text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {t.learn.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-green-900/70 bg-black/60 p-5 ring-1 ring-green-900/50 transition hover:border-green-700"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-950/60 text-sm font-bold tracking-[0.2em] text-green-300 ring-1 ring-green-800/70">
                      {item.badge}
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-gray-300">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-3xl border border-green-900/70 bg-gradient-to-r from-green-950/50 to-black p-6 ring-1 ring-green-900/50">
                <p className="text-base italic leading-8 text-gray-200 md:text-lg">
                  {t.quote}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[2rem] border border-green-900/80 bg-white/5 p-7 shadow-xl shadow-black/30 ring-1 ring-green-950 backdrop-blur-sm">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
                  {t.forWhoLabel}
                </div>

                <ul className="mt-5 space-y-4 text-base text-gray-200">
                  {t.forWho.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 text-green-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[2rem] border border-green-900 bg-gradient-to-br from-green-950 to-black p-7 shadow-xl shadow-black/30 ring-1 ring-green-950">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
                  {t.bookingTitle}
                </div>

                <p className="mt-4 text-sm leading-7 text-gray-300">
                  {t.bookingText}
                </p>

                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="inline-flex w-full items-center justify-center rounded-2xl bg-green-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
                  >
                    {t.bookingButton}
                  </Link>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl bg-black/50 p-4 ring-1 ring-green-900/70">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-green-400">
                      {t.infoCards.format.title}
                    </div>
                    <p className="mt-2 text-sm text-gray-300">
                      {t.infoCards.format.text}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-black/50 p-4 ring-1 ring-green-900/70">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-green-400">
                      {t.infoCards.duration.title}
                    </div>
                    <p className="mt-2 text-sm text-gray-300">
                      {t.infoCards.duration.text}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-black/50 p-4 ring-1 ring-green-900/70">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-green-400">
                      {t.infoCards.contact.title}
                    </div>
                    <p className="mt-2 text-sm text-gray-300">
                      {t.infoCards.contact.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
