import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data';
import { Code2 } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-3">
            <Code2 className="text-blue-500" />
            Technical Skills
          </h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resumeData.skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-slate-200 mb-4 font-mono">
                {skillGroup.group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-slate-800/80 text-slate-300 rounded-lg text-sm border border-slate-700 hover:border-blue-500/50 hover:text-blue-400 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
