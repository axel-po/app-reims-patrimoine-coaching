import { createContainer, asFunction, asClass } from "awilix";
import { VideosUseCase } from "@/domain/usecases/videos.usecase";
import { VideosRepository } from "@/infrastructure/repositories/videos.repository";

export interface VideosContainer {
  videosUseCase: VideosUseCase;
  videosRepository: VideosRepository;
}

const videosContainer = createContainer<VideosContainer>();

videosContainer.register({
  videosRepository: asClass(VideosRepository).singleton(),
  videosUseCase: asFunction(
    ({ videosRepository }) => new VideosUseCase(videosRepository)
  ).singleton(),
});

export default videosContainer;

export const getVideosUseCase = (): VideosUseCase => {
  return videosContainer.resolve("videosUseCase");
};

export const getVideosRepository = (): VideosRepository => {
  return videosContainer.resolve("videosRepository");
};
