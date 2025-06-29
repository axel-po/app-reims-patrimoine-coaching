import { ModulePresentation } from "@/infrastructure/presenters/modules.presenter";

interface ModulesListProps {
  modules: ModulePresentation[];
  isLoading?: boolean;
  error?: string | null;
}

export function ModulesList({ modules, isLoading, error }: ModulesListProps) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
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

  if (modules.length === 0) {
    return (
      <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
        <p className="text-gray-600">No modules found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {modules.map((module) => (
        <div key={module.id} className="p-4 border border-gray-200 rounded-lg">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold">{module.title}</h3>
            <span className="text-sm text-gray-500">
              Position: {module.position}
            </span>
          </div>
          <p className="text-gray-600 mb-2">{module.description}</p>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>Duration: {module.duration}</span>
            <span>
              Created: {new Date(module.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
