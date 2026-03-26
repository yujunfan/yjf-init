"use client";

import { motion } from "framer-motion";
import { Book, ExternalLink, GraduationCap, Code, Globe, Cpu } from "lucide-react";

const categories = [
  {
    title: "技术栈",
    icon: <Cpu className="w-5 h-5" />,
    items: ["JavaScript", "TypeScript", "C#", "React", "Vue", "Angular", "Next.js", "Taro", "Nestjs"],
  },
  {
    title: "应用开发",
    icon: <Globe className="w-5 h-5" />,
    items: ["智能体", "Web应用", "移动应用 (React Native)", "桌面应用 (Electron, WPF)", "小程序"],
  },
  {
    title: "编程语言",
    icon: <Code className="w-5 h-5" />,
    items: ["JavaScript", "TypeScript", "C#"],
  },
];

export function KnowledgeBaseSection() {
  return (
    <section id="blog" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">知识库 & 博客</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-foreground/70 max-w-2xl mx-auto">
            记录技术成长，分享开发心得。在蓝马知识库中，我沉淀了关于前端、跨平台开发及 AI 技术的实践经验。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left side: Intro Card */}
          <motion.div
            className="lg:col-span-1 glass p-8 rounded-2xl flex flex-col justify-between"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <Book className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">蓝马的知识库</h3>
              <p className="text-foreground/70 mb-6">
                一个专注于技术学习与实践的个人知识库，涵盖了从底层语言到现代框架的完整技术体系。
              </p>
            </div>
            
            <motion.a
              href="https://www.lanma.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors w-fit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              访问知识库 <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Right side: Categories Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                className="glass p-6 rounded-2xl border border-white/5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4 text-primary">
                  {cat.icon}
                  <h4 className="font-bold text-lg">{cat.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-white/5 rounded-lg text-sm text-foreground/80 border border-white/5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
            
            <motion.div
              className="glass p-6 rounded-2xl border border-white/5 bg-gradient-to-br from-primary/5 to-secondary/5 flex flex-col justify-center items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <GraduationCap className="w-8 h-8 text-secondary mb-3" />
              <h4 className="font-bold mb-1">持续更新中</h4>
              <p className="text-xs text-foreground/50">记录学习过程，构建个人技术体系</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
