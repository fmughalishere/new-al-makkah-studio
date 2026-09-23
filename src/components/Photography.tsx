"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { image } from "@/src/lib/media";

export default function Photography() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const galleryData = [
    { id: 1, name: "bridal-shoot", category: "Bridal" },
    { id: 2, name: "bridal-shoot1", category: "Bridal" },
    { id: 3, name: "bridal-shoot2", category: "Bridal" },
    { id: 4, name: "couple-shoot", category: "Couple" },
    { id: 5, name: "couple-shoot1", category: "Couple" },
    { id: 6, name: "couple-shoot2", category: "Couple" },
    { id: 7, name: "couple-shoot3", category: "Couple" },
    { id: 8, name: "couple", category: "Couple" },
    { id: 9, name: "clicks1", category: "Portrait" },
    { id: 10, name: "clicks2", category: "Portrait" },
    { id: 11, name: "clicks3", category: "Portrait" },
    { id: 12, name: "aesthetic", category: "Portrait" },
    { id: 13, name: "random-click", category: "Portrait" },
    { id: 14, name: "trends", category: "Trends" },
    { id: 15, name: "trends1", category: "Trends" },
    { id: 16, name: "trends2", category: "Trends" },
  ];

  const categories = ["All", "Bridal", "Couple", "Portrait", "Trends"];

  const filteredImages =
    activeCategory === "All" ? galleryData : galleryData.filter((img) => img.category === activeCategory);

  return (
    <section id="photography" className="py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto bg-paper-50 dark:bg-ink-950 transition-colors duration-300">
      <div className="flex flex-col gap-8 mb-12 md:mb-16">
        <div className="text-center md:text-left">
          <h2 className="font-display italic text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight border-amber-500 md:border-l-4 md:pl-4">
            Photography Gallery
          </h2>
          <p className="text-ink-600 dark:text-gray-500 text-[10px] md:text-xs tracking-[0.3em] uppercase mt-2">
            Capturing your best moments across Punjab
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 md:px-6 py-2 text-[9px] md:text-[11px] font-black uppercase tracking-widest rounded-full border transition-all duration-500 ${
                activeCategory === cat
                  ? "bg-amber-500 border-amber-500 text-black shadow-[0_0_15px_rgba(184,135,63,0.4)]"
                  : "border-black/15 dark:border-white/10 text-ink-600 dark:text-gray-500 hover:border-amber-500/50 hover:text-ink-950 dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="columns-2 sm:columns-3 lg:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
        <AnimatePresence mode="popLayout">
          {filteredImages.map((img) => (
            <motion.div
              layout
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedImg(img.name)}
              className="cursor-pointer break-inside-avoid group relative overflow-hidden rounded-xl border border-black/5 dark:border-white/5 bg-paper-100 dark:bg-zinc-900"
            >
              <img
                src={image(img.name, 500)}
                alt={img.category}
                className="w-full h-auto md:grayscale md:group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                <span className="text-[8px] md:text-[10px] text-amber-500 font-black tracking-widest uppercase bg-black/80 backdrop-blur-md px-2 py-1 rounded-md border border-white/10">
                  {img.category}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-amber-500 hover:text-black transition-all z-[210]"
            >
              <X size={24} strokeWidth={3} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={() => setSelectedImg(null)}
              className="relative w-full h-full flex items-center justify-center cursor-zoom-out"
            >
              <img
                src={image(selectedImg, 1600)}
                className="max-w-full max-h-[85vh] md:max-h-[90vh] object-contain rounded-lg shadow-2xl border border-white/10"
                alt="Enlarged view"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
