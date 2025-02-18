import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { StudentEditor } from './StudentEditor';
import { projects } from '../data';

export function StudentDashboard() {
  const [selectedAssignment, setSelectedAssignment] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      {!selectedAssignment ? (
        <>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Mes Devoirs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-edwin-dark-700 rounded-xl shadow-sm hover:shadow-md transition-all p-6 cursor-pointer"
                onClick={() => setSelectedAssignment(project.id)}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-edwin-primary dark:text-edwin-secondary">
                    Date limite: 28 février 2024
                  </span>
                  <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200">
                    En cours
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSelectedAssignment(null)}
              className="text-edwin-primary dark:text-edwin-secondary hover:underline"
            >
              ← Retour aux devoirs
            </button>
            <button className="px-4 py-2 bg-edwin-primary text-white rounded-lg hover:bg-edwin-primary/90 transition-colors">
              Rendre le devoir
            </button>
          </div>
          
          <div className="bg-white dark:bg-edwin-dark-700 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {projects.find(p => p.id === selectedAssignment)?.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {projects.find(p => p.id === selectedAssignment)?.description}
            </p>
            <StudentEditor />
          </div>
        </div>
      )}
    </div>
  );
}
