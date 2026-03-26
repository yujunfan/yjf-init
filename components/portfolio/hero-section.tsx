"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

const typewriterTexts = [
  "深耕前端开发 10 年",
  "React · React Native · Electron",
  "IoT 硬件交互 · 3D 可视化",
  "全栈开发 · AI 赋能",
];

// Tech icons for floating animation
const techIcons = [
  { name: "React", color: "#61DAFB", angle: 0 },
  { name: "Three.js", color: "#FFFFFF", angle: 60 },
  { name: "Electron", color: "#47848F", angle: 120 },
  { name: "Node", color: "#339933", angle: 180 },
  { name: "Vue", color: "#4FC08D", angle: 240 },
  { name: "RN", color: "#61DAFB", angle: 300 },
];

export function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    const currentFullText = typewriterTexts[currentTextIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex, isMounted]);

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(0,212,255,0.3)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="animate-grid-pulse" />
        </svg>
        
        {/* Glowing lines */}
        <motion.div
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Name */}
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              余俊帆
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl sm:text-2xl text-foreground/80 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              高级前端工程师 / 前端架构师
            </motion.p>

            {/* Typewriter effect */}
            <motion.div
              className="h-8 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span className="text-lg text-primary font-mono">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>

            {/* Contact badges */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <a
                href="tel:13430706192"
                className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
              >
                <Phone size={18} />
                <span>13430706192</span>
              </a>
              <a
                href="mailto:827115823@qq.com"
                className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
              >
                <Mail size={18} />
                <span>827115823@qq.com</span>
              </a>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              className="px-8 py-3 rounded-full border-2 border-primary text-primary font-medium
                hover:bg-primary hover:text-background transition-all duration-300"
              style={{
                boxShadow: "0 0 20px rgba(0,212,255,0.3)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0,212,255,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
            >
              查看项目
            </motion.button>
          </motion.div>

          {/* Right side - Avatar with floating icons */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Main avatar circle */}
            <div className="relative">
              <motion.div
                className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(0,212,255,0.2), rgba(124,58,237,0.2))",
                  boxShadow: "0 0 60px rgba(0,212,255,0.3), inset 0 0 60px rgba(124,58,237,0.1)",
                  border: "2px solid rgba(0,212,255,0.5)",
                }}
                animate={{
                  boxShadow: [
                    "0 0 60px rgba(0,212,255,0.3), inset 0 0 60px rgba(124,58,237,0.1)",
                    "0 0 80px rgba(0,212,255,0.5), inset 0 0 80px rgba(124,58,237,0.2)",
                    "0 0 60px rgba(0,212,255,0.3), inset 0 0 60px rgba(124,58,237,0.1)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-5xl sm:text-6xl lg:text-7xl font-bold gradient-text">
                  YJF
                </span>
              </motion.div>

              {/* Floating tech icons */}
              {isMounted && techIcons.map((icon, index) => {
                const radius = 140;
                const x = Math.cos((icon.angle * Math.PI) / 180) * radius;
                const y = Math.sin((icon.angle * Math.PI) / 180) * radius;

                return (
                  <motion.div
                    key={icon.name}
                    className="absolute w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold glass"
                    style={{
                      left: `calc(50% + ${x}px - 24px)`,
                      top: `calc(50% + ${y}px - 24px)`,
                      color: icon.color,
                      boxShadow: `0 0 20px ${icon.color}40`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.3,
                      ease: "easeInOut",
                    }}
                  >
                    {icon.name}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
