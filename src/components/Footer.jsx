import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-green-950 bg-black px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">
        <p>© 2026 David Gagné — DG Disc Golf</p>

        <div className="flex flex-wrap gap-4">
          <Link to="/services" className="transition hover:text-green-400">
            Services
          </Link>
          <Link to="/clinique" className="transition hover:text-green-400">
            Clinique
          </Link>
          <Link to="/formation" className="transition hover:text-green-400">
            Formation
          </Link>
          <Link to="/forfaits" className="transition hover:text-green-400">
            Forfaits
          </Link>
          <Link to="/contact" className="transition hover:text-green-400">
            Contact
          </Link>
          <Link to="/confidentialite" className="transition hover:text-green-400">
            Confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
}
