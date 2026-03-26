"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WelcomeScreen } from "@/components/portfolio/welcome-screen";
import { Navbar } from "@/components/portfolio/navbar";
import { HeroSection } from "@/components/portfolio/hero-section";
import { AboutSection } from "@/components/portfolio/about-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { EvaluationSection } from "@/components/portfolio/evaluation-section";
import { Footer } from "@/components/portfolio/footer";

export default function PortfolioPage() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showPortfolio, setShowPortfolio] = useState(false);

  // Check if user has seen welcome screen before (in this session)
  useEffect(() => {
    const hasSeenWelcome = sessionStorage.getItem("hasSeenWelcome");
    if (hasSeenWelcome) {
      setShowWelcome(false);
      setShowPortfolio(true);
    }
  }, []);

  const handleWelcomeComplete = () => {
    sessionStorage.setItem("hasSeenWelcome", "true");
    setShowWelcome(false);
    setTimeout(() => setShowPortfolio(true), 100);
  };

  return (
    <>
      {/* Welcome Screen */}
      <AnimatePresence>
        {showWelcome && <WelcomeScreen onComplete={handleWelcomeComplete} />}
      </AnimatePresence>

      {/* Main Portfolio */}
      <AnimatePresence>
        {showPortfolio && (
          <motion.main
            className="min-h-screen bg-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Navbar />
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <EvaluationSection />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
