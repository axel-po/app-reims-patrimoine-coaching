import { pgTable, serial, uuid, boolean, timestamp } from "drizzle-orm/pg-core";
import { courseContents } from "./courseContents";

export const userProgress = pgTable("user_progress", {
  id: serial("id").primaryKey(),
  userId: uuid("user_id").notNull(),
  courseContentId: uuid("course_content_id")
    .notNull()
    .references(() => courseContents.id),
  completed: boolean("completed").default(false),
  completedAt: timestamp("completed_at"),
});
