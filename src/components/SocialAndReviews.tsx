"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { image } from "@/src/lib/media";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

export default function SocialAndReviews() {
  const socialImages = ["social", "social1", "social2", "social3", "social4"];

  const reviews = [
    { name: "Ahmad Raza", city: "Lahore", text: "Best cinematography team in Lahore! Al Makkah Studio made my brother's wedding cinematic and memorable.", rating: 5 },
    { name: "Zainab Bibi", city: "Pattoki", text: "Boht hi professional kaam hai. Humne 3 days package liya tha aur results bilkul waisa hi mila jaisa socha tha.", rating: 5 },
    { name: "Bilal Khan", city: "Faisalabad", text: "Great experience. Unka behavior aur timing boht achi hai. Highly recommended for premium shoots.", rating: 4 },
    { name: "Usman Ali", city: "Okara", text: "Quality is top-notch. Albums boht achi bani hain aur cinematic highlights toh kamal hain.", rating: 5 },
  ];

  return (
    <div className="bg-paper-50 dark:bg-ink-950 text-ink-950 dark:text-white pb-16 md:pb-24 overflow-hidden transition-colors duration-300">
      <section className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display italic text-2xl sm:text-3xl md:text-5xl font-medium tracking-tight mb-4"
          >
            Follow Our <span className="text-amber-500">Journey</span>
          </motion.h2>
          <div className="flex justify-center items-center gap-6 text-ink-600 dark:text-gray-500">
            <a href="https://www.instagram.com/almakkahstudio/" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">
              <InstagramIcon className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a href="https://www.facebook.com/people/Al-Makkah-Studio-Phool-Nagar/61574909946386/" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">
              <FacebookIcon className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <span className="text-[9px] md:text-xs font-black tracking-[0.3em] uppercase border-l border-black/20 dark:border-white/20 pl-4">
              @AlMakkahStudio
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {socialImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative aspect-[4/5] rounded-xl overflow-hidden border border-black/5 dark:border-white/5 bg-paper-100 dark:bg-zinc-900 group shadow-lg"
            >
              <img
                src={image(img, 700)}
                alt="Social Post"
                loading="lazy"
                className="w-full h-full object-cover md:grayscale md:group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <FacebookIcon className="w-4 h-4 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-paper-100/60 dark:bg-zinc-950/50 border-y border-black/10 dark:border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6 mb-12 md:mb-16">
          <h2 className="text-center font-display italic text-xl sm:text-2xl md:text-3xl font-medium tracking-[0.05em]">
            Words From Our <span className="text-amber-500">Clients</span>
          </h2>
        </div>

        <div className="flex gap-4 md:gap-6 overflow-hidden relative select-none">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 md:gap-6 whitespace-nowrap py-4"
          >
            {[...reviews, ...reviews, ...reviews].map((rev, i) => (
              <div
                key={i}
                className="w-[280px] sm:w-[350px] bg-white dark:bg-zinc-900/40 p-6 md:p-8 rounded-2xl border border-black/10 dark:border-white/5 flex flex-col gap-4 shrink-0 hover:border-amber-500/30 transition-colors group shadow-sm dark:shadow-none"
              >
                <div className="flex gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <Quote className="w-6 h-6 md:w-8 md:h-8 text-amber-500/20 group-hover:text-amber-500/40 transition-colors" />
                <p className="text-xs md:text-sm text-ink-700 dark:text-gray-400 italic whitespace-normal leading-relaxed font-medium">
                  "{rev.text}"
                </p>
                <div className="mt-auto pt-4 border-t border-black/10 dark:border-white/5">
                  <p className="font-black text-ink-950 dark:text-white uppercase text-[10px] md:text-xs tracking-widest">{rev.name}</p>
                  <p className="text-[9px] md:text-[10px] text-amber-500 font-bold uppercase mt-1">{rev.city}, Pakistan</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-paper-100 dark:from-ink-950 to-transparent z-10 hidden md:block" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-paper-100 dark:from-ink-950 to-transparent z-10 hidden md:block" />
      </section>
    </div>
  );
}
