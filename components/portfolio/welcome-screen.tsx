"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// SVG paths for "您好！" - simplified stroke paths
const strokes = {
  nin: [
    // 您 character strokes (simplified representation)
    "M 10,15 L 10,50",
    "M 10,32 L 35,32",
    "M 35,15 L 35,50",
    "M 10,50 L 35,50",
    "M 22,50 L 22,70",
    "M 5,70 L 40,70",
    "M 22,70 L 10,90",
    "M 22,70 L 35,90",
    "M 5,90 Q 22,100 40,90",
  ],
  hao: [
    // 好 character strokes
    "M 55,20 L 55,60",
    "M 55,35 L 75,35",
    "M 55,50 L 75,50",
    "M 75,20 L 75,60",
    "M 55,60 Q 65,70 75,60",
    "M 85,15 L 85,95",
    "M 85,30 L 110,30",
    "M 85,50 L 110,50",
    "M 85,70 L 110,70",
    "M 110,30 L 110,70",
  ],
  exclaim: [
    // ！exclamation mark
    "M 125,20 L 125,70",
    "M 125,80 L 125,85",
  ],
};

const allStrokes = [...strokes.nin, ...strokes.hao, ...strokes.exclaim];

interface WelcomeScreenProps {
  onComplete: () => void;
}

export function WelcomeScreen({ onComplete }: WelcomeScreenProps) {
  const [currentStroke, setCurrentStroke] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (currentStroke < allStrokes.length) {
      const timer = setTimeout(() => {
        setCurrentStroke((prev) => prev + 1);
      }, 180);
      return () => clearTimeout(timer);
    } else {
      // Show button after all strokes are drawn
      const timer = setTimeout(() => {
        setShowButton(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentStroke]);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(onComplete, 800);
  };

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "#020818" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-primary/30"
                initial={{
                  x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
                  y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
                  opacity: 0,
                }}
                animate={{
                  y: [null, Math.random() * -200 - 100],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          {/* Radial gradient background */}
          <div className="absolute inset-0">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30"
              style={{
                background:
                  "radial-gradient(circle, rgba(0,212,255,0.3) 0%, rgba(124,58,237,0.1) 50%, transparent 70%)",
              }}
            />
          </div>

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* SVG for Chinese characters with stroke animation */}
            <svg
              viewBox="0 0 140 110"
              className="w-64 h-48 sm:w-80 sm:h-60 md:w-96 md:h-72"
              style={{ overflow: "visible" }}
            >
              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {allStrokes.map((path, index) => (
                <motion.path
                  key={index}
                  d={path}
                  fill="none"
                  stroke="#00d4ff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#glow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={
                    index < currentStroke
                      ? { pathLength: 1, opacity: 1 }
                      : { pathLength: 0, opacity: 0 }
                  }
                  transition={{
                    pathLength: { duration: 0.3, ease: "easeOut" },
                    opacity: { duration: 0.1 },
                  }}
                />
              ))}
            </svg>

            {/* Fallback text that fades in */}
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-serif font-light tracking-wider mt-4"
              style={{
                fontFamily: "var(--font-noto-serif-sc), serif",
                color: "#00d4ff",
                textShadow:
                  "0 0 20px rgba(0,212,255,0.8), 0 0 40px rgba(0,212,255,0.5), 0 0 60px rgba(0,212,255,0.3)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: currentStroke >= allStrokes.length ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              您好！
            </motion.h1>

            {/* Enter button */}
            <AnimatePresence>
              {showButton && (
                <motion.button
                  className="mt-12 px-8 py-3 text-lg font-medium rounded-full border-2 border-primary text-primary
                    hover:bg-primary hover:text-background transition-all duration-300
                    focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                  style={{
                    boxShadow:
                      "0 0 20px rgba(0,212,255,0.4), inset 0 0 20px rgba(0,212,255,0.1)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      "0 0 30px rgba(0,212,255,0.6), inset 0 0 30px rgba(0,212,255,0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleEnter}
                >
                  进入 →
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
