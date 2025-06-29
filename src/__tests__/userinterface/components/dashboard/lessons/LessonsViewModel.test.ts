import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { useModuleLessonsViewModel } from "@/userinterface/components/dashboard/lessons/LessonsViewModel";
import * as lessonsActions from "@/userinterface/actions/lessons.actions";
import { Lesson } from "@/domain/models/lessons.interface";

// Mock the lessons actions
vi.mock("@/userinterface/actions/lessons.actions", () => ({
  getLessonsByModuleIdAction: vi.fn(),
}));

describe("useModuleLessonsViewModel", () => {
  const mockLessons: Lesson[] = [
    {
      id: "lesson-1",
      moduleId: "module-1",
      title: "First Lesson",
      videoUrl: "https://example.com/video1.mp4",
      textContent: "First lesson content",
      documentUrl: null,
      position: 1,
      duration: "30min",
      createdAt: new Date(),
    },
    {
      id: "lesson-2",
      moduleId: "module-1",
      title: "Second Lesson",
      videoUrl: null,
      textContent: "Second lesson content",
      documentUrl: "https://example.com/doc2.pdf",
      position: 2,
      duration: "45min",
      createdAt: new Date(),
    },
  ];

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("successful data loading", () => {
    it("should load lessons successfully", async () => {
      // Arrange
      vi.mocked(lessonsActions.getLessonsByModuleIdAction).mockResolvedValue({
        data: mockLessons,
        error: undefined,
      });

      // Act
      const { result } = renderHook(() =>
        useModuleLessonsViewModel("module-1")
      );

      // Assert - initial state
      expect(result.current.isLoading).toBe(true);
      expect(result.current.lessons).toEqual([]);
      expect(result.current.error).toBeNull();

      // Wait for async operation
      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      // Assert - after loading
      expect(result.current.lessons).toEqual(mockLessons);
      expect(result.current.error).toBeNull();
      expect(result.current.hasData).toBe(true);
      expect(result.current.isEmpty).toBe(false);
      expect(result.current.hasError).toBe(false);
      expect(lessonsActions.getLessonsByModuleIdAction).toHaveBeenCalledWith(
        "module-1"
      );
    });

    it("should not reload lessons if already loaded", async () => {
      // Arrange
      vi.mocked(lessonsActions.getLessonsByModuleIdAction).mockResolvedValue({
        data: mockLessons,
        error: undefined,
      });

      // Act
      const { result } = renderHook(() =>
        useModuleLessonsViewModel("module-1")
      );

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      // Call loadLessons again
      result.current.loadLessons();

      // Assert - should not call action again
      expect(lessonsActions.getLessonsByModuleIdAction).toHaveBeenCalledTimes(
        1
      );
    });
  });

  describe("error handling", () => {
    it("should handle API error response", async () => {
      // Arrange
      const errorMessage = "Failed to load lessons";
      const error = new Error(errorMessage);
      vi.mocked(lessonsActions.getLessonsByModuleIdAction).mockResolvedValue({
        data: [],
        error,
      });

      // Act
      const { result } = renderHook(() =>
        useModuleLessonsViewModel("module-1")
      );

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      // Assert
      expect(result.current.lessons).toEqual([]);
      expect(result.current.error).toBe(errorMessage);
      expect(result.current.hasError).toBe(true);
      expect(result.current.hasData).toBe(false);
      expect(result.current.isEmpty).toBe(false); // error state, not empty
    });

    it("should handle thrown exception", async () => {
      // Arrange
      const error = new Error("Network error");
      vi.mocked(lessonsActions.getLessonsByModuleIdAction).mockRejectedValue(
        error
      );

      // Act
      const { result } = renderHook(() =>
        useModuleLessonsViewModel("module-1")
      );

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      // Assert
      expect(result.current.lessons).toEqual([]);
      expect(result.current.error).toBe("Network error");
      expect(result.current.hasError).toBe(true);
    });
  });

  describe("hasLessonWithId", () => {
    it("should return true when lesson exists", async () => {
      // Arrange
      vi.mocked(lessonsActions.getLessonsByModuleIdAction).mockResolvedValue({
        data: mockLessons,
        error: undefined,
      });

      // Act
      const { result } = renderHook(() =>
        useModuleLessonsViewModel("module-1")
      );

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      // Assert
      expect(result.current.hasLessonWithId("lesson-1")).toBe(true);
      expect(result.current.hasLessonWithId("lesson-2")).toBe(true);
    });

    it("should return false when lesson does not exist", async () => {
      // Arrange
      vi.mocked(lessonsActions.getLessonsByModuleIdAction).mockResolvedValue({
        data: mockLessons,
        error: undefined,
      });

      // Act
      const { result } = renderHook(() =>
        useModuleLessonsViewModel("module-1")
      );

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      // Assert
      expect(result.current.hasLessonWithId("non-existent")).toBe(false);
    });
  });

  describe("empty state", () => {
    it("should handle empty lessons array", async () => {
      // Arrange
      vi.mocked(lessonsActions.getLessonsByModuleIdAction).mockResolvedValue({
        data: [],
        error: undefined,
      });

      // Act
      const { result } = renderHook(() =>
        useModuleLessonsViewModel("module-1")
      );

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      // Assert
      expect(result.current.lessons).toEqual([]);
      expect(result.current.hasData).toBe(false);
      expect(result.current.isEmpty).toBe(true);
      expect(result.current.error).toBeNull();
    });
  });
});
