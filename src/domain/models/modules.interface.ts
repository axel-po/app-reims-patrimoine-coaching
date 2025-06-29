import { ModuleModel } from "@/infrastructure/database/schemas/modules.schema";

// Use the inferred type from Drizzle schema
export type Module = ModuleModel;

export interface ModulesRepository {
  getAllModules(): Promise<{ data: Module[]; error?: Error }>;
  getModuleById(id: string): Promise<{ data: Module | null; error?: Error }>;
  getModulesByCourseId(
    courseId: string
  ): Promise<{ data: Module[]; error?: Error }>;
}
