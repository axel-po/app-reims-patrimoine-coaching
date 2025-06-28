"use server";

import { eq } from "drizzle-orm";
import { db } from "@/data/db/client";
import { lessons } from "@/data/models/lessons-model";

export async function getLessonsByModuleId(moduleId: string) {
  return db
    .select()
    .from(lessons)
    .where(eq(lessons.moduleId, moduleId))
    .orderBy(lessons.position);
}
