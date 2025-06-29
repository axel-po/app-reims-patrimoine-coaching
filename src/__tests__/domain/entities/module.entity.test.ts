import { describe, it, expect } from "vitest";
import { ModuleEntity } from "@/domain/entities/module.entity";

describe("ModuleEntity", () => {
  const validModuleData = {
    id: "module-1",
    courseId: "course-1",
    title: "Introduction to TypeScript",
    description: "Learn the basics of TypeScript",
    position: 1,
    duration: "2h 30min",
    createdAt: new Date("2024-01-01"),
  };

  describe("constructor", () => {
    it("should create a module entity with valid data", () => {
      const moduleEntity = new ModuleEntity(
        validModuleData.id,
        validModuleData.courseId,
        validModuleData.title,
        validModuleData.description,
        validModuleData.position,
        validModuleData.duration,
        validModuleData.createdAt
      );

      expect(moduleEntity.id).toBe(validModuleData.id);
      expect(moduleEntity.courseId).toBe(validModuleData.courseId);
      expect(moduleEntity.title).toBe(validModuleData.title);
      expect(moduleEntity.description).toBe(validModuleData.description);
      expect(moduleEntity.position).toBe(validModuleData.position);
      expect(moduleEntity.duration).toBe(validModuleData.duration);
      expect(moduleEntity.createdAt).toBe(validModuleData.createdAt);
    });
  });

  describe("isValidModule", () => {
    it("should return true for valid module", () => {
      const moduleEntity = new ModuleEntity(
        validModuleData.id,
        validModuleData.courseId,
        validModuleData.title,
        validModuleData.description,
        validModuleData.position,
        validModuleData.duration,
        validModuleData.createdAt
      );

      expect(moduleEntity.isValidModule()).toBe(true);
    });

    it("should return false when title is empty", () => {
      const moduleEntity = new ModuleEntity(
        validModuleData.id,
        validModuleData.courseId,
        "",
        validModuleData.description,
        validModuleData.position,
        validModuleData.duration,
        validModuleData.createdAt
      );

      expect(moduleEntity.isValidModule()).toBe(false);
    });

    it("should return false when courseId is empty", () => {
      const moduleEntity = new ModuleEntity(
        validModuleData.id,
        "",
        validModuleData.title,
        validModuleData.description,
        validModuleData.position,
        validModuleData.duration,
        validModuleData.createdAt
      );

      expect(moduleEntity.isValidModule()).toBe(false);
    });
  });

  describe("getDisplayTitle", () => {
    it("should return the title when present", () => {
      const moduleEntity = new ModuleEntity(
        validModuleData.id,
        validModuleData.courseId,
        validModuleData.title,
        validModuleData.description,
        validModuleData.position,
        validModuleData.duration,
        validModuleData.createdAt
      );

      expect(moduleEntity.getDisplayTitle()).toBe(validModuleData.title);
    });

    it('should return "Untitled Module" when title is empty', () => {
      const moduleEntity = new ModuleEntity(
        validModuleData.id,
        validModuleData.courseId,
        "",
        validModuleData.description,
        validModuleData.position,
        validModuleData.duration,
        validModuleData.createdAt
      );

      expect(moduleEntity.getDisplayTitle()).toBe("Untitled Module");
    });
  });

  describe("getDisplayDescription", () => {
    it("should return the description when present", () => {
      const moduleEntity = new ModuleEntity(
        validModuleData.id,
        validModuleData.courseId,
        validModuleData.title,
        validModuleData.description,
        validModuleData.position,
        validModuleData.duration,
        validModuleData.createdAt
      );

      expect(moduleEntity.getDisplayDescription()).toBe(
        validModuleData.description
      );
    });

    it("should return default message when description is null", () => {
      const moduleEntity = new ModuleEntity(
        validModuleData.id,
        validModuleData.courseId,
        validModuleData.title,
        null,
        validModuleData.position,
        validModuleData.duration,
        validModuleData.createdAt
      );

      expect(moduleEntity.getDisplayDescription()).toBe(
        "No description available"
      );
    });
  });

  describe("getDurationDisplay", () => {
    it("should return the duration when present", () => {
      const moduleEntity = new ModuleEntity(
        validModuleData.id,
        validModuleData.courseId,
        validModuleData.title,
        validModuleData.description,
        validModuleData.position,
        validModuleData.duration,
        validModuleData.createdAt
      );

      expect(moduleEntity.getDurationDisplay()).toBe(validModuleData.duration);
    });

    it("should return default message when duration is null", () => {
      const moduleEntity = new ModuleEntity(
        validModuleData.id,
        validModuleData.courseId,
        validModuleData.title,
        validModuleData.description,
        validModuleData.position,
        null,
        validModuleData.createdAt
      );

      expect(moduleEntity.getDurationDisplay()).toBe("Duration not specified");
    });
  });

  describe("isRecent", () => {
    it("should return true for module created within last week", () => {
      const recentDate = new Date();
      recentDate.setDate(recentDate.getDate() - 3); // 3 days ago

      const moduleEntity = new ModuleEntity(
        validModuleData.id,
        validModuleData.courseId,
        validModuleData.title,
        validModuleData.description,
        validModuleData.position,
        validModuleData.duration,
        recentDate
      );

      expect(moduleEntity.isRecent()).toBe(true);
    });

    it("should return false for module created more than a week ago", () => {
      const oldDate = new Date();
      oldDate.setDate(oldDate.getDate() - 10); // 10 days ago

      const moduleEntity = new ModuleEntity(
        validModuleData.id,
        validModuleData.courseId,
        validModuleData.title,
        validModuleData.description,
        validModuleData.position,
        validModuleData.duration,
        oldDate
      );

      expect(moduleEntity.isRecent()).toBe(false);
    });

    it("should return false when createdAt is null", () => {
      const moduleEntity = new ModuleEntity(
        validModuleData.id,
        validModuleData.courseId,
        validModuleData.title,
        validModuleData.description,
        validModuleData.position,
        validModuleData.duration,
        null
      );

      expect(moduleEntity.isRecent()).toBe(false);
    });
  });
});
