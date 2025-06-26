import { pgTable, serial, uuid, boolean, timestamp } from "drizzle-orm/pg-core";
import { lessons } from "./lessons";

export const userProgress = pgTable("user_progress", {
  id: serial("id").primaryKey(),
  userId: uuid("user_id").notNull(),
  lessonId: uuid("lesson_id")
    .notNull()
    .references(() => lessons.id),
  completed: boolean("completed").default(false),
  completedAt: timestamp("completed_at"),
});
