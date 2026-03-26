"use client";

import { motion } from "framer-motion";
import { Bot, Globe, Building, Zap } from "lucide-react";

const evaluations = [
  {
    icon: Bot,
    title: "AI 赋能",
    description:
      "资深 Cursor Pro 用户，擅长 Composer 模式进行复杂逻辑重构与 API 对接，开发效率极高。",
    color: "#00d4ff",
  },
  {
    icon: Globe,
    title: "全栈视野",
    description:
      "熟悉 Node.js 服务端逻辑与 Android 原生开发，具备处理跨端、跨硬件复杂问题的能力。",
    color: "#22c55e",
  },
  {
    icon: Building,
    title: "架构思维",
    description:
      "追求代码简洁与高复用性，擅长通过工程化手段（Vite MPA、自动化适配）解决多终端部署痛点。",
    color: "#f59e0b",
  },
  {
    icon: Zap,
    title: "极客精神",
    description:
      "保持对 React 19、Next.js 等前沿技术的持续追踪与落地实践，热衷探索技术边界。",
    color: "#7c3aed",
  },
];

export function EvaluationSection() {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">自我评价</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {evaluations.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="glass rounded-xl p-6 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: `0 0 40px ${item.color}20`,
                }}
              >
                {/* Background glow */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20"
                  style={{
                    background: `radial-gradient(circle, ${item.color} 0%, transparent 70%)`,
                    transform: "translate(30%, -30%)",
                  }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: `${item.color}20`,
                      boxShadow: `0 0 20px ${item.color}30`,
                    }}
                  >
                    <Icon size={28} style={{ color: item.color }} />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: item.color }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
