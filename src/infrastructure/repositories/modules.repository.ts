import { ModulesRepository, Module } from "@/domain/models/modules.interface";
import { db } from "@/infrastructure/database/client";
import { modules } from "@/infrastructure/database/schemas/modules.schema";
import { eq, asc } from "drizzle-orm";

export class ModulesRepositoryImpl implements ModulesRepository {
  async getAllModules(): Promise<{ data: Module[]; error?: Error }> {
    try {
      const data = await db
        .select()
        .from(modules)
        .orderBy(asc(modules.position));
      return { data };
    } catch (error) {
      console.error("Repository error in getAllModules:", error);
      return { data: [], error: error as Error };
    }
  }

  async getModuleById(
    id: string
  ): Promise<{ data: Module | null; error?: Error }> {
    try {
      const data = await db.select().from(modules).where(eq(modules.id, id));

      if (data.length === 0) {
        return {
          data: null,
          error: new Error(`Module with id ${id} not found`),
        };
      }

      return { data: data[0] };
    } catch (error) {
      console.error("Repository error in getModuleById:", error);
      return { data: null, error: error as Error };
    }
  }

  async getModulesByCourseId(
    courseId: string
  ): Promise<{ data: Module[]; error?: Error }> {
    try {
      const data = await db
        .select()
        .from(modules)
        .where(eq(modules.courseId, courseId))
        .orderBy(asc(modules.position));

      return { data };
    } catch (error) {
      console.error("Repository error in getModulesByCourseId:", error);
      return { data: [], error: error as Error };
    }
  }
}

// Factory function for easier dependency injection
export const createModulesRepository = (): ModulesRepository => {
  return new ModulesRepositoryImpl();
};
