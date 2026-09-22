"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scissors, Palette, Monitor, Music, Film, Play, X } from "lucide-react";
import { image, video } from "@/src/lib/media";

export default function EditingSection() {
  const [selected, setSelected] = useState<string | null>(null);

  const skills = [
    { icon: <Palette className="w-3 h-3" />, name: "Color Grading" },
    { icon: <Music className="w-3 h-3" />, name: "Sound Design" },
    { icon: <Scissors className="w-3 h-3" />, name: "Cinematic Cuts" },
    { icon: <Monitor className="w-3 h-3" />, name: "4K Rendering" },
  ];

  const videos = [
    { src: "edited1", title: "Cinematic Grade v1" },
    { src: "edited2", title: "Wedding Highlights" },
    { src: "edited3", title: "Slow Motion Reel" },
  ];

  return (
    <section id="editing" className="py-12 md:py-16 px-4 md:px-6 bg-paper-50 dark:bg-ink-950 relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-10 md:mb-14 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display italic text-3xl md:text-5xl font-medium tracking-tight border-amber-500 md:border-l-4 md:pl-5 leading-none text-ink-950 dark:text-white">
              Post <span className="text-amber-500">Production</span>
            </h2>
            <p className="text-ink-600 dark:text-gray-500 text-[9px] md:text-[10px] tracking-[0.3em] uppercase mt-3 font-bold">
              Crafting Emotions through Edit
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-5 items-center sm:items-start bg-paper-100 dark:bg-zinc-900/30 p-5 rounded-2xl border border-black/5 dark:border-white/5"
          >
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-amber-500/20 shrink-0">
              <img
                src={image("editor-profile", 260)}
                loading="lazy"
                decoding="async"
                alt="Danial Munir"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            <div className="text-center sm:text-left">
              <h3 className="font-display italic text-xl md:text-2xl font-medium text-ink-950 dark:text-white tracking-tight mb-1">
                Danial Munir
              </h3>
              <p className="text-amber-500 text-[9px] font-bold uppercase tracking-widest mb-3">
                Master Video Editor
              </p>
              <p className="text-ink-700 dark:text-gray-400 text-xs leading-relaxed mb-4">
                Expert in transforming raw footage into cinematic masterpieces. Specialized in
                high-end wedding films.
              </p>

              <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                {skills.map((s, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1 bg-black/5 dark:bg-white/5 px-2.5 py-1 rounded-full text-[8px] font-bold text-ink-700 dark:text-gray-300 uppercase tracking-wider border border-black/5 dark:border-white/5"
                  >
                    {s.icon} {s.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative h-[220px] sm:h-[240px] md:h-[260px] rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 group shadow-xl"
          >
            <img
              src={image("editing-pic", 900)}
              loading="lazy"
              decoding="async"
              alt="Editing Station"
              className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70" />

            <div className="absolute bottom-4 left-4">
              <div className="flex items-center gap-2">
                <Monitor className="w-4 h-4 text-amber-500" />
                <p className="text-white font-bold uppercase text-[10px] tracking-widest">
                  4K Editing Suite
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="pt-6 border-t border-black/10 dark:border-white/5">
          <div className="flex items-center gap-2 mb-6">
            <Film className="text-amber-500 w-4 h-4" />
            <h4 className="font-display italic text-lg md:text-xl font-medium text-ink-950 dark:text-white tracking-tight">
              Recent Edits Preview
            </h4>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
            {videos.map((v, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setSelected(v.src)}
                className="relative aspect-video rounded-lg sm:rounded-xl overflow-hidden bg-paper-100 dark:bg-zinc-900 border border-black/10 dark:border-white/10 group cursor-pointer"
              >
                <video
                  src={video(v.src)}
                  muted
                  loop
                  playsInline
                  autoPlay
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:border-amber-500/60 transition-all">
                    <Play className="w-3 h-3 sm:w-4 sm:h-4 text-white ml-0.5" />
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-3 sm:p-4 pointer-events-none">
                  <div>
                    <p className="text-amber-500 text-[6px] sm:text-[7px] font-black uppercase tracking-[0.3em] mb-1">
                      Project 0{idx + 1}
                    </p>
                    <p className="text-white text-[9px] sm:text-[11px] font-bold uppercase italic tracking-tight">
                      {v.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen video lightbox, same pattern as the photo gallery */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-amber-500 hover:text-black transition-all z-[210]"
            >
              <X size={24} strokeWidth={3} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-3xl"
            >
              <video
                src={video(selected)}
                controls
                autoPlay
                playsInline
                className="w-full max-h-[85vh] rounded-lg shadow-2xl border border-white/10 bg-black"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
