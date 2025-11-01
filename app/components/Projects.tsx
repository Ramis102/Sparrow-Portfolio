'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Digital Wardrobe',
    description: 'Smart clothing management and outfit planning application',
    longDescription: 'A comprehensive digital wardrobe application that helps users organize their clothing, plan outfits, and make smart fashion decisions. Usman led the development with modern web technologies, creating an intuitive interface for wardrobe management and outfit coordination.',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=600&fit=crop',
    tags: ['React', 'JavaScript', 'CSS', 'Node.js', 'Database'],
    gradient: 'from-emerald-600 to-green-600',
    github: 'https://github.com/UsmanRasool7/Digital-Wardrobe',
    demo: 'https://digital-wardrobe-demo.com',
    teamLead: 'Usman Rasool',
    contributors: ['Rohaan Khurram', 'Ramis Ahmed', 'Taha Hassan']
  },
  {
    id: 2,
    title: 'PrepMaster Test Platform',
    description: 'Advanced test-taking web application for educational assessments',
    longDescription: 'A comprehensive test-taking platform built with industry standards using Django-Rest framework and React.js. Rohaan led the development, implementing secure test delivery, real-time scoring, and detailed analytics. The platform supports multiple question types and provides detailed performance insights.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop',
    tags: ['Django', 'React.js', 'Python', 'SQLite', 'REST API'],
    gradient: 'from-blue-600 to-cyan-600',
    github: 'https://github.com/team-sparrow/prepmaster',
    demo: 'https://prepmaster-demo.com',
    teamLead: 'Rohaan Khurram',
    contributors: ['Ramis Ahmed', 'Usman Rasool', 'Taha Hassan']
  },
  {
    id: 3,
    title: 'Draw-Dash Mobile Game',
    description: 'Award-winning mobile game developed with Unity',
    longDescription: 'An innovative mobile game that competed against 100+ participants and achieved recognition in a major competition. Rohaan led the game development using Unity Game Engine, implementing creative gameplay mechanics, smooth animations, and engaging user experience that showcased advanced algorithmic thinking.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop',
    tags: ['Unity', 'C#', 'Mobile Gaming', 'Game Design', 'Algorithm'],
    gradient: 'from-orange-600 to-red-600',
    teamLead: 'Rohaan Khurram',
    contributors: ['Team Member 5', 'Ramis Ahmed', 'Taha Hassan'],
    github: 'https://github.com/team-sparrow/draw-dash',
    demo: 'https://draw-dash-demo.com',
  },
  {
    id: 4,
    title: 'Ticket Booking System',
    description: 'Full-stack bus and room booking platform',
    longDescription: 'A comprehensive booking system for buses and accommodations built with modern web technologies. The team collaborated to implement efficient booking algorithms, real-time availability tracking, and secure payment processing. Features include user authentication, booking management, and administrative controls.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    gradient: 'from-green-600 to-emerald-600',
    github: 'https://github.com/team-sparrow/ticket-booking',
    demo: 'https://ticket-booking-demo.com',
    teamLead: 'Ramis Ahmed',
    contributors: ['Rohaan Khurram', 'Usman Rasool', 'Taha Hassan']
  },
  {
    id: 5,
    title: 'Weather Dashboard App',
    description: 'Real-time weather information web application',
    longDescription: 'A responsive weather application providing real-time weather data through API integration. Features include current conditions, forecasts, location-based weather, and an intuitive user interface. The app demonstrates proficiency in API consumption, data visualization, and responsive design principles.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
    tags: ['JavaScript', 'Weather API', 'HTML', 'CSS', 'Responsive Design'],
    gradient: 'from-yellow-600 to-orange-600',
    github: 'https://github.com/team-sparrow/weather-app',
    demo: 'https://weather-app-demo.com',
    teamLead: 'Usman Rasool',
    contributors: ['Rohaan Khurram', 'Taha Hassan', 'Team Member 5']
  },
  {
    id: 6,
    title: 'UNIX Terminal Emulator',
    description: 'Custom UNIX-based terminal built from scratch',
    longDescription: 'A fully functional UNIX-based terminal implementation showcasing deep understanding of operating system concepts. Rohaan developed this project to demonstrate expertise in system-level programming, memory management, and process handling. The terminal supports various UNIX commands and system calls.',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=600&fit=crop',
    tags: ['C', 'Operating Systems', 'UNIX', 'System Programming', 'Memory Management'],
    gradient: 'from-teal-600 to-emerald-600',
    github: 'https://github.com/team-sparrow/unix-terminal',
    demo: 'https://unix-terminal-demo.com',
    teamLead: 'Rohaan Khurram',
    contributors: ['Ramis Ahmed', 'Taha Hassan', 'Team Member 5']
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Our Collaborative Projects
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-emerald-600 to-green-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-linear-to-br opacity-90 group-hover:opacity-75 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${project.gradient.includes('blue') ? '#2563eb, #06b6d4' : project.gradient.includes('purple') ? '#9333ea, #ec4899' : project.gradient.includes('green') ? '#16a34a, #10b981' : project.gradient.includes('orange') ? '#ea580c, #dc2626' : project.gradient.includes('indigo') ? '#4f46e5, #3b82f6' : '#ca8a04, #ea580c'})`
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20">
                  {project.title.split(' ').map(word => word[0]).join('')}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mb-4">
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                    <span className="font-medium">Team Lead:</span> {project.teamLead}
                  </p>
                  <p className="text-xs text-slate-400 dark:text-slate-500">
                    Contributors: {project.contributors.join(', ')}
                  </p>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-emerald-600 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-emerald-600 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-600 rounded-2xl transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-slate-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 md:h-96">
              <div
                className="absolute inset-0 bg-linear-to-br opacity-90"
                style={{
                  background: `linear-gradient(135deg, ${selectedProject.gradient.includes('blue') ? '#2563eb, #06b6d4' : selectedProject.gradient.includes('purple') ? '#9333ea, #ec4899' : selectedProject.gradient.includes('green') ? '#16a34a, #10b981' : selectedProject.gradient.includes('orange') ? '#ea580c, #dc2626' : selectedProject.gradient.includes('indigo') ? '#4f46e5, #3b82f6' : '#ca8a04, #ea580c'})`
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-white text-9xl font-bold opacity-20">
                {selectedProject.title.split(' ').map(word => word[0]).join('')}
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
              >
                <X className="text-white" size={24} />
              </button>
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                {selectedProject.longDescription}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 text-sm font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-2xl p-4 mb-6">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Team Collaboration</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                  <span className="font-medium">Project Lead:</span> {selectedProject.teamLead}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  <span className="font-medium">Team Members:</span> {selectedProject.contributors.join(', ')}
                </p>
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold hover:opacity-80 transition-opacity"
                >
                  <Github size={20} />
                  View Code
                </a>
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-linear-to-r from-emerald-600 to-green-600 text-white rounded-full font-semibold hover:opacity-80 transition-opacity"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

