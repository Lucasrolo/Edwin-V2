/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        edwin: {
          primary: '#6366F1',    // Un violet-bleu vif pour l'identité principale
          secondary: '#22D3EE',  // Un cyan lumineux pour les accents
          accent: '#F471B5',     // Un rose vif pour les éléments d'attention
          dark: {
            DEFAULT: '#1E293B',
            600: '#334155',
            700: '#1E293B',
            800: '#0F172A'
          },
          light: '#F8FAFC',      // Un blanc légèrement bleuté pour le fond
          success: '#34D399',    // Un vert pour les succès
          warning: '#FBBF24',    // Un jaune pour les alertes
          error: '#FB7185',      // Un rouge pour les erreurs
          gray: {
            100: '#F1F5F9',
            200: '#E2E8F0',
            300: '#CBD5E1',
            400: '#94A3B8',
            500: '#64748B',
            600: '#475569',
            700: '#334155',
            800: '#1E293B',
            900: '#0F172A',
          }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-dots': 'radial-gradient(circle, #6366F1 1px, transparent 1px)',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
