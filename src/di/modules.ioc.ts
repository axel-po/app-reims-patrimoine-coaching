import { ModulesUseCase } from "@/domain/usecases/modules.usecase";
import { createModulesRepository } from "@/infrastructure/repositories/modules.repository";

class ModulesContainer {
  private static instance: ModulesContainer;
  private _modulesUseCase: ModulesUseCase | null = null;

  private constructor() {}

  static getInstance(): ModulesContainer {
    if (!ModulesContainer.instance) {
      ModulesContainer.instance = new ModulesContainer();
    }
    return ModulesContainer.instance;
  }

  get modulesUseCase(): ModulesUseCase {
    if (!this._modulesUseCase) {
      const repository = createModulesRepository();
      this._modulesUseCase = new ModulesUseCase(repository);
    }
    return this._modulesUseCase;
  }
}

export const modulesContainer = ModulesContainer.getInstance();
