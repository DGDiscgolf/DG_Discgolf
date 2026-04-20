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

  const content = {/* TON OBJET CONTENT COMPLET ICI (inchangé) */};

  const t = content[language] || content.fr;

  return (
    <div className="min-h-screen bg-black text-white">
      <main>

        {/* === SECTION À PROPOS MODIFIÉE === */}
        <section id="apropos" className="bg-gradient-to-b from-black to-green-950/20 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 md:grid-cols-2 md:items-start">
              
              <div>
                <h2 className="text-4xl font-bold text-white md:text-5xl">
                  {t.aboutSection.title}
                </h2>

                {/* P1 */}
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  {t.aboutSection.p1}
                </p>

                {/* IMAGE CENTRÉE */}
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

              {/* === COLONNE DROITE (INCHANGÉE) === */}
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

      </main>
    </div>
  );
}
