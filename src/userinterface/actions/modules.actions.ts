"use server";

import { ModulesUseCase } from "@/domain/usecases/modules.usecase";
import { createModulesRepository } from "@/infrastructure/repositories/modules.repository";
import { ModulesPresenter } from "@/infrastructure/presenters/modules.presenter";

const modulesRepository = createModulesRepository();
const modulesUseCase = new ModulesUseCase(modulesRepository);

export async function getAllModulesAction() {
  try {
    const { data, error } = await modulesUseCase.getAllModules();

    console.log("🔍 getAllModulesAction - Raw data count:", data?.length || 0);
    console.log("🔍 getAllModulesAction - Error:", error?.message || "none");

    if (error) {
      console.error("Error in getAllModulesAction:", error);
      return { data: [], error: error.message };
    }

    const presentedData = ModulesPresenter.toPresentationList(data);
    console.log(
      "🔍 getAllModulesAction - Presented data count:",
      presentedData.length
    );

    return { data: presentedData, error: null };
  } catch (error) {
    console.error("Unexpected error in getAllModulesAction:", error);
    return {
      data: [],
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function getModuleByIdAction(id: string) {
  try {
    const { data, error } = await modulesUseCase.getModuleById(id);

    if (error) {
      console.error("Error in getModuleByIdAction:", error);
      return { data: null, error: error.message };
    }

    const presentedData = data ? ModulesPresenter.toPresentation(data) : null;
    return { data: presentedData, error: null };
  } catch (error) {
    console.error("Unexpected error in getModuleByIdAction:", error);
    return {
      data: null,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function getModulesByCourseIdAction(courseId: string) {
  try {
    const { data, error } = await modulesUseCase.getModulesByCourseId(courseId);

    if (error) {
      console.error("Error in getModulesByCourseIdAction:", error);
      return { data: [], error: error.message };
    }

    const presentedData = ModulesPresenter.toPresentationList(data);
    return { data: presentedData, error: null };
  } catch (error) {
    console.error("Unexpected error in getModulesByCourseIdAction:", error);
    return {
      data: [],
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
