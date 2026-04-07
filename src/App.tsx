/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Splash } from './components/Splash';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      <AnimatePresence mode="wait">
        {showSplash ? (
          <Splash key="splash" onComplete={() => setShowSplash(false)} />
        ) : (
          <div key="main-content">
            <AnimatedBackground />
            <Navigation />
            <main>
              <Hero />
              <Achievements />
              <Experience />
              <Skills />
              <Education />
              <Contact />
            </main>
            <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-900 bg-slate-950/50 relative z-10">
              <p>© {new Date().getFullYear()} Kodumuri Sandeep. All rights reserved.</p>
            </footer>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

