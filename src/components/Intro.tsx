"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { image } from "@/src/lib/media";

export default function Intro({ setFinish }: { setFinish: (val: boolean) => void }) {
  useEffect(() => {
    const timer = setTimeout(() => setFinish(false), 3200);
    return () => clearTimeout(timer);
  }, [setFinish]);

  const gearImages = ["camera", "gimble", "Canon R6", "editing", "Photography"];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] bg-ink-950 flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 opacity-25 gap-1 p-1">
        {[...gearImages, ...gearImages].slice(0, 10).map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, delay: i * 0.08, ease: "easeOut" }}
            className="w-full h-full relative"
          >
            <img
              src={image(img)}
              alt="Studio gear"
              className="w-full h-full object-cover grayscale brightness-90"
            />
          </motion.div>
        ))}
      </div>

      <div className="relative z-20 text-center px-6 w-full max-w-2xl">
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="block text-amber-500 text-[9px] tracking-[0.6em] uppercase font-bold mb-5">
            Est. Punjab
          </span>
          <h1 className="font-display italic text-white text-4xl sm:text-6xl md:text-7xl font-medium leading-[1.05]">
            Al Makkah <span className="text-amber-500">Studio</span>
          </h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.6, delay: 0.4 }}
            className="h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mt-8 mx-auto max-w-xs"
          />

          <p className="text-gray-400 mt-6 tracking-[0.4em] text-[9px] md:text-[10px] uppercase font-bold">
            Professional Visual Storytellers
          </p>
        </motion.div>

        <div className="mt-16 w-40 md:w-56 h-[2px] bg-white/5 rounded-full overflow-hidden mx-auto">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 2.8, ease: "linear" }}
            className="w-full h-full bg-amber-500"
          />
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_20%,#08090a_88%)]" />
    </motion.div>
  );
}
