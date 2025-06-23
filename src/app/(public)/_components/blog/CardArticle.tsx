import React from "react";
import Link from "next/link";

export type ArticleProps = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  authorImage: string;
  readTime: string;
  image: string;
};

const CardArticle = ({ article }: { article: ArticleProps }) => {
  return (
    <Link
      href={`/blog/${article.id}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="aspect-[16/9] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>

        <div className="relative h-full w-full bg-indigo-100">
          <div className="absolute inset-0 flex items-center justify-center text-indigo-300 font-medium">
            Image: {article.image}
          </div>
        </div>

        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-indigo-700 rounded-full">
            {article.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
          <span>{article.date}</span>
          <span className="flex items-center">
            <svg
              className="w-4 h-4 mr-1"
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
            {article.readTime}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
          {article.title}
        </h3>

        <p className="text-gray-600 text-sm mb-6 line-clamp-3">
          {article.excerpt}
        </p>

        {/* Author footer */}
        <div className="flex items-center pt-4 border-t border-gray-100">
          <div className="w-8 h-8 rounded-full bg-indigo-100 relative overflow-hidden mr-3">
            {/* Temporary author photo */}
            <div className="absolute inset-0 flex items-center justify-center text-indigo-400 text-xs">
              Photo
            </div>
          </div>

          <div>
            <span className="block text-sm font-medium text-gray-900">
              {article.author}
            </span>
            <span className="block text-xs text-gray-500">
              Expert {article.category}
            </span>
          </div>

          <div className="ml-auto">
            <span className="flex items-center text-indigo-600 font-medium text-sm">
              Lire
              <svg
                className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardArticle;
