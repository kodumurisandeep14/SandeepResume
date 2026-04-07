import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data';
import { GraduationCap, Award } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 relative z-10 bg-slate-950/50 border-t border-slate-900">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Education */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <GraduationCap className="text-blue-500" />
              Education
            </h2>
            <div className="h-1 w-16 bg-blue-500 rounded-full"></div>
          </motion.div>

          <div className="space-y-8">
            {resumeData.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-6 border-l-2 border-slate-800"
              >
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
                <h3 className="text-xl font-bold text-slate-200">{edu.degree}</h3>
                <div className="text-blue-400 mt-1">{edu.school}</div>
                <div className="text-slate-500 text-sm mt-2">{edu.dates}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <Award className="text-blue-500" />
              Certifications
            </h2>
            <div className="h-1 w-16 bg-blue-500 rounded-full"></div>
          </motion.div>

          <div className="space-y-4">
            {resumeData.certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-slate-300 font-medium">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
