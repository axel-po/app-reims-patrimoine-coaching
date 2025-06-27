import { db } from "../db/client";
import { courses } from "../models/courses-model";
import { modules } from "../models/modules-model";
import { lessons } from "../models/lessons-model";
import { eq, asc } from "drizzle-orm";

export async function getCoursesWithModulesAndLessons() {
  // Get all courses with their modules and lessons
  const result = await db
    .select({
      // Course fields
      courseId: courses.id,
      courseTitle: courses.title,
      courseDescription: courses.description,
      courseCreatedAt: courses.createdAt,
      // Module fields
      moduleId: modules.id,
      moduleTitle: modules.title,
      moduleDescription: modules.description,
      modulePosition: modules.position,
      moduleDuration: modules.duration,
      moduleCreatedAt: modules.createdAt,
      // Lesson fields
      lessonId: lessons.id,
      lessonTitle: lessons.title,
      lessonVideoUrl: lessons.videoUrl,
      lessonTextContent: lessons.textContent,
      lessonDocumentUrl: lessons.documentUrl,
      lessonDuration: lessons.duration,
      lessonPosition: lessons.position,
      lessonIsFree: lessons.isFree,
      lessonCreatedAt: lessons.createdAt,
    })
    .from(courses)
    .leftJoin(modules, eq(courses.id, modules.courseId))
    .leftJoin(lessons, eq(modules.id, lessons.moduleId))
    .orderBy(
      asc(courses.createdAt),
      asc(modules.position),
      asc(lessons.position)
    );

  // Transform flat result into nested structure
  const coursesMap = new Map();

  result.forEach((row) => {
    const courseId = row.courseId;

    // Initialize course if not exists
    if (!coursesMap.has(courseId)) {
      coursesMap.set(courseId, {
        id: row.courseId,
        title: row.courseTitle,
        description: row.courseDescription,
        createdAt: row.courseCreatedAt,
        modules: new Map(),
      });
    }

    const course = coursesMap.get(courseId);

    // Add module if exists and not already added
    if (row.moduleId && !course.modules.has(row.moduleId)) {
      course.modules.set(row.moduleId, {
        id: row.moduleId,
        courseId: courseId,
        title: row.moduleTitle,
        description: row.moduleDescription,
        position: row.modulePosition,
        duration: row.moduleDuration,
        createdAt: row.moduleCreatedAt,
        lessons: [],
      });
    }

    // Add lesson if exists
    if (row.lessonId && row.moduleId) {
      const currentModule = course.modules.get(row.moduleId);
      // Check if lesson already exists in module
      const lessonExists = currentModule.lessons.some(
        (l) => l.id === row.lessonId
      );
      if (!lessonExists) {
        currentModule.lessons.push({
          id: row.lessonId,
          moduleId: row.moduleId,
          title: row.lessonTitle,
          videoUrl: row.lessonVideoUrl,
          textContent: row.lessonTextContent,
          documentUrl: row.lessonDocumentUrl,
          duration: row.lessonDuration,
          position: row.lessonPosition,
          isFree: row.lessonIsFree,
          createdAt: row.lessonCreatedAt,
        });
      }
    }
  });

  // Convert Maps to arrays and sort
  return Array.from(coursesMap.values()).map((course) => ({
    ...course,
    modules: Array.from(course.modules.values())
      .sort((a, b) => a.position - b.position)
      .map((courseModule) => ({
        ...courseModule,
        lessons: courseModule.lessons.sort((a, b) => a.position - b.position),
      })),
  }));
}

export async function getCourseWithModulesAndLessons(courseId: string) {
  const result = await db
    .select({
      // Course fields
      courseId: courses.id,
      courseTitle: courses.title,
      courseDescription: courses.description,
      courseCreatedAt: courses.createdAt,
      // Module fields
      moduleId: modules.id,
      moduleTitle: modules.title,
      moduleDescription: modules.description,
      modulePosition: modules.position,
      moduleDuration: modules.duration,
      moduleCreatedAt: modules.createdAt,
      // Lesson fields
      lessonId: lessons.id,
      lessonTitle: lessons.title,
      lessonVideoUrl: lessons.videoUrl,
      lessonTextContent: lessons.textContent,
      lessonDocumentUrl: lessons.documentUrl,
      lessonDuration: lessons.duration,
      lessonPosition: lessons.position,
      lessonIsFree: lessons.isFree,
      lessonCreatedAt: lessons.createdAt,
    })
    .from(courses)
    .leftJoin(modules, eq(courses.id, modules.courseId))
    .leftJoin(lessons, eq(modules.id, lessons.moduleId))
    .where(eq(courses.id, courseId))
    .orderBy(asc(modules.position), asc(lessons.position));

  if (result.length === 0) {
    return null;
  }

  const course = {
    id: result[0].courseId,
    title: result[0].courseTitle,
    description: result[0].courseDescription,
    createdAt: result[0].courseCreatedAt,
    modules: new Map(),
  };

  result.forEach((row) => {
    // Add module if exists and not already added
    if (row.moduleId && !course.modules.has(row.moduleId)) {
      course.modules.set(row.moduleId, {
        id: row.moduleId,
        courseId: course.id,
        title: row.moduleTitle,
        description: row.moduleDescription,
        position: row.modulePosition,
        duration: row.moduleDuration,
        createdAt: row.moduleCreatedAt,
        lessons: [],
      });
    }

    // Add lesson if exists
    if (row.lessonId && row.moduleId) {
      const currentModule = course.modules.get(row.moduleId);
      // Check if lesson already exists in module
      const lessonExists = currentModule.lessons.some(
        (l) => l.id === row.lessonId
      );
      if (!lessonExists) {
        currentModule.lessons.push({
          id: row.lessonId,
          moduleId: row.moduleId,
          title: row.lessonTitle,
          videoUrl: row.lessonVideoUrl,
          textContent: row.lessonTextContent,
          documentUrl: row.lessonDocumentUrl,
          duration: row.lessonDuration,
          position: row.lessonPosition,
          isFree: row.lessonIsFree,
          createdAt: row.lessonCreatedAt,
        });
      }
    }
  });

  return {
    ...course,
    modules: Array.from(course.modules.values())
      .sort((a, b) => a.position - b.position)
      .map((module) => ({
        ...module,
        lessons: module.lessons.sort((a, b) => a.position - b.position),
      })),
  };
}
