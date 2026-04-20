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
        text:
          "Cours privés, clinics de groupe et accompagnement sur le terrain pour aider les joueurs à améliorer leur lancer, leur putting et leur stratégie de jeu.",
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
        text:
          "Des formations adaptées à votre objectif, que vous débutiez en disc golf ou que vous cherchiez à amener votre jeu à un autre niveau.",
        button: "Voir la page services",
      },
      cliniquePreview: {
        badge: "Clinique de disc golf",
        title: "Découvre un nouveau sport et passe au niveau supérieur",
        text:
          "Cliniques adaptées aux joueurs débutants et intermédiaires pour améliorer la technique, le contrôle, les approches, le putting et la lecture du parcours.",
        button: "Voir la page clinique",
      },
      formationPreview: {
        badge: "Formation",
        title: "Introduction au disc golf",
        text:
          "Une formule structurée pour découvrir le sport, comprendre les bases essentielles et initier les joueurs, groupes, écoles ou entreprises.",
        button: "Voir la page formation",
      },
      aboutSection: {
        title: "À propos de moi",
        p1:
          "Je m'appelle David Gagné et je suis un passionné de disc golf basé à Québec. Aujourd'hui, j'utilise mon expérience sur le terrain pour aider les joueurs à progresser avec une approche simple, motivante et concrète.",
        p2:
          "Avec plus de 670 parties jouées, je connais bien les réalités de la progression, autant sur le plan technique que mental. Mon objectif est d’aider les joueurs à développer leur lancer, leur putting, leur confiance et leur stratégie de jeu.",
        p3:
          "Je suis fier de faire partie du Westside Team 2026, d’être ambassadeur pour SIGR et de représenter Panak Disc Golf, des partenaires qui soutiennent ma progression et contribuent au développement du disc golf.",
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
        text:
          "Découvrez les différentes options disponibles pour les cours privés, blocs de progression et cliniques de groupe.",
        button: "Voir les forfaits",
      },
      contactPreview: {
        title: "Réserver une formation",
        text:
          "Prêt à planifier une séance, poser une question ou réserver une clinique adaptée à ton niveau ? Accède à la page contact pour remplir le formulaire complet.",
        button: "Accéder au formulaire",
      },
      cookiePopup: {
        title: "Utilisation des cookies",
        text:
          "Ce site utilise des cookies essentiels pour assurer son bon fonctionnement et mémoriser certaines préférences.",
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
        text:
          "Private lessons, group clinics and on-course coaching to help players improve their throwing, putting and game strategy.",
        bookingLabel: "Quick booking",
        bookingText:
          "Available for private lessons, group clinics and special events.",
        bookingButton: "View booking options",
      },
      aboutSection: {
        title: "About me",
        p1:
          "My name is David Gagné and I am a disc golf enthusiast based in Quebec City.",
        p2:
          "With more than 670 rounds played, I understand the reality of progress.",
        p3:
          "I am proud to be part of the Westside Team 2026 and represent my partners.",
        imageAlt: "David Gagné Disc Golf",
      },
    },
  };

  const t = content[language] || content.fr;

  return (
    <div className="min-h-screen bg-black text-white">
      <main>

        {/* ABOUT SECTION FIXED */}
        <section
          id="apropos"
          className="bg-gradient-to-b from-black to-green-950/20 py-24"
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 md:grid-cols-2 md:items-start">
              
              {/* LEFT COLUMN */}
              <div>
                <h2 className="text-4xl font-bold text-white md:text-5xl">
                  {t.aboutSection.title}
                </h2>

                {/* P1 */}
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  {t.aboutSection.p1}
                </p>

                {/* IMAGE CENTERED */}
                <div className="mt-8 flex justify-center">
                  <img
                    src="/DG.png"
                    alt={t.aboutSection.imageAlt}
                    className="w-full max-w-md rounded-3xl border border-green-900 object-cover shadow-2xl shadow-black/50"
                  />
                </div>

                {/* P2 */}
                <p className="mt-8 text-lg leading-8 text-gray-300">
                  {t.aboutSection.p2}
                </p>

                {/* P3 */}
                <p className="mt-4 text-lg leading-8 text-gray-300">
                  {t.aboutSection.p3}
                </p>
              </div>

              {/* RIGHT COLUMN (UNCHANGED) */}
              <div></div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
