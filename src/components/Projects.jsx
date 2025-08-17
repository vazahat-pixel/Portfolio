import React from 'react'
import { motion } from "framer-motion";
const Projects = () => {
return (
    <div className="projects-container px-6 py-12 min-h-screen">
        <motion.h2
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
            className="projects-title text-4xl md:text-5xl font-extrabold text-white mb-10 text-center drop-shadow-lg"
        >
            My Projects
        </motion.h2>
        <div className="project-list grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI Assistant Voice Conversation */}
            <motion.div
                className="project-card rounded-3xl shadow-2xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300 relative overflow-hidden"
                initial={{ scale: 0.8, opacity: 0, rotateY: 90 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.07, rotate: 2, boxShadow: "0 8px 32px rgba(80,0,255,0.2)" }}
            >
                {/* Bubble Icon */}
                <span className="absolute top-6 left-6 bg-white/20 rounded-full p-4 shadow-lg">
                    <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                        <circle cx="16" cy="16" r="14" fill="#6366F1" />
                        <path d="M10 18c0-2.21 2.91-4 6.5-4s6.5 1.79 6.5 4v2c0 2.21-2.91 4-6.5 4s-6.5-1.79-6.5-4v-2z" fill="#fff"/>
                        <circle cx="16" cy="13" r="3" fill="#fff"/>
                    </svg>
                </span>
                <h3 className="text-2xl font-bold text-white mb-4 mt-8">AI Assistant Voice Conversation</h3>
                <p className="text-gray-200 text-center">
                    A smart AI assistant featuring real-time voice conversation, natural language understanding, and interactive UI.
                </p>
            </motion.div>
            {/* Prompt Pilot AI Marketplace */}
            <motion.div
                className="project-card bg-gradient-to-tr from-green-900 via-teal-800 to-blue-900 rounded-3xl shadow-2xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300 relative overflow-hidden"
                initial={{ scale: 0.8, opacity: 0, rotateY: 90 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.7, delay: 0.4, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.07, rotate: -2, boxShadow: "0 8px 32px rgba(0,255,180,0.2)" }}
            >
                {/* Bubble Icon */}
                <span className="absolute top-6 left-6 bg-white/20 rounded-full p-4 shadow-lg">
                    <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                        <circle cx="16" cy="16" r="14" fill="#14B8A6" />
                        <path d="M10 20h12v2a2 2 0 01-2 2H12a2 2 0 01-2-2v-2z" fill="#fff"/>
                        <rect x="10" y="12" width="12" height="8" rx="2" fill="#fff"/>
                        <circle cx="16" cy="16" r="2" fill="#14B8A6"/>
                    </svg>
                </span>
                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Prompt Pilot AI Marketplace</h3>
                <p className="text-gray-200 text-center">
                    An AI-powered marketplace for sharing, discovering, and trading prompts, with advanced search and beautiful design.
                </p>
            </motion.div>
            {/* Netflix Clone with Advanced Animation */}
            <motion.div
                className="project-card netflix-clone bg-gradient-to-tr from-red-900 via-pink-800 to-purple-900 rounded-3xl shadow-2xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300 relative overflow-hidden"
                initial={{ scale: 0.8, opacity: 0, rotateY: 90 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.7, delay: 0.6, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.07, rotate: 2, boxShadow: "0 8px 32px rgba(255,0,80,0.2)" }}
            >
                {/* Bubble Icon */}
                <span className="absolute top-6 left-6 bg-white/20 rounded-full p-4 shadow-lg">
                    <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                        <circle cx="16" cy="16" r="14" fill="#EF4444" />
                        <rect x="10" y="12" width="12" height="8" rx="2" fill="#fff"/>
                        <rect x="14" y="14" width="4" height="4" rx="1" fill="#EF4444"/>
                    </svg>
                </span>
                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Netflix Clone</h3>
                <p className="text-gray-200 text-center">
                    A stunning Netflix clone featuring advanced animations, smooth transitions, and a beautiful, modern UI.
                </p>
            </motion.div>
        </div>
    </div>
)
}

export default Projects