import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "../../db/schema";

/**
 * Lazily creates Drizzle client only when DATABASE_URL is present.
 * This avoids build-time hard crashes for environments that have not yet configured secrets.
 */
export function getDb() {
  const url = process.env.DATABASE_URL;

  if (!url) {
    return null;
  }

  const client = postgres(url, { prepare: false, max: 1 });
  return drizzle(client, { schema });
}

export { schema };
