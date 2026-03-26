"use client";

import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    company: "广东先知大数据有限公司",
    position: "高级前端工程师",
    period: "2019.07 — 2026.03",
    duration: "6年8个月",
    description:
      "负责公司核心产品前端架构设计，主导工业化管理平台、智慧体育大屏及 NFC 物联网应用等重大项目落地。运用 React (v16-v19)、React Native 及 Next.js，引入 AI 辅助开发流程。",
  },
  {
    company: "广东元心软件有限公司",
    position: "前端开发工程师",
    period: "2016.03 — 2019.01",
    duration: "2年10个月",
    description:
      "参与政务数字化平台及综合管理系统开发维护，负责 UI 组件库封装与性能优化，确保多终端适配稳定性。",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">工作经历</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ originY: 0 }}
          />

          {/* Experience cards */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className={`relative mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary z-10"
                style={{
                  boxShadow: "0 0 20px rgba(0,212,255,0.6)",
                }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
              />

              {/* Card */}
              <div
                className={`ml-12 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                <motion.div
                  className="glass rounded-xl p-6"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(0,212,255,0.2)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Company */}
                  <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Building2 size={18} className="text-primary" />
                    <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                  </div>

                  {/* Position */}
                  <p className="text-lg text-primary font-medium mb-2">{exp.position}</p>

                  {/* Period */}
                  <div className={`flex items-center gap-2 text-sm text-foreground/60 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                    <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs">
                      {exp.duration}
                    </span>
                  </div>

                  {/* Description */}
                  <p className={`text-foreground/70 leading-relaxed ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
