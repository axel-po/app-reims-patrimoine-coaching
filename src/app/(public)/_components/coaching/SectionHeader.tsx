import React from "react";

const SectionHeader = () => {
  return (
    <div className="max-w-3xl mx-auto text-center mb-20">
      <div className="inline-flex items-center px-3 py-1 mb-6 border border-indigo-100 rounded-full bg-white shadow-sm">
        <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mr-2"></div>
        <span className="text-xs font-medium text-indigo-700 uppercase tracking-wider">
          Notre approche
        </span>
      </div>

      <h2 className="text-4xl font-bold mb-6 leading-tight">
        Un coaching financier{" "}
        <span className="text-indigo-600">personnalisé</span> pour atteindre vos
        objectifs
      </h2>

      <p className="text-lg text-gray-600">
        Notre programme combine expertise, outils avancés et accompagnement sur
        mesure pour vous guider vers l&apos;indépendance financière.
      </p>
    </div>
  );
};

export default SectionHeader;
