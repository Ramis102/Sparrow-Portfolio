'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Award, Users, Code, Sparkles } from 'lucide-react';
import Image from 'next/image';

const teamMembers = [
  {
    id: 1,
    name: 'Muhammad Rohaan Khurram',
    role: 'Mobile Developer & Data Scientist',
    avatar: '/pics/Rohaan.jpeg',
    gradient: 'from-emerald-500 to-green-500',
    skills: ['React Native', 'Unity', 'Python', 'C++', 'Django'],
    github: 'https://github.com/RohaanAwan99',
    linkedin: 'https://www.linkedin.com/in/rohaan-khurram-4bb498275/',

    bio: 'Mobile developer and data scientist with a passion for creating engaging mobile experiences and analyzing complex datasets to drive insights.',
    phone: '0333 8762669',
    specialization: 'Mobile & Gaming'
  },
  {
    id: 2,
    name: 'Usman Rasool',
    role: 'Full-Stack Developer & Game Development Lead',
    avatar: '/pics/usman.jpg',
    gradient: 'from-green-500 to-emerald-500',
    skills: ['MERN Stack', 'Flutter', 'Django', 'C++', 'Game Development'],
    github: 'https://github.com/UsmanRasool7',
    linkedin: 'https://www.linkedin.com/in/usman-rasool-75201a2b9/',

    bio: 'Game Jam winner and full-stack developer with expertise in web platforms and mobile game development. Led winning team in national competition.',
    specialization: 'Full-Stack & Game Dev',
    phone: '+92 3067776036'
  },
  {
    id: 3,
    name: 'Ramis Humayun',
    role: 'ML & LLM Specialist',
    avatar: '/pics/Ramis.jpeg',
    gradient: 'from-blue-500 to-cyan-500',
    skills: ['Project Management', 'React', 'Node.js', 'Leadership', 'Agile'],
    github: 'https://github.com/Ramis102',
    linkedin: 'http://www.linkedin.com/in/ramis-humayun-66794626b',

    bio: 'ML enthusiast and specialist in large language models and AI solutions. Passionate about leveraging AI to solve real-world problems.',
    specialization: 'ML & LLM'
  },
  {
    id: 4,
    name: 'Taha Mudassar',
    role: 'Game Developer & DevOps Expert',
    avatar: '/pics/Taha.jpeg',
    gradient: 'from-orange-500 to-red-500',
    skills: ['React', 'JavaScript', 'CSS', 'UI/UX', 'HTML'],
    github: 'https://github.com/tahamudassar',
    linkedin: 'https://www.linkedin.com/in/taha-mudassar',

    bio: 'Game developer specializing in creating immersive experiences and optimizing game performance through effective DevOps practices.',
    specialization: 'Game Development & DevOps'
  },
  {
    id: 5,
    name: 'Abu Bakar',
    role: 'Full-Stack Developer & Backend Specialist',
    avatar: '/pics/Abubakar.jpeg',
    gradient: 'from-indigo-500 to-emerald-500',
    skills: ['Python', 'Data Analysis', 'Backend', 'Testing', 'Algorithms'],
    github: 'https://github.com/abu-bakar',
    linkedin: 'https://linkedin.com/in/abu-bakar',

    bio: 'Versatile full-stack developer with a strong foundation in backend systems and data analytics, dedicated to building robust and scalable applications.',
    specialization: 'Backend & Analytics'
  }
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });


  return (
    <section id="about" className="relative py-32 bg-gradient-to-b from-gray-950 via-slate-900 to-gray-950 overflow-hidden" ref={ref}>
      {/* Elegant Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sophisticated Header */}
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
            <Users className="w-5 h-5 text-blue-400" />
            <span className="text-white/80 font-medium">Our Team</span>
          </motion.div>

            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block"
            >
              MEET
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
            >
              OUR TEAM
            </motion.span>
          </h2>          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Five passionate innovators united by a shared vision of digital excellence. 
            Each bringing unique expertise to create extraordinary experiences.
          </motion.p>
        </motion.div>

        {/* Animated Technology Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-24"
        >
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <h3 className="text-3xl font-bold text-white mb-4">Our Technology Stack</h3>
            <p className="text-gray-400 text-lg">Cutting-edge technologies we master</p>
          </motion.div>

          <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8">
            <motion.div 
              className="flex gap-8"
              animate={{ x: [0, -2000] }}
              transition={{ 
                duration: 30, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {[
                { name: "React", color: "from-blue-400 to-blue-600", icon: "⚛️" },
                { name: "Next.js", color: "from-gray-400 to-gray-600", icon: "▲" },
                { name: "TypeScript", color: "from-blue-500 to-blue-700", icon: "TS" },
                { name: "Node.js", color: "from-green-400 to-green-600", icon: "🟢" },
                { name: "Python", color: "from-yellow-400 to-blue-600", icon: "🐍" },
                { name: "Java", color: "from-red-400 to-orange-600", icon: "☕" },
                { name: "C++", color: "from-purple-400 to-purple-600", icon: "⚡" },
                { name: "MongoDB", color: "from-green-500 to-green-700", icon: "🍃" },
                { name: "PostgreSQL", color: "from-blue-600 to-indigo-600", icon: "🐘" },
                { name: "Docker", color: "from-blue-400 to-cyan-600", icon: "🐋" },
                { name: "AWS", color: "from-orange-400 to-yellow-500", icon: "☁️" },
                { name: "Firebase", color: "from-yellow-500 to-orange-500", icon: "🔥" },
                // Duplicate for seamless loop
                { name: "React", color: "from-blue-400 to-blue-600", icon: "⚛️" },
                { name: "Next.js", color: "from-gray-400 to-gray-600", icon: "▲" },
                { name: "TypeScript", color: "from-blue-500 to-blue-700", icon: "TS" },
                { name: "Node.js", color: "from-green-400 to-green-600", icon: "🟢" },
                { name: "Python", color: "from-yellow-400 to-blue-600", icon: "🐍" },
                { name: "Java", color: "from-red-400 to-orange-600", icon: "☕" },
                { name: "C++", color: "from-purple-400 to-purple-600", icon: "⚡" },
                { name: "MongoDB", color: "from-green-500 to-green-700", icon: "🍃" },
                { name: "PostgreSQL", color: "from-blue-600 to-indigo-600", icon: "🐘" },
                { name: "Docker", color: "from-blue-400 to-cyan-600", icon: "🐋" },
                { name: "AWS", color: "from-orange-400 to-yellow-500", icon: "☁️" },
                { name: "Firebase", color: "from-yellow-500 to-orange-500", icon: "🔥" },
              ].map((tech, index) => (
                <motion.div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 relative"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`w-32 h-20 rounded-2xl bg-gradient-to-br ${tech.color} p-0.5`}>
                    <div className="w-full h-full bg-gray-900/80 rounded-2xl flex flex-col items-center justify-center backdrop-blur-sm">
                      <span className="text-2xl mb-1">{tech.icon}</span>
                      <span className="text-white font-semibold text-sm">{tech.name}</span>
                    </div>
                  </div>
                  
                  {/* Glow effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.color} opacity-0 blur-xl`}
                    animate={{ 
                      opacity: [0, 0.3, 0],
                      scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Redesigned Team Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 60, rotateY: -30 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 60, rotateY: -30 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2 + index * 0.15,
                type: "spring",
                stiffness: 80 
              }}
              whileHover={{ 
                y: -4,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              className="group relative cursor-pointer"
            >
              {/* Card Container */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl overflow-hidden transition-all duration-300">
                {/* Subtle Border Glow */}
                <div
                  className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"
                  style={{
                    background: `linear-gradient(135deg, ${member.gradient.includes('emerald') ? '#10b981' : member.gradient.includes('blue') ? '#3b82f6' : member.gradient.includes('purple') ? '#8b5cf6' : '#22c55e'}, transparent)`
                  }}
                />
                
                {/* Floating Particles */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-blue-400/60 rounded-full"
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />

                {/* Profile Section with 3D Effect */}
                <div className="relative mb-6">
                  <motion.div 
                    className="relative w-32 h-32 mx-auto"
                    whileHover={{ 
                      rotateY: 10,
                      rotateX: 10,
                      scale: 1.05 
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Glowing Ring */}
                    <motion.div 
                      className={`absolute -inset-3 rounded-full opacity-60`}
                      style={{
                        background: `conic-gradient(from 0deg, transparent, ${member.gradient.split(' ')[1]}, transparent)`
                      }}
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                    
                    {/* Image Container */}
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image 
                          src={member.avatar} 
                          alt={member.name}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      
                      {/* Hover Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    </div>

                    {/* Role Badge */}
                  <motion.div 
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <span className={`px-3 py-1 text-xs font-bold bg-gradient-to-r ${member.gradient} text-white rounded-full shadow-lg whitespace-nowrap`}>
                      {member.specialization}
                    </span>
                  </motion.div>
                </motion.div>
              </div>

              {/* Member Info with Staggered Animation */}
              <motion.div 
                className="text-center space-y-3"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-emerald-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-2">
                    {member.role}
                  </p>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed h-16 overflow-hidden">
                  {member.bio}
                </p>

                {/* Skills with Animation */}
                <div className="flex flex-wrap gap-1 justify-center">
                  {member.skills.slice(0, 3).map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ 
                        delay: 0.5 + index * 0.1 + skillIndex * 0.05,
                        type: "spring",
                        stiffness: 200 
                      }}
                      className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                  {member.skills.length > 3 && (
                    <span className="px-2 py-1 text-xs font-medium bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-400 rounded-full">
                      +{member.skills.length - 3}
                    </span>
                  )}
                </div>

                {/* Social Links with Hover Effects */}
                <motion.div 
                  className="flex gap-3 justify-center pt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <motion.a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 text-gray-400 hover:text-white transition-colors duration-200 rounded-full hover:bg-gray-700/50 backdrop-blur-sm"
                  >
                    <Github size={16} />
                  </motion.a>
                  <motion.a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 text-gray-400 hover:text-blue-400 transition-colors duration-200 rounded-full hover:bg-blue-500/20 backdrop-blur-sm"
                  >
                    <Linkedin size={16} />
                  </motion.a>
                </motion.div>
              </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

