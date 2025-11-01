'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

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
            About Me
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-linear-to-br from-purple-600 to-pink-600 rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 rounded-3xl overflow-hidden">
                {/* Replace with your actual image */}
                <div className="w-full h-full bg-linear-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-6xl font-bold">
                  YN
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Passionate Developer & Creative Problem Solver
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              I'm a full-stack developer with a passion for creating beautiful, functional, 
              and user-centered digital experiences. With expertise in modern web technologies, 
              I bring ideas to life through clean code and thoughtful design.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing my knowledge with the developer community.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl font-bold text-purple-600 mb-2">5+</div>
                <div className="text-slate-600 dark:text-slate-300">Years Experience</div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl font-bold text-pink-600 mb-2">50+</div>
                <div className="text-slate-600 dark:text-slate-300">Projects Completed</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
