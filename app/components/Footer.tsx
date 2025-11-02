'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-linear-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Our Team
            </h3>
            <p className="text-slate-400">
              Five passionate developers and designers creating innovative digital solutions together.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-slate-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-400 hover:text-white transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-slate-400">
              Have a project in mind? Get in touch with our team.
            </p>
            <motion.a
              href="mailto:tcs165199@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="inline-block mt-3 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              tcs165199@gmail.com
            </motion.a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <p className="text-center text-slate-400">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

