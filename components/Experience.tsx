import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative container mx-auto px-6 flex flex-col space-y-8">
          <div className="absolute z-0 w-px h-full bg-slate-700 left-4 md:left-1/2 transform -translate-x-1/2 md:translate-x-0"></div>
          
          {PORTFOLIO_DATA.experience.map((job, index) => (
            <div key={index} className={`relative z-10 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-slate-900 border-4 border-cyan-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/30 transition-all shadow-lg">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                        <div className="flex items-center">
                            <Briefcase className="w-5 h-5 text-cyan-400 mr-2" />
                            <h3 className="text-xl font-bold text-white">{job.role}</h3>
                        </div>
                        <span className="text-sm font-medium text-slate-400 bg-slate-900 px-3 py-1 rounded-full mt-2 sm:mt-0">{job.period}</span>
                    </div>
                    <h4 className="text-lg text-cyan-500 mb-4">{job.company}</h4>
                    <ul className="space-y-2">
                        {job.description.map((point, i) => (
                            <li key={i} className="text-slate-300 text-sm leading-relaxed flex items-start">
                                <span className="mr-2 text-cyan-500 mt-1.5">•</span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;