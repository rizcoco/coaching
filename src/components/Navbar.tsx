import { motion } from "motion/react";
import { Waves, Instagram, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <Waves className="w-8 h-8 text-orange-600" />
            <div className="flex flex-col -gap-1">
              <span className="font-bold text-lg tracking-tight uppercase leading-none">COSTA</span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 leading-none">SURF METHOD</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium hover:text-orange-600 transition-colors uppercase tracking-widest">About</a>
            <a href="#services" className="text-sm font-medium hover:text-orange-600 transition-colors uppercase tracking-widest">Services</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-orange-600 transition-colors uppercase tracking-widest">Reviews</a>
            <a
              href="https://www.instagram.com/joaocosta_surfcoach/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium hover:text-orange-600 transition-colors uppercase tracking-widest"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
            <a href="#contact" className="bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-orange-700 transition-all">
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 px-4 py-6 flex flex-col gap-4 text-center"
        >
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">About</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Services</a>
          <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Reviews</a>
          <a
            href="https://www.instagram.com/joaocosta_surfcoach/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center justify-center gap-2 text-lg font-medium"
          >
            <Instagram className="w-4 h-4" />
            Instagram
          </a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-orange-600 text-white py-3 rounded-xl font-bold">
            Book Now
          </a>
        </motion.div>
      )}
    </nav>
  );
}
