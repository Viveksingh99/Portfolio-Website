"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-20 max-w-3xl mx-auto text-center sm:mb-0 scroll-mt-[100rem] px-4"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
          >
            <Image
              src="/my-photo.jpeg"
              alt="vivek portrait"
              width={320}
              height={320}
              quality={90}
              priority={true}
              className="h-28 w-28 sm:h-36 sm:w-36 md:h-44 md:w-44 rounded-full object-top object-cover border-[5px] border-white shadow-2xl dark:border-gray-800 bg-gray-100"
            />
          </motion.div>
          <motion.span
            className="absolute -bottom-2 right-2 text-3xl sm:text-4xl"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, delay: 0.12 }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-6 mt-6 px-4 text-3xl font-semibold leading-tight sm:text-5xl md:text-6xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 font-extrabold">Hi, I’m Vivek Singh.</span>
        <span className="block mt-3 text-gray-700 dark:text-gray-300 text-lg sm:text-xl font-medium">A Frontend developer building beautiful, accessible web apps with React & Next.js.</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-base sm:text-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08 }}
      >
        <Link
          href="#contact"
          aria-label="Contact"
          className="inline-flex items-center gap-3 bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform transition hover:scale-105 hover:-translate-y-0.5 active:scale-100"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact Me
          <BsArrowRight className="opacity-90" />
        </Link>

        <a
          className="inline-flex items-center gap-3 bg-white text-gray-800 px-5 py-3 rounded-full shadow-sm hover:shadow-md transform transition hover:scale-105 hover:-translate-y-0.5 border border-gray-200"
          href="/Vivek_Singh_CV.pdf"
          download
          aria-label="Download Resume"
        >
          <HiDownload className="text-lg" />
          Resume
        </a>

        <a
          className="inline-flex items-center justify-center w-11 h-11 rounded-full shadow-sm hover:shadow-md transform transition hover:scale-105 hover:-translate-y-0.5 border border-gray-200 text-gray-700 dark:text-white"
          href="https://www.linkedin.com/in/vivek-singh99/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <BsLinkedin className="text-lg" />
        </a>

        <a
          className="inline-flex items-center justify-center w-11 h-11 rounded-full shadow-sm hover:shadow-md transform transition hover:scale-105 hover:-translate-y-0.5 border border-gray-200 text-gray-700 dark:text-white text-[1.25rem]"
          href="https://github.com/Viveksingh99"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="text-lg" />
        </a>
      </motion.div>
    </section>
  );
}