import { notFound, redirect } from "next/navigation";
import { headers } from "next/headers";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { getNoteById } from "@/lib/notes";
import NoteViewer from "./NoteViewer";

export default async function NotePage({
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
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">{note.title}</h1>
        <Link
          href={`/notes/${id}/edit`}
          className="px-3 py-1.5 text-sm bg-neutral-800 text-neutral-200 rounded-lg border border-neutral-700 hover:bg-neutral-700 transition-colors"
        >
          Edit
        </Link>
      </div>
      <div className="rounded-lg bg-neutral-900 border border-neutral-800">
        <NoteViewer contentJson={note.contentJson} />
      </div>
    </div>
  );
}
