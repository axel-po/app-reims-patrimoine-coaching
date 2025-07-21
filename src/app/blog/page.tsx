import React from "react";
import CardArticle, {
  ArticleProps,
} from "@/app/(public)/_components/blog/CardArticle";
import Nav from "@/app/(public)/_components/nav/Nav";

export default function BlogPage() {
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
    {
      id: "investir-bourse-debutant",
      title: "Comment investir en bourse quand on est débutant",
      excerpt:
        "Guide pratique pour faire ses premiers pas en bourse sans prendre de risques inconsidérés. Stratégies, conseils et erreurs à éviter.",
      category: "Investissement",
      date: "5 Mars 2023",
      author: "Marie Dupont",
      authorImage: "/coaches/coach4.jpg",
      readTime: "12 min",
      image: "/blog/bourse-debutant.jpg",
    },
    {
      id: "preparer-retraite-30ans",
      title: "Préparer sa retraite dès 30 ans : pourquoi et comment",
      excerpt:
        "Plus tôt vous commencez à préparer votre retraite, plus vous maximisez l'effet des intérêts composés. Découvrez les stratégies adaptées aux trentenaires.",
      category: "Retraite",
      date: "18 Février 2023",
      author: "Sophie Martin",
      authorImage: "/coaches/coach2.jpg",
      readTime: "9 min",
      image: "/blog/retraite-jeune.jpg",
    },
    {
      id: "immobilier-locatif-rentabilite",
      title: "Immobilier locatif : maximiser sa rentabilité",
      excerpt:
        "Analyse des facteurs clés pour optimiser la rentabilité de vos investissements locatifs : emplacement, fiscalité, gestion locative et plus encore.",
      category: "Immobilier",
      date: "7 Janvier 2023",
      author: "Alexandre Dubois",
      authorImage: "/coaches/coach1.jpg",
      readTime: "11 min",
      image: "/blog/immobilier-locatif.jpg",
    },
  ];

  const categoriesMap = articles.reduce((acc, article) => {
    if (!acc[article.category]) {
      acc[article.category] = [];
    }
    acc[article.category].push(article);
    return acc;
  }, {} as Record<string, ArticleProps[]>);

  const categories = Object.keys(categoriesMap).sort();

  return (
    <>
      <Nav />
      <main className="pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              <span className="relative inline-block">
                Notre Blog
                <div className="absolute -bottom-1 left-0 right-0 h-3 bg-indigo-100 -z-10"></div>
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explorez nos articles rédigés par des experts pour vous guider
              dans la construction et l&apos;optimisation de votre patrimoine.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-16">
            <button className="px-5 py-2 rounded-full bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-700 transition-colors">
              Tous
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className="px-5 py-2 rounded-full border border-gray-300 text-gray-700 font-medium text-sm hover:border-indigo-600 hover:text-indigo-600 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <CardArticle key={article.id} article={article} />
            ))}
          </div>

          <div className="flex justify-center mt-16">
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-indigo-600 hover:text-indigo-600 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium">
                1
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 font-medium hover:border-indigo-600 hover:text-indigo-600 transition-colors">
                2
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 font-medium hover:border-indigo-600 hover:text-indigo-600 transition-colors">
                3
              </button>
              <span className="w-10 h-10 flex items-center justify-center text-gray-500">
                ...
              </span>
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 font-medium hover:border-indigo-600 hover:text-indigo-600 transition-colors">
                8
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-indigo-600 hover:text-indigo-600 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
