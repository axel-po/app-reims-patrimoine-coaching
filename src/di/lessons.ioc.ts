import { createContainer, asFunction, asClass } from "awilix";
import { LessonsUseCase } from "@/domain/usecases/lessons.usecase";
import { LessonsRepositoryImpl } from "@/infrastructure/repositories/lessons.repository";

export interface LessonsContainer {
  lessonsUseCase: LessonsUseCase;
  lessonsRepository: LessonsRepositoryImpl;
}

const lessonsContainer = createContainer<LessonsContainer>();

lessonsContainer.register({
  lessonsRepository: asClass(LessonsRepositoryImpl).singleton(),
  lessonsUseCase: asFunction(
    ({ lessonsRepository }) => new LessonsUseCase(lessonsRepository)
  ).singleton(),
});

export default lessonsContainer;

export const getLessonsUseCase = (): LessonsUseCase => {
  return lessonsContainer.resolve("lessonsUseCase");
};

export const getLessonsRepository = (): LessonsRepositoryImpl => {
  return lessonsContainer.resolve("lessonsRepository");
};
