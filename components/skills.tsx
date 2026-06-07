"use client";

import React, { useState, useRef } from "react";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-4xl mx-auto scroll-mt-28 text-center sm:mb-40 px-4"
    >
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        My skills{" "}
      </h2>

      <p className="text-gray-600 dark:text-gray-300 mt-2 mb-6">
        Tools and technologies I use regularly. Hover any card for a quick
        preview.
      </p>

      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skillsData.map((skill, index) => {
          const level = (() => {
            const base = 70 + ((index * 13) % 30);
            return Math.min(95, base);
          })();

          function SkillItem() {
            const [count, setCount] = useState(0);
            const startedRef = useRef(false);

            const onEnter = () => {
              if (startedRef.current) return;
              startedRef.current = true;
              const duration = 800; // ms
              const stepTime = 20; // ms
              const steps = Math.max(1, Math.floor(duration / stepTime));
              const step = Math.max(1, Math.floor(level / steps));
              let current = 0;
              const id = setInterval(() => {
                current = Math.min(level, current + step);
                setCount(current);
                if (current >= level) clearInterval(id);
              }, stepTime);
            };

            return (
              <motion.li
                key={index}
                className="bg-white/60 dark:bg-gray-900/60 rounded-xl p-4 text-left shadow-sm hover:shadow-md transform hover:-translate-y-1 transition"
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
                whileHover={{ scale: 1.02 }}
                onViewportEnter={onEnter}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-800 dark:text-gray-100">
                    {skill}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {count}%
                  </span>
                </div>

                <div className="mt-3 h-2 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-pink-500 transition-all duration-700"
                    style={{ width: `${count}%` }}
                  />
                </div>
              </motion.li>
            );
          }

          return <SkillItem key={index} />;
        })}
      </ul>
    </section>
  );
}
