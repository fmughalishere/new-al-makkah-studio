"use client";
import { motion } from "framer-motion";
import { image } from "@/src/lib/media";

export default function About() {
  return (
    <section id="about" className="relative bg-paper-50 text-ink-950 py-20 md:py-32 px-6 overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-amber-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-amber-500/10 blur-[100px]" />

      <div className="max-w-7xl mx-auto relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-md mx-auto lg:mx-0 w-full order-2 lg:order-1"
        >
          <div className="absolute -inset-3 border border-amber-600/30 rounded-2xl -z-10 hidden md:block" />
          <img
            src={image("profile-pic", 900)}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            alt="M. Hussnain Mughal"
            className="w-full aspect-[4/5] object-cover rounded-xl shadow-2xl md:grayscale md:hover:grayscale-0 transition duration-1000 border border-black/5"
          />
        </motion.div>

        <div className="space-y-6 text-center lg:text-left order-1 lg:order-2">
          <div className="inline-block lg:block">
            <span className="text-amber-600 font-bold tracking-[0.35em] text-[10px] sm:text-xs uppercase">
              Founder / Lead Photographer
            </span>
            <h2 className="font-display italic text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05] text-ink-950 mt-3">
              M. Hussnain Mughal
            </h2>
            <div className="h-[3px] w-20 bg-amber-600 mt-5 mx-auto lg:mx-0 rounded-full" />
          </div>

          <p className="text-ink-800/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
            With a vision to capture the soul of every celebration, I founded{" "}
            <span className="font-bold text-ink-950">Al Makkah Studio</span>. From cinematic
            wedding films to high-end bridal shoots, our team uses top-tier gear including Sony and
            Canon R series to deliver excellence across Punjab.
          </p>

          <div className="pt-8 border-t border-ink-950/10 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="p-4 rounded-lg bg-white border border-black/5 shadow-sm">
              <p className="text-[10px] uppercase tracking-widest text-amber-700 mb-2 font-bold">Equipment</p>
              <p className="text-sm sm:text-base font-bold text-ink-900">Canon R6, Sony Alpha, Gimbals</p>
            </div>
            <div className="p-4 rounded-lg bg-white border border-black/5 shadow-sm">
              <p className="text-[10px] uppercase tracking-widest text-amber-700 mb-2 font-bold">Experience</p>
              <p className="text-sm sm:text-base font-bold text-ink-900">5+ Years Professional Shoots</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
