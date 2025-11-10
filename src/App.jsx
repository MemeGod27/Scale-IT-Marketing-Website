import { useState } from 'react'
import './App.css'
import logo from './assets/logo.svg'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <header className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Scale It Marketing" className="h-10" />
          <h1 className="text-xl font-bold">Scale It Marketing</h1>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      <main className="p-8 text-center space-y-6">
        <h2 className="text-3xl font-bold">Grow Your Brand with Scale It</h2>
        <p className="max-w-2xl mx-auto text-lg">
          We help startups and enterprises amplify their reach through strategic digital marketing,
          performance optimization, and creative storytelling.
        </p>
        <a
          href="#contact"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Get Started
        </a>
      </main>

      <section id="contact" className="p-8 text-center border-t border-gray-200 dark:border-gray-800">
        <h3 className="text-2xl font-semibold mb-2">Let’s Connect</h3>
        <p>Email us at <a href="mailto:info@scaleitmarketing.com" className="text-blue-500">info@scaleitmarketing.com</a></p>
      </section>

      <footer className="p-4 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 text-center">
        © {new Date().getFullYear()} Scale It Marketing. All rights reserved.
      </footer>
    </div>
  );
}

export default App;

