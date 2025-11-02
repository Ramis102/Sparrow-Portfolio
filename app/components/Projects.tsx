'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Digital Wardrobe',
    description: 'AI-Powered Outfit Recommendation App with Smart Analytics',
    longDescription: 'An innovative mobile application that revolutionizes personal wardrobe management. Built with Flutter and Django backend, it features TensorFlow-powered AI recommendations, real-time weather integration, and Firebase cloud storage. The app learns user preferences over time to provide personalized outfit suggestions with smart analytics and purchase recommendations.',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=600&fit=crop',
    tags: ['Flutter', 'Django', 'TensorFlow', 'Firebase', 'AI/ML'],
    gradient: 'from-purple-600 to-pink-600',
    contributors: ['Muhammad Rohaan', 'Usman Rasool', 'Ramis Humayun', 'Muhammad Taha', 'Abu Bakar']
  },
  {
    id: 2,
    title: 'Draw Dash',
    description: 'Award-Winning Mobile Game - 1st Place Winner',
    longDescription: 'Champion mobile game that secured 1st place among 180 participants in Mindstorm Studios Summer Game Jam. The team collaborated on designing core gameplay elements, enhancing player experience through polished mechanics and engaging visual effects. The game showcases advanced game development skills and creative problem-solving.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop',
    tags: ['Unity', 'C#', 'Game Development', 'Mobile Gaming', 'UI/UX'],
    gradient: 'from-orange-600 to-red-600',
    contributors: ['Muhammad Rohaan', 'Usman Rasool', 'Ramis Humayun', 'Muhammad Taha']
  },
  {
    id: 3,
    title: 'FASTLink',
    description: 'Community Platform for FAST University Students',
    longDescription: 'A comprehensive full-stack web platform designed specifically for FAST University students. Built with Next.js, React, and Tailwind CSS frontend with Django backend and SQLite database. Features include authenticated user interactions, post sharing, study material access, and JWT-based security with role-based content management.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Django', 'SQLite'],
    gradient: 'from-blue-600 to-cyan-600',
    contributors: ['Muhammad Rohaan', 'Usman Rasool', 'Ramis Humayun', 'Muhammad Taha', 'Abu Bakar']
  },
  {
    id: 4,
    title: 'Web-Based Booking Platform',
    description: 'Comprehensive Bus Ticket and Hotel Booking System',
    longDescription: 'A sophisticated online booking platform developed collaboratively using HTML, CSS, JavaScript, PHP, and SQL technologies. Features responsive Bootstrap design, secure user authentication, real-time availability checking, and comprehensive booking management for both transportation and accommodation services.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL', 'Bootstrap'],
    gradient: 'from-green-600 to-emerald-600',
    contributors: ['Usman Rasool', 'Muhammad Rohaan', 'Ramis Humayun', 'Muhammad Taha', 'Abu Bakar']
  },
  {
    id: 5,
    title: 'RAG Knowledge Assistant',
    description: 'Advanced AI-Powered Document Question-Answering System',
    longDescription: 'A sophisticated Retrieval-Augmented Generation (RAG) system that enables intelligent document analysis and question-answering. Built with Python, LangChain, and OpenAI GPT models, featuring vector embeddings with ChromaDB, semantic search capabilities, and a user-friendly Streamlit interface. The system processes multiple document formats and provides accurate, context-aware responses with source citations.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    tags: ['Python', 'LangChain', 'OpenAI GPT', 'ChromaDB', 'Streamlit', 'RAG'],
    gradient: 'from-indigo-600 to-purple-600',
    contributors: ['Team Collaborative Development', 'AI Research & Implementation']
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
            Featured Projects
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
              className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
              whileHover={{ 
                y: -4, 
                transition: { duration: 0.2, ease: "easeOut" }
              }}
            >
              {/* Subtle Border Glow */}
              <motion.div
                className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"
                style={{
                  background: `linear-gradient(135deg, ${project.gradient.includes('blue') ? '#2563eb' : project.gradient.includes('purple') ? '#9333ea' : project.gradient.includes('green') ? '#16a34a' : project.gradient.includes('orange') ? '#ea580c' : project.gradient.includes('indigo') ? '#4f46e5' : '#ca8a04'}, transparent)`
                }}
              />
              
              <div className="relative h-48 overflow-hidden rounded-t-2xl">
                {/* Clean Gradient Background */}
                <div
                  className="absolute inset-0 transition-all duration-300 group-hover:brightness-110"
                  style={{
                    background: `linear-gradient(135deg, ${project.gradient.includes('blue') ? '#2563eb, #06b6d4' : project.gradient.includes('purple') ? '#9333ea, #ec4899' : project.gradient.includes('green') ? '#16a34a, #10b981' : project.gradient.includes('orange') ? '#ea580c, #dc2626' : project.gradient.includes('indigo') ? '#4f46e5, #3b82f6' : '#ca8a04, #ea580c'})`
                  }}
                />
                
                {/* Subtle Overlay on Hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                
                {/* Project Initials */}
                <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  {project.title.split(' ').map(word => word[0]).join('')}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mb-4">
                  <p className="text-xs text-slate-400 dark:text-slate-500">
                    <span className="font-medium">Collaborative Development:</span> {project.contributors.join(', ')}
                  </p>
                </div>

                <div className="flex justify-center">
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-full">
                    View Details →
                  </span>
                </div>
              </div>
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
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  <span className="font-medium">Collaborative Development:</span> {selectedProject.contributors.join(', ')}
                </p>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:opacity-80 transition-opacity"
                >
                  Close Details
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

