import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col md:flex-row pt-16">
      {/* Left — Photo */}
      <div className="relative w-full md:w-1/2 h-64 sm:h-80 md:h-auto">
        <img
          src="/joao_surfing_2.jpeg"
          alt="Joao Costa surf coach smiling in the water"
          className="w-full h-full object-cover object-top"
          loading="eager"
        />
        {/* Right-edge gradient to blend into the cream panel on desktop */}
        <div className="hidden md:block absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-[#FDFCFB]" />
      </div>

      {/* Right — Text */}
      <div className="w-full md:w-1/2 bg-[#FDFCFB] flex items-center justify-center px-8 md:px-16 py-16">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-lg"
        >
          <span className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4 block">
            Lisbon, Portugal
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-[#1A1A1A] mb-6 tracking-tight leading-tight">
            JOAO COSTA <br />
            <span className="italic font-light">SURF COACHING</span>
          </h1>
          <p className="text-lg text-gray-500 mb-10 leading-relaxed">
            Elevate your surfing on the beautiful Lisbon coast. Personalized coaching for all levels, from beginners to performance athletes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-orange-600 text-white px-8 py-4 rounded-full text-base font-bold uppercase tracking-widest hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20 text-center"
            >
              Book a Session
            </a>
            <a
              href="#services"
              className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-full text-base font-bold uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-all text-center"
            >
              The Program
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
