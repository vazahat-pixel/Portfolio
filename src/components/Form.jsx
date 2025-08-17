import React from 'react'

const Form = () => {
  return (
    <div className="flex text-white rounded-lg shadow-lg p-8 mt-8">
      {/* Left Side: Icons & Art */}
      <div className="flex flex-col items-center justify-center w-1/2 pr-8 border-r border-gray-700">
        <div className="mb-6">
          {/* Custom SVG Icon */}
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="mx-auto mb-4">
            <circle cx="32" cy="32" r="32" fill="#6366F1"/>
            <path d="M20 32L32 44L44 32" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M32 44V20" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
          </svg>
          <h2 className="text-xl font-bold">Contact Me</h2>
          <p className="text-gray-300 mt-2 text-center">Let's connect! Fill out the form to get in touch.</p>
        </div>
        {/* Social Icons */}
        <div className="flex space-x-4 mt-4">
          <a href="mailto:your@email.com" className="hover:text-indigo-400">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <rect width="24" height="24" rx="6" fill="#6366F1"/>
              <path d="M6 8l6 5 6-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 8v8h12V8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <rect width="24" height="24" rx="6" fill="#6366F1"/>
              <path d="M12 17c-5 0-5-3-5-3 0-1 1-2 2-2s2 1 2 2c0 1-1 2-2 2s-2-1-2-2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="3" stroke="#fff" strokeWidth="2"/>
            </svg>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <rect width="24" height="24" rx="6" fill="#6366F1"/>
              <path d="M8 11v5M12 11v5M16 11v5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="8" cy="8" r="1" fill="#fff"/>
              <circle cx="12" cy="8" r="1" fill="#fff"/>
              <circle cx="16" cy="8" r="1" fill="#fff"/>
            </svg>
          </a>
        </div>
      </div>
      {/* Right Side: Form */}
      <form className="w-1/2 pl-8 flex flex-col justify-center">
        <label className="mb-2 font-semibold" htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          className="mb-4 p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Your Name"
          required
        />
        <label className="mb-2 font-semibold" htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          className="mb-4 p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Your Email"
          required
        />
        <label className="mb-2 font-semibold" htmlFor="message">Message</label>
        <textarea
          id="message"
          className="mb-4 p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Your Message"
          rows={4}
          required
        />
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded transition"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Form