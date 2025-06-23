import React from "react";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  author: string;
  authorTitle: string;
  authorBio: string;
  authorImage: string;
  readTime: string;
  image: string;
}

const articles: Article[] = [
  {
    id: "comprendre-assurance-vie",
    title: "Comprendre l'assurance vie : guide complet pour les 25-35 ans",
    excerpt:
      "Découvrez comment l'assurance vie peut devenir votre meilleur allié pour construire votre patrimoine à long terme et optimiser votre fiscalité.",
    content: `
      <h2>Pourquoi l'assurance vie est-elle incontournable ?</h2>
      <p>L'assurance vie est un placement financier flexible qui offre de nombreux avantages, particulièrement pour les jeunes adultes qui commencent à construire leur patrimoine. À la fois outil d'épargne, d'investissement et de transmission, elle constitue souvent la base d'une stratégie patrimoniale solide.</p>
      <p>Pour les 25-35 ans, c'est le moment idéal pour commencer à investir dans une assurance vie, car le temps joue en votre faveur pour bénéficier des effets de la capitalisation.</p>
      
      <h2>Les avantages fiscaux à connaître</h2>
      <p>L'un des principaux attraits de l'assurance vie réside dans son cadre fiscal privilégié :</p>
      <ul>
        <li>Après 8 ans de détention, vous bénéficiez d'un abattement fiscal de 4 600 € (9 200 € pour un couple) sur les gains lors des retraits</li>
        <li>En cas de décès, vos bénéficiaires profitent d'un abattement de 152 500 € par bénéficiaire sur les capitaux transmis</li>
        <li>Vous pouvez effectuer des retraits partiels à tout moment, offrant une flexibilité que peu de placements proposent</li>
      </ul>
      
      <h2>Comment choisir son contrat d'assurance vie ?</h2>
      <p>Plusieurs critères doivent guider votre choix :</p>
      <ul>
        <li>Les frais (sur versements, de gestion, d'arbitrage)</li>
        <li>La diversité des supports d'investissement proposés</li>
        <li>Les options de gestion disponibles (gestion pilotée, ETF, SCPI...)</li>
        <li>La réputation et la solidité de l'assureur</li>
      </ul>
      
      <h2>Quelle stratégie adopter à 30 ans ?</h2>
      <p>À 30 ans, vous avez généralement un horizon d'investissement long et une capacité à prendre des risques plus importante. Une stratégie pertinente consiste souvent à privilégier les unités de compte avec une portion significative d'actions pour rechercher de la performance, tout en conservant une part de fonds en euros pour sécuriser une partie de votre capital.</p>
      <p>L'essentiel est de définir vos objectifs (achat immobilier, préparation de la retraite, constitution d'un capital) et d'adapter la composition de votre contrat en conséquence.</p>
    `,
    category: "Patrimoine",
    date: "15 Juin 2023",
    author: "Sophie Martin",
    authorTitle: "Conseillère en gestion de patrimoine",
    authorBio:
      "Diplômée d'un Master en Gestion de Patrimoine, Sophie accompagne depuis 8 ans les jeunes actifs dans l'optimisation de leurs placements financiers.",
    authorImage: "/coaches/coach2.jpg",
    readTime: "8 min",
    image: "/blog/assurance-vie.jpg",
  },
  {
    id: "scpi-pour-debutants",
    title: "SCPI : comment débuter et diversifier votre patrimoine immobilier",
    excerpt:
      "Les SCPI offrent une opportunité d'investissement immobilier sans les contraintes de gestion. Découvrez comment les intégrer à votre stratégie patrimoniale.",
    content: `
      <h2>Qu'est-ce qu'une SCPI exactement ?</h2>
      <p>Les Sociétés Civiles de Placement Immobilier (SCPI) sont des véhicules d'investissement qui permettent d'acquérir collectivement des biens immobiliers locatifs. En achetant des parts de SCPI, vous devenez indirectement propriétaire d'une fraction d'un patrimoine immobilier diversifié et géré par des professionnels.</p>
      
      <h2>Pourquoi investir en SCPI quand on débute ?</h2>
      <p>L'investissement en SCPI présente plusieurs avantages pour les débutants :</p>
      <ul>
        <li>Accessibilité : vous pouvez commencer avec quelques milliers d'euros</li>
        <li>Diversification : votre capital est réparti sur plusieurs biens</li>
        <li>Gestion déléguée : aucune contrainte de gestion locative</li>
        <li>Rendement : généralement entre 4% et 6% par an</li>
        <li>Investissement immobilier sans apport important ni crédit immobilier</li>
      </ul>
      
      <h2>Comment sélectionner les bonnes SCPI ?</h2>
      <p>Pour choisir vos SCPI, analysez ces critères :</p>
      <ul>
        <li>Le taux de distribution sur valeur de marché (TDVM) sur plusieurs années</li>
        <li>La typologie des actifs (bureaux, commerces, santé, logistique...)</li>
        <li>La diversification géographique (Paris, régions, Europe...)</li>
        <li>Les frais (souscription, gestion)</li>
        <li>Le taux d'occupation financier</li>
        <li>L'ancienneté et la taille de la SCPI</li>
      </ul>
      
      <h2>Quelle place pour les SCPI dans votre patrimoine ?</h2>
      <p>Les SCPI s'intègrent parfaitement dans une stratégie de diversification patrimoniale. Pour les jeunes investisseurs, elles peuvent représenter entre 20% et 30% d'un patrimoine équilibré, en complément d'autres placements comme l'assurance vie, le PEA ou l'immobilier direct.</p>
      <p>Vous pouvez également détenir des SCPI au sein d'une assurance vie ou d'un PER pour bénéficier d'avantages fiscaux supplémentaires.</p>
    `,
    category: "Immobilier",
    date: "3 Mai 2023",
    author: "Alexandre Dubois",
    authorTitle: "Expert en investissement patrimonial",
    authorBio:
      "Avec plus de 15 ans d'expérience dans l'immobilier, Alexandre conseille ses clients sur les stratégies d'investissement locatif et en SCPI.",
    authorImage: "/coaches/coach1.jpg",
    readTime: "6 min",
    image: "/blog/scpi.jpg",
  },
  {
    id: "optimisation-fiscale-jeunes-actifs",
    title: "Stratégies d'optimisation fiscale pour jeunes actifs",
    excerpt:
      "Décryptage des dispositifs d'optimisation fiscale les plus pertinents pour les jeunes actifs qui souhaitent maximiser leur épargne et préparer l'avenir.",
    content: `
      <h2>Pourquoi s'intéresser à l'optimisation fiscale dès le début de carrière ?</h2>
      <p>Contrairement aux idées reçues, l'optimisation fiscale n'est pas réservée aux hauts revenus ou aux personnes proches de la retraite. Adopter une stratégie d'optimisation fiscale dès le début de votre vie active vous permet de maximiser votre capacité d'épargne et d'investissement, créant ainsi un effet boule de neige sur votre patrimoine.</p>
      
      <h2>Les dispositifs d'épargne fiscalement avantageux</h2>
      <p>Plusieurs enveloppes fiscales méritent votre attention :</p>
      <ul>
        <li><strong>Le Plan d'Épargne Retraite (PER)</strong> : les versements sont déductibles de votre revenu imposable, dans certaines limites. Idéal si vous êtes imposé à 30% ou plus.</li>
        <li><strong>Le Plan d'Épargne en Actions (PEA)</strong> : exonération d'impôt sur les plus-values après 5 ans (seuls les prélèvements sociaux s'appliquent).</li>
        <li><strong>L'assurance vie</strong> : fiscalité allégée sur les gains après 8 ans et transmission optimisée.</li>
        <li><strong>Le Plan d'Épargne Entreprise (PEE)</strong> : épargne défiscalisée constituée au sein de votre entreprise, disponible après 5 ans.</li>
      </ul>
      
      <h2>Les investissements défiscalisants accessibles aux jeunes actifs</h2>
      <p>Certains dispositifs permettent de réduire directement votre impôt sur le revenu :</p>
      <ul>
        <li><strong>Loi Pinel</strong> : réduction d'impôt pour l'achat d'un logement neuf destiné à la location.</li>
        <li><strong>FCPI/FIP</strong> : investissement dans des PME innovantes ou régionales avec réduction d'impôt de 25%.</li>
        <li><strong>Investissement en SCPI fiscales</strong> : SCPI Pinel, SCPI Malraux, SCPI Déficit Foncier.</li>
      </ul>
      
      <h2>Bâtir une stratégie progressive</h2>
      <p>L'optimisation fiscale doit s'inscrire dans une stratégie patrimoniale globale et évolutive :</p>
      <ol>
        <li>Commencez par maximiser vos enveloppes d'épargne défiscalisées</li>
        <li>Construisez progressivement un patrimoine immobilier avec une fiscalité optimisée</li>
        <li>Diversifiez vos investissements tout en tenant compte de votre profil fiscal</li>
        <li>Adaptez votre stratégie à l'évolution de vos revenus et de votre situation familiale</li>
      </ol>
      <p>L'important est de ne pas faire de la fiscalité le seul critère de décision, mais de l'intégrer dans une réflexion plus large sur vos objectifs patrimoniaux.</p>
    `,
    category: "Fiscalité",
    date: "20 Avril 2023",
    author: "Thomas Leroy",
    authorTitle: "Analyste financier senior",
    authorBio:
      "Spécialisé en fiscalité du patrimoine, Thomas aide ses clients à optimiser leur situation fiscale tout en construisant un patrimoine diversifié et résilient.",
    authorImage: "/coaches/coach3.jpg",
    readTime: "10 min",
    image: "/blog/optimisation-fiscale.jpg",
  },
];

