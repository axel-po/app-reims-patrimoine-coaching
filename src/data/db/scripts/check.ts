#!/usr/bin/env node

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { sql } from "drizzle-orm";

import initDotEnv from "./env";

initDotEnv();

const checkConnexion = async () => {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
  }
  const client = neon(process.env.DATABASE_URL);
  const db = drizzle({ client });

  console.log("⏳ Checking connexion ...");

  const start = Date.now();
  await db.execute(sql`SELECT 1`);

  const end = Date.now();

  console.log("✅ Connexion checked in", end - start, "ms");

  process.exit(0);
};

export default checkConnexion;

(async () => {
  try {
    await checkConnexion();
  } catch (error) {
    console.error("❌ Connexion failed");
    console.error(error);
    process.exit(1);
  }
})();
