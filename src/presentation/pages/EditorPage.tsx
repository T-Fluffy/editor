import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDocument, updateDocument } from '../../application/services/documentService';
import type { Document } from '../../domain/models/DocumentModel';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

export default function EditorPage() {
  const { id } = useParams();
  const [doc, setDoc] = useState<Document | null>(null);

  const editor = useEditor({
    extensions: [StarterKit],
    content: '',
    onUpdate({ editor }) {
      if (doc) {
        const updated = { ...doc, content: editor.getHTML(), updatedAt: new Date().toISOString() };
        setDoc(updated);
        updateDocument(updated);
      }
    },
  });

  useEffect(() => {
    if (id) {
      getDocument(id).then((d) => {
        setDoc(d);
        editor?.commands.setContent(d.content || '');
      });
    }
  }, [id, editor]);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">{doc?.title}</h2>
      <EditorContent editor={editor} className="prose max-w-none border p-4 min-h-[300px]" />
    </div>
  );
}
