import { CoursesList } from "@/userinterface/components/courses/CoursesList";

export default function CoursesExamplePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Clean Architecture Example</h1>
        <p className="text-gray-600">
          Cette page démontre l&apos;architecture clean avec Zustand pour la
          gestion des courses.
        </p>
      </div>

      <CoursesList />
    </div>
  );
}
