import { pgTable, serial, text, uuid, boolean, timestamp } from "drizzle-orm/pg-core";
import { lessons } from "./lessons.schema";

export const userProgress = pgTable("user_progress", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(),
  lessonId: uuid("lesson_id")
    .notNull()
    .references(() => lessons.id),
  completed: boolean("completed").default(false).notNull(),
  completedAt: timestamp("completed_at"),
});

export type UserProgressModel = typeof userProgress.$inferSelect;
