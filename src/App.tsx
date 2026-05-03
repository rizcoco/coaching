/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Waves } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import InstagramBanner from "./components/InstagramBanner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const PASSWORD = "supertubos";
const STORAGE_KEY = "csm_auth";

function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (value === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "1");
      onUnlock();
    } else {
      setError(true);
      setValue("");
    }
  }

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex items-center justify-center px-4">
      <div className="w-full max-w-sm text-center">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Waves className="w-8 h-8 text-orange-600" />
          <div className="text-left">
            <div className="font-bold text-lg tracking-tight uppercase leading-none">COSTA</div>
            <div className="text-[10px] font-bold tracking-[0.2em] text-gray-400 leading-none">SURF METHOD</div>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-2 tracking-tight">Private Preview</h2>
        <p className="text-gray-400 text-sm mb-8">Enter the password to continue.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={value}
            onChange={(e) => { setValue(e.target.value); setError(false); }}
            placeholder="Password"
            autoFocus
            className={`w-full px-4 py-3 rounded-xl bg-gray-50 border text-center tracking-widest focus:outline-none focus:ring-2 focus:bg-white transition-all ${
              error ? "border-red-300 focus:ring-red-500/10" : "border-gray-100 focus:ring-orange-600/10"
            }`}
          />
          {error && <p className="text-red-500 text-xs font-medium">Incorrect password.</p>}
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 rounded-xl font-bold uppercase tracking-widest hover:bg-orange-700 transition-all"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}

export default function App() {
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem(STORAGE_KEY) === "1"
  );

  if (!unlocked) {
    return <PasswordGate onUnlock={() => setUnlocked(true)} />;
  }

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-sans selection:bg-orange-100 selection:text-orange-900">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Testimonials />
      <InstagramBanner />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
