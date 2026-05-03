import { Instagram } from "lucide-react";

export default function InstagramBanner() {
  return (
    <section className="py-24 px-4 bg-orange-600 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <Instagram className="w-12 h-12 mx-auto mb-6 opacity-30" />
        <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Stay Connected</h2>
        <p className="text-xl mb-10 opacity-90 max-w-xl mx-auto">
          Follow me for daily surf conditions, student progress, and Lisbon coast vibes.
        </p>
        <a
          href="https://www.instagram.com/joaocosta_surfcoach/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-orange-600 px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform"
        >
          <Instagram className="w-5 h-5" />
          @joaocosta_surfcoach
        </a>
      </div>
    </section>
  );
}
