"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "武器装配 3D 交互展示系统 (桌面应用)",
    image: "https://picsum.photos/seed/3d/600/300",
    tags: ["Electron", "React", "Three.js (R3F)", "Vite", "IPC"],
    highlights: [
      "双进程架构，通过 IPC 通信抽象层实现渲染进程与主进程高效数据交换",
      "利用 React Three Fiber 实现 3D 模型 360° 旋转、缩放及“爆炸图”拆解动画",
      "Node.js 直接管理本地大体积视频与 3D 模型资源，突破浏览器沙箱限制",
    ],
  },
  {
    title: "先知体检通 & 智慧体育大屏",
    image: "https://picsum.photos/seed/sports/600/300",
    tags: ["React Native 0.81", "Expo", "TCP/串口通讯", "Kotlin Native"],
    highlights: [
      "基于 React Native Native Modules 桥接技术，封装 Kotlin 原生模块实现串口通讯与数据透传",
      "在 React Native 层抽象统一的数据获取接口，实现与硬件设备的实时双向异步交互",
      "设计 autofit 适配方案，确保应用在不同尺寸大屏上的视觉一致性",
    ],
  },
  {
    title: "“互联网+明厨亮灶”智慧监管平台",
    image: "https://picsum.photos/seed/video/600/300",
    tags: ["React", "Ant Design", "Video.js", "海康威视对接"],
    highlights: [
      "深度对接海康威视视频平台，实现多路监控视频实时直播与历史回放",
      "结合 react-keep-alive 实现多页签模式下的页面状态缓存",
      "使用 ECharts 构建区域风险分布图谱，实现监管数据多维可视化",
    ],
  },
  {
    title: "潮玩行业多端门户 (小程序 & H5)",
    image: "https://picsum.photos/seed/toy/600/300",
    tags: ["Taro 4.0", "React 18", "MobX", "Tailwind CSS 4"],
    highlights: [
      "基于 Taro 4.0 实现一端编写多端运行，weapp-tailwindcss 原子化样式开发",
      "采用分包加载策略与资源静态化处理，显著提升首屏加载速度",
      "集成 i18next 实现全链路多语言支持，适配全球化业务需求",
    ],
  },
  {
    title: "企莞家政务数字化平台",
    image: "https://picsum.photos/seed/govtech/600/300",
    tags: ["UmiJS", "React", "高德地图 2.0", "Ant Design Pro"],
    highlights: [
      "设计模块化路由注入方案，支撑数十个业务子系统的快速接入与统一管理",
      "深度集成高德地图 API，实现区域产业分布图谱与空间数据分析",
    ],
  },
  {
    title: "NFC 无源锁移动应用 (IoT/App)",
    image: "https://picsum.photos/seed/nfc/600/300",
    tags: ["React Native", "Kotlin", "SM-Crypto", "NFC 交互"],
    highlights: [
      "深入 Android 原生层实现 NTAG213 协议读写，完成精密指令传输",
      "集成国密 (SM-Crypto) 与 AES 算法，确保硬件通讯链路绝对安全性",
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
