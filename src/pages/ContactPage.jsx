import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ContactPage() {
  const [language, setLanguage] = useState("fr");
  const [showFormSuccess, setShowFormSuccess] = useState(false);

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
      formSubject: "New request from the DG_discgolf website",
      formspreeEndpoint: "https://formspree.io/f/xnjgoepz",
    },
  };

  const t = content[language];
  const formspreeEndpoint = t.formspreeEndpoint;

  const handleFormSubmit = () => {
    setShowFormSuccess(true);
    setTimeout(() => setShowFormSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-green-950/80 bg-black/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link to="/" className="text-sm font-semibold text-green-400 hover:text-green-300">
            {t.back}
          </Link>

          <div className="flex items-center gap-4">
            <div className="flex rounded-2xl border border-green-900 bg-white/5">
              <button onClick={() => changeLanguage("fr")} className={`px-4 py-2 ${language === "fr" ? "bg-white text-black" : "text-white"}`}>FR</button>
              <button onClick={() => changeLanguage("en")} className={`px-4 py-2 ${language === "en" ? "bg-white text-black" : "text-white"}`}>EN</button>
            </div>

            <div className="text-sm text-gray-400">{t.brand}</div>
          </div>
        </div>
      </header>

      <main className="py-24">
        <div className="mx-auto max-w-6xl px-6">

          <h1 className="text-4xl font-bold text-center">{t.title}</h1>
          <p className="text-center text-gray-300 mt-4">{t.text}</p>

          <div className="mt-12">
            {showFormSuccess && (
              <div className="mb-6 text-green-400 text-center">
                {t.successMessage}
              </div>
            )}

            <form
              action={formspreeEndpoint}
              method="POST"
              onSubmit={handleFormSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="_subject" value={t.formSubject} />

              {/* NOM + EMAIL */}
              <div className="grid md:grid-cols-2 gap-6">
                <input name="name" required placeholder={t.name} className="p-3 rounded-xl bg-black border border-green-900" />
                <input type="email" name="email" required placeholder={t.email} className="p-3 rounded-xl bg-black border border-green-900" />
              </div>

              {/* NIVEAU + TYPE */}
              <div className="grid md:grid-cols-2 gap-6">
                <select name="level" required className="p-3 rounded-xl bg-black border border-green-900">
                  <option value="">{t.level}</option>
                  <option>{t.levelOptions.beginner}</option>
                  <option>{t.levelOptions.intermediate}</option>
                  <option>{t.levelOptions.advanced}</option>
                </select>

                <select name="sessionType" required className="p-3 rounded-xl bg-black border border-green-900">
                  <option value="">{t.sessionType}</option>
                  <option>{t.sessionOptions.private}</option>
                  <option>{t.sessionOptions.group}</option>
                  <option>{t.sessionOptions.technical}</option>
                  <option>{t.sessionOptions.intro}</option>
                </select>
              </div>

              {/* JOUEURS + DATE */}
              <div className="grid md:grid-cols-2 gap-6">
                <input type="number" name="players" min="1" placeholder={t.players} className="p-3 rounded-xl bg-black border border-green-900" />
                <input type="date" name="preferredDate" className="p-3 rounded-xl bg-black border border-green-900" />
              </div>

              {/* LOCATION */}
              <input name="location" placeholder={t.location} className="w-full p-3 rounded-xl bg-black border border-green-900" />

              {/* MESSAGE */}
              <textarea name="message" rows="5" required placeholder={t.message} className="w-full p-3 rounded-xl bg-black border border-green-900" />

              {/* BOUTON */}
              <button
                type="submit"
                className="bg-green-700 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold"
              >
                {t.submit}
              </button>
            </form>

          </div>
        </div>
      </main>
    </div>
  );
}
