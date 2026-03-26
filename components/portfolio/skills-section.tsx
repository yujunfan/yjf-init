"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "前端框架",
    color: "#3B82F6",
    skills: ["React v19", "Next.js 15", "Vue 3", "React Native 0.81", "UmiJS 3.5"],
  },
  {
    title: "编程语言",
    color: "#8B5CF6",
    skills: ["TypeScript", "JavaScript ES6+", "C# (.NET WinUI3)"],
  },
  {
    title: "构建工具",
    color: "#EAB308",
    skills: ["Vite", "Webpack", "Expo SDK"],
  },
  {
    title: "状态管理",
    color: "#22C55E",
    skills: ["Zustand", "MobX", "Redux (Dva)", "ahooks"],
  },
  {
    title: "UI & 样式",
    color: "#EF4444",
    skills: ["Ant Design v6", "Tailwind CSS v4", "NativeWind"],
  },
  {
    title: "数据可视化",
    color: "#06B6D4",
    skills: ["ECharts", "AntV L7", "高德地图 AMap 2.0", "Fabric.js"],
  },
  {
    title: "IoT & 安全",
    color: "#F97316",
    skills: ["NFC (Kotlin Native)", "AES加密", "SM-Crypto国密"],
  },
  {
    title: "服务端 & 部署",
    color: "#94A3B8",
    skills: ["Node.js v20+", "Docker", "Nginx", "Git"],
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
