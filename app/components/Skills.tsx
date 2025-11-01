'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Palette, Smartphone, Globe, Zap } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: Code2,
    color: 'from-blue-600 to-cyan-600',
    items: [
      { name: 'React/Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Framer Motion', level: 85 },
    ],
  },
  {
    category: 'Backend',
    icon: Database,
    color: 'from-green-600 to-emerald-600',
    items: [
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 85 },
    ],
  },
  {
    category: 'Design',
    icon: Palette,
    color: 'from-purple-600 to-pink-600',
    items: [
      { name: 'UI/UX Design', level: 90 },
      { name: 'Figma', level: 85 },
      { name: 'Adobe XD', level: 80 },
      { name: 'Responsive Design', level: 95 },
    ],
  },
  {
    category: 'Mobile',
    icon: Smartphone,
    color: 'from-orange-600 to-red-600',
    items: [
      { name: 'React Native', level: 85 },
      { name: 'Progressive Web Apps', level: 90 },
      { name: 'Mobile-First Design', level: 95 },
      { name: 'App Optimization', level: 85 },
    ],
  },
  {
    category: 'Cloud & DevOps',
    icon: Globe,
    color: 'from-indigo-600 to-blue-600',
    items: [
      { name: 'AWS/Azure', level: 80 },
      { name: 'Docker', level: 85 },
      { name: 'CI/CD', level: 80 },
      { name: 'Git/GitHub', level: 95 },
    ],
  },
  {
    category: 'Tools & Other',
    icon: Zap,
    color: 'from-yellow-600 to-orange-600',
    items: [
      { name: 'VS Code', level: 95 },
      { name: 'API Development', level: 90 },
      { name: 'Testing (Jest/Cypress)', level: 85 },
      { name: 'Performance Optimization', level: 90 },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 md:py-32 bg-white dark:bg-slate-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-linear-to-br ${skill.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  {skill.category}
                </h3>
                <div className="space-y-4">
                  {skill.items.map((item) => (
                    <div key={item.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-600 dark:text-slate-300 font-medium">
                          {item.name}
                        </span>
                        <span className="text-slate-500 dark:text-slate-400 text-sm">
                          {item.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-linear-to-r ${skill.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${item.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
