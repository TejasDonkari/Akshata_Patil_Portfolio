import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-start md:items-center pt-16 pb-24 relative overflow-hidden bg-gray-900"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center gap-12 w-full">
        {/* Left Text Content */}
        <div className="md:w-1/2 w-full flex flex-col justify-start text-left space-y-6">
          <div>
            <h2 className="text-cyan-400 font-semibold tracking-wide uppercase text-sm mb-2">
              Hello, I am
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-4">
              {PORTFOLIO_DATA.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-400 font-light">
              {PORTFOLIO_DATA.role}
            </h2>
          </div>

          <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
            {PORTFOLIO_DATA.summary}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 transition-all shadow-lg shadow-cyan-500/30"
            >
              View My Work
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-slate-600 text-base font-medium rounded-md text-slate-300 hover:text-white hover:border-slate-400 transition-all"
            >
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 pt-4">
            <a
              href={PORTFOLIO_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-cyan-600 rounded-full text-slate-400 hover:text-white transition-all duration-300 border border-slate-700 hover:border-cyan-500 hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/25"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href={PORTFOLIO_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-cyan-600 rounded-full text-slate-400 hover:text-white transition-all duration-300 border border-slate-700 hover:border-cyan-500 hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/25"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.email}`}
              className="p-3 bg-slate-800 hover:bg-cyan-600 rounded-full text-slate-400 hover:text-white transition-all duration-300 border border-slate-700 hover:border-cyan-500 hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/25"
              aria-label="Email Me"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 w-full flex justify-center items-center mt-12 md:mt-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-cyan-500 rounded-full opacity-20 blur-2xl"></div>
            <img
              src="/akshata.png" // image in public folder
              alt={PORTFOLIO_DATA.name}
              className="relative w-full h-full object-cover rounded-full border-4 border-slate-800 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
