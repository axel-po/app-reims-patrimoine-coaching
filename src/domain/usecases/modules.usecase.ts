import { Module, ModulesRepository } from "@/domain/models/modules.interface";

export class ModulesUseCase {
  constructor(private repository: ModulesRepository) {}

  async getAllModules(): Promise<{ data: Module[]; error?: Error }> {
    try {
      const result = await this.repository.getAllModules();
      return result;
    } catch (error) {
      console.error("Error in getAllModules usecase:", error);
      return { data: [], error: error as Error };
    }
  }

  async getModuleById(
    id: string
  ): Promise<{ data: Module | null; error?: Error }> {
    try {
      const result = await this.repository.getModuleById(id);

      if (result.data) {
        return { data: result.data, error: result.error };
      }

      return result;
    } catch (error) {
      console.error("Error in getModuleById usecase:", error);
      return { data: null, error: error as Error };
    }
  }

  async getModulesByCourseId(
    courseId: string
  ): Promise<{ data: Module[]; error?: Error }> {
    try {
      const result = await this.repository.getModulesByCourseId(courseId);
      return result;
    } catch (error) {
      console.error("Error in getModulesByCourseId usecase:", error);
      return { data: [], error: error as Error };
    }
  }
}
