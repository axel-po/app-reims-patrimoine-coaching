"use server";

import { eq } from "drizzle-orm";
import { db } from "@/data/db/client";
import { modules } from "@/data/models/modules-model";

export async function getModulesByCourseId(courseId: string) {
  return db
    .select()
    .from(modules)
    .where(eq(modules.courseId, courseId))
    .orderBy(modules.position);
}
