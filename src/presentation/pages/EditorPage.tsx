  import { useState } from 'react';
  import { useParams } from 'react-router-dom';
  import { useEditor, EditorContent } from '@tiptap/react';
  import StarterKit from '@tiptap/starter-kit';
  import { FaBold, FaItalic,FaSave  } from 'react-icons/fa';
  import AppLayout from '../layout/AppLayout';
  import Nav from  '../components/Nav';
  export default function EditorPage() {
    const { id } = useParams<{ id: string }>();
    const title = `Document ${id}`; // Placeholder title, replace with actual logic if needed
    const [savedContent, setSavedContent] = useState<string>('');

    const editor = useEditor({
      extensions: [StarterKit],
      content: savedContent,
      onUpdate: ({ editor }) => setSavedContent(editor.getHTML()),
    });

    return (
      <AppLayout>
        <Nav />
        <h1 className="text-2xl font-bold mb-4 text-blue-900 text-center">Editing Document {id} : {title}</h1>
        <div className="border rounded bg-blue-50 p-4 shadow flex flex-col">
          <div className="flex space-x-2 mb-3">
            {/* Bold button */}
            <button
              title="Bold"
              onClick={() => editor?.chain().focus().toggleBold().run()}
              className="p-2 bg-white rounded hover:bg-blue-100"
            >
              <FaBold />
            </button>
            {/* Italic button */}
            <button
              title="Italic"
              onClick={() => editor?.chain().focus().toggleItalic().run()}
              className="p-2 bg-white rounded hover:bg-blue-100"
            >
              <FaItalic />
            </button>
            {/* Save button */}
            <button
              title="Save"
              onClick={() => editor?.chain().focus().run()}
              className="p-2 bg-white rounded hover:bg-blue-100"
            >
              <FaSave/>              
            </button>
          </div>
          <div className="flex-1 overflow-auto min-h-[300px] max-h-[600px] bg-white p-4 rounded shadow text-gray-800">
            {editor ? <EditorContent editor={editor} /> : <p>Loading editor…</p>}
          </div>
        </div>
      </AppLayout>
    );
  }
