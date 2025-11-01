'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Palette, Smartphone, Brain, Shield, Sparkles, Star, Globe, Zap } from 'lucide-react';

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
    color: 'from-emerald-600 to-green-600',
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
    color: 'from-teal-600 to-emerald-600',
    specialist: 'Rohaan & Abu bakar',
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
    <section id="skills" className="relative py-32 bg-gradient-to-b from-gray-950 via-slate-900 to-gray-950 overflow-hidden" ref={ref}>
      {/* Sophisticated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/5 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/5 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Elegant Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8"
          >
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-white/80 font-medium">Technical Excellence</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block"
            >
              OUR
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
            >
              EXPERTISE
            </motion.span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            A comprehensive tech stack mastered by our specialized team members. 
            From frontend artistry to backend architecture, we cover it all.
          </motion.p>
        </motion.div>

        {/* Interactive Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 60, rotateX: -30 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 60, rotateX: -30 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 80 
                }}
                whileHover={{ 
                  y: -4,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                className="group relative cursor-pointer"
              >
                {/* Card Container with Glass Effect */}
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl overflow-hidden transition-all duration-300">
                  {/* Subtle Border Glow */}
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`}
                  />
                  
                  {/* Floating Icon with 3D Effect */}
                  <div className={`relative w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${skill.color} p-0.5 group-hover:scale-105 transition-transform duration-300`}>
                    <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center">
                      <Icon className="text-white" size={32} />
                    </div>
                    
                    {/* Sparkle Effects */}
                    <motion.div
                      className="absolute -top-1 -right-1"
                      animate={{ 
                        rotate: [0, 360],
                        scale: [0.8, 1.2, 0.8]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Star className="w-4 h-4 text-yellow-400" />
                    </motion.div>
                  </div>

                  {/* Category Title */}
                  <h3 className="text-2xl font-black text-white mb-2 text-center group-hover:text-emerald-400 transition-colors duration-300">
                    {skill.category}
                  </h3>
                  
                  {/* Specialist Badge */}
                  <motion.div
                    className="text-center mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <span className={`px-4 py-2 text-sm font-bold bg-gradient-to-r ${skill.color} text-white rounded-full shadow-lg`}>
                      Led by {skill.specialist}
                    </span>
                  </motion.div>

                  {/* Modern Skills Display */}
                  <div className="space-y-4">
                    {skill.items.map((item, itemIndex) => (
                      <motion.div 
                        key={item.name}
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: 0.5 + index * 0.1 + itemIndex * 0.1 
                        }}
                        className="group/item"
                      >
                        {/* Skill Name and Level */}
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-gray-200 font-medium text-sm group-hover/item:text-white transition-colors duration-200">
                            {item.name}
                          </span>
                          <motion.span 
                            className={`text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r ${skill.color} text-white`}
                            whileHover={{ scale: 1.1 }}
                          >
                            {item.level}%
                          </motion.span>
                        </div>
                        
                        {/* Elegant Progress Bar */}
                        <div className="relative h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                          <motion.div
                            className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full shadow-lg`}
                            initial={{ width: 0, opacity: 0.7 }}
                            animate={isInView ? { 
                              width: `${item.level}%`, 
                              opacity: 1 
                            } : { 
                              width: 0, 
                              opacity: 0.7 
                            }}
                            transition={{ 
                              duration: 1.2, 
                              delay: 0.7 + index * 0.1 + itemIndex * 0.05,
                              ease: "easeOut"
                            }}
                          />
                          

                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

