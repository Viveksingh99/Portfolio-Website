"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mt-12 sm:mt-20 mb-20 max-w-4xl mx-auto scroll-mt-28 px-4"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-lg border border-white/40 dark:border-black/40">
        <h2 className="text-3xl font-medium capitalize mb-8 text-center">
          About me{" "}
        </h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-3 items-start">
          <div className="flex items-center justify-center sm:justify-start">
            <div className="w-28 h-28 rounded-xl bg-gradient-to-br from-indigo-50 to-pink-50 dark:from-indigo-800 dark:to-pink-800 flex items-center justify-center shadow-md border border-white/30">
              <span className="text-4xl">💡</span>
            </div>
          </div>

          <div className="sm:col-span-2 text-gray-700 dark:text-gray-300 leading-7">
            <p className="mb-4 text-base sm:text-lg">
              After graduating with a degree in{" "}
              <span className="font-medium">Computer Application</span>, I
              pursued my passion for programming and web development. I build
              intuitive user interfaces and fast experiences using{" "}
              <span className="font-medium">React</span> and{" "}
              <span className="font-medium">Next.js</span>. I also work with{" "}
              <span className="font-medium">TypeScript</span> and modern tools
              like Prisma.
            </p>

            <p className="mb-4 text-base sm:text-lg">
              <span className="italic">I enjoy solving problems</span> and
              turning ideas into polished products. I&apos;m constantly learning new
              technologies and improving my craft. I&apos;m currently open to{" "}
              <span className="font-medium">full-time frontend roles</span>{" "}
              where I can contribute and grow.
            </p>

            <p className="text-base sm:text-lg">
              Outside of coding, I like playing outdoor games, watching movies,
              and spending time with my dog. I value clear, accessible design
              and enjoy collaborating with teams to build great products.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
