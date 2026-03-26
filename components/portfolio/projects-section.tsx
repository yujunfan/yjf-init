"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "工业化管理平台（智能工厂）",
    image: "https://picsum.photos/seed/factory/600/300",
    tags: ["Next.js 16", "React 19", "TypeScript", "Ant Design 6", "Tailwind CSS 4"],
    highlights: [
      "Next.js App Router SSR/CSR 混合渲染，提升首屏性能",
      "ECharts 多维工业数据可视化（关联分析矩阵、甘特图排产）",
      "Feature-driven 模块化目录设计，解耦业务与数据源",
    ],
  },
  {
    title: "智慧体育大屏系列（南部战区）",
    image: "https://picsum.photos/seed/sports/600/300",
    tags: ["React Native 0.81", "Expo Bare", "TypeScript", "Zustand", "FlashList"],
    highlights: [
      "1920×1080 自定义 autofit 适配方案，视觉一致性保障",
      "Kotlin Native Modules 封装原生轻量提示组件",
      "OTA 静默更新，降低数百台终端运维成本",
    ],
  },
  {
    title: "NFC 无源锁移动应用",
    image: "https://picsum.photos/seed/nfc/600/300",
    tags: ["React Native", "Kotlin", "NativeModules", "AES", "SM-Crypto"],
    highlights: [
      "深入 Android 原生层编写 NFCModule，精密控制 NTAG213 标签读写",
      "集成 AES + 国密 SM-Crypto 双重加密确保通讯安全",
      "useNFC 钩子将硬件指令序列与 UI 逻辑完全解耦",
    ],
  },
  {
    title: "企莞家政务数字化平台",
    image: "https://picsum.photos/seed/govtech/600/300",
    tags: ["UmiJS 3.5", "React 17", "TypeScript", "Ant Design Pro", "高德地图"],
    highlights: [
      "模块化路由注入方案，支持数十个业务子系统快速接入",
      "深度集成高德地图 AMap 2.0，实现区域产业分布图谱",
      "plugin-model 与 Dva 并行维护，兼顾稳定性与快速迭代",
    ],
  },
  {
    title: "一网统管综合管理系统",
    image: "https://picsum.photos/seed/dashboard/600/300",
    tags: ["React 18", "Vite MPA", "MobX", "AntV L7", "Tailwind CSS"],
    highlights: [
      "Vite MPA 架构，单仓库支持 PC/大屏/H5 三端独立入口",
      "代码复用率提升 50% 以上",
      "PostCSS px-to-viewport 响应式 + AntV L7 地理空间可视化",
    ],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(0,212,255,0.5) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full opacity-10"
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
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">项目经历</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glass rounded-xl overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(0,212,255,0.15)",
              }}
            >
              {/* Image */}
              <div className="relative aspect-[2/1] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-1">
                  {project.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="text-sm text-foreground/70 flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      <span className="line-clamp-2">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
