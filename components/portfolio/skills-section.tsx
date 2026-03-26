"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "前端框架",
    color: "#3B82F6",
    skills: ["React v19+", "Next.js", "Vue v3/v2", "React Native 0.81+", "Electron"],
  },
  {
    title: "桌面/原生",
    color: "#8B5CF6",
    skills: ["Electron (Vite)", ".Net WinUI3 (C#)", "Android (Kotlin)"],
  },
  {
    title: "通讯/硬件",
    color: "#EAB308",
    skills: ["TCP Socket", "Serial Port (串口)", "NFC (NTAG213)", "蓝牙交互"],
  },
  {
    title: "视频/多媒体",
    color: "#EF4444",
    skills: ["Video.js", "海康威视对接", "实时直播流", "HIKVISION"],
  },
  {
    title: "数据可视化",
    color: "#06B6D4",
    skills: ["Three.js (R3F)", "ECharts", "AntV L7", "高德地图 2.0"],
  },
  {
    title: "构建/状态",
    color: "#22C55E",
    skills: ["Vite", "Webpack", "Zustand", "MobX", "Tailwind CSS 4"],
  },
  {
    title: "服务端/部署",
    color: "#94A3B8",
    skills: ["Node.js v20+", "Docker", "Nginx", "Git"],
  },
  {
    title: "AI 赋能",
    color: "#F97316",
    skills: ["Cursor Pro", "AI 辅助开发", "逻辑重构", "架构优化"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 right-0 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(0,212,255,0.5) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(124,58,237,0.5) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">核心技术栈</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="glass rounded-xl p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              whileHover={{
                scale: 1.02,
                boxShadow: `0 0 30px ${category.color}20`,
              }}
            >
              <h3
                className="text-lg font-semibold mb-4 flex items-center gap-2"
                style={{ color: category.color }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: category.color }}
                />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: `${category.color}15`,
                      color: category.color,
                      border: `1px solid ${category.color}30`,
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: `0 0 15px ${category.color}40`,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
