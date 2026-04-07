import { count, desc, eq, sql } from "drizzle-orm";
import { getDb, schema } from "@/db";

type DashboardMetrics = {
  totalVisitors: number;
  mostViewedProjects: Array<{ title: string; views: number }>;
  postInteractions: number;
};

/**
 * Aggregates event-level analytics into dashboard metrics.
 */
export async function getDashboardMetrics(): Promise<DashboardMetrics> {
  const db = getDb();

  if (!db) {
    return {
      totalVisitors: 0,
      mostViewedProjects: [],
      postInteractions: 0,
    };
  }

  const [visitorRow] = await db
    .select({ value: count(sql`distinct ${schema.analyticsEvents.visitorId}`) })
    .from(schema.analyticsEvents);

  const projectRows = await db
    .select({
      title: schema.projects.title,
      views: count(schema.analyticsEvents.id),
    })
    .from(schema.analyticsEvents)
    .innerJoin(schema.projects, eq(schema.analyticsEvents.projectId, schema.projects.id))
    .where(eq(schema.analyticsEvents.eventType, "view"))
    .groupBy(schema.projects.id)
    .orderBy(desc(count(schema.analyticsEvents.id)))
    .limit(5);

  const [postInteractionRow] = await db
    .select({ value: count(schema.analyticsEvents.id) })
    .from(schema.analyticsEvents)
    .where(sql`${schema.analyticsEvents.postId} is not null`);

  return {
    totalVisitors: visitorRow?.value ?? 0,
    mostViewedProjects: projectRows.map((row) => ({ title: row.title, views: row.views })),
    postInteractions: postInteractionRow?.value ?? 0,
  };
}

export async function getProjectsAdmin() {
  const db = getDb();
  if (!db) {
    return [];
  }

  return db.select().from(schema.projects).orderBy(desc(schema.projects.createdAt));
}

export async function getPostsAdmin() {
  const db = getDb();
  if (!db) {
    return [];
  }

  return db.select().from(schema.posts).orderBy(desc(schema.posts.publishedAt));
}
