import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiRedux,
  SiTailwindcss,
  SiGit,
  SiPostman,
  SiLeetcode,
} from "react-icons/si";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const projects = [
  {
    title: "LedgerFlow",
    description:
      "Engineered a ledger-driven transaction platform that models real-world banking workflows. Implemented account management, secure fund transfers, transaction history, and audit trails while maintaining data integrity through double-entry ledger principles.",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Ledger Architecture",
      "REST APIs",
    ],
    github: "https://github.com/veerender-nemali/Banking-Ledger-System.git",
    live: "https://banking-ledger-system-backend-q4ri.onrender.com/",
  },
  {
    title: "DevTinder",
    description:
      "Developed a networking platform that enables users to discover, connect, and chat with like-minded developers. Built authentication, profile management, connection requests, real-time interactions, and responsive user experiences across the application.",
    tech: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "TailwindCss",
      "Redux-Toolkit",
      "React-Router",
    ],
    github: "https://github.com/veerender-nemali/DevTinder.git",
    live: "https://devtinder-flax.vercel.app/",
  },
  {
    title: "Personal Portfolio",
    description:
      "Designed and developed a responsive portfolio website to showcase projects, experience, and technical skills. Built with modern UI principles, smooth animations, dark mode support, and optimized performance.",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Vercel"],
    github: "https://github.com/veerender-nemali/portfolio",
    live: "https://veerendernemali.vercel.app/",
  },
  {
    title: "StreamiFy",
    description:
      "A video streaming platform which is similar to youtube UI, where you can stream youtube videos like, dislike, save, subscribe to your favourite channels, search your favourite videos and more.",
    tech: [
      "React.js",
      "React-Router",
      "Redux-Toolkit",
      "Youtube APIs",
      "TailwindCss",
    ],
    github: "https://github.com/veerender-nemali/Youtube-UI-clone.git",
    live: "#",
  },
];

export const skills = [
  {
    name: "JavaScript",
    icon: SiJavascript,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "React",
    icon: SiReact,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
  },
  {
    name: "NestJS",
    icon: SiNestjs,
  },
  {
    name: "Express",
    icon: SiExpress,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    name: "MySQL",
    icon: SiMysql,
  },
  {
    name: "Redux Toolkit",
    icon: SiRedux,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    name: "Git",
    icon: SiGit,
  },
  {
    name: "Postman",
    icon: SiPostman,
  },
];

export const contactLinks = [
  {
    name: "GitHub",
    href: "https://github.com/veerender-nemali",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/veerender-nemali/",
    icon: FaLinkedin,
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/veerender_nemali/",
    icon: SiLeetcode,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/_veerender.73",
    icon: FaInstagram,
  },
  { name: "X", href: "https://x.com/veerendernemali", icon: FaTwitter },
];

export const heroSectionLinks = [
  {
    name: "GitHub",
    href: "https://github.com/veerender-nemali",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/veerender-nemali/",
    icon: FaLinkedin,
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/veerender_nemali/",
    icon: SiLeetcode,
  },
];
