import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Clock, GitBranch, Play, Pause, SkipForward, Brain, AlertTriangle } from 'lucide-react';
import { students, projects } from '../data';

interface CodeHistoryProps {
  studentId: number;
}

interface CodeEntry {
  id: number;
  project: typeof projects[0];
  timestamp: Date;
  changes: number;
  message: string;
  code: string;
  alerts?: string[];
}

export function CodeHistory({ studentId }: CodeHistoryProps) {
  const student = students.find(s => s.id === studentId);
  const [selectedEntry, setSelectedEntry] = useState<CodeEntry | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentCode, setCurrentCode] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const animationRef = useRef<number>();
  
  if (!student) {
    return null;
  }

  // Simuler l'historique du code pour l'étudiant
  const codeHistory: CodeEntry[] = [
    {
      id: 1,
      project: projects[0],
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      changes: 150,
      message: "Ajout de la fonctionnalité de recherche",
      code: `function searchProducts(query) {
  const normalizedQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(normalizedQuery) ||
    product.description.toLowerCase().includes(normalizedQuery)
  );
}`,
      alerts: ['AI']
    },
    {
      id: 2,
      project: projects[0],
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
      changes: 80,
      message: "Correction des bugs d'affichage",
      code: `function formatPrice(price) {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR'
  }).format(price);
}`,
      alerts: ['DIFFICULTY']
    },
    {
      id: 3,
      project: projects[1],
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
      changes: 200,
      message: "Implémentation de l'authentification",
      code: `async function authenticateUser(email, password) {
  try {
    const response = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    return data.token;
  } catch (error) {
    console.error('Authentication failed:', error);
    throw new Error('Failed to authenticate');
  }
}`,
    },
  ];

  function formatTimeAgo(date: Date) {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      return "Il y a moins d'une heure";
    } else if (diffInHours < 24) {
      return `Il y a ${diffInHours} heure${diffInHours > 1 ? 's' : ''}`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `Il y a ${diffInDays} jour${diffInDays > 1 ? 's' : ''}`;
    }
  }

  const resetPlayback = () => {
    setCharIndex(0);
    setCurrentCode('');
    setIsPlaying(false);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const skipToEnd = () => {
    if (selectedEntry) {
      setCurrentCode(selectedEntry.code);
      setCharIndex(selectedEntry.code.length);
      setIsPlaying(false);
    }
  };

  const nextFrame = () => {
    if (!selectedEntry || !isPlaying) return;

    if (charIndex < selectedEntry.code.length) {
      setCurrentCode(prev => prev + selectedEntry.code[charIndex]);
      setCharIndex(prev => prev + 1);
      animationRef.current = requestAnimationFrame(nextFrame);
    } else {
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      animationRef.current = requestAnimationFrame(nextFrame);
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, charIndex, selectedEntry, playbackSpeed]);

  const handleEntrySelect = (entry: CodeEntry) => {
    setSelectedEntry(entry);
    resetPlayback();
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const getAlertType = (alerts?: string[]) => {
    if (!alerts) return null;
    
    if (alerts.includes('AI')) {
      return {
        color: 'text-yellow-600',
        message: 'Susceptible d\'utilisation d\'IA',
        bgColor: 'bg-yellow-50',
        icon: <Brain className="w-4 h-4" />
      };
    }
    if (alerts.includes('DIFFICULTY')) {
      return {
        color: 'text-red-600',
        message: 'Difficulté dans ce domaine',
        bgColor: 'bg-red-50',
        icon: <AlertTriangle className="w-4 h-4" />
      };
    }
    return null;
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-edwin-dark-700 rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Historique des modifications
        </h3>
        <div className="space-y-4">
          {codeHistory.map((entry) => {
            const alert = getAlertType(entry.alerts);
            const isSelected = selectedEntry?.id === entry.id;

            return (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg border transition-colors duration-200 ${
                  isSelected 
                    ? 'bg-indigo-50 dark:bg-edwin-dark-600 border-indigo-200 dark:border-edwin-dark-500'
                    : 'bg-gray-50 dark:bg-edwin-dark-800 border-gray-100 dark:border-edwin-dark-600'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {entry.project.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                      {entry.message}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {alert && (
                      <span className={`flex items-center ${alert.color} ${alert.bgColor} px-2 py-1 rounded text-sm`}>
                        {alert.icon}
                        <span className="ml-1">{alert.message}</span>
                      </span>
                    )}
                    <button
                      onClick={() => handleEntrySelect(entry)}
                      className={`px-3 py-1 rounded-lg transition-colors ${
                        isSelected
                          ? 'bg-indigo-500 text-white'
                          : 'bg-gray-200 dark:bg-edwin-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-edwin-dark-600'
                      }`}
                    >
                      {isSelected ? 'Sélectionné' : 'Voir le code'}
                    </button>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mt-2">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {formatTimeAgo(entry.timestamp)}
                  </div>
                  <div className="flex items-center">
                    <Code className="w-4 h-4 mr-1" />
                    <span>{entry.changes} lignes modifiées</span>
                  </div>
                  <div className="flex items-center">
                    <GitBranch className="w-4 h-4 mr-1" />
                    <span>main</span>
                  </div>
                </div>

                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={handlePlayPause}
                          className="p-2 rounded-lg bg-indigo-100 dark:bg-edwin-dark-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-edwin-dark-500 transition-colors"
                        >
                          {isPlaying ? (
                            <Pause className="w-5 h-5" />
                          ) : (
                            <Play className="w-5 h-5" />
                          )}
                        </button>
                        <button
                          onClick={skipToEnd}
                          className="p-2 rounded-lg bg-indigo-100 dark:bg-edwin-dark-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-edwin-dark-500 transition-colors"
                        >
                          <SkipForward className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Vitesse:</span>
                        <input
                          type="range"
                          min="0.5"
                          max="2"
                          step="0.5"
                          value={playbackSpeed}
                          onChange={(e) => setPlaybackSpeed(Number(e.target.value))}
                          className="w-24"
                        />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{playbackSpeed}x</span>
                      </div>
                    </div>
                    <div className="relative">
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                        <code className="font-mono text-sm">{currentCode}</code>
                      </pre>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}