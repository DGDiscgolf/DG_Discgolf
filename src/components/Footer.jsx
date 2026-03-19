import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-green-950 bg-black px-6 py-8 text-sm text-gray-400">
      <div className="max-w-7xl mx-auto flex justify-between">
        <p>© 2026 David Gagné</p>

        <div className="flex gap-4">
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/confidentialite">Confidentialité</Link>
        </div>
      </div>
    </footer>
  );
}
