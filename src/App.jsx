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
      nav: {
        privacy: "Confidentialité",
      },
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
      servicesSection: {
        title: "Services",
        text: "Des formations adaptées à votre objectif, que vous débutiez en disc golf ou que vous cherchiez à amener votre jeu à un autre niveau.",
        button: "Voir la page services",
      },
      cliniquePreview: {
        badge: "Clinique de disc golf",
        title: "Découvre un nouveau sport et passe au niveau supérieur",
        text: "Cliniques adaptées aux joueurs débutants et intermédiaires pour améliorer la technique, le contrôle, les approches, le putting et la lecture du parcours.",
        button: "Voir la page clinique",
      },
      formationPreview: {
        badge: "Formation",
        title: "Introduction au disc golf",
        text: "Une formule structurée pour découvrir le sport, comprendre les bases essentielles et initier les joueurs, groupes, écoles ou entreprises.",
        button: "Voir la page formation",
      },
      aboutSection: {
        title: "À propos de moi",
        p1: "Je m'appelle David Gagné et je suis un passionné de disc golf basé à Québec. Aujourd'hui, j'utilise mon expérience sur le terrain pour aider les joueurs à progresser avec une approche simple, motivante et concrète.",
        p2: "Avec plus de 670 parties jouées, je connais bien les réalités de la progression, autant sur le plan technique que mental. Mon objectif est d’aider les joueurs à développer leur lancer, leur putting, leur confiance et leur stratégie de jeu.",
        p3: "Je suis fier de faire partie du Westside Team 2026, d’être ambassadeur pour SIGR et de représenter Panak Disc Golf, des partenaires qui soutiennent ma progression et contribuent au développement du disc golf.",
        imageAlt: "David Gagné Disc Golf",
        approachTitle: "Approche",
        approachItems: [
          "Approche simple, concrète et adaptée à votre niveau",
          "Coaching axé sur la technique, la régularité et le plaisir de jouer",
          "Séances pour débutants, intermédiaires et joueurs compétitifs",
          "Formats individuels, groupes et événements spéciaux",
        ],
        statsTitle: "Quelques repères",
        stats: [
          { value: "680+", label: "parties jouées" },
          { value: "Westside Team", label: "Warrior" },
          { label: "", logo: "/udisc.png", url: "https://udisc.com" },
          {
            value: "266419",
            label: "Membre PDGA",
            logo: "/pdga.png",
            url: "https://www.pdga.com/player/266419",
          },
        ],
        partnersTitle: "Partenaires",
        partners: [
          {
            name: "Westside Discs",
            logo: "/IMG_7960.png",
            url: "https://www.westsidediscs.com",
          },
          {
            name: "Panak Disc Golf",
            logo: "/IMG_7961.webp",
            url: "https://panak.ca/",
          },
          {
            name: "SIGR",
            logo: "/IMG_7962.png",
            url: "https://sigr.cc",
          },
        ],
      },
      plansSection: {
        title: "Forfaits",
        text: "Découvrez les différentes options disponibles pour les cours privés, blocs de progression et cliniques de groupe.",
        button: "Voir les forfaits",
      },
      contactPreview: {
        title: "Réserver une formation",
        text: "Prêt à planifier une séance, poser une question ou réserver une clinique adaptée à ton niveau ? Accède à la page contact pour remplir le formulaire complet.",
        button: "Accéder au formulaire",
      },
      cookiePopup: {
        title: "Utilisation des cookies",
        text: "Ce site utilise des cookies essentiels pour assurer son bon fonctionnement et mémoriser certaines préférences. Consultez notre politique de confidentialité pour en savoir plus.",
        accept: "Accepter",
        decline: "Refuser",
      },
    },

    en: {
      nav: {
        privacy: "Privacy",
      },
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
      servicesSection: {
        title: "Services",
        text: "Training tailored to your goals, whether you are new to disc golf or looking to take your game to the next level.",
        button: "View services page",
      },
      cliniquePreview: {
        badge: "Disc golf clinic",
        title: "Discover a new sport and take your game to the next level",
        text: "Clinics designed for beginner and intermediate players to improve technique, control, approach shots, putting, and course management.",
        button: "View clinic page",
      },
      formationPreview: {
        badge: "Training",
        title: "Introduction to disc golf",
        text: "A structured format to discover the sport, understand the key fundamentals, and introduce new players, groups, schools, or companies.",
        button: "View training page",
      },
      aboutSection: {
        title: "About me",
        p1: "My name is David Gagné and I am a disc golf enthusiast based in Quebec City. Today, I use my on-course experience to help players improve with a simple, motivating and practical approach.",
        p2: "With more than 670 rounds played, I understand the reality of progress, both technically and mentally. My goal is to help players develop their throwing, putting, confidence and game strategy.",
        p3: "I am proud to be part of the Westside Team 2026, to be a SIGR ambassador and to represent Panak Disc Golf, partners that support my progression and contribute to the growth of disc golf.",
        imageAlt: "David Gagné Disc Golf",
        approachTitle: "Approach",
        approachItems: [
          "Simple, practical coaching adapted to your level",
          "Coaching focused on technique, consistency and enjoyment",
          "Sessions for beginners, intermediate and competitive players",
          "Individual, group and special event formats",
        ],
        statsTitle: "A few highlights",
        stats: [
          { value: "680+", label: "rounds played" },
          { value: "Westside Team", label: "Warrior" },
          { label: "", logo: "/udisc.png", url: "https://udisc.com" },
          {
            value: "266419",
            label: "PDGA Member",
            logo: "/pdga.png",
            url: "https://www.pdga.com/player/266419",
          },
        ],
        partnersTitle: "Partners",
        partners: [
          {
            name: "Westside Discs",
            logo: "/IMG_7960.png",
            url: "https://www.westsidediscs.com",
          },
          {
            name: "Panak Disc Golf",
            logo: "/IMG_7961.webp",
            url: "https://panak.ca/",
          },
          {
            name: "SIGR",
            logo: "/IMG_7962.png",
            url: "https://sigr.cc",
          },
        ],
      },
      plansSection: {
        title: "Packages",
        text: "Explore the available options for private lessons, progression packages, and group clinics.",
        button: "View packages",
      },
      contactPreview: {
        title: "Book a session",
        text: "Ready to plan a session, ask a question or book a clinic adapted to your level? Visit the contact page to fill out the complete form.",
        button: "Open contact form",
      },
      cookiePopup: {
        title: "Cookie usage",
        text: "This website uses essential cookies to ensure proper functionality and remember certain preferences. See our privacy policy to learn more.",
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
              <div className="rounded-3xl bg-black p-7 text-white ring-1 ring-green-900/80">
                <div className="text-sm uppercase tracking-wide text-green-400">
                  {t.hero.objectiveLabel}
                </div>
                <div className="mt-3 text-3xl font-bold leading-tight">
                  {t.hero.objectiveTitle}
                </div>
                <p className="mt-4 text-sm leading-7 text-gray-300">
                  {t.hero.objectiveText}
                </p>
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

        <section id="apropos" className="bg-gradient-to-b from-black to-green-950/20 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 md:grid-cols-2 md:items-start">
              <div>
                <h2 className="text-4xl font-bold text-white md:text-5xl">
                  {t.aboutSection.title}
                </h2>

                <p className="mt-6 text-lg leading-8 text-gray-300">
                  {t.aboutSection.p1}
                </p>

                <p className="mt-4 text-lg leading-8 text-gray-300">
                  {t.aboutSection.p2}
                </p>

                <p className="mt-4 text-lg leading-8 text-gray-300">
                  {t.aboutSection.p3}
                </p>

                <div className="mt-8 flex justify-start">
                  <img
                    src="/DG.png"
                    alt={t.aboutSection.imageAlt}
                    className="w-full max-w-sm rounded-3xl border border-green-900 object-cover shadow-2xl shadow-black/50"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-3xl border border-green-900 bg-white/5 p-8 shadow-lg shadow-black/30 ring-1 ring-green-950 backdrop-blur-sm">
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
                    {t.aboutSection.approachTitle}
                  </div>

                  <ul className="mt-5 space-y-4 text-base text-gray-200">
                    {t.aboutSection.approachItems.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl border border-green-900 bg-gradient-to-br from-green-950 to-black p-8 shadow-lg shadow-black/30 ring-1 ring-green-950">
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
                    {t.aboutSection.statsTitle}
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-4">
                    {t.aboutSection.stats.map((stat, index) => {
                      const contentBlock = (
                        <>
                          {stat.logo && (
                            <img
                              src={stat.logo}
                              alt={stat.label || "Logo"}
                              className="mb-2 h-6 w-auto object-contain opacity-80"
                            />
                          )}
                          {stat.value && (
                            <div className="text-2xl font-bold text-white">
                              {stat.value}
                            </div>
                          )}
                          {stat.label && (
                            <div className="mt-1 text-sm text-gray-300">
                              {stat.label}
                            </div>
                          )}
                        </>
                      );

                      return stat.url ? (
                        <a
                          key={`${stat.label}-${index}`}
                          href={stat.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block rounded-2xl bg-black/60 p-4 ring-1 ring-green-900/70 transition hover:ring-green-500"
                        >
                          {contentBlock}
                        </a>
                      ) : (
                        <div
                          key={`${stat.label}-${index}`}
                          className="rounded-2xl bg-black/60 p-4 ring-1 ring-green-900/70"
                        >
                          {contentBlock}
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-6">
                    <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
                      {t.aboutSection.partnersTitle}
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-4">
                      {t.aboutSection.partners.map((partner) => (
                        <a
                          key={partner.name}
                          href={partner.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center justify-center rounded-2xl border border-green-900 bg-black/60 p-4 ring-1 ring-green-900/70 transition hover:border-green-700"
                        >
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="max-h-10 w-auto object-contain"
                          />
                          <div className="mt-2 text-center text-xs text-gray-300">
                            {partner.name}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-black py-24">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              {t.servicesSection.title}
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-300">
              {t.servicesSection.text}
            </p>

            <Link
              to="/services"
              className="mt-8 inline-flex rounded-2xl bg-green-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
            >
              {t.servicesSection.button}
            </Link>
          </div>
        </section>

        <section className="bg-black py-24">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <div className="inline-flex items-center rounded-full border border-green-800/80 bg-green-950/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-green-400">
              {t.cliniquePreview.badge}
            </div>

            <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl">
              {t.cliniquePreview.title}
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
              {t.cliniquePreview.text}
            </p>

            <Link
              to="/clinique"
              className="mt-8 inline-flex rounded-2xl bg-green-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
            >
              {t.cliniquePreview.button}
            </Link>
          </div>
        </section>

        <section className="bg-gradient-to-b from-black to-green-950/10 py-24">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-green-400">
              {t.formationPreview.badge}
            </p>

            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              {t.formationPreview.title}
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
              {t.formationPreview.text}
            </p>

            <Link
              to="/formation"
              className="mt-8 inline-flex rounded-2xl bg-green-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
            >
              {t.formationPreview.button}
            </Link>
          </div>
        </section>

        <section id="forfaits" className="bg-black py-24">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              {t.plansSection.title}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-300">
              {t.plansSection.text}
            </p>

            <Link
              to="/forfaits"
              className="mt-8 inline-flex rounded-2xl bg-green-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
            >
              {t.plansSection.button}
            </Link>
          </div>
        </section>

        <section
          id="contact"
          className="relative overflow-hidden border-t border-green-950 bg-black py-24 text-white"
        >
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-green-900/10 blur-3xl" />

          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <div className="mx-auto mb-6 flex w-fit items-center gap-3">
              <div className="text-2xl font-bold">David Gagné</div>
              <img
                src="/DG_logowhite.png"
                alt="DG Logo"
                className="h-7 w-7 object-contain opacity-90"
              />
            </div>

            <h2 className="text-4xl font-bold md:text-5xl">
              {t.contactPreview.title}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-300">
              {t.contactPreview.text}
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex rounded-2xl bg-green-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
            >
              {t.contactPreview.button}
            </Link>
          </div>
        </section>
      </main>

      {cookieConsent === null && (
        <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4">
          <div className="mx-auto max-w-4xl rounded-3xl border border-green-900 bg-black/95 p-6 shadow-2xl shadow-black/50 ring-1 ring-green-950 backdrop-blur">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <h3 className="text-lg font-bold text-white">
                  {t.cookiePopup.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-gray-300">
                  {t.cookiePopup.text}{" "}
                  <Link
                    to="/confidentialite"
                    className="font-semibold text-green-400 underline underline-offset-4 transition hover:text-green-300"
                  >
                    {t.nav.privacy}
                  </Link>
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={declineCookies}
                  className="rounded-2xl border border-green-900 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  {t.cookiePopup.decline}
                </button>
                <button
                  type="button"
                  onClick={acceptCookies}
                  className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-green-100"
                >
                  {t.cookiePopup.accept}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
