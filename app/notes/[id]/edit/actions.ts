"use server";

import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { updateNote } from "@/lib/notes";

export async function updateNoteAction(formData: FormData) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/authenticate");

  const noteId = formData.get("noteId") as string;
  const title = (formData.get("title") as string) || "Untitled note";
  const content = (formData.get("content") as string) || '{"type":"doc","content":[]}';

  await updateNote(session.user.id, noteId, { title, contentJson: content });
  redirect(`/notes/${noteId}`);
}
