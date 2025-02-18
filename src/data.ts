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
  {
    id: '4',
    name: 'TP4 - Intelligence Artificielle',
    description: 'Système de recommandation avec Python - Évaluation Finale',
    students: [19, 20, 21, 22, 23, 24, 25]
  }
];

export const codeChanges: { [key: number]: CodeChange[] } = {
  1: [
    {
      id: 1,
      timestamp: new Date('2024-02-18T10:00:00').getTime(),
      description: 'Implémentation de la fonction de recherche',
      linesAdded: 15,
      linesRemoved: 0,
      alerts: ['AI'],
      code: `function searchProducts(query) {
  // Utilisation d'une regex complexe pour la recherche
  const regex = new RegExp(\`^.*\${query}.*$\`, 'i');
  
  // Algorithme de recherche sophistiqué
  return products.filter(product => {
    const score = calculateMatchScore(product, query);
    return score > 0.8;
  }).sort((a, b) => {
    return calculateMatchScore(b, query) - calculateMatchScore(a, query);
  });
}`
    },
    {
      id: 2,
      timestamp: new Date('2024-02-18T10:30:00').getTime(),
      description: 'Correction des bugs de recherche',
      linesAdded: 5,
      linesRemoved: 2,
      code: `function searchProducts(query) {
  // Version simplifiée et plus maintenable
  return products.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase())
  );
}`
    }
  ],
  2: [
    {
      id: 3,
      timestamp: new Date('2024-02-18T11:00:00').getTime(),
      description: 'Premier essai d\'algorithme de tri',
      linesAdded: 10,
      linesRemoved: 0,
      alerts: ['DIFFICULTY'],
      code: `function bubbleSort(arr) {
  // Tentative de tri à bulles avec des erreurs
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      if(arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}`
    },
    {
      id: 4,
      timestamp: new Date('2024-02-18T11:30:00').getTime(),
      description: 'Correction de l\'algorithme de tri',
      linesAdded: 12,
      linesRemoved: 10,
      code: `function bubbleSort(arr) {
  // Version corrigée avec optimisation
  for(let i = 0; i < arr.length - 1; i++) {
    for(let j = 0; j < arr.length - i - 1; j++) {
      if(arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}`
    }
  ],
  3: [
    {
      id: 5,
      timestamp: new Date('2024-02-18T14:00:00').getTime(),
      description: 'Implémentation de l\'authentification',
      linesAdded: 20,
      linesRemoved: 0,
      alerts: ['AI'],
      code: `async function authenticateUser(email, password) {
  // Implémentation complexe générée par IA
  const hashedPassword = await bcrypt.hash(password, 10);
  const token = jwt.sign(
    { email, role: 'user' },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
  
  return {
    token,
    user: await User.findOne({ email })
  };
}`
    }
  ]
};