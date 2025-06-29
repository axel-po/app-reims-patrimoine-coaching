import { describe, it, expect } from "vitest";
import { ModulesPresenter } from "@/infrastructure/presenters/modules.presenter";
import { Module } from "@/domain/models/modules.interface";

describe("ModulesPresenter", () => {
  const mockModule: Module = {
    id: "module-1",
    courseId: "course-1",
    title: "Test Module",
    description: "Test Description",
    position: 1,
    duration: "2h 30min",
    createdAt: new Date("2024-01-01T10:00:00Z"),
  };

  describe("toPresentation", () => {
    it("should transform module to presentation format", () => {
      const result = ModulesPresenter.toPresentation(mockModule);

      expect(result).toEqual({
        id: "module-1",
        courseId: "course-1",
        title: "Test Module",
        description: "Test Description",
        position: 1,
        duration: "2h 30min",
        createdAt: "2024-01-01T10:00:00.000Z",
      });
    });

    it("should handle null description", () => {
      const moduleWithNullDescription = {
        ...mockModule,
        description: null,
      };

      const result = ModulesPresenter.toPresentation(moduleWithNullDescription);

      expect(result.description).toBe("No description available");
    });

    it("should handle null duration", () => {
      const moduleWithNullDuration = {
        ...mockModule,
        duration: null,
      };

      const result = ModulesPresenter.toPresentation(moduleWithNullDuration);

      expect(result.duration).toBe("Duration not specified");
    });

    it("should handle null createdAt", () => {
      const moduleWithNullCreatedAt = {
        ...mockModule,
        createdAt: null,
      };

      const result = ModulesPresenter.toPresentation(moduleWithNullCreatedAt);

      expect(result.createdAt).toBe("");
    });
  });

  describe("toPresentationList", () => {
    it("should transform array of modules to presentation format", () => {
      const modules = [
        mockModule,
        {
          ...mockModule,
          id: "module-2",
          title: "Second Module",
        },
      ];

      const result = ModulesPresenter.toPresentationList(modules);

      expect(result).toHaveLength(2);
      expect(result[0].id).toBe("module-1");
      expect(result[0].title).toBe("Test Module");
      expect(result[1].id).toBe("module-2");
      expect(result[1].title).toBe("Second Module");
    });

    it("should handle empty array", () => {
      const result = ModulesPresenter.toPresentationList([]);

      expect(result).toEqual([]);
    });
  });
});
