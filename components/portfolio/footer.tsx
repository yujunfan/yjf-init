"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="relative py-16">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,212,255,0.3) 0%, rgba(124,58,237,0.1) 50%, transparent 80%)",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Name and title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold gradient-text mb-2">余俊帆</h3>
          <p className="text-foreground/60 mb-6">高级前端工程师 / 前端架构师</p>
        </motion.div>

        {/* Contact info */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
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

        {/* Divider */}
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto mb-8" />

        {/* Copyright */}
        <motion.p
          className="text-sm text-foreground/50 flex items-center justify-center gap-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          © 2026 Yu Junfan · Built with{" "}
          <Heart size={14} className="text-primary inline mx-1" /> Next.js +
          Tailwind CSS
        </motion.p>
      </div>
    </footer>
  );
}
