import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { FaBold, FaItalic } from 'react-icons/fa';
import AppLayout from '../layout/AppLayout';

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
      {/* Navigation bar with links to home and edit document */}
      <nav className="mb-4" aria-label="breadcrumb" style={{ backgroundColor: '#f0f4ff', padding: '10px', borderRadius: '8px' }}>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-blue-600 hover:underline">Home</a>
          </li>
          <li>
            <a href={`/editor/${id}`} className="text-blue-600 hover:underline">Edit Document {id}</a>
          </li>
        </ul>
      </nav>
      <h1 className="text-2xl font-bold mb-4 text-blue-900">Editing Document {id} : {title}</h1>
      <div className="border rounded bg-blue-50 p-4 shadow flex flex-col">
        <div className="flex space-x-2 mb-3">
          <button
            title="Bold"
            onClick={() => editor?.chain().focus().toggleBold().run()}
            className="p-2 bg-white rounded hover:bg-blue-100"
          >
            <FaBold />
          </button>
          <button
            title="Italic"
            onClick={() => editor?.chain().focus().toggleItalic().run()}
            className="p-2 bg-white rounded hover:bg-blue-100"
          >
            <FaItalic />
          </button>
        </div>
        <div className="flex-1 overflow-auto min-h-[300px] max-h-[600px] bg-white p-4 rounded shadow text-gray-800">
          {editor ? <EditorContent editor={editor} /> : <p>Loading editor…</p>}
        </div>
      </div>
    </AppLayout>
  );
}
