'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management',
    longDescription: 'Built a comprehensive e-commerce platform featuring real-time inventory tracking, secure payment processing with Stripe, and an admin dashboard for managing products and orders. Implemented advanced search functionality and personalized recommendations.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    gradient: 'from-blue-600 to-cyan-600',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 2,
    title: 'AI Task Manager',
    description: 'Intelligent task management app with AI-powered prioritization',
    longDescription: 'Developed an innovative task management application that uses machine learning to automatically prioritize tasks based on deadlines, importance, and user behavior patterns. Features include collaborative workspaces, real-time updates, and smart notifications.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    tags: ['React', 'Python', 'TensorFlow', 'Firebase'],
    gradient: 'from-purple-600 to-pink-600',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 3,
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for managing multiple social media accounts',
    longDescription: 'Created a comprehensive social media management tool that aggregates data from multiple platforms, provides detailed analytics, and enables scheduled posting. Includes sentiment analysis and engagement tracking across all major social networks.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tags: ['Vue.js', 'Node.js', 'MongoDB', 'Chart.js'],
    gradient: 'from-green-600 to-emerald-600',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 4,
    title: 'Fitness Tracking App',
    description: 'Mobile-first fitness app with workout plans and progress tracking',
    longDescription: 'Designed and developed a comprehensive fitness application featuring personalized workout plans, nutrition tracking, progress visualization, and social challenges. Integrated with wearable devices for automatic activity tracking.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
    tags: ['React Native', 'Express', 'PostgreSQL', 'AWS'],
    gradient: 'from-orange-600 to-red-600',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 5,
    title: 'Real Estate Platform',
    description: 'Modern property listing platform with virtual tours',
    longDescription: 'Built a sophisticated real estate platform featuring 3D virtual tours, advanced property search with filters, mortgage calculators, and integrated scheduling for property viewings. Includes an admin panel for agents to manage listings.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    tags: ['Next.js', 'Three.js', 'Prisma', 'Tailwind'],
    gradient: 'from-indigo-600 to-blue-600',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 6,
    title: 'Weather Forecast App',
    description: 'Beautiful weather app with detailed forecasts and alerts',
    longDescription: 'Created an elegant weather application with real-time data, detailed 14-day forecasts, severe weather alerts, and interactive weather maps. Features location-based recommendations and weather-based activity suggestions.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
    tags: ['React', 'OpenWeather API', 'Mapbox', 'Redux'],
    gradient: 'from-yellow-600 to-orange-600',
    github: 'https://github.com',
    demo: 'https://example.com',
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
          <div className="w-20 h-1 bg-linear-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
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
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-purple-600 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-purple-600 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-600 rounded-2xl transition-colors duration-300 pointer-events-none" />
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

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 text-sm font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
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
                  className="flex items-center gap-2 px-6 py-3 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:opacity-80 transition-opacity"
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
