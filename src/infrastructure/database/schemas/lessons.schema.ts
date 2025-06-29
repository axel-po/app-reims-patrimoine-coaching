import {
  pgTable,
  uuid,
  varchar,
  text,
  timestamp,
  integer,
} from "drizzle-orm/pg-core";
import { modules } from "./modules.schema";

export const lessons = pgTable("lessons", {
  id: uuid("id").defaultRandom().primaryKey(),
  moduleId: uuid("module_id")
    .notNull()
    .references(() => modules.id),
  title: varchar("title", { length: 255 }).notNull(),
  videoUrl: varchar("video_url", { length: 500 }),
  textContent: text("text_content"),
  documentUrl: varchar("document_url", { length: 500 }),
  duration: varchar("duration", { length: 20 }).notNull(),
  position: integer("position").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export type LessonModel = typeof lessons.$inferSelect;
