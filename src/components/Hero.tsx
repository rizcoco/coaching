import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <img
          src="/madeira_2021.jpeg"
          alt="Joao Costa surfing a barrel in Madeira"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-orange-400 font-bold uppercase tracking-widest text-sm mb-4 block">Lisbon, Portugal</span>
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
            JOAO COSTA <br />
            <span className="italic font-light">SURF COACHING</span>
          </h1>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
            Elevate your surfing on the beautiful Lisbon coast. Personalized coaching for all levels, from beginners to performance athletes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold uppercase tracking-widest hover:bg-orange-700 transition-all shadow-xl shadow-orange-900/20"
            >
              Book a Session
            </a>
            <a
              href="#services"
              className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full text-lg font-bold uppercase tracking-widest hover:bg-white/20 transition-all"
            >
              The Program
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        aria-label="Scroll down"
      >
        <ChevronDown className="w-7 h-7" />
      </motion.a>
    </section>
  );
}
