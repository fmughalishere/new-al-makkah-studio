"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import { video } from "@/src/lib/media";

export default function Videography() {
  const videos = ["v1", "v7", "v4", "v5", "v2", "v6", "v3", "v8"];
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="work" className="py-20 md:py-32 bg-paper-50 dark:bg-ink-950 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h2 className="font-display italic text-3xl md:text-5xl font-medium border-l-4 border-amber-500 pl-4 tracking-tight text-ink-950 dark:text-white">
              Cinematography
            </h2>
            <p className="text-ink-600 dark:text-gray-500 text-[9px] md:text-[11px] uppercase tracking-[0.4em] mt-3 font-bold">
              Wedding &amp; Event Masterpieces
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6">
          {videos.map((v, i) => (
            <motion.div
              key={v}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelected(v)}
              className="group relative aspect-[9/16] bg-paper-100 dark:bg-zinc-900 overflow-hidden rounded-lg sm:rounded-xl border border-black/5 dark:border-white/5 shadow-2xl cursor-pointer"
            >
              <video
                src={video(v)}
                muted
                loop
                playsInline
                autoPlay
                preload="metadata"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1s]"
              />

              {/* Tap-to-watch-with-sound hint */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:border-amber-500/60 transition-all">
                  <Play className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white ml-0.5" />
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="h-[1px] w-3 sm:w-4 bg-amber-500" />
                    <span className="text-[6px] sm:text-[10px] text-amber-500 font-bold uppercase tracking-widest">
                      Scene 0{i + 1}
                    </span>
                  </div>
                  <p className="font-display italic text-[9px] sm:text-sm text-white font-medium tracking-tight">
                    Al Makkah Films
                  </p>
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-amber-500/0 group-hover:border-amber-500/20 transition-all duration-500 rounded-lg sm:rounded-xl pointer-events-none" />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <p className="text-[10px] text-ink-500 dark:text-gray-600 uppercase font-bold tracking-widest">
            Tap a clip to watch it full screen with sound
          </p>
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
              className="relative w-full max-w-md sm:max-w-lg flex items-center justify-center"
            >
              <video
                src={video(selected)}
                controls
                autoPlay
                playsInline
                className="max-h-[85vh] w-full rounded-lg shadow-2xl border border-white/10 bg-black"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
