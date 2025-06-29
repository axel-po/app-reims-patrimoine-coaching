import { Lesson } from "@/domain/models/lessons.interface";

interface LessonsListProps {
  lessons: Lesson[];
  isLoading?: boolean;
  error?: string | null;
}

export function LessonsList({ lessons, isLoading, error }: LessonsListProps) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/4"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-md">
        <p className="text-red-600">Error: {error}</p>
      </div>
    );
  }

  if (lessons.length === 0) {
    return (
      <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
        <p className="text-gray-600">No lessons found.</p>
      </div>
    );
  }

  const getContentTypeBadge = (lesson: Lesson) => {
    const badges = [];

    if (lesson.videoUrl) {
      badges.push(
        <span
          key="video"
          className="px-2 py-1 text-xs bg-red-100 text-red-700 rounded"
        >
          Video
        </span>
      );
    }

    if (lesson.textContent) {
      badges.push(
        <span
          key="text"
          className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded"
        >
          Text
        </span>
      );
    }

    if (lesson.documentUrl) {
      badges.push(
        <span
          key="doc"
          className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded"
        >
          Document
        </span>
      );
    }

    return badges;
  };

  return (
    <div className="space-y-4">
      {lessons.map((lesson) => (
        <div
          key={lesson.id}
          className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold">{lesson.title}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>#{lesson.position}</span>
              <span>{lesson.duration}</span>
            </div>
          </div>

          <div className="flex gap-2 mb-3">{getContentTypeBadge(lesson)}</div>

          {lesson.textContent && (
            <p className="text-gray-600 mb-2 line-clamp-2">
              {lesson.textContent.substring(0, 150)}
              {lesson.textContent.length > 150 && "..."}
            </p>
          )}

          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>Duration: {lesson.duration}</span>
            {lesson.createdAt && (
              <span>
                Created: {new Date(lesson.createdAt).toLocaleDateString()}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
