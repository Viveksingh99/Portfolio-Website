"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { BsBoxArrowUpRight } from "react-icons/bs";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center bg-white/60 dark:bg-gray-900/60 rounded-xl border border-white/30 dark:border-black/30 shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
        <div className="sm:col-span-7 p-6">
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-full bg-gradient-to-r from-gray-800 to-gray-600 text-white/90"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-2">
            <a
              href={typeof imageUrl === "string" ? imageUrl : imageUrl.src}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open preview of ${title}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition"
            >
              View preview
              <BsBoxArrowUpRight className="opacity-90" />
            </a>
          </div>
        </div>

        <div className="sm:col-span-5 p-4 flex items-center justify-center">
          <div className="w-full max-w-[320px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src={imageUrl}
              alt={title}
              quality={95}
              className="w-full h-44 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
