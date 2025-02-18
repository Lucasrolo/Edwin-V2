import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { students } from '../data';
import { CodeHistory } from './CodeHistory';

interface StudentListProps {
  studentId: number;
  onBack: () => void;
}

export function StudentList({ studentId, onBack }: StudentListProps) {
  const student = students.find(s => s.id === studentId);

  if (!student) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={onBack}
        className="flex items-center text-indigo-600 dark:text-indigo-400 mb-6 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-1" />
        Retour aux devoirs
      </button>

      <div className="bg-white dark:bg-edwin-dark-700 rounded-xl shadow-lg p-6 mb-8">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src={student.avatar}
            alt={student.name}
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{student.name}</h2>
            <p className="text-gray-600 dark:text-gray-400">Étudiant en informatique</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <CodeHistory studentId={studentId} />
      </div>
    </div>
  );
}