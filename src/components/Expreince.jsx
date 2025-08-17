import React from 'react'
import { FaUserTie, FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const experiences = [
    {
        title: "Self Hands-on Projects",
        duration: "1 Year",
        description: "Worked on individual client projects, building web apps and custom solutions. Developed advanced UI/UX, mentored peers, and delivered high-quality results.",
        icon: <FaLaptopCode className="text-blue-500 text-4xl" />,
        link: "mailto:your.email@example.com",
        linkText: "Contact for portfolio",
    },
    {
        title: "Cummins Turbo Technologies, Dewas",
        duration: "1 Year",
        description: "Professional experience as a non-tech inwarding team leader. Mentored team members, managed small modules, and improved workflow efficiency.",
        icon: <FaUserTie className="text-green-500 text-4xl" />,
        link: "https://www.cummins.com/company/locations/india/dewas",
        linkText: "Company Profile",
    },
];

const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120 } },
};

const Expreince = () => {
    // Add internship experience at the start
    const allExperiences = [
        {
            title: "Web Development Intern",
            duration: "3 Months (2023 - 2024)",
            description: "Interned at TechStart, contributing to frontend development and collaborating with senior engineers. Enhanced skills in React, UI design, and agile teamwork.",
            icon: <FaLaptopCode className="text-purple-500 text-4xl" />,
            link: "https://techstart.example.com",
            linkText: "TechStart Website",
            descriptionLink: "https://techstart.example.com/internship-details",
            cardColor: "bg-purple-100",
        },
        {
            ...experiences[0],
            descriptionLink: experiences[0].link,
            cardColor: "bg-blue-100",
        },
        {
            ...experiences[1],
            descriptionLink: experiences[1].link,
            cardColor: "bg-green-100",
        },
    ];

    return (
        <motion.div
            className="max-w-4xl mx-auto py-10 px-4 bg-transparent"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 bg-clip-text text-transparent">
                Professional Experience Roadmap
            </h2>
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 items-stretch justify-center">
                {allExperiences.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        variants={itemVariants}
                        className={`flex flex-col items-center ${exp.cardColor} rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300 w-full md:w-1/3`}
                    >
                        <div className="mb-4">{exp.icon}</div>
                        <h3 className="text-xl font-semibold text-center">{exp.title}</h3>
                        <p className="text-sm text-gray-500 mb-2 text-center">{exp.duration}</p>
                        <p className="mb-2 text-gray-700 text-center">
                            {exp.description}
                            {exp.descriptionLink && (
                                <>
                                    {" "}
                                    <a
                                        href={exp.descriptionLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline font-medium"
                                    >
                                        [Details]
                                    </a>
                                </>
                            )}
                        </p>
                        <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-green-600 hover:underline font-medium mt-2"
                        >
                            {exp.linkText}
                        </a>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Expreince