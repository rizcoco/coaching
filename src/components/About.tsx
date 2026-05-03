import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Joao Costa surf coach"
              className="rounded-3xl shadow-2xl relative z-10 aspect-[4/5] object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-orange-100 rounded-2xl -z-0" />
          </div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-orange-600 font-bold uppercase tracking-widest text-xs mb-4 block">Meet Your Coach</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            Waves are my home, <br />Teaching is my passion.
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              Hi, I'm Joao. Based in Lisbon, I've spent my life studying the Atlantic waves. With over a decade of experience in the water and years of professional coaching, I focus on more than just "standing up."
            </p>
            <p>
              Whether we're at the sandy peaks of Costa da Caparica or the world-class rights of Carcavelos, my goal is to help you understand the ocean, build confidence, and refine the technical details that make great surfing look effortless.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-orange-600 w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium">Certified Surf Instructor</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-orange-600 w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium">Video Analysis Specialist</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-orange-600 w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium">Local Spot Knowledge</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-orange-600 w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium">All Equipment Included</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
