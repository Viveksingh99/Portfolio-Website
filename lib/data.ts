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
    title: "I graduated from Aryabhatta Knowledge University.",
    location: "Patna, Bihar",
    description:
      "I am a highly motivated individual with a strong educational foundation in computer science, holding a Bachelor of Computer Application (BCA) degree from Aryabhatta Knowledge University. Throughout my academic journey, I developed a comprehensive understanding of key concepts in programming, software development, and information technology. My coursework equipped me with practical skills in database management, system analysis, and web development. I am passionate about leveraging my technical knowledge to contribute effectively in the dynamic field of computer science and technology.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "React Developer",
    // company: "IMG Global Infotech Private Limited",
    location: "jaipur, Rajasthan",
    description:
      "I worked as a React developer for 1 year and upskilled to enhance my skills.",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
  {
    title: "Software Engineer",
    // company: "Radiansys Inc.",
    location: "Gurgaon",
    description:
      "I am a Software Engineer specializing in React, Next.js, and Tailwind CSS. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "heartyyfresh",
    description:
      "Heartyy Fresh is the largest online supermarket for Indian groceries in the USA. We sculpted a comprehensive online platform that would help them deliver all the grocery goodness.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    imageUrl: corpcommentImg,
  },
  {
    title: "zoniraz",
    description:
      "Zoniraz is the largest online market for Indian Jewellery. Zoniraz Jewel is one of the leading Jewellery manufacturer, wholesaler, and exporter in the international Jewels market.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "fabindia",
    description:
      "Fabindia is the largest online supermarket for Indian. Fabindia is India's largest private platform for products that are made from traditional techniques, skills and hand-based processes.",
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