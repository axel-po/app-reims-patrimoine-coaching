import {
  pgTable,
  uuid,
  varchar,
  text,
  timestamp,
  integer,
  boolean,
} from "drizzle-orm/pg-core";
import { modules } from "./modules-model";

export const lessons = pgTable("lessons", {
  id: uuid("id").defaultRandom().primaryKey(),
  moduleId: uuid("module_id")
    .notNull()
    .references(() => modules.id),
  title: varchar("title", { length: 255 }).notNull(),
  videoUrl: varchar("video_url", { length: 500 }), // Optional video url
  textContent: text("text_content"), // Optional text content
  documentUrl: varchar("document_url", { length: 500 }), // Optional document
  duration: varchar("duration", { length: 20 }).notNull(), // "8min", "12min"
  position: integer("position").notNull(), // order in module
  isFree: boolean("is_free").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export type LessonModel = typeof lessons.$inferSelect;
