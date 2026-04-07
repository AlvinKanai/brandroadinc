import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

/**
 * Uploads editor images to Supabase Storage and returns the resulting public CDN URL.
 */
export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "File is required." }, { status: 400 });
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    return NextResponse.json({ error: "Supabase env vars missing." }, { status: 500 });
  }

  const supabase = createClient(url, serviceRoleKey);
  const path = `editor/${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
  const buffer = Buffer.from(await file.arrayBuffer());

  const { error } = await supabase.storage.from("brandroad-media").upload(path, buffer, {
    contentType: file.type,
    upsert: false,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const { data } = supabase.storage.from("brandroad-media").getPublicUrl(path);
  return NextResponse.json({ publicUrl: data.publicUrl });
}
