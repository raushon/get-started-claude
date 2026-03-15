"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { updateNoteAction } from "./actions";

interface EditNoteFormProps {
  noteId: string;
  initialTitle: string;
  initialContentJson: string;
}

export default function EditNoteForm({ noteId, initialTitle, initialContentJson }: EditNoteFormProps) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [StarterKit],
    content: JSON.parse(initialContentJson),
    editorProps: {
      attributes: {
        class: "min-h-[200px] px-4 py-3 text-white focus:outline-none",
      },
    },
  });

  function handleSubmit(formData: FormData) {
    if (editor) {
      formData.set("content", JSON.stringify(editor.getJSON()));
    }
    updateNoteAction(formData);
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      <input type="hidden" name="noteId" value={noteId} />

      <div className="space-y-1">
        <label htmlFor="title" className="text-sm text-neutral-400">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          defaultValue={initialTitle}
          placeholder="Note title"
          className="w-full px-3 py-2 rounded-lg bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-neutral-500"
        />
      </div>

      <div className="space-y-1">
        <label className="text-sm text-neutral-400">Content</label>
        <div className="rounded-lg bg-neutral-800 border border-neutral-700 focus-within:border-neutral-500">
          <EditorContent editor={editor} />
        </div>
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-white text-neutral-900 font-medium rounded-lg hover:bg-neutral-200 transition-colors text-sm"
      >
        Save changes
      </button>
    </form>
  );
}
