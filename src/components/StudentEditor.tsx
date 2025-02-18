import React, { useState, useEffect } from 'react';
import { AlertCircle, Lightbulb, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface EdwinMessage {
  type: 'warning' | 'hint';
  content: string;
  timestamp: number;
}

export function StudentEditor() {
  const [code, setCode] = useState('');
  const [messages, setMessages] = useState<EdwinMessage[]>([]);
  const [showChatbot, setShowChatbot] = useState(false);

  // Simuler l'analyse du code
  useEffect(() => {
    const lastChange = Date.now();
    
    // Détecter les grands blocs de code collés
    if (code.length > 200 && code.split('\n').length > 10) {
      const timeSinceLastChange = Date.now() - lastChange;
      if (timeSinceLastChange < 1000) { // Si beaucoup de code ajouté rapidement
        addMessage({
          type: 'warning',
          content: "J'ai remarqué que vous avez collé un grand bloc de code. N'oubliez pas que l'utilisation excessive d'IA peut être détectée par votre professeur. Essayez de comprendre et d'écrire le code par vous-même !",
        });
      }
    }

    // Détecter les difficultés potentielles
    if (code.includes('for') || code.includes('while')) {
      const hasCorrectSyntax = /for\s*\([^)]+\)/.test(code) || /while\s*\([^)]+\)/.test(code);
      if (!hasCorrectSyntax) {
        addMessage({
          type: 'hint',
          content: "Je vois que vous travaillez sur des boucles. N'oubliez pas la syntaxe : for (initialisation; condition; incrémentation) { ... }",
        });
      }
    }
  }, [code]);

  const addMessage = (message: Omit<EdwinMessage, 'timestamp'>) => {
    setMessages(prev => [...prev, { ...message, timestamp: Date.now() }]);
    setShowChatbot(true);
  };

  return (
    <div className="flex h-[calc(100vh-12rem)]">
      {/* Éditeur */}
      <div className="flex-1 bg-edwin-dark-700 rounded-lg overflow-hidden">
        <div className="bg-edwin-dark-800 px-4 py-2 border-b border-edwin-dark-600">
          <span className="text-white">main.py</span>
        </div>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-[calc(100%-2.5rem)] bg-edwin-dark-700 text-white font-mono p-4 resize-none focus:outline-none"
          placeholder="Écrivez votre code ici..."
        />
      </div>

      {/* Assistant Edwin */}
      <AnimatePresence>
        {showChatbot && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            className="w-80 ml-4 bg-white dark:bg-edwin-dark-700 rounded-lg overflow-hidden shadow-lg"
          >
            <div className="bg-edwin-primary px-4 py-3 flex items-center justify-between">
              <span className="text-white font-medium">Assistant Edwin</span>
              <button
                onClick={() => setShowChatbot(false)}
                className="text-white/70 hover:text-white"
              >
                ×
              </button>
            </div>
            <div className="p-4 space-y-4 h-[calc(100%-4rem)] overflow-y-auto">
              {messages.map((msg, index) => (
                <motion.div
                  key={msg.timestamp}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className={`p-3 rounded-lg flex items-start space-x-3 ${
                    msg.type === 'warning'
                      ? 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200'
                      : 'bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200'
                  }`}
                >
                  {msg.type === 'warning' ? (
                    <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  ) : (
                    <Lightbulb className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{msg.content}</p>
                </motion.div>
              ))}
            </div>
            <div className="border-t border-gray-200 dark:border-edwin-dark-600 p-3">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Posez une question à Edwin..."
                  className="flex-1 px-3 py-1.5 rounded-md bg-gray-100 dark:bg-edwin-dark-800 text-sm focus:outline-none focus:ring-2 focus:ring-edwin-primary"
                />
                <button className="p-1.5 rounded-md text-edwin-primary hover:bg-edwin-primary/10">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
