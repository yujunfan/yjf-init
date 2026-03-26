"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WelcomeScreenProps {
  onComplete: () => void;
}

type Phase = "idle" | "typing" | "loading" | "done" | "exit";

interface TokenDef {
  text: string;
  className: string;
}

interface LineDef {
  fullText: string;
  tokens: TokenDef[];
  pauseAfter: number;
}

const LINES: LineDef[] = [
  {
    fullText: "您好!",
    tokens: [{ text: "您好!", className: "text-cyan-300" }],
    pauseAfter: 500,
  },
  {
    fullText: "请稍等。",
    tokens: [{ text: "请稍等。", className: "text-white/70" }],
    pauseAfter: 500,
  },
  {
    fullText: "await yjf.init()",
    tokens: [
      { text: "await", className: "text-purple-400" },
      { text: " ", className: "" },
      { text: "yjf", className: "text-cyan-300" },
      { text: ".", className: "text-white/40" },
      { text: "init", className: "text-yellow-300" },
      { text: "()", className: "text-white/40" },
    ],
    pauseAfter: 400,
  },
];

function PartialTokens({ tokens, charCount }: { tokens: TokenDef[]; charCount: number }) {
  let remaining = charCount;
  return (
    <>
      {tokens.map((token, i) => {
        if (remaining <= 0) return null;
        const chars = Math.min(remaining, token.text.length);
        remaining -= chars;
        return (
          <span key={i} className={token.className}>
            {token.text.slice(0, chars)}
          </span>
        );
      })}
    </>
  );
}

function BlinkingCursor() {
  return (
    <motion.span
      className="inline-block w-[8px] h-[1.1em] bg-cyan-400 ml-[2px] align-middle rounded-[1px]"
      animate={{ opacity: [1, 1, 0, 0] }}
      transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
    />
  );
}

export function WelcomeScreen({ onComplete }: WelcomeScreenProps) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [lineIndex, setLineIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [completedLines, setCompletedLines] = useState<number>(0);
  const [progress, setProgress] = useState(0);

  // Kick off
  useEffect(() => {
    const t = setTimeout(() => setPhase("typing"), 600);
    return () => clearTimeout(t);
  }, []);

  // Typing engine
  useEffect(() => {
    if (phase !== "typing") return;
    if (lineIndex >= LINES.length) {
      setPhase("loading");
      return;
    }
    const line = LINES[lineIndex];
    if (charCount < line.fullText.length) {
      const delay = 65 + Math.random() * 55;
      const t = setTimeout(() => setCharCount((c) => c + 1), delay);
      return () => clearTimeout(t);
    }
    // line finished
    const t = setTimeout(() => {
      setCompletedLines((n) => n + 1);
      setLineIndex((i) => i + 1);
      setCharCount(0);
    }, line.pauseAfter);
    return () => clearTimeout(t);
  }, [phase, lineIndex, charCount]);

  // Loading bar
  useEffect(() => {
    if (phase !== "loading") return;
    const t = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(p + (p < 30 ? 2 : p < 70 ? 3 : p < 90 ? 5 : 10), 100);
        if (next >= 100) clearInterval(t);
        return next;
      });
    }, 45);
    return () => clearInterval(t);
  }, [phase]);

  // progress -> done
  useEffect(() => {
    if (phase === "loading" && progress >= 100) {
      const t = setTimeout(() => setPhase("done"), 200);
      return () => clearTimeout(t);
    }
  }, [phase, progress]);

  // done -> exit
  useEffect(() => {
    if (phase !== "done") return;
    const t = setTimeout(() => {
      setPhase("exit");
      setTimeout(onComplete, 800);
    }, 900);
    return () => clearTimeout(t);
  }, [phase, onComplete]);

  const renderLine = (idx: number) => {
    const line = LINES[idx];
    const isCompleted = idx < completedLines;
    const isTyping = phase === "typing" && lineIndex === idx;
    if (!isCompleted && !isTyping) return null;

    const count = isCompleted ? line.fullText.length : charCount;

    return (
      <motion.div
        key={idx}
        className="flex items-start mb-2"
        initial={{ opacity: 0, x: -6 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.15 }}
      >
        <span className="text-emerald-400/80 mr-2 select-none shrink-0">❯</span>
        <span className="break-all">
          <PartialTokens tokens={line.tokens} charCount={count} />
        </span>
        {isTyping && <BlinkingCursor />}
      </motion.div>
    );
  };

  return (
    <AnimatePresence>
      {phase !== "exit" && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ background: "#080c15" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Subtle grid background */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,212,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* Scanline effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
            }}
          />

          {/* Terminal window */}
          <motion.div
            className="relative w-full max-w-[560px] rounded-xl overflow-hidden"
            style={{
              background: "rgba(10, 14, 24, 0.97)",
              border: "1px solid rgba(0, 212, 255, 0.12)",
              boxShadow:
                "0 0 80px rgba(0, 212, 255, 0.06), 0 0 160px rgba(124, 58, 237, 0.04), 0 30px 60px rgba(0, 0, 0, 0.5)",
            }}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* Title bar */}
            <div className="flex items-center px-4 py-3 border-b border-white/[0.06]">
              <div className="flex gap-[7px]">
                <div className="w-[13px] h-[13px] rounded-full bg-[#ff5f57]" />
                <div className="w-[13px] h-[13px] rounded-full bg-[#febc2e]" />
                <div className="w-[13px] h-[13px] rounded-full bg-[#28c840]" />
              </div>
              <span
                className="ml-3 text-[11px] text-white/20 tracking-wider"
                style={{ fontFamily: "var(--font-geist-mono), monospace" }}
              >
                yjf-init — terminal
              </span>
            </div>

            {/* Terminal body */}
            <div
              className="p-5 sm:p-6 text-[14px] sm:text-[15px] leading-relaxed"
              style={{ fontFamily: "var(--font-geist-mono), monospace", minHeight: 200 }}
            >
              {renderLine(0)}
              {renderLine(1)}
              {renderLine(2)}

              {/* Progress bar */}
              {(phase === "loading" || phase === "done") && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="mt-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-white/25 text-xs shrink-0">initializing</span>
                    <div className="flex-1 h-[5px] bg-white/[0.04] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          width: `${progress}%`,
                          background: "linear-gradient(90deg, #00d4ff, #7c3aed)",
                        }}
                        layout
                        transition={{ duration: 0.05 }}
                      />
                    </div>
                    <span className="text-white/25 text-xs tabular-nums w-[3ch] text-right shrink-0">
                      {progress}%
                    </span>
                  </div>
                </motion.div>
              )}

              {/* Success */}
              {phase === "done" && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                  className="mt-3 flex items-center"
                >
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span className="text-emerald-400/90 mr-1">initialized</span>
                  <span className="text-white/25">— ready</span>
                </motion.div>
              )}

              {/* Idle cursor when loading */}
              {phase === "loading" && progress < 100 && (
                <div className="mt-3">
                  <BlinkingCursor />
                </div>
              )}
            </div>
          </motion.div>

          {/* Ambient glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
