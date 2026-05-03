import { motion } from "motion/react";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    text: "Joao is an incredible coach! I went from never standing up to catching my own green waves in just three sessions.",
    rating: 5,
    color: "bg-orange-100 text-orange-700",
  },
  {
    name: "Marco Silva",
    text: "Professional, patient, and knows the Lisbon coast like no other. The video analysis session was a game changer for my surfing.",
    rating: 5,
    color: "bg-amber-100 text-amber-700",
  },
  {
    name: "Elena Rossi",
    text: "Best surf experience in Portugal. Joao makes you feel safe and confident in the water. Highly recommend!",
    rating: 5,
    color: "bg-stone-200 text-stone-700",
  },
];

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("");
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-2xl">
            <span className="text-orange-600 font-bold uppercase tracking-widest text-xs mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">What students say about Joao</h2>
          </div>
          <div className="flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-full">
            <Star className="w-5 h-5 text-orange-600 fill-orange-600" />
            <span className="font-bold">4.9/5</span>
            <span className="text-gray-500 text-sm">on Google Reviews</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.5 }}
              className="bg-[#FDFCFB] p-8 rounded-3xl border border-gray-100 flex flex-col gap-4"
            >
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-orange-600 fill-orange-600" />
                ))}
              </div>
              <p className="text-gray-600 italic leading-relaxed flex-1">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${t.color}`}>
                  {getInitials(t.name)}
                </div>
                <span className="font-bold uppercase tracking-widest text-xs">{t.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
