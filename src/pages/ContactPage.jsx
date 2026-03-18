import { useState } from "react";
import { Link } from "react-router-dom";

export default function ContactPage() {
  const [language, setLanguage] = useState("fr");
  const [showFormSuccess, setShowFormSuccess] = useState(false);

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
                onClick={() => setLanguage("fr")}
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
                onClick={() => setLanguage("en")}
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

      <main
        className="relative overflow-hidden border-t border-green-950 bg-black py-24 text-white"
      >
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-green-900/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="text-center">
            <div className="mx-auto mb-6 flex w-fit items-center gap-3">
              <div className="text-2xl font-bold">David Gagné</div>
              <img
                src="/DG_logowhite.png"
                alt="DG Logo"
                className="h-7 w-7 object-contain opacity-90"
              />
            </div>

            <h1 className="text-4xl font-bold md:text-5xl">{t.title}</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-300">
              {t.text}
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[2rem] border border-green-900 bg-white/5 p-8 shadow-xl shadow-black/30 ring-1 ring-green-950 backdrop-blur-sm">
              <div className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
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
                <input
                  type="hidden"
                  name="_language"
                  value={language.toUpperCase()}
                />

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-200">
                      {t.name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full rounded-2xl border border-green-900 bg-black/60 px-4 py-3 text-white outline-none transition focus:border-green-600"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-200">
                      {t.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full rounded-2xl border border-green-900 bg-black/60 px-4 py-3 text-white outline-none transition focus:border-green-600"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-200">
                      {t.level}
                    </label>
                    <select
                      name="level"
                      required
                      defaultValue=""
                      className="w-full rounded-2xl border border-green-900 bg-black/60 px-4 py-3 text-white outline-none transition focus:border-green-600"
                    >
                      <option value="" disabled>
                        --
                      </option>
                      <option value={t.levelOptions.beginner}>
                        {t.levelOptions.beginner}
                      </option>
                      <option value={t.levelOptions.intermediate}>
                        {t.levelOptions.intermediate}
                      </option>
                      <option value={t.levelOptions.advanced}>
                        {t.levelOptions.advanced}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-200">
                      {t.sessionType}
                    </label>
                    <select
                      name="sessionType"
                      required
                      defaultValue=""
                      className="w-full rounded-2xl border border-green-900 bg-black/60 px-4 py-3 text-white outline-none transition focus:border-green-600"
                    >
                      <option value="" disabled>
                        --
                      </option>
                      <option value={t.sessionOptions.private}>
                        {t.sessionOptions.private}
                      </option>
                      <option value={t.sessionOptions.group}>
                        {t.sessionOptions.group}
                      </option>
                      <option value={t.sessionOptions.technical}>
                        {t.sessionOptions.technical}
                      </option>
                      <option value={t.sessionOptions.intro}>
                        {t.sessionOptions.intro}
                      </option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-200">
                      {t.players}
                    </label>
                    <input
                      type="number"
                      name="players"
                      min="1"
                      className="w-full rounded-2xl border border-green-900 bg-black/60 px-4 py-3 text-white outline-none transition focus:border-green-600"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-200">
                      {t.date}
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      className="w-full rounded-2xl border border-green-900 bg-black/60 px-4 py-3 text-white outline-none transition focus:border-green-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-200">
                    {t.location}
                  </label>
                  <input
                    type="text"
                    name="location"
                    className="w-full rounded-2xl border border-green-900 bg-black/60 px-4 py-3 text-white outline-none transition focus:border-green-600"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-200">
                    {t.message}
                  </label>
                  <textarea
                    name="message"
                    rows="6"
                    required
                    className="w-full rounded-2xl border border-green-900 bg-black/60 px-4 py-3 text-white outline-none transition focus:border-green-600"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-green-100"
                >
                  {t.submit}
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:d.gagne@outlook.com"
                className="group block rounded-[2rem] border border-green-900 bg-white/5 p-8 text-left shadow-xl shadow-black/30 ring-1 ring-green-950 backdrop-blur-sm transition hover:border-green-700 hover:bg-white/[0.07]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-950/60 text-sm font-bold tracking-[0.2em] text-green-300 ring-1 ring-green-800/70">
                  MAIL
                </div>
                <div className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
                  {t.mailLabel}
                </div>
                <div className="mt-3 break-all text-2xl font-bold text-white">
                  d.gagne@outlook.com
                </div>
                <p className="mt-3 text-sm leading-7 text-gray-300">
                  {t.mailText}
                </p>
                <div className="mt-6 inline-flex items-center text-sm font-semibold text-white transition group-hover:text-green-300">
                  {t.mailAction} <span className="ml-2">→</span>
                </div>
              </a>

              <a
                href="https://instagram.com/dg_discgolf"
                target="_blank"
                rel="noreferrer"
                className="group block rounded-[2rem] border border-green-900 bg-gradient-to-br from-green-950/40 to-black p-8 text-left shadow-xl shadow-black/30 ring-1 ring-green-950 transition hover:border-green-700 hover:from-green-900/40"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black/60 text-sm font-bold tracking-[0.2em] text-green-300 ring-1 ring-green-800/70">
                  IG
                </div>
                <div className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
                  {t.igLabel}
                </div>
                <div className="mt-3 text-2xl font-bold text-white">
                  @dg_discgolf
                </div>
                <p className="mt-3 text-sm leading-7 text-gray-300">
                  {t.igText}
                </p>
                <div className="mt-6 inline-flex items-center text-sm font-semibold text-white transition group-hover:text-green-300">
                  {t.igAction} <span className="ml-2">↗</span>
                </div>
              </a>

              <div className="rounded-3xl border border-green-900 bg-white/5 p-6 text-center ring-1 ring-green-950">
                <p className="text-sm leading-7 text-gray-300">
                  {t.footerText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
