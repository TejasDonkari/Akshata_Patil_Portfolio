import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute bottom-0 right-0 transform translate-x-1/3 translate-y-1/3 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400">Looking for a Java expert? Let's discuss how I can help your team.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
            {/* Contact Info Cards */}
            <div className="flex flex-wrap justify-center gap-6 w-full max-w-5xl">
                <a 
                    href={`mailto:${PORTFOLIO_DATA.email}`}
                    className="flex-1 min-w-[280px] max-w-[350px] flex flex-col items-center p-8 bg-slate-800 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 group text-center"
                >
                    <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-cyan-500 mb-4 group-hover:scale-110 transition-transform shadow-inner border border-slate-800">
                        <Mail size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Email Me</h3>
                    <p className="text-slate-400 text-sm break-all">{PORTFOLIO_DATA.email}</p>
                </a>

                <a 
                    href={PORTFOLIO_DATA.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[280px] max-w-[350px] flex flex-col items-center p-8 bg-slate-800 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 group text-center"
                >
                    <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-cyan-500 mb-4 group-hover:scale-110 transition-transform shadow-inner border border-slate-800">
                        <Linkedin size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
                    <p className="text-slate-400 text-sm">Connect Professionally</p>
                </a>

                 <a 
                    href={PORTFOLIO_DATA.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[280px] max-w-[350px] flex flex-col items-center p-8 bg-slate-800 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 group text-center"
                >
                    <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-cyan-500 mb-4 group-hover:scale-110 transition-transform shadow-inner border border-slate-800">
                        <Github size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
                    <p className="text-slate-400 text-sm">Review Code</p>
                </a>
            </div>
        </div>

        <div className="mt-20 text-center text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} {PORTFOLIO_DATA.name} | Software Developer | All rights reserved.
</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;