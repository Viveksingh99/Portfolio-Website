import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Aryabhatta Knowledge University",
    location: "Patna, Bihar",
    description:
      "I graduated after 2 months of studying. I immediately found a job as a Front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "React Developer",
    location: "jaipur, Rajasthan",
    description:
      "I worked as a React developer for 1 years. I also upskilled to the Skills.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Software Engineer",
    location: "Gurgaon",
    description:
      "I'm now a Software developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "ThrivelyCare",
    description:
      "This project is designed to allow the clients to find professional health service providers/therapists near their location. The patients can book appointments for either Online consultation (Video call) or In-person meetings for their respective needs.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Saloon",
    description:
      "This project to find professional Saloon service providers near their location. The user can book appointments respective needs",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Fitstreet",
    description:
      "It is a fitness system where users can track their fitness using an application and website.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Material Ui",
  "Bootstrap",
  "Redux",
  "Redux Toolkit",
  "Git",
  "Swagger",
  "Postman"
] as const;