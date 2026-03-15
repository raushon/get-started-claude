import { notFound, redirect } from "next/navigation";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { getNoteById } from "@/lib/notes";
import EditNoteForm from "./EditNoteForm";

export default async function EditNotePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/authenticate");

  const { id } = await params;
  const note = await getNoteById(session.user.id, id);
  if (!note) notFound();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-white">Edit note</h1>
      <EditNoteForm
        noteId={id}
        initialTitle={note.title}
        initialContentJson={note.contentJson}
      />
    </div>
  );
}
