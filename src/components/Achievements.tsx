import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data';
import { Trophy, TrendingUp, ShieldCheck } from 'lucide-react';

export const Achievements: React.FC = () => {
  const icons = [TrendingUp, Trophy, ShieldCheck];

  return (
    <section id="achievements" className="py-24 px-6 relative z-10 bg-slate-950/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Top Impact & Achievements
          </h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resumeData.achievements.map((achievement, index) => {
            const Icon = icons[index % icons.length];
            // Extract number if present for a counter effect (simplified)
            const numberMatch = achievement.item.match(/(\d+)(%|x|k|M)?/);
            const number = numberMatch ? numberMatch[1] : null;
            const suffix = numberMatch ? numberMatch[2] : '';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative group p-8 rounded-3xl bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 border border-blue-500/30 text-blue-400">
                  <Icon className="w-7 h-7" />
                </div>

                {number && (
                  <div className="text-4xl font-bold text-white mb-2 font-mono">
                    {number}{suffix}
                  </div>
                )}

                <h3 className="text-xl font-bold text-slate-200 mb-3 leading-snug">
                  {achievement.item.replace(new RegExp(`${number}${suffix}`), '').trim()}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed">
                  {achievement.context}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
