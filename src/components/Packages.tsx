"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Phone, MessageSquare, Star } from "lucide-react";
import { image, CONTACT, whatsappLink } from "@/src/lib/media";

export default function Packages() {
  const features = [
    "Complete Photography",
    "Professional Videography",
    "Premium Photo Albums",
    "Cinematic Highlights",
    "Romantic Couple Songs",
    "3 Full Days Coverage",
  ];

  return (
    <section id="packages" className="py-16 md:py-24 px-4 md:px-6 bg-paper-50 dark:bg-ink-950 relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-amber-500/10 blur-[100px] md:blur-[150px] rounded-full -ml-32 md:-ml-64 -mt-32 md:-mt-64" />
      <div className="absolute bottom-0 right-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-amber-600/5 blur-[80px] md:blur-[120px] rounded-full -mr-20 md:-mr-32 -mb-20 md:-mb-32" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -inset-2 md:-inset-4 border border-amber-500/20 rounded-2xl rotate-2 md:rotate-3 hidden sm:block" />

            <div className="relative h-[400px] sm:h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl group border border-black/10 dark:border-white/5">
              <img
                src={image("couple-shoot3", 1200)}
                loading="lazy"
                decoding="async"
                alt="Cinematic Wedding Photography"
                className="absolute inset-0 w-full h-full object-cover transition duration-1000 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-amber-500 text-black px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-black text-[10px] md:text-xs uppercase tracking-tighter shadow-xl flex items-center gap-2">
                <Star className="w-3 h-3 md:w-4 md:h-4 fill-black" />
                Best Seller Package
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            <div className="inline-block bg-amber-500/10 border border-amber-500/20 px-4 py-1 rounded-full mb-6">
              <span className="text-amber-500 text-[9px] md:text-[10px] font-black tracking-[0.4em] uppercase">
                Limited Time Deal
              </span>
            </div>

            <h2 className="font-display italic text-4xl sm:text-5xl md:text-6xl font-medium text-ink-950 dark:text-white leading-[1.05] mb-6 md:mb-8 tracking-tight">
              3 Days Wedding <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600">
                Premium PKG
              </span>
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10 bg-black/5 dark:bg-white/5 p-5 md:p-6 rounded-2xl border border-black/10 dark:border-white/5 w-full sm:w-fit mx-auto lg:mx-0">
              <div className="flex flex-col">
                <span className="text-ink-600 dark:text-gray-500 text-[10px] md:text-xs uppercase font-bold tracking-widest mb-1">
                  Starting from
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl md:text-6xl font-black text-ink-950 dark:text-white">70k</span>
                  <span className="text-xl md:text-2xl text-amber-500 font-bold uppercase tracking-tighter">
                    PKR
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10 md:mb-12 text-left px-4 sm:px-0">
              {features.map((item, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/30">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                  </div>
                  <span className="text-sm font-bold text-ink-700 dark:text-gray-300 group-hover:text-ink-950 dark:group-hover:text-white transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 px-4 sm:px-0">
              <a
                href={whatsappLink()}
                className="flex items-center justify-center gap-3 bg-ink-950 text-white dark:bg-white dark:text-black hover:bg-amber-500 hover:text-black dark:hover:bg-amber-500 px-8 py-4 md:py-5 rounded-full font-black uppercase tracking-tighter transition-all duration-300 w-full sm:w-auto"
              >
                <MessageSquare className="w-5 h-5" />
                Book Now
              </a>

              <a
                href={`tel:${CONTACT.tel}`}
                className="flex items-center justify-center gap-3 border border-black/20 dark:border-white/20 hover:border-ink-950 dark:hover:border-white text-ink-950 dark:text-white px-8 py-4 md:py-5 rounded-full font-black uppercase tracking-tighter transition-all duration-300 w-full sm:w-auto"
              >
                <Phone className="w-5 h-5 text-amber-500" />
                Contact Info
              </a>
            </div>

            <div className="mt-10 md:mt-12 flex items-center justify-center lg:justify-start gap-4 pt-8 border-t border-black/10 dark:border-white/5">
              <div className="h-10 w-10 rounded-full bg-amber-500 flex items-center justify-center text-black font-black text-xs">
                AM
              </div>
              <div className="text-left">
                <p className="text-xs text-ink-950 dark:text-white font-bold uppercase tracking-widest leading-none">
                  Al Makkah Studio
                </p>
                <p className="text-[10px] text-ink-600 dark:text-gray-500 uppercase mt-1">Founder: Hussnain Muneer</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
