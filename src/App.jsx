import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("dg_site_language", lang);
    setMobileMenuOpen(false);
  };

  const content = {
    fr: {
      meta: {
        headerSubtitle: "Formation • Coaching • Clinics",
      },
      nav: {
        services: "Services",
        clinique: "Clinique",
        apropos: "À propos",
        forfaits: "Forfaits",
        contact: "Contact",
        privacy: "Confidentialité",
        openMenu: "Ouvrir le menu",
        closeMenu: "Fermer le menu",
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
        items: [
          {
            title: "Cours privés",
            text: "Séances personnalisées pour améliorer votre technique, votre constance et votre confiance sur le parcours.",
          },
          {
            title: "Clinics de groupe",
            text: "Ateliers dynamiques pour clubs, événements, entreprises ou groupes qui veulent découvrir et progresser ensemble.",
          },
          {
            title: "Analyse technique",
            text: "Travail ciblé sur le putting, le drive, l’approche, la lecture de ligne et la stratégie de jeu.",
          },
        ],
      },
      cliniqueSection: {
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
      formationSection: {
        badge: "Formation",
        title: "Introduction au disc golf",
        p1: "En plus des cliniques pratiques, je propose aussi une introduction complète au disc golf pour mieux comprendre le sport, son fonctionnement et les bases essentielles pour bien commencer.",
        p2: "Cette formule est idéale pour les nouveaux joueurs, les groupes, les clubs, les écoles ou les entreprises qui souhaitent découvrir le disc golf de façon simple, structurée et dynamique.",
        contentTitle: "Contenu possible",
        topics: [
          "Histoire du disc golf et origine du sport",
          "Présentation du panier et fonctionnement du jeu",
          "Les différents types de disques : Driver, Fairway, Midrange et Putter",
          "Comprendre les statistiques des disques : Speed, Glide, Turn et Fade",
          "Démonstration de lancers",
          "Mise en pratique sur le terrain",
        ],
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
          { value: "670+", label: "parties jouées" },
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
            logo: "/WSDwhite2.png",
            url: "https://www.westsidediscs.com",
          },
          {
            name: "Panak Disc Golf",
            logo: "/panakwhite.png",
            url: "https://panak.ca/",
          },
          {
            name: "SIGR",
            logo: "/sigrwhite.png",
            url: "https://sigr.cc",
          },
        ],
      },
      plansSection: {
        title: "Forfaits",
        items: [
          {
            name: "Découverte",
            price: "40 $",
            details: "Séance individuelle de 60 minutes.",
          },
          {
            name: "Progression",
            price: "100 $",
            details: "Bloc de 3 séances.",
          },
          {
            name: "Clinic groupe",
            price: "Sur demande",
            details: "Clinics pour clubs ou événements.",
          },
        ],
        button: "Réserver",
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
      meta: {
        headerSubtitle: "Training • Coaching • Clinics",
      },
      nav: {
        services: "Services",
        clinique: "Clinic",
        apropos: "About",
        forfaits: "Packages",
        contact: "Contact",
        privacy: "Privacy",
        openMenu: "Open menu",
        closeMenu: "Close menu",
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
        items: [
          {
            title: "Private lessons",
            text: "Personalized sessions to improve your technique, consistency and confidence on the course.",
          },
          {
            title: "Group clinics",
            text: "Dynamic workshops for clubs, events, companies or groups who want to discover and improve together.",
          },
          {
            title: "Technical analysis",
            text: "Focused work on putting, driving, approach shots, line reading and game strategy.",
          },
        ],
      },
      cliniqueSection: {
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
      formationSection: {
        badge: "Training",
        title: "Introduction to disc golf",
        p1: "In addition to practical clinics, I also offer a complete introduction to disc golf to better understand the sport, how it works and the key fundamentals to start the right way.",
        p2: "This format is ideal for new players, groups, clubs, schools or companies who want to discover disc golf in a simple, structured and engaging way.",
        contentTitle: "Possible content",
        topics: [
          "History of disc golf and origins of the sport",
          "Introduction to the basket and how the game works",
          "Different disc types: Driver, Fairway, Midrange and Putter",
          "Understanding disc flight numbers: Speed, Glide, Turn and Fade",
          "Throwing demonstrations",
          "On-course practice",
        ],
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
          { value: "670+", label: "rounds played" },
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
            logo: "/WSDwhite2.png",
            url: "https://www.westsidediscs.com",
          },
          {
            name: "Panak Disc Golf",
            logo: "/panakwhite.png",
            url: "https://panak.ca/",
          },
          {
            name: "SIGR",
            logo: "/sigrwhite.png",
            url: "https://sigr.cc",
          },
        ],
      },
      plansSection: {
        title: "Packages",
        items: [
          {
            name: "Discovery",
            price: "40$",
            details: "One 60-minute individual session.",
          },
          {
            name: "Progression",
            price: "100$",
            details: "Block of 3 sessions.",
          },
          {
            name: "Group clinic",
            price: "On request",
            details: "Clinics for clubs or events.",
          },
        ],
        button: "Book",
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

  const t = content[language];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-30 border-b border-green-950/80 bg-black/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="flex items-center gap-3 text-2xl font-bold tracking-tight text-white">
              David Gagné
              <img
                src="/DG_logowhite.png"
                alt="DG Logo"
                className="h-7 w-7 object-contain"
              />
            </div>
            <div className="text-sm text-gray-300">{t.meta.headerSubtitle}</div>
          </div>

          <div className="hidden items-center gap-6 md:flex">
            <nav className="flex gap-6 text-sm text-white">
              <a href="#apropos" className="transition hover:text-green-400">
                {t.nav.apropos}
              </a>
              <a href="#services" className="transition hover:text-green-400">
                {t.nav.services}
              </a>
              <a href="#clinique" className="transition hover:text-green-400">
                {t.nav.clinique}
              </a>
              <a href="#forfaits" className="transition hover:text-green-400">
                {t.nav.forfaits}
              </a>
              <Link to="/contact" className="transition hover:text-green-400">
                {t.nav.contact}
              </Link>
              <Link to="/confidentialite" className="transition hover:text-green-400">
                {t.nav.privacy}
              </Link>
            </nav>

            <div className="flex overflow-hidden rounded-2xl border border-green-900 bg-white/5">
              <button
                type="button"
                onClick={() => changeLanguage("fr")}
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
                onClick={() => changeLanguage("en")}
                className={`px-4 py-2 text-sm font-semibold transition ${
                  language === "en"
                    ? "bg-white text-black"
                    : "text-white hover:bg-white/10"
                }`}
              >
                EN
              </button>
            </div>
          </div>

          <button
            type="button"
            aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-2xl border border-green-900 bg-white/5 p-3 text-white ring-1 ring-green-950 transition hover:border-green-700 hover:bg-white/10 md:hidden"
          >
            <div className="flex h-5 w-5 flex-col items-center justify-center gap-1">
              <span
                className={`block h-0.5 w-5 bg-white transition-transform duration-300 ${
                  mobileMenuOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition-opacity duration-300 ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition-transform duration-300 ${
                  mobileMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-green-950/80 bg-black/95 px-6 py-4 md:hidden">
            <div className="mb-4 flex overflow-hidden rounded-2xl border border-green-900 bg-white/5">
              <button
                type="button"
                onClick={() => changeLanguage("fr")}
                className={`flex-1 px-4 py-3 text-sm font-semibold transition ${
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
                className={`flex-1 px-4 py-3 text-sm font-semibold transition ${
                  language === "en"
                    ? "bg-white text-black"
                    : "text-white hover:bg-white/10"
                }`}
              >
                EN
              </button>
            </div>

            <nav className="flex flex-col gap-3 text-sm text-white">
              <a
                href="#apropos"
                onClick={closeMobileMenu}
                className="rounded-2xl border border-green-900 bg-white/5 px-4 py-3 transition hover:border-green-700 hover:bg-white/10"
              >
                {t.nav.apropos}
              </a>
              <a
                href="#services"
                onClick={closeMobileMenu}
                className="rounded-2xl border border-green-900 bg-white/5 px-4 py-3 transition hover:border-green-700 hover:bg-white/10"
              >
                {t.nav.services}
              </a>
              <a
                href="#clinique"
                onClick={closeMobileMenu}
                className="rounded-2xl border border-green-900 bg-white/5 px-4 py-3 transition hover:border-green-700 hover:bg-white/10"
              >
                {t.nav.clinique}
              </a>
              <a
                href="#forfaits"
                onClick={closeMobileMenu}
                className="rounded-2xl border border-green-900 bg-white/5 px-4 py-3 transition hover:border-green-700 hover:bg-white/10"
              >
                {t.nav.forfaits}
              </a>
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="rounded-2xl border border-green-900 bg-white/5 px-4 py-3 transition hover:border-green-700 hover:bg-white/10"
              >
                {t.nav.contact}
              </Link>
              <Link
                to="/confidentialite"
                onClick={closeMobileMenu}
                className="rounded-2xl border border-green-900 bg-white/5 px-4 py-3 transition hover:border-green-700 hover:bg-white/10"
              >
                {t.nav.privacy}
              </Link>
            </nav>
          </div>
        )}
      </header>

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
                  className="mt-5 inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-green-100"
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
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold text-white md:text-5xl">
                {t.servicesSection.title}
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-300">
                {t.servicesSection.text}
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {t.servicesSection.items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-green-900 bg-white/5 p-8 shadow-lg shadow-black/30 ring-1 ring-green-950 backdrop-blur-sm transition hover:-translate-y-1 hover:border-green-700"
                >
                  <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-base leading-8 text-gray-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="clinique"
          className="relative overflow-hidden bg-gradient-to-b from-black via-black to-green-950/10 py-24"
        >
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-green-900/10 blur-3xl" />
          <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-green-700/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6">
            <div className="mb-10 max-w-4xl">
              <div className="inline-flex items-center rounded-full border border-green-800/80 bg-green-950/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-green-400">
                {t.cliniqueSection.badge}
              </div>

              <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl">
                {t.cliniqueSection.title}
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
                {t.cliniqueSection.p1}
              </p>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-300">
                {t.cliniqueSection.p2}
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-[2rem] border border-green-900/80 bg-white/5 p-6 shadow-2xl shadow-black/40 ring-1 ring-green-950 backdrop-blur-sm md:p-8">
                <div className="mb-8 flex flex-wrap gap-3">
                  {t.cliniqueSection.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-green-800/70 bg-black/60 px-4 py-2 text-sm text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  {t.cliniqueSection.learn.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-green-900/70 bg-black/60 p-5 ring-1 ring-green-900/50 transition hover:border-green-700"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-950/60 text-sm font-bold tracking-[0.2em] text-green-300 ring-1 ring-green-800/70">
                        {item.badge}
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-gray-300">{item.text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-3xl border border-green-900/70 bg-gradient-to-r from-green-950/50 to-black p-6 ring-1 ring-green-900/50">
                  <p className="text-base italic leading-8 text-gray-200 md:text-lg">
                    {t.cliniqueSection.quote}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-[2rem] border border-green-900/80 bg-white/5 p-7 shadow-xl shadow-black/30 ring-1 ring-green-950 backdrop-blur-sm">
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
                    {t.cliniqueSection.forWhoLabel}
                  </div>

                  <ul className="mt-5 space-y-4 text-base text-gray-200">
                    {t.cliniqueSection.forWho.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1 text-green-400">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[2rem] border border-green-900 bg-gradient-to-br from-green-950 to-black p-7 shadow-xl shadow-black/30 ring-1 ring-green-950">
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
                    {t.cliniqueSection.bookingTitle}
                  </div>

                  <p className="mt-4 text-sm leading-7 text-gray-300">
                    {t.cliniqueSection.bookingText}
                  </p>

                  <div className="mt-6">
                    <Link
                      to="/contact"
                      className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-green-100"
                    >
                      {t.cliniqueSection.bookingButton}
                    </Link>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl bg-black/50 p-4 ring-1 ring-green-900/70">
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-green-400">
                        {t.cliniqueSection.infoCards.format.title}
                      </div>
                      <p className="mt-2 text-sm text-gray-300">
                        {t.cliniqueSection.infoCards.format.text}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-black/50 p-4 ring-1 ring-green-900/70">
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-green-400">
                        {t.cliniqueSection.infoCards.duration.title}
                      </div>
                      <p className="mt-2 text-sm text-gray-300">
                        {t.cliniqueSection.infoCards.duration.text}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-black/50 p-4 ring-1 ring-green-900/70">
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-green-400">
                        {t.cliniqueSection.infoCards.contact.title}
                      </div>
                      <p className="mt-2 text-sm text-gray-300">
                        {t.cliniqueSection.infoCards.contact.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 md:grid-cols-2 md:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-green-400">
                  {t.formationSection.badge}
                </p>
                <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
                  {t.formationSection.title}
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  {t.formationSection.p1}
                </p>
                <p className="mt-4 text-lg leading-8 text-gray-300">
                  {t.formationSection.p2}
                </p>
              </div>

              <div className="rounded-3xl border border-green-900 bg-white/5 p-8 shadow-lg shadow-black/30 ring-1 ring-green-950 backdrop-blur-sm">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
                  {t.formationSection.contentTitle}
                </div>

                <ul className="mt-5 space-y-4 text-base text-gray-200">
                  {t.formationSection.topics.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="forfaits" className="bg-black py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold text-white md:text-5xl">
                {t.plansSection.title}
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {t.plansSection.items.map((plan) => (
                <div
                  key={plan.name}
                  className="rounded-3xl border border-green-900 bg-white/5 p-8 shadow-lg shadow-black/30 ring-1 ring-green-950 backdrop-blur-sm"
                >
                  <div className="text-sm uppercase tracking-[0.2em] text-gray-400">
                    {plan.name}
                  </div>
                  <div className="mt-3 text-4xl font-bold text-white">{plan.price}</div>
                  <p className="mt-4 text-sm leading-7 text-gray-300">{plan.details}</p>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex rounded-2xl bg-green-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
                  >
                    {t.plansSection.button}
                  </Link>
                </div>
              ))}
            </div>
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
              className="mt-8 inline-flex rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-green-100"
            >
              {t.contactPreview.button}
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-green-950 bg-black px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 David Gagné — DG Disc Golf</p>

          <div className="flex flex-wrap gap-4">
            <a href="#apropos" className="transition hover:text-green-400">
              {t.nav.apropos}
            </a>
            <a href="#services" className="transition hover:text-green-400">
              {t.nav.services}
            </a>
            <a href="#clinique" className="transition hover:text-green-400">
              {t.nav.clinique}
            </a>
            <a href="#forfaits" className="transition hover:text-green-400">
              {t.nav.forfaits}
            </a>
            <Link to="/contact" className="transition hover:text-green-400">
              {t.nav.contact}
            </Link>
            <Link to="/confidentialite" className="transition hover:text-green-400">
              {t.nav.privacy}
            </Link>
          </div>
        </div>
      </footer>

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
