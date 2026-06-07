"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[6rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-90 shadow-lg shadow-black/[0.04] backdrop-blur-[0.6rem] sm:top-6 sm:h-[4.5rem] sm:w-[64rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-80"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed top-[0.5rem] left-1/2 w-full max-w-[64rem] -translate-x-1/2 items-center justify-between px-6 sm:top-[2.25rem] sm:py-0">
        <div className="flex items-center gap-3 mr-2 sm:mr-3">
          <motion.div
            whileHover={{ scale: 1.06, rotate: 4 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <Link href="#home" onClick={() => { setActiveSection("Home"); setTimeOfLastClick(Date.now()); }}>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold shadow-md mr-2">
                VS
              </div>
            </Link>
          </motion.div>
        </div>

        <ul className="flex mx-auto w-[6rem] flex-nowrap items-center justify-center gap-x-3 gap-y-3 text-[1rem] font-medium text-gray-500 whitespace-nowrap overflow-x-auto sm:w-[initial] sm:gap-4">
          {links.map((link, i) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.03 * i }}
            >
              <Link
                className={clsx(
                  "flex items-center justify-center px-3 py-3 hover:text-gray-950 transition-all duration-200 dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                <span className="relative inline-block">
                  {link.name}

                  {link.name === activeSection && (
                    <motion.span
                      className="absolute left-0 bottom-0 h-0.5 w-full rounded-full bg-gradient-to-r from-indigo-500 to-pink-500"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}