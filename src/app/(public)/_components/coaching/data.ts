import { FeatureProps, TestimonialProps } from "./types";

export const features: FeatureProps[] = [
  {
    title: "Analyse sur mesure",
    description:
      "Une étude approfondie de votre situation et de vos objectifs pour créer un plan d'investissement personnalisé.",
    iconSvg: `<svg class="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>`,
  },
  {
    title: "Coaching premium",
    description:
      "Des sessions individuelles avec nos experts pour vous guider et répondre à toutes vos questions en temps réel.",
    iconSvg: `<svg class="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>`,
  },
  {
    title: "Modules avancés",
    description:
      "Accédez à des contenus exclusifs couvrant tous les aspects de l'investissement et de la gestion de patrimoine.",
    iconSvg: `<svg class="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>`,
  },
  {
    title: "Outils intelligents",
    description:
      "Des simulateurs et outils d'analyse exclusifs pour visualiser vos progrès et optimiser votre stratégie.",
    iconSvg: `<svg class="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
    </svg>`,
  },
  {
    title: "Communauté privée",
    description:
      "Échangez avec d'autres investisseurs et apprenez de leurs expériences dans notre communauté exclusive.",
    iconSvg: `<svg class="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>`,
  },
  {
    title: "Suivi des résultats",
    description:
      "Mesurez vos progrès avec des tableaux de bord personnalisés et des rapports détaillés sur vos performances.",
    iconSvg: `<svg class="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>`,
  },
];

export const testimonial: TestimonialProps = {
  quote:
    "Grâce à ce coaching, j'ai complètement transformé ma vision de l'investissement. En moins d'un an, j'ai pu construire un portefeuille diversifié et voir des résultats concrets.",
  author: {
    name: "Marie Laporte",
    initials: "ML",
    role: "Cliente depuis 2022",
  },
};
