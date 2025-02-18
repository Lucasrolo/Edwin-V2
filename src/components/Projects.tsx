import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Users, Code, Calendar } from 'lucide-react';
import { projects, students } from '../data';

export function Projects() {
  return (
    <div className="p-6 bg-white dark:bg-edwin-dark-700 rounded-2xl shadow-lg transition-colors duration-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Devoirs en cours</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Suivez l'évolution du code de vos étudiants</p>
        </div>
        <div className="bg-indigo-50 dark:bg-edwin-dark-600 px-4 py-2 rounded-lg">
          <span className="text-indigo-700 dark:text-indigo-400 font-medium">{projects.length} devoirs actifs</span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="group bg-white dark:bg-edwin-dark-600 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100 dark:border-edwin-dark-600"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 transition-colors">
                  {project.name}
                </h3>
                <ChevronRight className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-indigo-600 transition-colors" />
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">{project.description}</p>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-edwin-dark-600">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Users className="w-4 h-4 mr-2" />
                  <span className="text-sm">{project.students.length} étudiants</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Code className="w-4 h-4 mr-2" />
                  <span className="text-sm">0 commits</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}