import { describe, it, expect, vi, beforeEach } from "vitest";
import { ModulesUseCase } from "@/domain/usecases/modules.usecase";
import { ModulesRepository, Module } from "@/domain/models/modules.interface";

describe("ModulesUseCase", () => {
  let modulesUseCase: ModulesUseCase;
  let mockRepository: ModulesRepository;

  const mockModule: Module = {
    id: "module-1",
    courseId: "course-1",
    title: "Test Module",
    description: "Test Description",
    position: 1,
    duration: "1h",
    createdAt: new Date(),
  };

  beforeEach(() => {
    mockRepository = {
      getAllModules: vi.fn(),
      getModuleById: vi.fn(),
      getModulesByCourseId: vi.fn(),
    };
    modulesUseCase = new ModulesUseCase(mockRepository);
  });

  describe("getAllModules", () => {
    it("should return modules when repository succeeds", async () => {
      // Arrange
      const modules = [mockModule];
      vi.mocked(mockRepository.getAllModules).mockResolvedValue({
        data: modules,
      });

      // Act
      const result = await modulesUseCase.getAllModules();

      // Assert
      expect(result.data).toEqual(modules);
      expect(result.error).toBeUndefined();
      expect(mockRepository.getAllModules).toHaveBeenCalledOnce();
    });

    it("should return error when repository fails", async () => {
      // Arrange
      const error = new Error("Database connection failed");
      vi.mocked(mockRepository.getAllModules).mockResolvedValue({
        data: [],
        error,
      });

      // Act
      const result = await modulesUseCase.getAllModules();

      // Assert
      expect(result.data).toEqual([]);
      expect(result.error).toBe(error);
      expect(mockRepository.getAllModules).toHaveBeenCalledOnce();
    });

    it("should handle repository throwing exception", async () => {
      // Arrange
      const error = new Error("Unexpected error");
      vi.mocked(mockRepository.getAllModules).mockRejectedValue(error);

      // Act
      const result = await modulesUseCase.getAllModules();

      // Assert
      expect(result.data).toEqual([]);
      expect(result.error).toBe(error);
      expect(mockRepository.getAllModules).toHaveBeenCalledOnce();
    });
  });

  describe("getModuleById", () => {
    it("should return module when found", async () => {
      // Arrange
      const moduleId = "module-1";
      vi.mocked(mockRepository.getModuleById).mockResolvedValue({
        data: mockModule,
      });

      // Act
      const result = await modulesUseCase.getModuleById(moduleId);

      // Assert
      expect(result.data).toBe(mockModule);
      expect(result.error).toBeUndefined();
      expect(mockRepository.getModuleById).toHaveBeenCalledWith(moduleId);
    });

    it("should return null when module not found", async () => {
      // Arrange
      const moduleId = "non-existent";
      vi.mocked(mockRepository.getModuleById).mockResolvedValue({
        data: null,
      });

      // Act
      const result = await modulesUseCase.getModuleById(moduleId);

      // Assert
      expect(result.data).toBeNull();
      expect(mockRepository.getModuleById).toHaveBeenCalledWith(moduleId);
    });

    it("should handle repository error", async () => {
      // Arrange
      const moduleId = "module-1";
      const error = new Error("Database error");
      vi.mocked(mockRepository.getModuleById).mockRejectedValue(error);

      // Act
      const result = await modulesUseCase.getModuleById(moduleId);

      // Assert
      expect(result.data).toBeNull();
      expect(result.error).toBe(error);
      expect(mockRepository.getModuleById).toHaveBeenCalledWith(moduleId);
    });
  });

  describe("getModulesByCourseId", () => {
    it("should return modules for course when found", async () => {
      // Arrange
      const courseId = "course-1";
      const modules = [mockModule];
      vi.mocked(mockRepository.getModulesByCourseId).mockResolvedValue({
        data: modules,
      });

      // Act
      const result = await modulesUseCase.getModulesByCourseId(courseId);

      // Assert
      expect(result.data).toEqual(modules);
      expect(result.error).toBeUndefined();
      expect(mockRepository.getModulesByCourseId).toHaveBeenCalledWith(
        courseId
      );
    });

    it("should return empty array when no modules found", async () => {
      // Arrange
      const courseId = "course-without-modules";
      vi.mocked(mockRepository.getModulesByCourseId).mockResolvedValue({
        data: [],
      });

      // Act
      const result = await modulesUseCase.getModulesByCourseId(courseId);

      // Assert
      expect(result.data).toEqual([]);
      expect(result.error).toBeUndefined();
      expect(mockRepository.getModulesByCourseId).toHaveBeenCalledWith(
        courseId
      );
    });

    it("should handle repository error", async () => {
      // Arrange
      const courseId = "course-1";
      const error = new Error("Database error");
      vi.mocked(mockRepository.getModulesByCourseId).mockRejectedValue(error);

      // Act
      const result = await modulesUseCase.getModulesByCourseId(courseId);

      // Assert
      expect(result.data).toEqual([]);
      expect(result.error).toBe(error);
      expect(mockRepository.getModulesByCourseId).toHaveBeenCalledWith(
        courseId
      );
    });
  });
});
