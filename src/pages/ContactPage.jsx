import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-green-950 bg-black/90 px-6 py-5">
        <div className="max-w-6xl mx-auto flex justify-between">
          <Link to="/" className="text-green-400 font-semibold">
            ← Retour au site
          </Link>
          <div className="text-gray-400 text-sm">DG Disc Golf</div>
        </div>
      </header>

      <main className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">
            Réserver une séance
          </h1>

          <form
            action="https://formspree.io/f/xnjgoepz"
            method="POST"
            className="space-y-6"
          >
            <input type="text" name="name" placeholder="Nom" required className="w-full p-3 bg-black border border-green-900 rounded-xl" />
            <input type="email" name="email" placeholder="Courriel" required className="w-full p-3 bg-black border border-green-900 rounded-xl" />

            <select name="type" className="w-full p-3 bg-black border border-green-900 rounded-xl">
              <option>Cours privé</option>
              <option>Clinic de groupe</option>
              <option>Analyse technique</option>
            </select>

            <textarea name="message" rows="5" placeholder="Message" className="w-full p-3 bg-black border border-green-900 rounded-xl" />

            <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold">
              Envoyer
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
