import React from 'react';
import { GraduationCap, Users } from 'lucide-react';

interface RoleSelectorProps {
  currentRole: 'student' | 'teacher';
  onRoleChange: (role: 'student' | 'teacher') => void;
}

export function RoleSelector({ currentRole, onRoleChange }: RoleSelectorProps) {
  return (
    <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-lg">
      <button
        onClick={() => onRoleChange('teacher')}
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
          currentRole === 'teacher'
            ? 'bg-white/20 text-white'
            : 'text-white/70 hover:text-white hover:bg-white/10'
        }`}
      >
        <GraduationCap className="w-5 h-5" />
        <span>Enseignant</span>
      </button>
      <button
        onClick={() => onRoleChange('student')}
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
          currentRole === 'student'
            ? 'bg-white/20 text-white'
            : 'text-white/70 hover:text-white hover:bg-white/10'
        }`}
      >
        <Users className="w-5 h-5" />
        <span>Élève</span>
      </button>
    </div>
  );
}
