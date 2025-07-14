import React from "react";
import { TestimonialProps } from "./types";

const TestimonialCard = ({ quote, author }: TestimonialProps) => {
  return (
    <div className="mt-24 bg-white rounded-3xl p-10 shadow-xl shadow-indigo-100/20 border border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-50 rounded-full -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-blue-50 rounded-full -ml-10 -mb-10"></div>

      <div className="relative">
        <div className="flex items-center mb-6">
          <svg
            className="w-8 h-8 text-indigo-400 mr-3"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <h3 className="text-2xl font-bold">
            Ce qu&apos;en disent nos clients
          </h3>
        </div>

        <p className="text-lg text-gray-700 italic mb-6">&quot;{quote}&quot;</p>

        <div className="flex items-center">
          <div className="w-12 h-12 r ounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg mr-4">
            {author.initials}
          </div>
          <div>
            <div className="font-medium">{author.name}</div>
            <div className="text-sm text-gray-500">{author.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
