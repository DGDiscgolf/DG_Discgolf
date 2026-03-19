import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ContactPage() {
  const [language, setLanguage] = useState("fr");
  const [showFormSuccess, setShowFormSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // ✅ scroll en haut

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
      title: "Réserver une formation",
      text: "Remplis le formulaire pour planifier une séance, poser une question ou réserver une clinique adaptée à ton niveau.",
      formTitle: "Formulaire de réservation",
      name: "Nom complet",
      email: "Courriel",
      level: "Niveau",
      levelOptions: {
        beginner: "Débutant",
        intermediate: "Intermédiaire",
        advanced: "Avancé",
      },
      sessionType: "Type de séance",
      sessionOptions: {
        private: "Cours privé",
        group: "Clinic de groupe",
        technical: "Analyse technique",
        intro: "Introduction au disc golf",
      },
      players: "Nombre de joueurs",
      date: "Date souhaitée",
      location: "Lieu ou région",
      message: "Informations supplémentaires",
      submit: "Envoyer la demande",
      successMessage: "Merci. Votre demande a bien été envoyée.",
      mailLabel: "Courriel",
      mailText:
        "Idéal pour réserver une séance, une clinique de groupe ou demander plus d’informations.",
      mailAction: "Écrire un courriel",
      igLabel: "Instagram",
      igText:
        "Viens voir mon contenu, mes projets disc golf et contacte-moi aussi directement par message privé.",
      igAction: "Ouvrir le profil",
      footerText:
        "Réponse pour cours privés, clinics de groupe, introduction au disc golf et événements spéciaux.",
      formSubject: "Nouvelle demande via le site DG_discgolf",
      formspreeEndpoint: "https://formspree.io/f/xnjgoepz",
    },

    en: {
      back: "← Back to site",
      brand: "DG Disc Golf",
      title: "Book a session",
      text: "Fill out the form to plan a session, ask a question or book a clinic adapted to your level.",
      formTitle: "Booking form",
      name: "Full name",
      email: "Email",
      level: "Level",
      levelOptions: {
        beginner: "Beginner",
        intermediate: "Intermediate",
        advanced: "Advanced",
      },
      sessionType: "Session type",
      sessionOptions: {
        private: "Private lesson",
        group: "Group clinic",
        technical: "Technical analysis",
        intro: "Disc golf introduction",
      },
      players: "Number of players",
      date: "Preferred date",
      location: "Location or region",
      message: "Additional information",
      submit: "Send request",
      successMessage: "Thank you. Your request has been sent successfully.",
      mailLabel: "Email",
      mailText:
        "Ideal for booking a session, a group clinic or asking for more information.",
      mailAction: "Write an email",
      igLabel: "Instagram",
      igText:
        "Come see my content, my disc golf projects and feel free to contact me directly by private message.",
      igAction: "Open profile",
      footerText:
        "Available for private lessons, group clinics, disc golf introduction and special events.",
      formSubject: "New request from the DG_discgolf website",
      formspreeEndpoint: "https://formspree.io/f/xnjgoepz",
    },
  };

  const t = content[language];
  const formspreeEndpoint = t.formspreeEndpoint;

  const handleFormSubmit = () => {
    setShowFormSuccess(true);
    setTimeout(() => {
      setShowFormSuccess(false);
    }, 5000);
  };

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
                className={`px-4 py-2 text-sm font-semibold ${
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
                className={`px-4 py-2 text-sm font-semibold ${
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

      <main className="relative overflow-hidden border-t border-green-950 bg-black py-24 text-white">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-green-900/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold md:text-5xl">{t.title}</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
              {t.text}
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[2rem] border border-green-900 bg-white/5 p-8 shadow-xl ring-1 ring-green-950">
              <div className="mb-6 text-sm font-semibold uppercase text-green-400">
                {t.formTitle}
              </div>

              {showFormSuccess && (
                <div className="mb-6 rounded-2xl border border-green-700 bg-green-950/40 px-4 py-3 text-sm text-green-200">
                  {t.successMessage}
                </div>
              )}

              <form
                action={formspreeEndpoint}
                method="POST"
                className="space-y-6"
                onSubmit={handleFormSubmit}
              >
                <input type="hidden" name="_subject" value={t.formSubject} />

                {/* tes champs restent EXACTEMENT comme avant */}

                <button
                  type="submit"
                  className="inline-flex rounded-2xl bg-green-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
                >
                  {t.submit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
