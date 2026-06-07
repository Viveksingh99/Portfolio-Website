"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mt-8 mb-28 px-4 max-w-4xl mx-auto"
    >
       <h2 className="text-3xl font-medium capitalize mb-8 text-center">
Selected Projects  </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mt-3 mb-6">
        A few projects I built using React, Next.js and modern tooling — I focus
        on performance and usability.
      </p>
      <div className="flex flex-col w-full space-y-6">
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
