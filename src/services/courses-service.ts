import {
  getCoursesWithModulesAndLessons,
  getCourseWithModulesAndLessons,
} from "@/data/repositories/courses-repository";

export async function getAllCoursesWithContent() {
  try {
    const courses = await getCoursesWithModulesAndLessons();
    return {
      success: true,
      data: courses,
    };
  } catch (error) {
    console.error("Error fetching courses with content:", error);
    return {
      success: false,
      error: "Failed to fetch courses",
      data: null,
    };
  }
}

export async function getCourseWithContent(courseId: string) {
  if (!courseId) {
    return {
      success: false,
      error: "Course ID is required",
      data: null,
    };
  }

  try {
    const course = await getCourseWithModulesAndLessons(courseId);

    if (!course) {
      return {
        success: false,
        error: "Course not found",
        data: null,
      };
    }

    return {
      success: true,
      data: course,
    };
  } catch (error) {
    console.error("Error fetching course with content:", error);
    return {
      success: false,
      error: "Failed to fetch course",
      data: null,
    };
  }
}

export async function getCourseProgress(courseId: string) {
  try {
    const course = await getCourseWithModulesAndLessons(courseId);

    if (!course) {
      return {
        success: false,
        error: "Course not found",
        data: null,
      };
    }

    const totalLessons = course.modules.reduce(
      (total, module) => total + module.lessons.length,
      0
    );

    // This would need to be connected to user progress tracking
    // For now, return basic structure
    const progressData = {
      courseId: course.id,
      courseTitle: course.title,
      totalModules: course.modules.length,
      totalLessons,
      completedLessons: 0, // TODO: Get from user progress
      progressPercentage: 0, // TODO: Calculate based on completed lessons
      modules: course.modules.map((module) => ({
        id: module.id,
        title: module.title,
        totalLessons: module.lessons.length,
        completedLessons: 0, // TODO: Get from user progress
        lessons: module.lessons.map((lesson) => ({
          id: lesson.id,
          title: lesson.title,
          duration: lesson.duration,
          isCompleted: false, // TODO: Get from user progress
          isFree: lesson.isFree,
        })),
      })),
    };

    return {
      success: true,
      data: progressData,
    };
  } catch (error) {
    console.error("Error fetching course progress:", error);
    return {
      success: false,
      error: "Failed to fetch course progress",
      data: null,
    };
  }
}

export async function getFreeLessons(courseId?: string) {
  try {
    if (courseId) {
      const course = await getCourseWithModulesAndLessons(courseId);
      if (!course) {
        return {
          success: false,
          error: "Course not found",
          data: null,
        };
      }

      const freeLessons = course.modules.flatMap((module) =>
        module.lessons
          .filter((lesson) => lesson.isFree)
          .map((lesson) => ({
            ...lesson,
            moduleTitle: module.title,
            courseTitle: course.title,
          }))
      );

      return {
        success: true,
        data: freeLessons,
      };
    } else {
      // Get free lessons from all courses
      const courses = await getCoursesWithModulesAndLessons();
      const allFreeLessons = courses.flatMap((course) =>
        course.modules.flatMap((module) =>
          module.lessons
            .filter((lesson) => lesson.isFree)
            .map((lesson) => ({
              ...lesson,
              moduleTitle: module.title,
              courseTitle: course.title,
            }))
        )
      );

      return {
        success: true,
        data: allFreeLessons,
      };
    }
  } catch (error) {
    console.error("Error fetching free lessons:", error);
    return {
      success: false,
      error: "Failed to fetch free lessons",
      data: null,
    };
  }
}
