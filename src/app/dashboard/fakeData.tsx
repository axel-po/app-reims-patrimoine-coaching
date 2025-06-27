// Types
export interface Lesson {
  id: number;
  title: string;
  completed: boolean;
  duration: string;
}

// Static data for modules
export const courseData = {
  title: "Investissement & Patrimoine",
  description:
    "Maîtrisez la gestion de patrimoine et l'investissement de A à Z",
  instructor: "Marie Dubois",
  rating: 4.9,
  totalLessons: 42,
  duration: "6h 15min",
  enrolled: 248,
  modules: [
    {
      id: 1,
      title: "01: Les Fondamentaux",
      duration: "45min",
      lessons: [
        {
          id: 1,
          title: "Introduction au patrimoine",
          completed: true,
          duration: "8min",
        },
        {
          id: 2,
          title: "Définir ses objectifs financiers",
          completed: false,
          duration: "12min",
        },
        {
          id: 3,
          title: "Profil d'investisseur",
          completed: false,
          duration: "10min",
        },
        {
          id: 4,
          title: "Les différents types d'actifs",
          completed: false,
          duration: "15min",
        },
      ],
    },
    {
      id: 2,
      title: "02: Épargne et Liquidités",
      duration: "1h 05min",
      lessons: [
        {
          id: 5,
          title: "Livret A, LDDS et autres livrets",
          completed: false,
          duration: "18min",
        },
        {
          id: 6,
          title: "Comptes à terme et dépôts",
          completed: false,
          duration: "15min",
        },
        {
          id: 7,
          title: "Fonds euros et capital garanti",
          completed: false,
          duration: "22min",
        },
        {
          id: 8,
          title: "Stratégie de constitution d'épargne",
          completed: false,
          duration: "10min",
        },
      ],
    },
    {
      id: 3,
      title: "03: Assurance Vie",
      duration: "1h 30min",
      lessons: [
        {
          id: 9,
          title: "Fonctionnement de l'assurance vie",
          completed: false,
          duration: "20min",
        },
        {
          id: 10,
          title: "Fonds euros vs unités de compte",
          completed: false,
          duration: "25min",
        },
        {
          id: 11,
          title: "Fiscalité de l'assurance vie",
          completed: false,
          duration: "18min",
        },
        {
          id: 12,
          title: "Transmission et succession",
          completed: false,
          duration: "15min",
        },
        {
          id: 13,
          title: "Choisir son contrat d'assurance vie",
          completed: false,
          duration: "12min",
        },
      ],
    },
    {
      id: 4,
      title: "04: Bourse et Actions",
      duration: "1h 45min",
      lessons: [
        {
          id: 14,
          title: "Introduction à la bourse",
          completed: false,
          duration: "20min",
        },
        {
          id: 15,
          title: "PEA et compte-titres",
          completed: false,
          duration: "25min",
        },
        {
          id: 16,
          title: "Analyse fondamentale",
          completed: false,
          duration: "30min",
        },
        {
          id: 17,
          title: "ETF et diversification",
          completed: false,
          duration: "18min",
        },
        {
          id: 18,
          title: "Stratégies d'investissement",
          completed: false,
          duration: "12min",
        },
      ],
    },
    {
      id: 5,
      title: "05: Immobilier",
      duration: "2h 10min",
      lessons: [
        {
          id: 19,
          title: "Résidence principale",
          completed: false,
          duration: "25min",
        },
        {
          id: 20,
          title: "Investissement locatif",
          completed: false,
          duration: "35min",
        },
        {
          id: 21,
          title: "SCPI et crowdfunding",
          completed: false,
          duration: "20min",
        },
        {
          id: 22,
          title: "Fiscalité immobilière",
          completed: false,
          duration: "30min",
        },
        {
          id: 23,
          title: "Financement et crédit",
          completed: false,
          duration: "20min",
        },
      ],
    },
    {
      id: 6,
      title: "06: Retraite et Prévoyance",
      duration: "55min",
      lessons: [
        {
          id: 24,
          title: "Système de retraite français",
          completed: false,
          duration: "20min",
        },
        {
          id: 25,
          title: "PER et épargne retraite",
          completed: false,
          duration: "25min",
        },
        {
          id: 26,
          title: "Prévoyance et assurances",
          completed: false,
          duration: "10min",
        },
      ],
    },
    {
      id: 7,
      title: "07: Fiscalité et Optimisation",
      duration: "1h 15min",
      lessons: [
        {
          id: 27,
          title: "Fiscalité des placements",
          completed: false,
          duration: "30min",
        },
        {
          id: 28,
          title: "Optimisation fiscale légale",
          completed: false,
          duration: "25min",
        },
        {
          id: 29,
          title: "Déclaration d'impôts",
          completed: false,
          duration: "20min",
        },
      ],
    },
  ],
};
