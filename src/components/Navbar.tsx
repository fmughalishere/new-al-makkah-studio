"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { image, whatsappLink } from "@/src/lib/media";
import ThemeToggle from "@/src/components/ThemeToggle";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Films" },
  { href: "#photography", label: "Gallery" },
  { href: "#editing", label: "Editing" },
  { href: "#packages", label: "Packages" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 px-4 sm:px-6 py-3 flex justify-between items-center bg-paper-50/80 dark:bg-ink-950/80 backdrop-blur-xl border-b border-black/5 dark:border-white/5 transition-colors duration-300"
      >
        <a href="#top" className="flex items-center gap-3 sm:gap-4 group">
          <div className="relative h-11 w-11 sm:h-14 sm:w-14 shrink-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/50 to-amber-700/50 rounded-full blur opacity-25 group-hover:opacity-60 transition duration-500" />
            <div className="relative h-full w-full rounded-full overflow-hidden border border-amber-500/30 bg-black shadow-2xl">
              <img
                src={image("logo", 160)}
                decoding="async"
                alt="Al Makkah Studio Logo"
                className="h-full w-full object-cover scale-110 group-hover:scale-125 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="flex flex-col border-l border-black/10 dark:border-white/10 pl-3 sm:pl-5">
            <span className="font-display italic text-lg sm:text-xl font-bold tracking-tight leading-tight text-ink-950 dark:text-white group-hover:text-amber-500 transition-colors">
              Al Makkah
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[9px] sm:text-[10px] text-amber-500 font-bold tracking-[0.4em] uppercase">
                Studio
              </span>
              <div className="h-[1px] w-4 bg-amber-500/30 hidden sm:block" />
            </div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-9 text-[10px] uppercase tracking-[0.3em] font-black text-ink-600 dark:text-gray-400">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-amber-500 hover:tracking-[0.4em] transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a
            href={whatsappLink()}
            className="flex items-center gap-2 border border-amber-500/40 text-amber-500 hover:bg-amber-500 hover:text-black px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all"
          >
            <Phone className="w-3.5 h-3.5" /> Book Now
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="text-ink-950 dark:text-white p-2 -mr-2"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>
      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-[64px] left-0 w-full z-40 md:hidden bg-paper-50/97 dark:bg-ink-950/97 backdrop-blur-xl border-b border-black/5 dark:border-white/5 overflow-hidden transition-colors duration-300"
          >
            <div className="flex flex-col px-6 py-6 gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="py-3.5 text-sm font-black uppercase tracking-[0.2em] text-ink-700 dark:text-gray-300 border-b border-black/5 dark:border-white/5 hover:text-amber-500 hover:pl-2 transition-all"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href={whatsappLink()}
                onClick={() => setOpen(false)}
                className="mt-5 flex items-center justify-center gap-2 bg-amber-500 text-black px-5 py-3.5 rounded-full text-xs font-black uppercase tracking-widest"
              >
                <Phone className="w-4 h-4" /> Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
