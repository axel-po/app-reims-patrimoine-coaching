#!/usr/bin/env node

import initDotEnv from "./env";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { migrate } from "drizzle-orm/neon-http/migrator";
import { sql } from "drizzle-orm";
initDotEnv();

const runMigrate = async () => {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
  }
  const client = neon(process.env.DATABASE_URL);
  const db = drizzle({ client });

  console.log("⏳ Running migrations...");

  const start = Date.now();

  await db.execute(sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
  await migrate(db, { migrationsFolder: "./drizzle" });

  const end = Date.now();

  console.log("✅ Migrations completed in", end - start, "ms");

  process.exit(0);
};

(async () => {
  try {
    await runMigrate();
  } catch (error) {
    console.error("❌ Migration failed");
    console.error(error);
    process.exit(1);
  }
})();
