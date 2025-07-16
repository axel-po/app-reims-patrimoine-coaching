import { createContainer, asFunction, asClass } from "awilix";
import { ModuleAccessUseCase } from "@/domain/usecases/moduleAccess.useCase";
import { ModulesRepositoryImpl } from "@/infrastructure/repositories/modules.repository";
import { LessonsRepositoryImpl } from "@/infrastructure/repositories/lessons.repository";
import { UserProgressRepositoryImpl } from "@/infrastructure/repositories/userProgress.repository";

export interface ModuleAccessContainer {
  moduleAccessUseCase: ModuleAccessUseCase;
  modulesRepository: ModulesRepositoryImpl;
  lessonsRepository: LessonsRepositoryImpl;
  userProgressRepository: UserProgressRepositoryImpl;
}

const moduleAccessContainer = createContainer<ModuleAccessContainer>();

moduleAccessContainer.register({
  modulesRepository: asClass(ModulesRepositoryImpl).singleton(),
  lessonsRepository: asClass(LessonsRepositoryImpl).singleton(),
  userProgressRepository: asClass(UserProgressRepositoryImpl).singleton(),
  moduleAccessUseCase: asFunction(
    ({ modulesRepository, lessonsRepository, userProgressRepository }) => 
      new ModuleAccessUseCase(modulesRepository, lessonsRepository, userProgressRepository)
  ).singleton(),
});

export default moduleAccessContainer;

export const getModuleAccessUseCase = (): ModuleAccessUseCase => {
  return moduleAccessContainer.resolve("moduleAccessUseCase");
};