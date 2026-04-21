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
        title:
          "Progressez plus vite avec un coaching structuré, précis et motivant.",
        text: "Cours privés, clinics de groupe et accompagnement sur le terrain pour aider les joueurs à améliorer leur lancer, leur putting et leur stratégie de jeu.",
        bookingLabel: "Réservation rapide",
        bookingText:
          "Disponible pour cours privés, clinics de groupe et événements spéciaux.",
        bookingButton: "Voir les options de réservation",
      },
      cookiePopup: {
        title: "Utilisation des cookies",
        text: "Ce site utilise des cookies essentiels pour assurer son bon fonctionnement et mémoriser certaines préférences.",
        accept: "Accepter",
        decline: "Refuser",
      },
    },
    en: {
      nav: { privacy: "Privacy" },
      hero: {
        badge: "Disc golf coaching",
        title:
          "Improve faster with structured, precise and motivating coaching.",
        text: "Private lessons, group clinics and on-course coaching.",
        bookingLabel: "Quick booking",
        bookingText: "Available for lessons and events.",
        bookingButton: "View booking options",
      },
      cookiePopup: {
        title: "Cookie usage",
        text: "This website uses essential cookies.",
        accept: "Accept",
        decline: "Decline",
      },
    },
  };

  const t = content[language] || content.fr;

  return (
    <div className="min-h-screen bg-black text-white">
      <main>
        <section className="relative isolate overflow-hidden bg-black">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-green-950/55" />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:py-32">
            
            {/* TEXTE GAUCHE */}
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-green-400">
                {t.hero.badge}
              </p>

              <h1 className="max-w-3xl text-5xl font-black text-white md:text-7xl">
                {t.hero.title}
              </h1>

              <p className="mt-7 text-lg text-gray-300">
                {t.hero.text}
              </p>
            </div>

            {/* BLOC DROIT */}
            <div className="rounded-[2rem] border border-green-900 bg-white/5 p-8 shadow-2xl backdrop-blur-sm">
              
              {/* NOUVEAU BLOC CLIQUABLE */}
              <a
                href="https://www.tvaplus.ca/video/to-pfsq-frisbeegolf-web-transfer-1601183248"
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-3xl bg-black ring-1 ring-green-900/80 transition hover:ring-green-500"
              >
                <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-green-950 to-black">
                  <div className="text-center px-6">
                    <h3 className="text-xl font-bold text-white">
                      Qu’est-ce que le disc golf ?
                    </h3>

                    <div className="mt-5 inline-flex rounded-2xl bg-green-700 px-5 py-3 text-sm font-semibold text-white hover:bg-green-600">
                      Voir reportage
                    </div>
                  </div>
                </div>
              </a>

              {/* BOOKING */}
              <div className="mt-5 rounded-3xl bg-gradient-to-br from-green-950 to-black p-7 ring-1 ring-green-900/80">
                <div className="text-sm font-semibold text-green-400">
                  {t.hero.bookingLabel}
                </div>

                <p className="mt-3 text-sm text-gray-300">
                  {t.hero.bookingText}
                </p>

                <Link
                  to="/contact"
                  className="mt-5 inline-flex rounded-2xl bg-green-700 px-5 py-3 text-sm font-semibold text-white hover:bg-green-600"
                >
                  {t.hero.bookingButton}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* COOKIE */}
      {cookieConsent === null && (
        <div className="fixed inset-x-0 bottom-0 px-4 pb-4">
          <div className="mx-auto max-w-4xl rounded-3xl border border-green-900 bg-black/95 p-6">
            <h3 className="text-lg font-bold">
              {t.cookiePopup.title}
            </h3>

            <p className="mt-2 text-sm text-gray-300">
              {t.cookiePopup.text}
            </p>

            <div className="mt-4 flex gap-3">
              <button
                onClick={declineCookies}
                className="rounded-2xl border border-green-900 px-5 py-3"
              >
                {t.cookiePopup.decline}
              </button>

              <button
                onClick={acceptCookies}
                className="rounded-2xl bg-white px-5 py-3 text-black"
              >
                {t.cookiePopup.accept}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
