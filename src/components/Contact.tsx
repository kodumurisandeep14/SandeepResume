import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const { email, phone, location, links } = resumeData.basics;
  const linkedinUrl = links[0].startsWith('http') ? links[0] : `https://${links[0]}`;

  return (
    <section id="contact" className="py-24 px-6 relative z-10 bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full mx-auto mb-8"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            I'm currently open to opportunities in Senior Python / AI / Backend Engineering roles. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ContactCard 
            icon={Mail} 
            title="Email" 
            value={email} 
            href={`mailto:${email}`} 
            delay={0}
          />
          <ContactCard 
            icon={Phone} 
            title="Phone" 
            value={phone} 
            href={`tel:${phone.replace(/[^0-9+]/g, '')}`} 
            delay={0.1}
          />
          <ContactCard 
            icon={Linkedin} 
            title="LinkedIn" 
            value="sandeep-k-9a33371b1" 
            href={linkedinUrl} 
            target="_blank" 
            delay={0.2}
          />
          <ContactCard 
            icon={MapPin} 
            title="Location" 
            value={location} 
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

interface ContactCardProps {
  icon: React.ElementType;
  title: string;
  value: string;
  href?: string;
  target?: string;
  delay: number;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon: Icon, title, value, href, target, delay }) => {
  const content = (
    <div className="flex flex-col items-center p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-colors group h-full">
      <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-slate-200 font-bold mb-2">{title}</h3>
      <p className="text-slate-400 text-sm font-medium">{value}</p>
    </div>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        whileHover={{ y: -5 }}
        className="block h-full"
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="h-full"
    >
      {content}
    </motion.div>
  );
};
