"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { getDb, schema } from "@/db";

const projectSchema = z.object({
  slug: z.string().min(3),
  title: z.string().min(3),
  coverImageUrl: z.string().min(1),
  clientName: z.string().min(2),
  headings: z.array(z.string()).default([]),
  theProblem: z.string().min(10),
  theSolution: z.string().min(10),
  bodyContent: z.string().min(1),
  testimonialQuote: z.string().min(5),
  testimonialAuthor: z.string().min(2),
  testimonialRole: z.string().min(2),
});

const postSchema = z.object({
  slug: z.string().min(3),
  title: z.string().min(3),
  metaDescription: z.string().min(20),
  bodyContent: z.string().min(1),
  mainImageUrl: z.string().min(1),
  authorName: z.string().min(2),
});

/**
 * Creates a project record from admin forms and revalidates affected routes.
 */
export async function createProjectAction(formData: FormData) {
  const parsed = projectSchema.parse({
    slug: String(formData.get("slug") ?? "").trim(),
    title: String(formData.get("title") ?? "").trim(),
    coverImageUrl: String(formData.get("coverImageUrl") ?? "").trim(),
    clientName: String(formData.get("clientName") ?? "").trim(),
    headings: String(formData.get("headings") ?? "")
      .split(",")
      .map((part) => part.trim())
      .filter(Boolean),
    theProblem: String(formData.get("theProblem") ?? "").trim(),
    theSolution: String(formData.get("theSolution") ?? "").trim(),
    bodyContent: String(formData.get("bodyContent") ?? "").trim(),
    testimonialQuote: String(formData.get("testimonialQuote") ?? "").trim(),
    testimonialAuthor: String(formData.get("testimonialAuthor") ?? "").trim(),
    testimonialRole: String(formData.get("testimonialRole") ?? "").trim(),
  });

  const db = getDb();
  if (!db) {
    return { ok: false, message: "DATABASE_URL is missing." };
  }

  await db.insert(schema.projects).values(parsed);
  revalidatePath("/");
  revalidatePath("/projects");
  return { ok: true };
}

/**
 * Creates a post record from admin forms and revalidates insight routes.
 */
export async function createPostAction(formData: FormData) {
  const parsed = postSchema.parse({
    slug: String(formData.get("slug") ?? "").trim(),
    title: String(formData.get("title") ?? "").trim(),
    metaDescription: String(formData.get("metaDescription") ?? "").trim(),
    bodyContent: String(formData.get("bodyContent") ?? "").trim(),
    mainImageUrl: String(formData.get("mainImageUrl") ?? "").trim(),
    authorName: String(formData.get("authorName") ?? "").trim(),
  });

  const db = getDb();
  if (!db) {
    return { ok: false, message: "DATABASE_URL is missing." };
  }

  await db.insert(schema.posts).values(parsed);
  revalidatePath("/");
  revalidatePath("/insights");
  return { ok: true };
}
