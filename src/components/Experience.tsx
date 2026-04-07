import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { resumeData } from '../data';
import { Briefcase, ChevronDown, Calendar, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-3">
            <Briefcase className="text-blue-500" />
            Experience
          </h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
        </motion.div>

        <div className="space-y-6">
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-colors"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full px-6 py-6 flex flex-col md:flex-row md:items-center justify-between text-left gap-4"
              >
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <div className="text-blue-400 font-medium text-lg">{exp.company}</div>
                </div>
                <div className="flex flex-col md:items-end gap-2 text-slate-400 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {exp.dates}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                </div>
                <div className="hidden md:block">
                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-slate-500" />
                  </motion.div>
                </div>
              </button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-slate-800/50">
                      <ul className="space-y-3">
                        {exp.bullets.map((bullet, i) => {
                          // Highlight metrics if present (simple regex for numbers/percentages)
                          const hasMetric = /\d+%|\d+x|\$\d+|\d+ million|\d+k/i.test(bullet);
                          return (
                            <li key={i} className="flex items-start gap-3 text-slate-300">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                              <span className="leading-relaxed">
                                {bullet}
                              </span>
                              {hasMetric && (
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0 mt-1">
                                  Metric
                                </span>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
