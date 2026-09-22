"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      type="button"
      aria-label="Toggle light / dark theme"
      onClick={toggle}
      className={`relative shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 flex items-center justify-center hover:border-amber-500/50 transition-colors overflow-hidden ${className}`}
    >
      {mounted && (
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDark ? "moon" : "sun"}
            initial={{ opacity: 0, rotate: -90, scale: 0.4 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.4 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            {isDark ? (
              <Moon className="w-4 h-4 text-amber-500" />
            ) : (
              <Sun className="w-4 h-4 text-amber-600" />
            )}
          </motion.span>
        </AnimatePresence>
      )}
    </button>
  );
}
