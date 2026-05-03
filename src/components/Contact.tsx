import { motion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const emailError = emailTouched && email.length > 0 && !EMAIL_REGEX.test(email);

  return (
    <section id="contact" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="bg-gray-50 rounded-[3rem] p-8 md:p-20 flex flex-col lg:flex-row gap-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full lg:w-1/2">
            <span className="text-orange-600 font-bold uppercase tracking-widest text-xs mb-4 block">Let's Surf</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Book Your <br />First Lesson
            </h2>
            <p className="text-gray-500 mb-10 text-lg">
              Have questions about availability, equipment, or your level? Drop me a message and I'll get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              <a href="mailto:costasurfmethod@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-orange-50 transition-colors">
                  <Mail className="text-orange-600 w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest font-bold text-gray-400">Email</span>
                  <span className="font-bold group-hover:text-orange-600 transition-colors">costasurfmethod@gmail.com</span>
                </div>
              </a>

              <a href="https://wa.me/351918568834" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-orange-50 transition-colors">
                  <Phone className="text-orange-600 w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest font-bold text-gray-400">WhatsApp</span>
                  <span className="font-bold group-hover:text-orange-600 transition-colors">+351 918 568 834</span>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <MapPin className="text-orange-600 w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest font-bold text-gray-400">Location</span>
                  <span className="font-bold">Lisbon / Costa da Caparica</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-400">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-600/10 focus:bg-white transition-all placeholder:text-gray-400 placeholder:transition-opacity focus:placeholder:opacity-0"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-400">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => setEmailTouched(true)}
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 border focus:outline-none focus:ring-2 focus:bg-white transition-all placeholder:text-gray-400 placeholder:transition-opacity focus:placeholder:opacity-0 ${
                      emailError
                        ? "border-red-300 focus:ring-red-500/10"
                        : "border-gray-100 focus:ring-orange-600/10"
                    }`}
                    placeholder="your@email.com"
                  />
                  {emailError && (
                    <p className="mt-1.5 text-xs text-red-500 font-medium">Please enter a valid email address.</p>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-400">Session Type</label>
                <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-600/10 focus:bg-white transition-all">
                  <option>Beginner Lesson</option>
                  <option>Intermediate Coaching</option>
                  <option>Video Analysis</option>
                  <option>Group Session</option>
                  <option>Kids Program</option>
                  <option>Other Enquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-400">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-600/10 focus:bg-white transition-all placeholder:text-gray-400 placeholder:transition-opacity focus:placeholder:opacity-0"
                  placeholder="Tell me about your level and what you're looking for..."
                />
              </div>
              <button className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20">
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
