"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface WrittenContentProps {
  content?: string;
}

export default function WrittenContent({ content }: WrittenContentProps) {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="border border-slate-200 rounded-xl bg-white shadow-sm">
        <button
          onClick={() => setShowContent(!showContent)}
          className="w-full px-6 py-4 text-left hover:bg-slate-50 transition-colors rounded-t-xl"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-900">
              Contenu écrit
            </h3>
            <ChevronDown
              className={`h-5 w-5 text-slate-500 transition-transform duration-200 ${
                showContent ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>
        {showContent && (
          <div className="px-6 py-4 border-t border-slate-200">
            <div className="prose prose-slate max-w-none">
              {content ? (
                <div className="whitespace-pre-wrap">{content}</div>
              ) : (
                <p className="text-slate-500 italic">
                  Contenu non disponible pour cette leçon.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
