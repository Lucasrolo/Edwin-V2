import React, { useState } from 'react';
import { BookOpen, ChevronRight, Search, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { students, projects } from './data';
import { StudentList } from './components/StudentList';
import { Projects } from './components/Projects';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { RoleSelector } from './components/RoleSelector';
import { StudentDashboard } from './components/StudentDashboard';

type Role = 'teacher' | 'student';

function AppContent() {
  const [selectedStudent, setSelectedStudent] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [currentRole, setCurrentRole] = useState<Role>('teacher');
  const { theme, toggleTheme } = useTheme();

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesProject = selectedProject
      ? projects.find(p => p.id === selectedProject)?.students.includes(student.id)
      : true;
    return matchesSearch && matchesProject;
  });

  if (currentRole === 'student') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-edwin-light to-white dark:from-edwin-dark dark:to-edwin-dark-800 transition-colors duration-200">
        <div className="relative overflow-hidden rounded-b-2xl bg-gradient-to-r from-edwin-primary to-edwin-secondary p-8 text-white shadow-lg">
          <div className="relative z-10 flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold mb-2">Edwin</h1>
              <p className="text-white/80">Assistant Pédagogique Intelligent</p>
            </div>
            <div className="flex items-center space-x-4">
              <RoleSelector currentRole={currentRole} onRoleChange={setCurrentRole} />
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5 text-white" />
                ) : (
                  <Sun className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
        <StudentDashboard />
      </div>
    );
  }

  if (selectedStudent) {
    return (
      <StudentList
        studentId={selectedStudent}
        onBack={() => setSelectedStudent(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-edwin-light to-white dark:from-edwin-dark dark:to-edwin-dark-800 transition-colors duration-200">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-edwin-primary to-edwin-secondary p-8 text-white shadow-lg">
            <div className="relative z-10">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-4xl font-bold mb-2">Edwin</h1>
                  <p className="text-white/80">Assistant Pédagogique Intelligent</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg">
                    <BookOpen className="w-5 h-5 text-white" />
                    <span className="text-white">{projects.length} Devoirs</span>
                  </div>
                  <RoleSelector currentRole={currentRole} onRoleChange={setCurrentRole} />
                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                    aria-label="Toggle theme"
                  >
                    {theme === 'light' ? (
                      <Moon className="w-5 h-5 text-white" />
                    ) : (
                      <Sun className="w-5 h-5 text-white" />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div
              className="absolute inset-0 bg-gradient-to-r from-edwin-primary to-edwin-secondary opacity-50"
              style={{
                backgroundSize: '200% 200%',
                animation: 'gradient 15s ease infinite',
              }}
            />
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-edwin-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un étudiant..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-edwin-gray-200 dark:border-edwin-dark-600 focus:ring-2 focus:ring-edwin-primary focus:border-transparent dark:bg-edwin-dark-700 dark:text-white transition-colors duration-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div>
              <select
                className="w-full px-4 py-2 rounded-lg border border-edwin-gray-200 dark:border-edwin-dark-600 focus:ring-2 focus:ring-edwin-primary focus:border-transparent dark:bg-edwin-dark-700 dark:text-white transition-colors duration-200"
                value={selectedProject || ''}
                onChange={(e) => setSelectedProject(e.target.value || null)}
              >
                <option value="">Tous les devoirs</option>
                {projects.map((project) => (
                  <option key={project.id} value={project.id}>
                    {project.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Students Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredStudents.map((student) => (
            <motion.div
              key={student.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer"
              onClick={() => setSelectedStudent(student.id)}
            >
              <div className="bg-white dark:bg-edwin-dark-700 rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 flex items-center space-x-4">
                <img
                  src={student.avatar}
                  alt={student.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-edwin-gray-900 dark:text-white group-hover:text-edwin-primary transition-colors">
                    {student.name}
                  </h3>
                  <p className="text-sm text-edwin-gray-500 dark:text-edwin-gray-400">
                    {projects.filter(p => p.students.includes(student.id)).length} devoirs
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-edwin-gray-400 group-hover:text-edwin-primary group-hover:translate-x-1 transition-all duration-200" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Projects Section */}
        <div className="mt-12">
          <Projects />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;