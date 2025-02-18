import { Project, Student, CodeChange } from './types';

export const students: Student[] = [
  {
    id: 1,
    name: "Emma Martin",
    avatar: "https://ui-avatars.com/api/?name=Emma+Martin&background=random"
  },
  {
    id: 2,
    name: "Lucas Dubois",
    avatar: "https://ui-avatars.com/api/?name=Lucas+Dubois&background=random"
  },
  {
    id: 3,
    name: "Sophie Bernard",
    avatar: "https://ui-avatars.com/api/?name=Sophie+Bernard&background=random"
  },
  {
    id: 4,
    name: "Thomas Petit",
    avatar: "https://ui-avatars.com/api/?name=Thomas+Petit&background=random"
  },
  {
    id: 5,
    name: "Julie Moreau",
    avatar: "https://ui-avatars.com/api/?name=Julie+Moreau&background=random"
  },
  {
    id: 6,
    name: "Antoine Lefebvre",
    avatar: "https://ui-avatars.com/api/?name=Antoine+Lefebvre&background=random"
  },
  {
    id: 7,
    name: "Marie Rousseau",
    avatar: "https://ui-avatars.com/api/?name=Marie+Rousseau&background=random"
  },
  {
    id: 8,
    name: "Hugo Moreau",
    avatar: "https://ui-avatars.com/api/?name=Hugo+Moreau&background=random"
  },
  {
    id: 9,
    name: "Camille Laurent",
    avatar: "https://ui-avatars.com/api/?name=Camille+Laurent&background=random"
  },
  {
    id: 10,
    name: "Paul Girard",
    avatar: "https://ui-avatars.com/api/?name=Paul+Girard&background=random"
  },
  {
    id: 11,
    name: "Sophie Mercier",
    avatar: "https://ui-avatars.com/api/?name=Sophie+Mercier&background=random"
  },
  {
    id: 12,
    name: "Alexandre Dumont",
    avatar: "https://ui-avatars.com/api/?name=Alexandre+Dumont&background=random"
  },
  {
    id: 13,
    name: "Léa Fournier",
    avatar: "https://ui-avatars.com/api/?name=Léa+Fournier&background=random"
  },
  {
    id: 14,
    name: "Nicolas Roux",
    avatar: "https://ui-avatars.com/api/?name=Nicolas+Roux&background=random"
  },
  {
    id: 15,
    name: "Chloé Simon",
    avatar: "https://ui-avatars.com/api/?name=Chloé+Simon&background=random"
  },
  {
    id: 16,
    name: "Maxime Leroy",
    avatar: "https://ui-avatars.com/api/?name=Maxime+Leroy&background=random"
  },
  {
    id: 17,
    name: "Inès Dupont",
    avatar: "https://ui-avatars.com/api/?name=Inès+Dupont&background=random"
  },
  {
    id: 18,
    name: "Gabriel Morin",
    avatar: "https://ui-avatars.com/api/?name=Gabriel+Morin&background=random"
  },
  {
    id: 19,
    name: "Mathilde Blanc",
    avatar: "https://ui-avatars.com/api/?name=Mathilde+Blanc&background=random"
  },
  {
    id: 20,
    name: "Théo Lambert",
    avatar: "https://ui-avatars.com/api/?name=Théo+Lambert&background=random"
  },
  {
    id: 21,
    name: "Laura Martin",
    avatar: "https://ui-avatars.com/api/?name=Laura+Martin&background=random"
  },
  {
    id: 22,
    name: "Romain Faure",
    avatar: "https://ui-avatars.com/api/?name=Romain+Faure&background=random"
  },
  {
    id: 23,
    name: "Eva Gauthier",
    avatar: "https://ui-avatars.com/api/?name=Eva+Gauthier&background=random"
  },
  {
    id: 24,
    name: "Louis Perrin",
    avatar: "https://ui-avatars.com/api/?name=Louis+Perrin&background=random"
  },
  {
    id: 25,
    name: "Alice Roussel",
    avatar: "https://ui-avatars.com/api/?name=Alice+Roussel&background=random"
  }
];

export const projects: Project[] = [
  {
    id: '1',
    name: 'TP1 - Programmation Fonctionnelle OCaml',
    description: 'Implémentation du Jeu de la Vie de Conway en OCaml - Devoir Noté',
    students: [1, 2, 3, 4, 5, 6]
  },
  {
    id: '2',
    name: 'TP2 - Architecture Web Backend',
    description: 'Développement d\'une API REST avec Node.js - Contrôle Continu',
    students: [7, 8, 9, 10, 11, 12]
  },
  {
    id: '3',
    name: 'TP3 - Développement Mobile',
    description: 'Création d\'une application mobile de gestion de tâches - Projet Final',
    students: [13, 14, 15, 16, 17, 18]
  },
  