"use server";

import { db } from "@/data/db/client";
import { courses } from "@/data/models/courses-model";

export async function getAllCourses() {
  return db.select().from(courses);
}
