import {
  pgTable,
  uuid,
  text,
  timestamp,
  varchar,
  jsonb,
  pgEnum,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const userRoleEnum = pgEnum("user_role", ["admin", "editor"]);
export const analyticsEventTypeEnum = pgEnum("analytics_event_type", ["view", "click"]);

/**
 * Core authenticated users table used for role-aware admin authorization.
 */
export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  role: userRoleEnum("role").notNull().default("editor"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

/**
 * Project case studies with structured problem/solution/testimonial fields and rich text body.
 */
export const projects = pgTable("projects", {
  id: uuid("id").defaultRandom().primaryKey(),
  slug: varchar("slug", { length: 220 }).notNull().unique(),
  title: varchar("title", { length: 255 }).notNull(),
  coverImageUrl: text("cover_image_url").notNull(),
  clientName: varchar("client_name", { length: 180 }).notNull(),
  headings: jsonb("headings").$type<string[]>().notNull().default([]),
  theProblem: text("the_problem").notNull(),
  theSolution: text("the_solution").notNull(),
  bodyContent: text("body_content").notNull(),
  testimonialQuote: text("testimonial_quote").notNull(),
  testimonialAuthor: varchar("testimonial_author", { length: 180 }).notNull(),
  testimonialRole: varchar("testimonial_role", { length: 180 }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

/**
 * Blog posts with SEO metadata and rich HTML body from TipTap.
 */
export const posts = pgTable("posts", {
  id: uuid("id").defaultRandom().primaryKey(),
  slug: varchar("slug", { length: 220 }).notNull().unique(),
  title: varchar("title", { length: 255 }).notNull(),
  metaDescription: text("meta_description").notNull(),
  bodyContent: text("body_content").notNull(),
  mainImageUrl: text("main_image_url").notNull(),
  authorName: varchar("author_name", { length: 180 }).notNull(),
  publishedAt: timestamp("published_at", { withTimezone: true }).defaultNow().notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

/**
 * Event-level analytics used to compute traffic and engagement dashboards.
 */
export const analyticsEvents = pgTable("analytics_events", {
  id: uuid("id").defaultRandom().primaryKey(),
  eventType: analyticsEventTypeEnum("event_type").notNull(),
  pageUrl: text("page_url").notNull(),
  projectId: uuid("project_id").references(() => projects.id, { onDelete: "set null" }),
  postId: uuid("post_id").references(() => posts.id, { onDelete: "set null" }),
  visitorId: varchar("visitor_id", { length: 160 }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const projectRelations = relations(projects, ({ many }) => ({
  analyticsEvents: many(analyticsEvents),
}));

export const postRelations = relations(posts, ({ many }) => ({
  analyticsEvents: many(analyticsEvents),
}));

export const analyticsEventRelations = relations(analyticsEvents, ({ one }) => ({
  project: one(projects, {
    fields: [analyticsEvents.projectId],
    references: [projects.id],
  }),
  post: one(posts, {
    fields: [analyticsEvents.postId],
    references: [posts.id],
  }),
}));

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type Project = typeof projects.$inferSelect;
export type NewProject = typeof projects.$inferInsert;
export type Post = typeof posts.$inferSelect;
export type NewPost = typeof posts.$inferInsert;
export type AnalyticsEvent = typeof analyticsEvents.$inferSelect;
export type NewAnalyticsEvent = typeof analyticsEvents.$inferInsert;
