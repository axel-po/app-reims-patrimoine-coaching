import React from "react";
import { FeatureCardProps } from "./types";

const FeatureCard = ({ title, description, icon, iconSvg, index }: FeatureCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <div className="group relative">
      <div
        className={`absolute inset-0 rounded-3xl ${
          isEven
            ? "bg-gradient-to-br from-indigo-50/80 to-blue-50/50"
            : "bg-gradient-to-br from-purple-50/80 to-indigo-50/50"
        } transition-all duration-500 group-hover:scale-[1.02] -z-10`}
      ></div>

      <div className="p-8 flex flex-col h-full">
        <div className="mb-6 relative">
          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6">
            {icon ? (
              icon
            ) : iconSvg ? (
              <div dangerouslySetInnerHTML={{ __html: iconSvg }} />
            ) : null}
          </div>
          <div
            className={`absolute -z-10 w-6 h-6 rounded-full ${
              isEven ? "bg-indigo-100" : "bg-purple-100"
            } -right-1 -bottom-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          ></div>
        </div>

        <div className="text-xs font-semibold text-gray-400 mb-2 tracking-widest">
          {index < 10 ? `0${index}` : index}
        </div>

        <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-700 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-600 leading-relaxed text-sm flex-grow">
          {description}
        </p>

        <div className="mt-6 flex items-center">
          <div className="w-8 h-[1px] bg-indigo-300 mr-2 group-hover:w-12 transition-all duration-300"></div>
          <span className="text-sm font-medium text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Découvrir
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;