import React from "react";
import Link from "next/link";
import CardArticle, { ArticleProps } from "./CardArticle";

const BlogSection = () => {
  const articles: ArticleProps[] = [
    {
      id: "comprendre-assurance-vie",
      title: "Comprendre l'assurance vie : guide complet pour les 25-35 ans",
      excerpt:
        "Découvrez comment l'assurance vie peut devenir votre meilleur allié pour construire votre patrimoine à long terme et optimiser votre fiscalité.",
      category: "Patrimoine",
      date: "15 Juin 2023",
      author: "Sophie Martin",
      authorImage: "/coaches/coach2.jpg",
      readTime: "8 min",
      image: "/blog/assurance-vie.jpg",
    },
    {
      id: "scpi-pour-debutants",
      title:
        "SCPI : comment débuter et diversifier votre patrimoine immobilier",
      excerpt:
        "Les SCPI offrent une opportunité d'investissement immobilier sans les contraintes de gestion. Découvrez comment les intégrer à votre stratégie patrimoniale.",
      category: "Immobilier",
      date: "3 Mai 2023",
      author: "Alexandre Dubois",
      authorImage: "/coaches/coach1.jpg",
      readTime: "6 min",
      image: "/blog/scpi.jpg",
    },
    {
      id: "optimisation-fiscale-jeunes-actifs",
      title: "Stratégies d'optimisation fiscale pour jeunes actifs",
      excerpt:
        "Décryptage des dispositifs d'optimisation fiscale les plus pertinents pour les jeunes actifs qui souhaitent maximiser leur épargne et préparer l'avenir.",
      category: "Fiscalité",
      date: "20 Avril 2023",
      author: "Thomas Leroy",
      authorImage: "/coaches/coach3.jpg",
      readTime: "10 min",
      image: "/blog/optimisation-fiscale.jpg",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-gray-50 to-white -z-10"></div>
      <div className="absolute top-[30%] right-[15%] w-[300px] h-[300px] rounded-full bg-indigo-100/40 blur-3xl -z-10"></div>
      <div className="absolute bottom-[10%] left-[5%] w-[250px] h-[250px] rounded-full bg-blue-100/30 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="flex items-center mb-3">
            <div className="h-px w-10 bg-indigo-400"></div>
            <span className="mx-4 text-sm font-medium text-indigo-600 uppercase tracking-wider">
              Actualités & Conseils
            </span>
            <div className="h-px w-10 bg-indigo-400"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 max-w-3xl">
            <span className="relative">
              Découvrez nos
              <div className="absolute -bottom-1 left-0 right-0 h-2 bg-indigo-100 -z-10"></div>
            </span>{" "}
            <span className="text-indigo-600">derniers articles</span>
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl">
            Consultez nos articles rédigés par nos experts pour vous guider dans
            la construction et l&apos;optimisation de votre patrimoine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {articles.map((article) => (
            <CardArticle key={article.id} article={article} />
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/blog" className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full transform translate-y-1.5 translate-x-1.5 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform"></div>
            <div className="relative px-8 py-3 bg-white border-2 border-indigo-600 text-indigo-600 font-medium rounded-full group-hover:bg-indigo-600 group-hover:text-white transition-all flex items-center">
              <span>Voir tous les articles</span>
              <svg
                className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