const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find((article) => article.id === slug);
};

const getSimilarArticles = (currentSlug: string): Article[] => {
  return articles.filter((article) => article.id !== currentSlug).slice(0, 3);
};

const NewsletterSignup = () => {
  return (
    <div className="sticky top-28 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-md relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 to-purple-50/70 opacity-80"></div>

      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-400"></div>
      <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-purple-500/10 rounded-full blur-lg"></div>

      <div className="relative z-10">
        <div className="mb-5">
          <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Newsletter
            </span>
          </h3>
          <p className="text-sm text-gray-600">
            Recevez nos conseils patrimoine et actualités directement dans votre
            boîte mail.
          </p>
        </div>
        <form className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Votre email"
              className="w-full px-4 py-3 bg-white/90 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 outline-none text-sm transition-colors"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full relative overflow-hidden group py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium hover:shadow-lg transition-all duration-300"
            >
              <span className="relative z-10 flex items-center justify-center">
                S&apos;inscrire
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>
        </form>
        <div className="mt-4 text-xs text-gray-500 flex items-center">
          <svg
            className="h-3 w-3 mr-1 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>Désinscription en un clic</span>
        </div>
      </div>
    </div>
  );
};

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <>
        <div className="max-w-3xl mx-auto px-6 py-40 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Article non trouvé
          </h1>
          <p className="text-gray-600 mb-8">
            L&apos;article que vous recherchez n&apos;existe pas ou a été
            déplacé.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 relative overflow-hidden group rounded-tl-xl rounded-br-xl"
          >
            <div className="relative z-10 px-5 py-2.5 font-medium text-sm text-white rounded-tl-xl rounded-br-xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-xl">
              <span className="relative z-20 flex items-center">
                <svg
                  className="mr-2 w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Retour aux articles
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left z-10"></div>
            </div>
            <div className="absolute inset-0 rounded-tl-xl rounded-br-xl bg-purple-600/20 translate-x-1 translate-y-1 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform"></div>
          </Link>
        </div>
      </>
    );
  }

  const similarArticles = getSimilarArticles(slug);

  return (
    <>
      <div className="w-full pt-32 pb-20 relative overflow-hidden bg-gray-50">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-400 z-10"></div>
        <div className="absolute -top-[30%] -right-[10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-[30%] -left-[10%] w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"></div>

        <div className="absolute top-20 left-[10%] w-8 h-8 rounded-full bg-blue-500/10"></div>
        <div className="absolute top-40 right-[15%] w-12 h-12 rounded-full bg-purple-500/10"></div>
        <div className="absolute bottom-10 right-[30%] w-16 h-16 rounded-full bg-cyan-400/10"></div>

        <div className="container max-w-screen-xl mx-auto px-4 relative z-10">
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center group"
                >
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span className="ml-1.5 relative">
                    Accueil
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>

              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-gray-400 mx-1"
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
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-blue-600 transition-colors group"
                >
                  <span className="relative">
                    Blog
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>

              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-gray-400 mx-1"
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
                <Link
                  href={`/blog?category=${article.category}`}
                  className="text-gray-600 hover:text-blue-600 transition-colors group"
                >
                  <span className="relative">
                    {article.category}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>

              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-gray-400 mx-1"
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
                <span
                  className="text-gray-500 truncate max-w-[150px] sm:max-w-xs"
                  aria-current="page"
                >
                  {article.title}
                </span>
              </li>
            </ol>

            {/* Badge de catégorie flottant */}
            <div className="mt-4 inline-flex items-center">
              <Link
                href={`/blog?category=${article.category}`}
                className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 text-gray-800 px-4 py-1.5 rounded-full text-xs font-medium flex items-center group hover:shadow-md transition-all duration-300"
              >
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mr-2"></span>
                <span>{article.category}</span>
                <svg
                  className="w-3.5 h-3.5 ml-1.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </nav>

          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
              {article.title}
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl">
              {article.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-md">
                  <span className="text-xl font-medium">
                    {article.author.charAt(0)}
                  </span>
                </div>
                <div className="ml-3">
                  <div className="text-sm font-medium text-gray-900">
                    {article.author}
                  </div>
                  <div className="text-xs text-gray-500">
                    {article.authorTitle}
                  </div>
                </div>
              </div>

              <div className="flex items-center text-sm text-gray-500 gap-4">
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {article.date}
                </span>

                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {article.readTime} de lecture
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Article principal */}
            <div className="lg:flex-grow lg:w-3/4">
              <article className="relative">
                {/* Image principale avec style moderne */}
                <div className="relative aspect-[16/9] mb-10 rounded-2xl overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-600/90 flex items-center justify-center text-white font-medium">
                    <div>{article.image}</div>
                  </div>

                  {/* Éléments décoratifs */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl"></div>

                  {/* Coins stylisés */}
                  <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-white/40"></div>
                  <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-white/40"></div>
                </div>

                {/* Contenu de l'article */}
                <div className="prose prose-lg max-w-none mb-16 prose-headings:text-gray-800 prose-headings:font-bold prose-p:text-gray-600 prose-li:text-gray-600">
                  <div dangerouslySetInnerHTML={{ __html: article.content }} />
                </div>

                {/* Informations sur l'auteur avec style cohérent avec les Coaches */}
                <div className="p-8 rounded-2xl mb-16 bg-gradient-to-r from-gray-50 to-blue-50/30 relative shadow-sm">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-400"></div>

                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="relative flex-shrink-0">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-lg relative z-10">
                        <span className="text-2xl font-medium">
                          {article.author.charAt(0)}
                        </span>
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-cyan-400/80 rounded-full"></div>
                      <div className="absolute -top-2 -left-2 w-6 h-6 border-2 border-blue-500/30 rounded-full"></div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-700">
                        {article.author}
                      </h3>
                      <p className="text-gray-700 font-medium mb-3">
                        {article.authorTitle}
                      </p>
                      <p className="text-gray-600">{article.authorBio}</p>
                    </div>
                  </div>
                </div>

                {/* Articles similaires */}
                <section className="relative">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 relative inline-block">
                      Articles similaires
                      <div className="absolute -bottom-1 left-0 w-1/3 h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {similarArticles.map((article) => (
                      <Link
                        href={`/blog/${article.id}`}
                        key={article.id}
                        className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden transition-all duration-300 border border-gray-100 hover:shadow-xl hover:border-blue-100"
                      >
                        <div className="aspect-[16/9] relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-600/80 flex items-center justify-center text-white font-medium">
                            <span className="transform transition-transform group-hover:scale-110">
                              {article.image}
                            </span>
                          </div>
                          <div className="absolute top-3 left-3 z-10">
                            <span className="bg-white/80 backdrop-blur-sm text-gray-800 text-xs px-3 py-1 rounded-full">
                              {article.category}
                            </span>
                          </div>
                        </div>

                        <div className="p-5 flex-grow flex flex-col">
                          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                            {article.excerpt}
                          </p>

                          <div className="flex items-center justify-between text-sm mt-auto pt-4 border-t border-gray-100">
                            <span className="text-gray-500">
                              {article.date}
                            </span>
                            <span className="text-blue-600 font-medium flex items-center group-hover:translate-x-0.5 transition-transform">
                              Lire
                              <svg
                                className="ml-1 w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/4 lg:shrink-0">
              <div className="space-y-8">
                <NewsletterSignup />

                {/* Widget catégories avec style cohérent */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-md relative overflow-hidden">
                  {/* Éléments décoratifs */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-400"></div>
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/5 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/5 rounded-full blur-lg"></div>

                  <h3 className="text-xl font-bold text-gray-900 mb-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    Catégories
                  </h3>

                  <div className="space-y-1">
                    {[
                      "Patrimoine",
                      "Immobilier",
                      "Fiscalité",
                      "Investissement",
                      "Épargne",
                    ].map((category) => (
                      <a
                        key={category}
                        href="#"
                        className="relative block text-gray-700 hover:text-blue-600 transition-colors py-2.5 border-b border-gray-100 text-sm group"
                      >
                        <div className="flex items-center">
                          <span className="w-0 h-6 bg-blue-500/10 rounded group-hover:w-full transition-all absolute"></span>
                          <span className="relative ml-3 group-hover:ml-5 transition-all duration-300">
                            {category}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-6 shadow-md relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-400"></div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Besoin de conseils ?
                  </h3>

                  <p className="text-sm text-gray-600 mb-5">
                    Nos experts en patrimoine sont à votre disposition pour
                    répondre à toutes vos questions.
                  </p>

                  <a
                    href="#"
                    className="block w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center rounded-xl font-medium text-sm hover:shadow-lg transition-shadow"
                  >
                    Prendre rendez-vous
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
