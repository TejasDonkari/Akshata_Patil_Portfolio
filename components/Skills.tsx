import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400">My technical toolbelt for building robust applications.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PORTFOLIO_DATA.skills.map((category, index) => (
            <div 
              key={index} 
              className="bg-slate-800 p-6 rounded-xl hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 border border-slate-700 hover:border-cyan-500/50 group"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-slate-900 rounded-lg text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  {category.icon}
                </div>
                <h3 className="ml-4 text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center text-slate-300">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;