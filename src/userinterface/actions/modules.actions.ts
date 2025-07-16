"use server";

import { ModulesUseCase } from "@/domain/usecases/modules.usecase";
import { createModulesRepository } from "@/infrastructure/repositories/modules.repository";
import { ModulesPresenter } from "@/infrastructure/presenters/modules.presenter";
import { getModuleAccessUseCase } from "@/di/moduleAccess.ioc";

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

export async function checkLessonAccessAction(
  userId: string,
  lessonId: string
) {
  try {
    const moduleAccessUseCase = getModuleAccessUseCase();
    const isUnlocked = await moduleAccessUseCase.isLessonUnlocked(
      userId,
      lessonId
    );
    return { isUnlocked, error: null };
  } catch (error) {
    console.error("Error in checkLessonAccessAction:", error);
    return {
      isUnlocked: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function getModuleAccessInfoAction(
  userId: string,
  moduleId: string
) {
  try {
    const moduleAccessUseCase = getModuleAccessUseCase();
    const accessResult = await moduleAccessUseCase.getModuleAccessInfo(
      userId,
      moduleId
    );
    return {
      data: accessResult.data,
      error: accessResult.error?.message || null,
    };
  } catch (error) {
    console.error("Error in getModuleAccessInfoAction:", error);
    return {
      data: null,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
