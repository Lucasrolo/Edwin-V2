export interface Student {
  id: number;
  name: string;
  avatar: string;
}

export interface CodeChange {
  id: number;
  timestamp: number;
  description: string;
  linesAdded: number;
  linesRemoved: number;
  code: string;
  alerts?: ('AI' | 'DIFFICULTY')[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  students: number[];
}