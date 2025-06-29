"use client";

import { useState } from "react";
import { LessonsSection } from "@/userinterface/components/dashboard/lessons/LessonsSection";
import { LessonDetailView } from "@/userinterface/components/dashboard/lessons/LessonDetailView";

export default function LessonsExamplePage() {
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);
  const [selectedModuleId, setSelectedModuleId] = useState<string>("");

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Lessons Management</h1>
        <p className="text-gray-600">
          Example d&apos;utilisation des composants lessons avec clean
          architecture
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Controls */}
        <div className="lg:col-span-1">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Controls</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Module ID (optionnel)
                </label>
                <input
                  type="text"
                  value={selectedModuleId}
                  onChange={(e) => setSelectedModuleId(e.target.value)}
                  placeholder="UUID du module..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Laisser vide pour toutes les lessons
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Lesson ID pour détail
                </label>
                <input
                  type="text"
                  value={selectedLessonId || ""}
                  onChange={(e) => setSelectedLessonId(e.target.value || null)}
                  placeholder="UUID de la lesson..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                onClick={() => {
                  setSelectedModuleId("");
                  setSelectedLessonId(null);
                }}
                className="w-full px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Lessons List */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              {selectedModuleId
                ? `Lessons du module ${selectedModuleId}`
                : "Toutes les lessons"}
            </h2>
            <LessonsSection moduleId={selectedModuleId || undefined} />
          </div>

          {/* Lesson Detail */}
          {selectedLessonId && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Détail de la lesson
              </h2>
              <LessonDetailView lessonId={selectedLessonId} />
            </div>
          )}
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mt-12 p-6 bg-blue-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">🚀 Usage Examples</h2>

        <div className="space-y-4 text-sm">
          <div>
            <h3 className="font-medium">1. Liste toutes les lessons :</h3>
            <code className="block mt-1 p-2 bg-white rounded text-xs">
              {`<LessonsListContainer />`}
            </code>
          </div>

          <div>
            <h3 className="font-medium">2. Lessons d&apos;un module :</h3>
            <code className="block mt-1 p-2 bg-white rounded text-xs">
              {`<LessonsListContainer moduleId="uuid-du-module" />`}
            </code>
          </div>

          <div>
            <h3 className="font-medium">3. Détail d&apos;une lesson :</h3>
            <code className="block mt-1 p-2 bg-white rounded text-xs">
              {`<LessonDetailView lessonId="uuid-de-la-lesson" />`}
            </code>
          </div>

          <div>
            <h3 className="font-medium">4. ViewModel directement :</h3>
            <code className="block mt-1 p-2 bg-white rounded text-xs">
              {`const { lessons, isLoading, loadLessonsByModuleId } = useLessonsViewModel();`}
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}
