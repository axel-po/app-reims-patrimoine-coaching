import {
  pgTable,
  uuid,
  varchar,
  text,
  timestamp,
  integer,
} from "drizzle-orm/pg-core";
import { courses } from "./courses.schema";

export const modules = pgTable("modules", {
  id: uuid("id").defaultRandom().primaryKey(),
  courseId: uuid("course_id")
    .notNull()
    .references(() => courses.id),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  position: integer("position").notNull(),
  duration: varchar("duration", { length: 20 }),
  createdAt: timestamp("created_at").defaultNow(),
});

export type ModuleModel = typeof modules.$inferSelect;
