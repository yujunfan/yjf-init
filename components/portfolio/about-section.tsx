"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">关于我</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg leading-relaxed text-foreground/80">
              深耕前端开发<span className="text-primary font-semibold">10年</span>，精通{" "}
              <span className="text-primary">React (v16-v19)</span>、
              <span className="text-primary">React Native</span>、
              <span className="text-primary">Vue (v2/v3)</span>。
              具备从零到一构建企业级中后台、高性能可视化大屏及跨平台物联网应用的实战经验。
            </p>
            <p className="text-lg leading-relaxed text-foreground/80 mt-4">
              擅长{" "}
              <span className="text-secondary font-semibold">AI 辅助开发（Cursor Pro）</span>
              ，显著提升团队开发效率。在工业化管理、智慧体育、政务平台等复杂业务场景中，能运用{" "}
              <span className="text-primary">MPA 架构</span>、
              <span className="text-primary">SSR/SSG 渲染策略</span>及{" "}
              <span className="text-primary">Native Modules 桥接技术</span>
              ，实现高性能与高可维护性的平衡。
            </p>

            {/* Key highlights */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: "工作年限", value: "10年+" },
                { label: "主导项目", value: "20+" },
                { label: "技术栈", value: "全栈" },
                { label: "AI 赋能", value: "Cursor Pro" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="glass rounded-lg p-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0,212,255,0.2)" }}
                >
                  <div className="text-2xl font-bold gradient-text">{item.value}</div>
                  <div className="text-sm text-foreground/60 mt-1">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass">
              <Image
                src="https://picsum.photos/seed/tech/600/400"
                alt="技术主题图片"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              
              {/* Decorative elements */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 text-sm text-foreground/80">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span>持续探索前沿技术</span>
                </div>
              </div>
            </div>

            {/* Floating decorations */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(0,212,255,0.3) 0%, transparent 70%)",
              }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)",
              }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
