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
      hero: {
        badge: "Formation de disc golf",
        title:
          "Progressez plus vite avec un coaching structuré, précis et motivant.",
        text:
          "Cours privés, clinics de groupe et accompagnement sur le terrain pour améliorer ton lancer, ton putting et ta stratégie.",
        button: "Voir les options de réservation",
      },
      services: {
        title: "Services",
        text: "Des formations adaptées à ton objectif, peu importe ton niveau.",
        button: "Voir la page services",
      },
      contact: {
        title: "Réserver une formation",
        text: "Planifie une séance ou pose tes questions via la page contact.",
        button: "Accéder au formulaire",
      },
      cookie: {
        title: "Utilisation des cookies",
        text: "Ce site utilise des cookies pour améliorer ton expérience.",
        accept: "Accepter",
        decline: "Refuser",
      },
    },

    en: {
      hero: {
        badge: "Disc golf coaching",
        title:
          "Improve faster with structured and motivating coaching.",
        text:
          "Private lessons, clinics and on-course coaching to improve your game.",
        button: "View booking options",
      },
      services: {
        title: "Services",
        text: "Training adapted to your goals and level.",
        button: "View services page",
      },
      contact: {
        title: "Book a session",
        text: "Plan a session or ask your questions through the contact page.",
        button: "Open contact form",
      },
      cookie: {
        title: "Cookie usage",
        text: "This website uses cookies to improve your experience.",
        accept: "Accept",
        decline: "Decline",
      },
    },
  };

  const t = content[language] || content.fr;

  return (
    <div className="bg-black text-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-black">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="mb-4 text-sm uppercase tracking-widest text-green-400">
            {t.hero.badge}
          </p>

          <h1 className="text-5xl md:text-7xl font-black max-w-3xl">
            {t.hero.title}
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-xl">
            {t.hero.text}
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-2xl bg-green-700 px-6 py-3 text-sm font-semibold hover:bg-green-600"
          >
            {t.hero.button}
          </Link>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold">{t.services.title}</h2>

        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          {t.services.text}
        </p>

        <Link
          to="/services"
          className="mt-6 inline-block bg-green-700 px-6 py-3 rounded-2xl hover:bg-green-600"
        >
          {t.services.button}
        </Link>
      </section>

      {/* CONTACT CTA */}
      <section className="py-24 px-6 text-center border-t border-green-950">
        <h2 className="text-4xl font-bold">{t.contact.title}</h2>

        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
          {t.contact.text}
        </p>

        <Link
          to="/contact"
          className="mt-6 inline-block bg-green-700 px-6 py-3 rounded-2xl hover:bg-green-600"
        >
          {t.contact.button}
        </Link>
      </section>

      {/* COOKIE POPUP */}
      {cookieConsent === null && (
        <div className="fixed bottom-0 inset-x-0 p-4 z-50">
          <div className="max-w-4xl mx-auto bg-black border border-green-900 p-6 rounded-2xl">
            <h3 className="font-bold">{t.cookie.title}</h3>

            <p className="text-sm text-gray-300 mt-2">
              {t.cookie.text}
            </p>

            <div className="flex gap-3 mt-4">
              <button
                onClick={declineCookies}
                className="border px-4 py-2 rounded-xl"
              >
                {t.cookie.decline}
              </button>

              <button
                onClick={acceptCookies}
                className="bg-white text-black px-4 py-2 rounded-xl"
              >
                {t.cookie.accept}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
