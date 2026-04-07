import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data';
import { Download, ChevronDown, Linkedin } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownload = () => {
    // In a real app, this would link to a PDF.
    // For now, we'll just alert or open a new window to print.
    window.print();
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-12">
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-blue-400 font-mono text-sm md:text-base mb-4 tracking-wider uppercase">
            {resumeData.basics.location}
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            {resumeData.basics.name}
          </h1>
          <h3 className="text-2xl md:text-3xl text-slate-300 mb-8 font-light">
            {resumeData.basics.title}
          </h3>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            {resumeData.basics.summary}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToExperience}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
            >
              View Experience
              <ChevronDown className="w-4 h-4" />
            </button>
            <button
              onClick={handleDownload}
              className="px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 text-white rounded-full font-medium transition-all flex items-center gap-2 backdrop-blur-sm"
            >
              Download Resume
              <Download className="w-4 h-4" />
            </button>
            <a
              href={`https://${resumeData.basics.links[0]}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800/50 hover:bg-blue-600/20 border border-slate-700 hover:border-blue-500/50 text-slate-300 hover:text-blue-400 rounded-full transition-all backdrop-blur-sm"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
