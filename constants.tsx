import React from 'react';
import { PortfolioData } from './types';
import { Code, Database, Server, Terminal } from 'lucide-react';

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Akshata Patil",
  role: "Java Developer",
  summary: "I worked as a Java Developer Intern, building backend systems and microservices using Spring Boot, Spring Cloud, and Spring Data JPA. I created RESTful APIs, improved application performance, and solved technical challenges. I followed good coding practices and focused on writing clean, maintainable, and reliable code.",
  email: "akshatapatil192002@gmail.com",
  github: "https://github.com/akshatapatil",
  linkedin: "https://linkedin.com/in/akshatapatil",
  skills: [
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      skills: ["Java 17+", "Spring Boot", "Spring Cloud", "Microservices", "RESTful APIs", "Hibernate/JPA"]
    },
    {
      title: "Databases & Storage",
      icon: <Database className="w-6 h-6" />,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"]
    },
   
    {
      title: "Frontend & Others",
      icon: <Code className="w-6 h-6" />,
      skills: ["React", "Angular", "HTML", "CSS3",]
    },

     {
      title: "Soft Skills",
      icon: <Code className="w-6 h-6" />,
      skills: ["Communication", "Project Management", "Time Management", "Critical Thinking", "Adaptability", "Problem-Solving"]
    }
  ],
  experience: [
    {
      role: "Java Developer intern",
      company: "TechSolutions Inc.",
      period: "June 2025 - Present",
      description: [
      "Collaborated with a development team to build and maintain responsive web applications.",
      "Implemented responsive UI designs using HTML and CSS.",
      "Optimized website performance for faster load times and smooth user experience.",
      "Identified and fixed front-end bugs across multiple browsers.",
      "Strengthened skills in HTML, CSS, and cross-browser compatibility."
    ]
    },
    {
      role: "Web Developer Intern",
      company: "Coding Raja Technologies",
      period: "June 2024 -July 2024",
      description: [
      "Collaborated with a development team to build and maintain responsive web applications.",
      "Implemented responsive UI designs using HTML and CSS.",
      "Optimized website performance for faster load times.",
      "Identified and fixed front-end bugs across multiple browsers.",
      "Strengthened skills in HTML, CSS, and cross-browser compatibility."
    ]
    }
  ],
  projects: [
    {
      title: "E-Commerce Microservices",
      description: "A comprehensive backend system for an online retail platform. Features include product inventory, user management, order processing, and payment integration.",
      techStack: ["Java", "Spring Boot", "Spring Cloud", "Kafka", "PostgreSQL"],
      repo: "https://github.com/akshata/ecommerce"
    },
    {
      title: "Real-time Task Tracker",
      description: "A collaborative task management tool supporting real-time updates using WebSockets. Includes team workspaces and productivity analytics.",
      techStack: ["Java", "Spring WebFlux", "MongoDB", "React"],
      repo: "https://github.com/akshata/tasktracker"
    },
    {
      title: "Secure Banking API",
      description: "A robust API for banking operations implementing OAuth2 security, transaction management, and fraud detection logic.",
      techStack: ["Java", "Spring Security", "Redis", "Oracle DB"],
      repo: "https://github.com/akshata/banking-api"
    }
  ]
};

// System instruction for the Gemini AI assistant
export const AI_SYSTEM_INSTRUCTION = `
You are an AI assistant for Akshata Patil's professional portfolio.
Your role is to answer questions about Akshata's skills, experience, and projects based strictly on the provided context.
Context:
Name: ${PORTFOLIO_DATA.name}
Role: ${PORTFOLIO_DATA.role}
Summary: ${PORTFOLIO_DATA.summary}
Skills: ${PORTFOLIO_DATA.skills.map(s => s.skills.join(", ")).join("; ")}
Experience: ${JSON.stringify(PORTFOLIO_DATA.experience)}
Projects: ${JSON.stringify(PORTFOLIO_DATA.projects)}
Contact: Email: ${PORTFOLIO_DATA.email}

Guidelines:
- Be professional, polite, and concise.
- Act as if you are representing Akshata.
- If a user asks about something not in the context (e.g., "Can she code in Python?"), answer honestly based on the skills listed (e.g., "Akshata's portfolio primarily highlights her expertise in Java and related technologies. Python is not explicitly listed, but she is a quick learner.").
- Keep answers under 3-4 sentences when possible.
`;
