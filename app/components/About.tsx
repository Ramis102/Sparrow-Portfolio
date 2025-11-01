'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

const teamMembers = [
  {
    id: 1,
    name: 'Muhammad Rohaan Khurram',
    role: 'Mobile & Game Developer',
    avatar: '/pics/Rohaan.jpeg',
    gradient: 'from-emerald-500 to-green-500',
    skills: ['React Native', 'Unity', 'Python', 'C++', 'Django'],
    github: 'https://github.com/RohaanAwan99',
    linkedin: 'https://www.linkedin.com/in/rohaan-khurram-4bb498275/',
    email: 'rohaankhurram99@gmail.com',
    bio: 'Game development champion with expertise in mobile apps and competitive programming. Won multiple hackathons including M-Labs Game Jam.',
    phone: '0333 8762669',
    specialization: 'Mobile & Gaming'
  },
  {
    id: 2,
    name: 'Usman Rasool',
    role: 'Full-Stack Developer',
    avatar: '/pics/usman.jpg',
    gradient: 'from-green-500 to-emerald-500',
    skills: ['React', 'Next.js', 'Node.js', 'MongoDB', 'JavaScript'],
    github: 'https://github.com/UsmanRasool7',
    linkedin: 'https://www.linkedin.com/in/usman-rasool-75201a2b9/',
    email: 'usman@teamsparrow.com',
    bio: 'Full-stack engineer passionate about creating seamless user experiences with modern web technologies and scalable architectures.',
    specialization: 'Full-Stack Development'
  },
  {
    id: 3,
    name: 'Ramis Humayun',
    role: 'Project Manager & Developer',
    avatar: '/pics/Ramis.jpeg',
    gradient: 'from-blue-500 to-cyan-500',
    skills: ['Project Management', 'React', 'Node.js', 'Leadership', 'Agile'],
    github: 'https://github.com/Ramis102',
    linkedin: 'http://www.linkedin.com/in/ramis-humayun-66794626b',
    email: 'ramis@teamsparrow.com',
    bio: 'Team leader and project orchestrator ensuring efficient workflow and successful project delivery through strategic planning.',
    specialization: 'Leadership & Management'
  },
  {
    id: 4,
    name: 'Taha Mudassar',
    role: 'Frontend Developer',
    avatar: '/pics/Taha.jpeg',
    gradient: 'from-orange-500 to-red-500',
    skills: ['React', 'JavaScript', 'CSS', 'UI/UX', 'HTML'],
    github: 'https://github.com/tahamudassar',
    linkedin: 'https://www.linkedin.com/in/taha-mudassar',
    email: 'taha@teamsparrow.com',
    bio: 'Frontend specialist creating beautiful and responsive interfaces with attention to detail and user-centered design principles.',
    specialization: 'Frontend & Design'
  },
  {
    id: 5,
    name: 'Yaddu Bakar',
    role: 'Backend Developer & Analyst',
    avatar: '/pics/Abubakar.jpeg',
    gradient: 'from-indigo-500 to-emerald-500',
    skills: ['Python', 'Data Analysis', 'Backend', 'Testing', 'Algorithms'],
    github: 'https://github.com/abu-bakar',
    linkedin: 'https://linkedin.com/in/abu-bakar',
    email: 'abubakar@teamsparrow.com',
    bio: 'Backend developer and data analyst ensuring robust system architecture and data-driven decision making for optimal performance.',
    specialization: 'Backend & Analytics'
  }
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Meet Team Sparrow
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-emerald-600 to-green-600 mx-auto rounded-full mb-6" />
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            We are five passionate developers and designers united by our commitment to creating 
            innovative solutions and pushing the boundaries of digital experiences.
          </p>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {[
            { number: "5", label: "Team Members", color: "purple", gradient: "from-emerald-500 to-purple-700" },
            { number: "8+", label: "Combined Years", color: "pink", gradient: "from-green-500 to-pink-700" },
            { number: "15+", label: "Projects Built", color: "blue", gradient: "from-blue-500 to-blue-700" },
            { number: "100%", label: "Dedication", color: "green", gradient: "from-green-500 to-green-700" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.5, rotateY: -90 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.3 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="relative text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/20 dark:border-slate-700/50 group overflow-hidden"
            >
              {/* Animated Background */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />
              
              {/* Floating Particles */}
              <motion.div
                className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-emerald-400/30 to-green-400/30 rounded-full blur-sm"
                animate={{
                  x: [0, 10, 0],
                  y: [0, -10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              />

              <motion.div 
                className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3`}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ 
                  delay: 0.5 + index * 0.1, 
                  type: "spring", 
                  stiffness: 200 
                }}
              >
                {stat.number}
              </motion.div>
              <motion.div 
                className="text-slate-600 dark:text-slate-300 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.1 * index,
                type: "spring",
                stiffness: 100 
              }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl border border-white/20 dark:border-slate-700/50 group overflow-hidden"
            >
              {/* Animated Background Gradient */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                initial={false}
              />
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              {/* Avatar with Enhanced Animation */}
              <div className="relative mb-6">
                <motion.div 
                  className="relative w-24 h-24 mx-auto"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Animated Border Ring */}
                  <motion.div 
                    className={`absolute -inset-2 bg-gradient-to-br ${member.gradient} rounded-full opacity-75 blur-sm`}
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Profile Image */}
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-lg">
                    <Image 
                      src={member.avatar} 
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                  </div>

                  {/* Specialization Badge */}
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
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-green-600 group-hover:bg-clip-text transition-all duration-300">
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
                    className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700"
                  >
                    <Github size={16} />
                  </motion.a>
                  <motion.a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 text-slate-400 hover:text-blue-600 transition-colors duration-200 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30"
                  >
                    <Linkedin size={16} />
                  </motion.a>
                  <motion.a
                    href={`mailto:${member.email}`}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 text-slate-400 hover:text-emerald-600 transition-colors duration-200 rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/30"
                  >
                    <Mail size={16} />
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

