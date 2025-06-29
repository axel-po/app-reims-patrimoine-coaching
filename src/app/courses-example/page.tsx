import { CoursesList } from "@/userinterface/components/courses/CoursesList";
import { ModulesListContainer } from "@/userinterface/components/modules/ModulesListContainer";

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

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Modules</h2>
        <ModulesListContainer />
      </div>
    </div>
  );
}
