'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Palette, Smartphone, Globe, Zap } from 'lucide-react';

const skills = [
  {
    category: 'Frontend Development',
    icon: Code2,
    color: 'from-blue-600 to-cyan-600',
    specialist: 'Usman & Rohaan',
    items: [
      { name: 'React/Next.js', level: 90 },
      { name: 'JavaScript/HTML/CSS', level: 92 },
      { name: 'Responsive Design', level: 88 },
      { name: 'UI/UX Implementation', level: 85 },
    ],
  },
  {
    category: 'Backend Development',
    icon: Database,
    color: 'from-green-600 to-emerald-600',
    specialist: 'Ramis & Taha',
    items: [
      { name: 'Node.js/Express.js', level: 88 },
      { name: 'Python/Django', level: 90 },
      { name: 'MongoDB/SQL', level: 85 },
      { name: 'REST APIs', level: 87 },
    ],
  },
  {
    category: 'Mobile & Game Development',
    icon: Smartphone,
    color: 'from-purple-600 to-pink-600',
    specialist: 'Rohaan',
    items: [
      { name: 'React Native', level: 92 },
      { name: 'Unity Game Engine', level: 88 },
      { name: 'Game Design', level: 85 },
      { name: 'Mobile Optimization', level: 83 },
    ],
  },
  {
    category: 'Programming Languages',
    icon: Palette,
    color: 'from-orange-600 to-red-600',
    specialist: 'Team Collective',
    items: [
      { name: 'JavaScript/TypeScript', level: 90 },
      { name: 'Python', level: 88 },
      { name: 'C/C++/C#', level: 82 },
      { name: 'Assembly Language', level: 75 },
    ],
  },
  {
    category: 'Data & Analytics',
    icon: Globe,
    color: 'from-indigo-600 to-purple-600',
    specialist: 'Rohaan & Team Member 5',
    items: [
      { name: 'Data Mining & Analysis', level: 85 },
      { name: 'R Programming', level: 78 },
      { name: 'Big Data Processing', level: 80 },
      { name: 'Statistical Analysis', level: 82 },
    ],
  },
  {
    category: 'Tools & DevOps',
    icon: Zap,
    color: 'from-yellow-600 to-orange-600',
    specialist: 'Taha & Ramis',
    items: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'Docker Containerization', level: 82 },
      { name: 'AWS Cloud Services', level: 78 },
      { name: 'CI/CD Pipelines', level: 80 },
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
            Our Combined Expertise
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-6" />
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Five specialists, one powerhouse team. Our diverse skill set allows us to handle any project from concept to deployment.
          </p>
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
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {skill.category}
                </h3>
                <p className="text-sm text-purple-600 dark:text-purple-400 mb-6 font-medium">
                  Led by {skill.specialist}
                </p>
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
