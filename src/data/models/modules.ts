import {
  pgTable,
  uuid,
  varchar,
  text,
  timestamp,
  integer,
} from "drizzle-orm/pg-core";
import { courses } from "./courses";

export const modules = pgTable("modules", {
  id: uuid("id").defaultRandom().primaryKey(),
  courseId: uuid("course_id")
    .notNull()
    .references(() => courses.id),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  position: integer("position").notNull(), // order in course
  duration: varchar("duration", { length: 20 }), // "45min", "1h 30min"
  createdAt: timestamp("created_at").defaultNow(),
});
