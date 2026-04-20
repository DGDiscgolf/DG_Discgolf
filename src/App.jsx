import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function App() {
  const [language, setLanguage] = useState("fr");
  const [cookieConsent, setCookieConsent] = useState(null);

  useEffect(() => {
    const savedConsent = localStorage.getItem("dg_cookie_consent");
    if (savedConsent) {
      setCookieConsent(savedConsent);
    }

    const savedLanguage = localStorage.getItem("dg_site_language");
    if (savedLanguage === "fr" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("dg_cookie_consent", "accepted");
    setCookieConsent("accepted");
  };

  const declineCookies = () => {
    localStorage.setItem("dg_cookie_consent", "declined");
    setCookieConsent("declined");
  };

  const content = {
    fr: {
      nav: { privacy: "Confidentialité" },
      hero: {
        badge: "Formation de disc golf",
        title: "Progressez plus vite avec un coaching structuré, précis et motivant.",
        text: "Cours privés, clinics de groupe et accompagnement sur le terrain pour aider les joueurs à améliorer leur lancer, leur putting et leur stratégie de jeu.",
        objectiveLabel: "Objectif",
        objectiveTitle: "Mieux lancer. Mieux scorer. Plus de plaisir.",
        objectiveText:
          "Une approche claire pour développer les bases techniques, corriger les habitudes et bâtir une progression durable.",
        bookingLabel: "Réservation rapide",
        bookingText:
          "Disponible pour cours privés, clinics de groupe et événements spéciaux.",
        bookingButton: "Voir les options de réservation",
      },
      videoSection: {
        badge: "Vidéo",
        title: "Reportage TVA+ sur le disc golf",
        text: "Découvre un reportage mettant en lumière le disc golf et son essor au Québec.",
        button: "Voir sur TVA+",
      },
    },

    en: {
      nav: { privacy: "Privacy" },
      hero: {
        badge: "Disc golf coaching",
        title: "Improve faster with structured, precise and motivating coaching.",
        text: "Private lessons, group clinics and on-course coaching to help players improve their throwing, putting and game strategy.",
        objectiveLabel: "Goal",
        objectiveTitle: "Throw better. Score better. More fun.",
        objectiveText:
          "A clear approach to build strong fundamentals, correct habits and create lasting progress.",
        bookingLabel: "Quick booking",
        bookingText:
          "Available for private lessons, group clinics and special events.",
        bookingButton: "View booking options",
      },
      videoSection: {
        badge: "Video",
        title: "TVA+ feature on disc golf",
        text: "Watch a feature highlighting disc golf and its growing popularity in Quebec.",
        button: "Watch on TVA+",
      },
    },
  };

  const t = content[language] || content.fr;

  return (
    <div className="min-h-screen bg-black text-white">
      <main>
        <section className="relative isolate overflow-hidden bg-black">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-green-950/55" />
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-green-900/20 blur-3xl" />
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-green-700/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:py-32">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-green-400">
                {t.hero.badge}
              </p>

              <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl">
                {t.hero.title}
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl">
                {t.hero.text}
              </p>
            </div>

            <div className="rounded-[2rem] border border-green-900 bg-white/5 p-8 shadow-2xl shadow-black/50 backdrop-blur-sm">

              {/* 🔥 VIDEO TVA+ À LA PLACE DE OBJECTIF */}
              <div className="rounded-3xl bg-black ring-1 ring-green-900/80 overflow-hidden">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.tvaplus.ca/video/to-pfsq-frisbeegolf-web-transfer-1601183248"
                    title="TVA+ Disc Golf"
                    className="h-full w-full"
                    loading="lazy"
                    allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                    allowFullScreen
                  />
                </div>
              </div>

              <div className="mt-5 rounded-3xl bg-gradient-to-br from-green-950 to-black p-7 ring-1 ring-green-900/80">
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-green-400">
                  {t.hero.bookingLabel}
                </div>
                <p className="mt-3 text-sm leading-7 text-gray-300">
                  {t.hero.bookingText}
                </p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex rounded-2xl bg-green-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
                >
                  {t.hero.bookingButton}
                </Link>
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
