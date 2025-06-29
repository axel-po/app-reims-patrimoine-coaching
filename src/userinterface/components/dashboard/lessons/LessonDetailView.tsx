"use client";

import { useLessonViewModel } from "@/userinterface/components/lessons/LessonsViewModel";

interface LessonDetailViewProps {
  lessonId: string;
}

export function LessonDetailView({ lessonId }: LessonDetailViewProps) {
  const { lesson, isLoading, error, loadLesson } = useLessonViewModel(lessonId);

  if (isLoading) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-sm border">
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-sm border">
        <div className="p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-600">Error loading lesson: {error}</p>
          <button
            onClick={() => loadLesson(lessonId)}
            className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-sm border">
        <p className="text-gray-600">Lesson not found</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border">
      <div className="mb-6">
        <div className="flex justify-between items-start mb-4">
          <h1 className="text-3xl font-bold">{lesson.title}</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Position #{lesson.position}</span>
            <span>•</span>
            <span>{lesson.duration}</span>
          </div>
        </div>

        <div className="flex gap-2 mb-4">
          {lesson.videoUrl && (
            <span className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded-full">
              📹 Video
            </span>
          )}
          {lesson.textContent && (
            <span className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full">
              📄 Text Content
            </span>
          )}
          {lesson.documentUrl && (
            <span className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">
              📎 Document
            </span>
          )}
        </div>
      </div>

      {lesson.videoUrl && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Video</h2>
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Video Player: {lesson.videoUrl}</p>
          </div>
        </div>
      )}

      {lesson.textContent && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Content</h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
              {lesson.textContent}
            </p>
          </div>
        </div>
      )}

      {lesson.documentUrl && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Document</h2>
          <a
            href={lesson.documentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            📎 Open Document
          </a>
        </div>
      )}

      {lesson.createdAt && (
        <div className="text-sm text-gray-500 border-t pt-4">
          Created: {new Date(lesson.createdAt).toLocaleDateString()}
        </div>
      )}
    </div>
  );
}
