import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PrivacyPage() {
  const [language, setLanguage] = useState("fr");

  useEffect(() => {
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
      title: "Politique de confidentialité",
      updated: "Dernière mise à jour : 18 mars 2026",
      intro:
        "La confidentialité des visiteurs de ce site est importante. Cette politique explique quelles informations peuvent être recueillies, comment elles sont utilisées et quelles sont vos options concernant vos renseignements personnels.",
      sections: [
        {
          title: "1. Collecte des renseignements",
          text: "Lorsque vous utilisez ce site, certaines informations peuvent être recueillies, notamment votre nom, votre adresse courriel, le contenu de votre demande transmise via le formulaire, ainsi que certaines données techniques comme votre adresse IP, votre navigateur ou des données de navigation.",
        },
        {
          title: "2. Moyens de collecte",
          text: "Les renseignements personnels peuvent être collectés par le formulaire de réservation, les communications par courriel, les cookies essentiels, ainsi que par certains outils techniques nécessaires au bon fonctionnement du site.",
        },
        {
          title: "3. Utilisation des renseignements",
          text: "Les renseignements recueillis servent à répondre à vos demandes, organiser une séance ou une clinique, assurer le suivi des messages reçus, améliorer l’expérience utilisateur, maintenir la sécurité du site et assurer son bon fonctionnement.",
        },
        {
          title: "4. Divulgation des renseignements",
          text: "Vos renseignements personnels ne sont ni vendus ni loués. Ils peuvent être communiqués à des fournisseurs techniques nécessaires au fonctionnement du site, comme l’hébergement ou Formspree pour le formulaire de contact, lorsque cela est requis. Ils peuvent aussi être divulgués si la loi l’exige.",
        },
        {
          title: "5. Conservation des données",
          text: "Les renseignements personnels sont conservés uniquement pendant la durée nécessaire au traitement de votre demande, au suivi administratif raisonnable, au respect des obligations légales ou à la protection des droits liés au site.",
        },
        {
          title: "6. Sécurité",
          text: "Des mesures raisonnables de sécurité sont mises en place pour limiter les risques de perte, d’accès non autorisé, de divulgation, de mauvaise utilisation ou de modification de vos renseignements personnels. Toutefois, aucune transmission de données sur Internet ne peut être garantie à 100 %.",
        },
        {
          title: "7. Vos droits",
          text: "Vous pouvez demander l’accès, la correction ou la suppression des renseignements personnels détenus à votre sujet, sous réserve des obligations légales applicables. Pour toute demande liée à vos données, vous pouvez écrire à d.gagne@outlook.com.",
        },
        {
          title: "8. Sites tiers",
          text: "Ce site peut contenir des liens vers des sites externes comme Instagram, UDisc, PDGA ou d’autres partenaires. Nous ne sommes pas responsables du contenu, de la sécurité ou des pratiques de confidentialité de ces sites tiers.",
        },
        {
          title: "9. Cookies",
          text: "Ce site peut utiliser des cookies essentiels pour améliorer l’expérience utilisateur, mémoriser certaines préférences et assurer le bon fonctionnement du site. Vous pouvez accepter ou refuser les cookies non essentiels lorsque cette option est proposée par le bandeau affiché sur le site.",
        },
        {
          title: "10. Modifications de la politique",
          text: "Cette politique de confidentialité peut être mise à jour à tout moment afin de refléter les changements apportés au site, aux services ou aux obligations légales. La version publiée sur cette page est la version en vigueur.",
        },
        {
          title: "11. Contact",
          text: "Pour toute question concernant cette politique de confidentialité ou le traitement de vos renseignements personnels, vous pouvez communiquer avec David Gagné à l’adresse suivante : d.gagne@outlook.com.",
        },
      ],
    },

    en: {
      back: "← Back to site",
      brand: "DG Disc Golf",
      title: "Privacy Policy",
      updated: "Last updated: March 18, 2026",
      intro:
        "The privacy of visitors to this website is important. This policy explains what information may be collected, how it is used, and what options you have regarding your personal information.",
      sections: [
        {
          title: "1. Information Collection",
          text: "When you use this website, certain information may be collected, including your name, email address, the content of your request submitted through the form, as well as technical data such as your IP address, browser, or browsing data.",
        },
        {
          title: "2. Methods of Collection",
          text: "Personal information may be collected through the booking form, email communications, essential cookies, and certain technical tools necessary for the proper operation of the website.",
        },
        {
          title: "3. Use of Information",
          text: "Collected information is used to respond to your requests, organize a session or clinic, follow up on received messages, improve the user experience, maintain website security, and ensure proper functionality.",
        },
        {
          title: "4. Disclosure of Information",
          text: "Your personal information is neither sold nor rented. It may be shared with technical service providers necessary for the operation of the website, such as hosting services or Formspree for the contact form, when required. It may also be disclosed if required by law.",
        },
        {
          title: "5. Data Retention",
          text: "Personal information is retained only for the time necessary to process your request, provide reasonable administrative follow-up, comply with legal obligations, or protect rights related to the website.",
        },
        {
          title: "6. Security",
          text: "Reasonable security measures are in place to reduce the risks of loss, unauthorized access, disclosure, misuse, or alteration of your personal information. However, no data transmission over the Internet can be guaranteed to be 100% secure.",
        },
        {
          title: "7. Your Rights",
          text: "You may request access to, correction of, or deletion of the personal information held about you, subject to applicable legal obligations. For any request related to your data, you may contact d.gagne@outlook.com.",
        },
        {
          title: "8. Third-Party Websites",
          text: "This website may contain links to external websites such as Instagram, UDisc, PDGA, or other partners. We are not responsible for the content, security, or privacy practices of these third-party websites.",
        },
        {
          title: "9. Cookies",
          text: "This website may use essential cookies to improve the user experience, remember certain preferences, and ensure proper site functionality. You may accept or refuse non-essential cookies when that option is offered through the banner displayed on the website.",
        },
        {
          title: "10. Changes to This Policy",
          text: "This privacy policy may be updated at any time to reflect changes made to the website, services, or legal obligations. The version published on this page is the version currently in effect.",
        },
        {
          title: "11. Contact",
          text: "For any questions regarding this privacy policy or the handling of your personal information, you may contact David Gagné at the following address: d.gagne@outlook.com.",
        },
      ],
    },
  };

  const t = content[language];

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

            <div className="text-sm text-gray-400">{t.brand}</div>
          </div>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-b from-black to-green-950/20 py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="max-w-4xl">
              <h1 className="text-4xl font-bold text-white md:text-5xl">
                {t.title}
              </h1>

              <p className="mt-4 text-sm uppercase tracking-[0.18em] text-green-400">
                {t.updated}
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-300">
                {t.intro}
              </p>
            </div>

            <div className="mt-12 space-y-6">
              {t.sections.map((section) => (
                <div
                  key={section.title}
                  className="rounded-3xl border border-green-900 bg-white/5 p-8 shadow-lg shadow-black/30 ring-1 ring-green-950 backdrop-blur-sm"
                >
                  <h2 className="text-2xl font-semibold text-white">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-gray-300">
                    {section.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
