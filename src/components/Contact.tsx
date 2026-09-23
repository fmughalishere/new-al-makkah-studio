"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { CONTACT, LOCATIONS, whatsappLink } from "@/src/lib/media";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

export default function Contact() {
  const [activeLocation, setActiveLocation] = useState<(typeof LOCATIONS)[number]>(LOCATIONS[0]);

  const socialLinks = [
    { name: "Studio Instagram", href: "https://www.instagram.com/almakkahstudio/", icon: <InstagramIcon className="w-4 h-4" /> },
    { name: "King Hussnain", href: "https://www.instagram.com/kinghussnain66/", icon: <InstagramIcon className="w-4 h-4" /> },
    { name: "Al-Makkah", href: "https://www.facebook.com/people/Al-Makkah-Studio-Phool-Nagar/61574909946386/", icon: <FacebookIcon className="w-4 h-4" /> },
  ];

  return (
    <footer id="contact" className="relative bg-paper-50 dark:bg-ink-950 pt-20 md:pt-32 pb-10 px-6 border-t border-black/10 dark:border-white/5 overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 md:w-64 h-48 md:h-64 bg-amber-500/10 blur-[80px] md:blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 md:mb-32">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-amber-500 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] mb-6 md:mb-8 block">
              Now Booking — Lahore & Phool Nagar Studios
            </span>
            <motion.h2
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="font-display italic text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[0.95] text-ink-950 dark:text-white"
            >
              Ready to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-700">Get Shot?</span>
            </motion.h2>

            <motion.a
              href={whatsappLink()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 md:gap-4 mt-10 md:mt-12 bg-ink-950 text-white dark:bg-white dark:text-black px-8 md:px-10 py-4 md:py-5 rounded-full font-black uppercase tracking-tighter transition-all hover:bg-amber-500 hover:text-black text-sm md:text-base"
            >
              Start a Project <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
            </motion.a>
          </motion.div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 border-y border-black/10 dark:border-white/5 py-16 md:py-20 mb-16 md:mb-20">
          <div className="group text-center md:text-left flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:border-amber-500/50 transition-colors">
                <Mail className="w-4 h-4 text-ink-500 dark:text-gray-500 group-hover:text-amber-500" />
              </div>
              <h5 className="text-[10px] uppercase tracking-[0.3em] text-ink-600 dark:text-gray-500 font-bold">Mail Us</h5>
            </div>
            <a href={`mailto:${CONTACT.email}`} className="text-lg sm:text-xl md:text-2xl font-black text-ink-950 dark:text-white hover:text-amber-500 transition-colors tracking-tight break-all md:break-normal">
              {CONTACT.email}
            </a>
          </div>

          <div className="group text-center md:text-left flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:border-amber-500/50 transition-colors">
                <Phone className="w-4 h-4 text-ink-500 dark:text-gray-500 group-hover:text-amber-500" />
              </div>
              <h5 className="text-[10px] uppercase tracking-[0.3em] text-ink-600 dark:text-gray-500 font-bold">WhatsApp / Call</h5>
            </div>
            <a href={`tel:${CONTACT.tel}`} className="text-2xl md:text-3xl font-black text-ink-950 dark:text-white hover:text-amber-500 transition-colors tracking-tight">
              {CONTACT.tel.replace("+92", "+92 ")}
            </a>
          </div>

          <div className="group text-center md:text-left flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-ink-500 dark:text-gray-500" />
              </div>
              <h5 className="text-[10px] uppercase tracking-[0.3em] text-ink-600 dark:text-gray-500 font-bold">Two Studio Locations</h5>
            </div>
            <div className="space-y-3">
              {LOCATIONS.map((loc) => (
                <p key={loc.id} className="text-base md:text-lg font-black text-ink-950 dark:text-white tracking-tight leading-snug">
                  {loc.address}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mb-16 md:mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
            <div className="text-center sm:text-left">
              <h3 className="font-display italic text-2xl md:text-3xl font-medium text-ink-950 dark:text-white tracking-tight">
                Find Our <span className="text-amber-500">Studios</span>
              </h3>
              <p className="text-ink-600 dark:text-gray-500 text-[10px] md:text-xs uppercase tracking-[0.3em] mt-2">
                Visit us at our Lahore branch or the Phool Nagar studio
              </p>
            </div>

            <div className="flex gap-2 justify-center sm:justify-end">
              {LOCATIONS.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setActiveLocation(loc)}
                  className={`px-4 md:px-5 py-2.5 text-[9px] md:text-[10px] font-black uppercase tracking-widest rounded-full border transition-all duration-300 ${
                    activeLocation.id === loc.id
                      ? "bg-amber-500 border-amber-500 text-black"
                      : "border-black/15 dark:border-white/15 text-ink-600 dark:text-gray-400 hover:border-amber-500/50 hover:text-ink-950 dark:hover:text-white"
                  }`}
                >
                  {loc.label}
                </button>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl">
            <div className="absolute inset-0 pointer-events-none border border-amber-500/10 rounded-2xl z-10" />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLocation.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-[200px] sm:h-[240px] md:h-[280px] md:grayscale md:hover:grayscale-0 transition-all duration-700"
              >
                <iframe
                  title={`Al Makkah Studio — ${activeLocation.label}`}
                  src={
                    "lat" in activeLocation && "lng" in activeLocation
                      ? `https://maps.google.com/maps?q=${activeLocation.lat},${activeLocation.lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`
                      : `https://maps.google.com/maps?q=${encodeURIComponent(activeLocation.mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`
                  }
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-10 gap-y-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-black text-ink-600 dark:text-gray-500 hover:text-ink-950 dark:hover:text-white transition-all"
              >
                <span className="text-amber-500 group-hover:scale-125 transition-transform">{link.icon}</span>
                {link.name}
              </a>
            ))}
          </div>

          <div className="text-center md:text-right">
            <div className="text-[10px] uppercase tracking-[0.4em] text-ink-500 dark:text-gray-600 font-black mb-1">
              © {new Date().getFullYear()} Al Makkah Studio
            </div>
            <div className="text-[9px] uppercase tracking-[0.2em] text-amber-600/50 font-bold">
              Founder: Hussnain Muneer • #KingHussnain
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 h-1 w-full bg-gradient-to-r from-transparent via-amber-500/10 to-transparent" />
    </footer>
  );
}
