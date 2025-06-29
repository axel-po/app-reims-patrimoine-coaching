import { createContainer, asFunction, asClass } from "awilix";
import { CoursesUseCase } from "@/domain/usecases/courses.usecase";
import { CoursesRepositoryImpl } from "@/infrastructure/repositories/courses.repository";

export interface CoursesContainer {
  coursesUseCase: CoursesUseCase;
  coursesRepository: CoursesRepositoryImpl;
}

const coursesContainer = createContainer<CoursesContainer>();

coursesContainer.register({
  coursesRepository: asClass(CoursesRepositoryImpl).singleton(),
  coursesUseCase: asFunction(
    ({ coursesRepository }) => new CoursesUseCase(coursesRepository)
  ).singleton(),
});

export default coursesContainer;

export const getCoursesUseCase = (): CoursesUseCase => {
  return coursesContainer.resolve("coursesUseCase");
};

export const getCoursesRepository = (): CoursesRepositoryImpl => {
  return coursesContainer.resolve("coursesRepository");
};
