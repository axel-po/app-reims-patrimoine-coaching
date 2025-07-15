import { createContainer, asFunction, asClass } from "awilix";
import { UserProgressUseCase } from "@/domain/usecases/userProgress.usecase";
import { UserProgressRepositoryImpl } from "@/infrastructure/repositories/userProgress.repository";

export interface UserProgressContainer {
  userProgressUseCase: UserProgressUseCase;
  userProgressRepository: UserProgressRepositoryImpl;
}

const userProgressContainer = createContainer<UserProgressContainer>();

userProgressContainer.register({
  userProgressRepository: asClass(UserProgressRepositoryImpl).singleton(),
  userProgressUseCase: asFunction(
    ({ userProgressRepository }) => new UserProgressUseCase(userProgressRepository)
  ).singleton(),
});

export default userProgressContainer;

export const getUserProgressUseCase = (): UserProgressUseCase => {
  return userProgressContainer.resolve("userProgressUseCase");
};

export const getUserProgressRepository = (): UserProgressRepositoryImpl => {
  return userProgressContainer.resolve("userProgressRepository");
};