import { Waves, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <Waves className="w-6 h-6 text-orange-600" />
          <span className="font-bold tracking-tight uppercase">COSTA SURF METHOD</span>
        </div>
        <p className="text-gray-400 text-sm">© 2025 Joao Costa. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/joaocosta_surfcoach/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-orange-600 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="mailto:costasurfmethod@gmail.com"
            className="text-gray-400 hover:text-orange-600 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
