"use client";

import { motion } from "framer-motion";
import { Bot, Globe, Building, Zap } from "lucide-react";

const evaluations = [
  {
    icon: Bot,
    title: "高效 AI 赋能",
    description:
      "深度使用 Cursor Pro 等 AI 工具，擅长复杂逻辑重构与架构优化，开发效率极高。",
    color: "#00d4ff",
  },
  {
    icon: Globe,
    title: "全平台开发能力",
    description:
      "具备 Web、小程序、App 及桌面应用的全平台开发经验，能处理复杂的跨端兼容性问题。",
    color: "#22c55e",
  },
  {
    icon: Building,
    title: "硬件交互能力",
    description:
      "熟悉 TCP、串口、NFC、蓝牙等多种通讯协议，具备丰富的 IoT 硬件对接实战经验。",
    color: "#f59e0b",
  },
  {
    icon: Zap,
    title: "视频处理经验",
    description:
      "熟练掌握海康威视等视频平台对接及实时视频流播放技术，具备 3D 交互展示开发经验。",
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
