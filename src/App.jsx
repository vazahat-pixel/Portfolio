import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import React from "react";
import Nav from "./Nav";
import Expreince from "./components/Expreince";
import Projects from "./components/Projects";
import Form from "./components/Form";

export default function App() {
  const sections = ["Home", "Skills", "Projects", "Experience", "Contact"];
  const [active, setActive] = useState("Home");
  const cursorRef = useRef(null);

  // Custom cursor follow mouse
  useEffect(() => {
    const cursor = cursorRef.current;
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });
  }, []);

  // Neon scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      document.documentElement.style.setProperty(
        "--neon-offset",
        `${scrollPos / 5}px`
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 font-sans relative min-h-screen overflow-x-hidden">
      {/* Global Animated Background */}
      <motion.div
        className="fixed inset-0 -z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        style={{
          background: "radial-gradient(circle at 60% 40%, #ff00cc 0%, #333399 100%)",
          filter: "blur(80px)",
          width: "100vw",
          height: "100vh",
        }}
      />
      {/* Floating Colorful Blobs */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute"
          style={{
            top: "10%",
            left: "5%",
            width: "220px",
            height: "220px",
            background: "linear-gradient(135deg, #ff00cc 0%, #333399 100%)",
            borderRadius: "50%",
            filter: "blur(60px)",
            boxShadow: "0 0 80px 40px #ff00cc88",
            opacity: 0.7,
          }}
          animate={{
            y: [0, 40, 0],
            x: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute"
          style={{
            bottom: "10%",
            right: "8%",
            width: "180px",
            height: "180px",
            background: "linear-gradient(135deg, #13aa52 0%, #38bdf8 100%)",
            borderRadius: "50%",
            filter: "blur(60px)",
            boxShadow: "0 0 80px 40px #13aa5288",
            opacity: 0.6,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, -20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute"
          style={{
            top: "50%",
            left: "50%",
            width: "120px",
            height: "120px",
            background: "linear-gradient(135deg, #f7df1e 0%, #ff00cc 100%)",
            borderRadius: "50%",
            filter: "blur(40px)",
            boxShadow: "0 0 60px 30px #f7df1e88",
            opacity: 0.5,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            y: [0, 20, 0],
            x: [0, -20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Custom Cursor */}
      <div ref={cursorRef} className="custom-cursor">
        <>lala</>
      </div>

      {/* Navbar */}
      <Nav />

      {/* Hero Section */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
      >
        {/* Animated Neon Shadow */}
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          style={{
            filter: "blur(60px)",
            width: "100%",
            height: "100%",
          }}
        />

        {/* Custom Art Icons */}
        <motion.div
          className="flex gap-6 mb-8 z-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.div
            className="p-4 rounded-full bg-black/30 neon-border"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            {/* React Icon */}
            <svg width="48" height="48" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="4" fill="#61dafb" />
              <g stroke="#61dafb" strokeWidth="2" fill="none">
                <ellipse rx="13" ry="5.5" cx="16" cy="16" transform="rotate(60 16 16)" />
                <ellipse rx="13" ry="5.5" cx="16" cy="16" transform="rotate(120 16 16)" />
                <ellipse rx="13" ry="5.5" cx="16" cy="16" />
              </g>
            </svg>
          </motion.div>
          <motion.div
            className="p-4 rounded-full bg-black/30 neon-border"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Node.js Icon */}
            <svg width="48" height="48" viewBox="0 0 32 32" fill="none">
              <path d="M16 3l13 7.5v11L16 29 3 21.5v-11z" fill="#68a063" />
              <path d="M16 5.2l10.8 6.2v9.2L16 26.8 5.2 20.6v-9.2z" fill="#fff" opacity=".2" />
            </svg>
          </motion.div>
          <motion.div
            className="p-4 rounded-full bg-black/30 neon-border"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {/* MongoDB Icon */}
            <svg width="48" height="48" viewBox="0 0 32 32" fill="none">
              <path d="M16 3c-2.2 5.8-7.2 11.2-7.2 16.2 0 4.2 3.2 7.8 7.2 7.8s7.2-3.6 7.2-7.8c0-5-5-10.4-7.2-16.2z" fill="#13aa52"/>
              <path d="M16 27c-2.8 0-5-2.2-5-5 0-2.8 2.2-5 5-5s5 2.2 5 5c0 2.8-2.2 5-5 5z" fill="#fff" opacity=".2"/>
            </svg>
          </motion.div>
          <motion.div
            className="p-4 rounded-full bg-black/30 neon-border"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            {/* Express.js Icon */}
            <svg width="48" height="48" viewBox="0 0 32 32" fill="none">
              <text x="8" y="32" fontSize="24" fontFamily="Arial" fill="#fff">Ex</text>
            </svg>
          </motion.div>
        </motion.div>

        {/* Banner Content */}
        <motion.h2
          className="text-5xl md:text-7xl font-extrabold neon-text z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="text-pink-400">Vazahat</span>
        </motion.h2>
        <motion.p
          className="mt-6 text-xl md:text-2xl text-gray-300 max-w-2xl z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          A self-driven Full Stack Web Developer specializing in the <span className="font-bold text-cyan-400">MERN</span> stack.<br />
          I build real-world applications, deliver clean and maintainable code, and thrive on solving complex problems.<br />
          Passionate about crafting scalable, responsive web experiences with advanced dynamic animations and attractive UI.
        </motion.p>
        <motion.div
          className="mt-10 z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          {/* Custom Art - Developer Illustration */}
          <img
            src="https://cdn.jsdelivr.net/gh/akabab/avatars@master/svg/dev.png"
            alt="Developer Art"
            className="w-64 neon-border rounded-lg shadow-xl"
          />
        </motion.div>
      </section>
      {/* Skills */}
      <section id="skills" className="py-20 px-6 ">
        <motion.h2
          className="section-title flex justify-center items-center gap-2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.1, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
        >
          <span className="text-pink-400">⚡</span> Skills
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
          {[
            {
              name: "HTML",
              color: "bg-orange-400",
              percent: Math.floor(Math.random() * 20) + 80,
              icon: <i className="text-3xl text-orange-500"><svg width="1em" height="1em" viewBox="0 0 32 32" fill="currentColor"><path d="M6.5 27.5L3.5 3.5h25l-3 24-9.5 3z" /><path fill="#fff" d="M16 26.1l7.7-2.4 2.6-21.2H16z" /><path fill="#e44d26" d="M16 26.1l-7.7-2.4-2.6-21.2H16z" /></svg></i>,
            },
            {
              name: "CSS",
              color: "bg-blue-400",
              percent: Math.floor(Math.random() * 20) + 80,
              icon: <i className="text-3xl text-blue-500"><svg width="1em" height="1em" viewBox="0 0 32 32" fill="currentColor"><path d="M6.5 27.5L3.5 3.5h25l-3 24-9.5 3z" /><path fill="#fff" d="M16 26.1l7.7-2.4 2.6-21.2H16z" /><path fill="#1572b6" d="M16 26.1l-7.7-2.4-2.6-21.2H16z" /></svg></i>,
            },
            {
              name: "JavaScript",
              color: "bg-yellow-400",
              percent: Math.floor(Math.random() * 20) + 80,
              icon: <i className="text-3xl text-yellow-400"><svg width="1em" height="1em" viewBox="0 0 32 32" fill="currentColor"><rect width="32" height="32" rx="6" fill="#f7df1e"/><path d="M19.5 23.7c.6 1.1 1.3 2.1 2.7 2.1 1.1 0 1.8-.5 1.8-1.2 0-.8-.7-1.1-2-1.6l-.7-.3c-2-.8-3.3-1.7-3.3-3.7 0-1.8 1.4-3.2 3.6-3.2 1.6 0 2.7.6 3.5 2l-1.9 1.2c-.4-.7-.8-1-1.6-1-.7 0-1.2.4-1.2 1 0 .7.5 1 1.6 1.4l.7.3c2.2.9 3.5 1.8 3.5 3.8 0 2.2-1.7 3.4-4 3.4-2.2 0-3.6-1.1-4.3-2.6zm-8.2.2c.4.7.8 1.3 1.7 1.3.8 0 1.3-.3 1.3-1.6v-7.2h2.5v7.3c0 2.6-1.5 3.8-3.7 3.8-2 0-3.2-1-3.8-2.3z" fill="#000"/></svg></i>,
            },
            {
              name: "React",
              color: "bg-cyan-400",
              percent: Math.floor(Math.random() * 20) + 80,
              icon: <i className="text-3xl text-cyan-400"><svg width="1em" height="1em" viewBox="0 0 32 32" fill="currentColor"><circle cx="16" cy="16" r="2.5" fill="#61dafb"/><g stroke="#61dafb" strokeWidth="2" fill="none"><ellipse rx="13" ry="5.5" cx="16" cy="16" transform="rotate(60 16 16)"/><ellipse rx="13" ry="5.5" cx="16" cy="16" transform="rotate(120 16 16)"/><ellipse rx="13" ry="5.5" cx="16" cy="16"/></g></svg></i>,
            },
            {
              name: "Tailwind CSS",
              color: "bg-teal-400",
              percent: Math.floor(Math.random() * 20) + 80,
              icon: <i className="text-3xl text-teal-400"><svg width="1em" height="1em" viewBox="0 0 32 32" fill="currentColor"><path d="M16 10.5c-3.3 0-5.5 1.7-6.7 5.1.9-1.1 2-1.6 3.2-1.6 1.1 0 2 .4 2.7 1.2.7.8 1.5 1.2 2.5 1.2 1.5 0 2.6-.7 3.2-2.1-.9-2.6-2.9-3.8-5.1-3.8zm-6.7 6.4c-3.3 0-5.5 1.7-6.7 5.1.9-1.1 2-1.6 3.2-1.6 1.1 0 2 .4 2.7 1.2.7.8 1.5 1.2 2.5 1.2 1.5 0 2.6-.7 3.2-2.1-.9-2.6-2.9-3.8-5.1-3.8z" fill="#38bdf8"/></svg></i>,
            },
            {
              name: "Node.js",
              color: "bg-green-400",
              percent: Math.floor(Math.random() * 20) + 80,
              icon: <i className="text-3xl text-green-500"><svg width="1em" height="1em" viewBox="0 0 32 32" fill="currentColor"><path d="M16 3l13 7.5v11L16 29 3 21.5v-11z" fill="#68a063"/><path d="M16 5.2l10.8 6.2v9.2L16 26.8 5.2 20.6v-9.2z" fill="#fff" opacity=".2"/></svg></i>,
            },
            {
              name: "Express.js",
              color: "bg-gray-400",
              percent: Math.floor(Math.random() * 20) + 70,
              icon: <i className="text-3xl text-gray-400"><svg width="1em" height="1em" viewBox="0 0 32 32" fill="currentColor"><text x="4" y="24" fontSize="18" fontFamily="Arial" fill="#fff">Ex</text></svg></i>,
            },
            {
              name: "MongoDB",
              color: "bg-green-700",
              percent: Math.floor(Math.random() * 20) + 70,
              icon: <i className="text-3xl text-green-700"><svg width="1em" height="1em" viewBox="0 0 32 32" fill="currentColor"><path d="M16 3c-2.2 5.8-7.2 11.2-7.2 16.2 0 4.2 3.2 7.8 7.2 7.8s7.2-3.6 7.2-7.8c0-5-5-10.4-7.2-16.2z" fill="#13aa52"/><path d="M16 27c-2.8 0-5-2.2-5-5 0-2.8 2.2-5 5-5s5 2.2 5 5c0 2.8-2.2 5-5 5z" fill="#fff" opacity=".2"/></svg></i>,
            },
          ].map((skill, idx) => (
            <div key={skill.name} className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-3">
                  {skill.icon}
                  <span className="font-semibold text-lg">{skill.name}</span>
                </div>
                <span className="text-pink-400 font-bold">{skill.percent}%</span>
              </div>
              <div className="w-full h-5 bg-black/40 rounded-full overflow-hidden neon-border">
                <motion.div
                  className={`h-5 rounded-full ${skill.color} shadow-lg`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percent}%` }}
                  transition={{
                    duration: 1.2,
                    delay: idx * 0.2,
                    type: "spring",
                    stiffness: 80,
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
       <Projects />
      <Expreince/>
      <Form/>
   
    </div>
  );
}
