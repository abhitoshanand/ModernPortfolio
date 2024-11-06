import { Github, Linkedin, ArrowDown, Phone } from 'lucide-react';

export function Profile() {
  return (
    <section id="profile" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-16 dark:bg-gray-900">
      <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden animate-fade-in hover:scale-105 transition-transform duration-300">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&h=800"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center md:text-left animate-slide-up">
        <p className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2">Hello, I'm</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">Abhitosh Anand</h1>
        <p className="text-2xl text-gray-600 dark:text-gray-400 mb-8">Physics Teacher</p>
        <div className="flex gap-4 justify-center md:justify-start mb-8">
          <button
            onClick={() => window.open('/resume.pdf')}
            className="px-6 py-3 border-2 border-black dark:border-white dark:text-white rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 hover:scale-105"
          >
            Download CV
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black border-2 border-black dark:border-white rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 hover:scale-105"
          >
            Contact Info
          </button>
        </div>
        <div className="flex gap-4 justify-center md:justify-start">
          <a
            href="tel:+916200413098"
            className="hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
          >
            <Phone size={24} />
          </a>
          <a
            href="https://linkedin.com/in/abhitosh-anand-537710184"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 dark:text-white dark:hover:text-gray-400 transition-colors duration-300 hover:scale-110 transform"
          >
            <Github size={24} />
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow hidden md:block">
          <ArrowDown className="text-gray-400 dark:text-gray-600" size={24} />
        </div>
      </div>
    </section>
  );
}