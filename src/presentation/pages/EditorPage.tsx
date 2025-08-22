import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Toolbar } from '../components/Toolbar';
import AppLayout from '../layout/AppLayout';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import MediaButtons from '../components/MediaButtons';

export default function EditorPage() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph'], // ou selon tes besoins
      }),
    ], content: '<p>Start writing…</p>'
  });

  return (
    <AppLayout>
      <div className="w-full max-w-3xl flex flex-wrap flex-col rounded shadow bg-white mx-auto my-4">
        <Toolbar editor={editor} />
        <div className="flex-1 p-6 min-h-[60vh] prose max-w-none text-gray-800">
          {editor ? <EditorContent editor={editor} /> : <p>Loading editor…</p>}
        </div>
      </div>
      <MediaButtons />
    </AppLayout>
  );
}