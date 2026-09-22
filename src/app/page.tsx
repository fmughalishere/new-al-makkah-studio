"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import About from "../components/About";
import Cinematography from "../components/Cinematography";
import Photography from "../components/Photography";
import EditingSection from "../components/Editing";
import Contact from "../components/Contact";
import Packages from "../components/Packages";
import SocialAndReviews from "../components/SocialAndReviews";
export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="relative bg-paper-50 dark:bg-ink-950 min-h-screen transition-colors duration-300">
      <AnimatePresence mode="wait">
        {loading && <Intro key="intro-screen" setFinish={setLoading} />}
      </AnimatePresence>

      {!loading && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative"
        >
          <Navbar />
          
          <div className="pt-20 space-y-20 md:space-y-32">
            <About />
            <Cinematography />
            <Photography />
            <EditingSection />
            <Packages />
            <SocialAndReviews />
            <Contact />
          </div>
        </motion.div>
      )}
    </main>
  );
}