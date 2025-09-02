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
      <div className="w-full max-w-xl flex flex-wrap flex-col rounded shadow mx-auto my-8">
        <Toolbar editor={editor}  x-style={{ position : 'top'}}/>
        <div className="flex-1 p-4 min-h-[60vh] prose max-w-none text-gray-800">
          {editor ? (
            <EditorContent
              editor={editor}
              className="a4-format"
              style={{
                width: '210mm', // A4 width
                height: '297mm', // A4 height
                padding: '20mm', // add some padding to match A4 margins
                backgroundColor: '#fff', // set background color to white
                border: '1px solid #ccc', // add a border to match A4 paper
              }}
            />
          ) : (
            <p>Loading editor…</p>
          )}
        </div>
      </div>
      <MediaButtons />
    </AppLayout>
  );
}