"use client";

import React from "react";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <motion.section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
My experience  </h2>
      <div className="mt-8 relative">
        <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-300 to-pink-400/70" />
        <div className="grid gap-6">
          {experiencesData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.35 }}
              className="relative pl-16 pr-4 py-4 rounded-xl bg-white/70 dark:bg-gray-900/60 border border-white/30 dark:border-black/30 shadow-sm hover:shadow-lg transform transition-transform"
            >
              <div className="absolute left-4 top-4 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-indigo-500 to-pink-500 text-white text-xl shadow-md">
                {item.icon}
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {item.date}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {item.location}
                </p>
                <p className="mt-2 text-gray-700 dark:text-gray-200 leading-relaxed">
                  {item.description}
                </p>

                {(item as any).tags && (item as any).tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(item as any).tags.map((tag: string, tIdx: number) => (
                      <span
                        key={tIdx}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
