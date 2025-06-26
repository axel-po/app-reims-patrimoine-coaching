import {
  pgTable,
  uuid,
  varchar,
  text,
  timestamp,
  integer,
  boolean,
} from "drizzle-orm/pg-core";
import { courses } from "./courses";

export const courseContents = pgTable("course_contents", {
  id: uuid("id").defaultRandom().primaryKey(),
  courseId: uuid("course_id")
    .notNull()
    .references(() => courses.id),
  title: varchar("title", { length: 255 }).notNull(),
  type: varchar("type", { length: 50 }).notNull(), // 'video' | 'text' | 'pdf'
  contentUrl: varchar("content_url", { length: 500 }),
  textContent: text("text_content"),
  position: integer("position").notNull(),
  isFree: boolean("is_free").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});
