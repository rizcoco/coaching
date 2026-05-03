import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ping" />
      <motion.a
        href="https://wa.me/351918568834"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg shadow-green-500/30 hover:bg-green-600 transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
