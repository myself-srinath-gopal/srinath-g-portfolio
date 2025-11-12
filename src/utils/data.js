import { desc } from 'framer-motion/client';
import {
    Code2,
    GraduationCap,
    Briefcase,
    Award,
    Rocket,
    Heart,
    Coffee,
    BookOpen,
    Zap,
    Database,
    Server,
    Mail,
    MapPin,
    Phone
} from 'lucide-react';

import { FiGthub, FiLinkedin, FiTwitter, FiInstagram, FiGithub } from 'react-icons/fi';

export const SKILLS = [
    {
        title: "Frontend",
        icon: Code2,
        description: "Building responsive and interactive user interfaces",
        skills: [
            { name: "React", level: 90, color: "bg-blue-500" },
            { name: "JavaScript", level: 85, color: "bg-yellow-500" },
            { name: "Redux", level: 80, color: "bg-purple-500" },
            { name: "Tailwind CSS", level: 82, color: "bg-teal-500" }
        ]
    },
    {
        title: "Backend (Basics)",
        icon: Server,
        description: "Creating robust server-side applications and APIs",
        skills: [
            { name: "Node.js", level: 88, color: "bg-green-500" },
            { name: "Express", level: 80, color: "bg-gray-500" },
        ]
    },
    {
        title: "Databases",
        icon: Database,
        description: "Designing and managing database systems",
        skills: [
            { name: "PostgreSQL", level: 75, color: "bg-blue-700" },
            { name: "MySQL", level: 70, color: "bg-green-700" },
        ]
    },
    {
        title: "Other Skills",
        icon: Zap,
        description: "Additional technical skills and tools",
        skills: [
            { name: "RESTful APIs", level: 85, color: "bg-indigo-500" },
            { name: "Responsive Design", level: 90, color: "bg-pink-500" },
            { name: "Git & GitHub", level: 88, color: "bg-gray-700" },
            { name: "Testing (Vitest, Jest)", level: 70, color: "bg-red-500" },
        ]
    }
];

export const TECHSTACK = [
    "React", "Redux", "JavaScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "MySQL", "Git", "Vitest", "Jest"
]

export const PROJECTS = [
    {
        title: "Portfolio Website",
        description: "A personal portfolio website to showcase my projects and skills.",
        link: "",
        technologies: ["React", "Tailwind CSS"],
    },
    {
        title: "E-commerce Platform",
        description: "An online platform for buying and selling products.",
        link: "",
        technologies: ["React", "Node.js", "Express", "PostgreSQL"],
    },
    {
        title: "Admin Dashboard",
        description: "A dashboard for managing users and content.",
        link: "",
        technologies: ["React", "Redux", "Tailwind CSS"],
    }
]

export const JOURNEY = [
    {
        year: "2021",
        title: "Bachelor's Degree in Computer Science",
        institution: "ABC University",
        icon: GraduationCap,
        description: "Graduated with honors, focusing on software development and algorithms.",
        color: "bg-blue-500"
    },
    {
        year: "2023",
        title: "Master's Degree in Computer Science",
        institution: "ABC University",
        icon: GraduationCap,
        description: "Graduated with honors, focusing on software development and algorithms.",
        color: "bg-green-500"
    },
    {
        year: "2025",
        title: "ReactJS Developer",
        company: "Cognifiers Technologies Pvt Ltd",
        description: "Worked on building and maintaining web applications using ReactJS and related technologies.",
        icon: Briefcase,
        color: "bg-purple-500"
    }
]

export const SOCIALS = [
    {
        name: "GitHub",
        icon: FiGithub,
        url: "https://github.com",
        color: "hover:text-gray-800",
        bgColor: "hover:bg-gray-100"
    },
    {
        name: "LinkedIn",
        icon: FiLinkedin,
        url: "https://linkedin.com",
        color: "hover:text-blue-700",
        bgColor: "hover:bg-blue-100"
    },
    {
        name: "Twitter",
        icon: FiTwitter,
        url: "https://twitter.com",
        color: "hover:text-blue-500",
        bgColor: "hover:bg-blue-100"
    },
    {
        name: "Instagram",
        icon: FiInstagram,
        url: "https://instagram.com",
        color: "hover:text-pink-500",
        bgColor: "hover:bg-pink-100"
    }
]

export const CONTACT_METHODS = [
    {
        icon: MapPin,
        label: "Location",
        value: "Udumalpet, Tamil Nadu, India"
    },
    {
        icon: Mail,
        label: "Email",
        value: "myselfsrinathgopal@gmail.com"
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+91 9876543210"
    }
]