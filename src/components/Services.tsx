import { motion } from "motion/react";
import { UserRound, Users, Heart, Video } from "lucide-react";

const SERVICES = [
  {
    title: "Individual Training",
    description: "Personalized 1-on-1 coaching focusing on your specific needs. Available in packs for consistent progress.",
    price: "€60 / training",
    details: ["Pack 4: €200 (€50/h)", "Pack 8: €360 (€45/h)"],
    icon: <UserRound className="w-6 h-6" />,
  },
  {
    title: "Group Sessions",
    description: "Learn with friends and save. Tiered pricing based on group size ensures high-quality instruction for everyone.",
    price: "From €25 each",
    details: ["2 People: €35 each", "3 People: €30 each", "4 People: €25 each"],
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Kids Program",
    description: "Specialized coaching for the little ones (6-12 years). Fun-focused learning with a heavy emphasis on ocean safety and confidence.",
    price: "€50 / session",
    icon: <Heart className="w-6 h-6" />,
  },
  {
    title: "Video Analysis",
    description: "The fastest way to improve. We record your session and analyze your technique frame by frame to identify key areas for growth.",
    price: "€80",
    icon: <Video className="w-6 h-6" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-orange-600 font-bold uppercase tracking-widest text-xs mb-4 block">Experience</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Coaching Programs</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Tailored sessions designed to get you catching more waves and having more fun.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col"
            >
              <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed flex-1">
                {service.description}
              </p>
              {service.details && (
                <ul className="mb-6 space-y-1">
                  {service.details.map((detail, i) => (
                    <li key={i} className="text-[10px] font-bold uppercase tracking-widest text-orange-600/60 flex items-center gap-2">
                      <span className="w-1 h-1 bg-orange-600/40 rounded-full" />
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
              <div className="pt-6 border-t border-gray-50 flex items-center justify-between mt-auto">
                <span className="font-bold text-orange-600">{service.price}</span>
                <a
                  href="#contact"
                  className="flex items-center gap-1 px-4 py-2 bg-gray-50 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-colors"
                >
                  Book →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
