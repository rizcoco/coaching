import { motion } from "motion/react";

const STATS = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Students Coached" },
  { value: "4.9/5", label: "Google Rating" },
];

export default function Stats() {
  return (
    <section className="bg-[#FDFCFB] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-1">{stat.value}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
