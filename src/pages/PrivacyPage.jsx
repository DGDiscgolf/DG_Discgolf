export default function PrivacyPage() {
  const sections = [
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
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-green-950/80 bg-black/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a
            href="/"
            className="text-sm font-semibold text-green-400 transition hover:text-green-300"
          >
            ← Retour au site
          </a>

          <div className="text-sm text-gray-400">DG Disc Golf</div>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-b from-black to-green-950/20 py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="max-w-4xl">
              <h1 className="text-4xl font-bold text-white md:text-5xl">
                Politique de confidentialité
              </h1>

              <p className="mt-4 text-sm uppercase tracking-[0.18em] text-green-400">
                Dernière mise à jour : 18 mars 2026
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-300">
                La confidentialité des visiteurs de ce site est importante. Cette
                politique explique quelles informations peuvent être recueillies,
                comment elles sont utilisées et quelles sont vos options
                concernant vos renseignements personnels.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              {sections.map((section) => (
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
