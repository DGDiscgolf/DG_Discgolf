import { Link } from "react-router-dom";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-black px-6 py-10">
      
      {/* Retour */}
      <Link to="/" className="text-sm underline mb-6 inline-block">
        ← Retour au site
      </Link>

      {/* Titre */}
      <h1 className="text-3xl font-bold mb-6">
        Services
      </h1>

      {/* Section services */}
      <div className="grid gap-6 md:grid-cols-3">

        <div className="border p-5 rounded-xl">
          <h2 className="font-semibold text-xl mb-2">Cours privés</h2>
          <p>
            Séances personnalisées pour améliorer votre technique,
            votre constance et votre confiance sur le parcours.
          </p>
        </div>

        <div className="border p-5 rounded-xl">
          <h2 className="font-semibold text-xl mb-2">Clinics de groupe</h2>
          <p>
            Ateliers dynamiques pour clubs, événements, entreprises
            ou groupes qui veulent progresser ensemble.
          </p>
        </div>

        <div className="border p-5 rounded-xl">
          <h2 className="font-semibold text-xl mb-2">Analyse technique</h2>
          <p>
            Travail ciblé sur le putting, le drive, l’approche et
            la stratégie de jeu.
          </p>
        </div>

      </div>
    </div>
  );
}
