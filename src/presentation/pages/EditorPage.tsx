import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Image from '@tiptap/extension-image';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';
import { Toolbar } from '../components/Toolbar';
import AppLayout from '../layout/AppLayout';

export default function EditorPage() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Image,
      Table.configure({ resizable: true }),
      TableRow,
      TableCell,
      TextStyle,
      Color,
      Highlight.configure({ multicolor: true }),
      TableHeader,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: `<h1>Welcome to Micro-Doc</h1><p>Start typing...</p>`,
    editable: true,
    autofocus: true,
    
  });

  return (
    <AppLayout editor={editor}>
      <div className="relative min-h-screen flex flex-col items-center">
        
        {/* Toolbar is now permanently visible and stable */}
        <div className="fixed top-20 z-50">
          <Toolbar 
            editor={editor} 
            className="rounded-2xl bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 shadow-2xl px-6 py-2"
          />
        </div>

        {/* Removed the 'mt-32' bounce and 'scale' transforms */}
        <div className="relative mt-40 mb-20">
          <div className="bg-white rounded-sm overflow-hidden border border-white/5 shadow-2xl">
            <EditorContent
              editor={editor}
              className="prose prose-slate max-w-none focus:outline-none"
              style={{ width: '210mm', minHeight: '297mm', padding: '30mm' }}
            />
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .ProseMirror { outline: none !important; }
        .ProseMirror table { border-collapse: collapse; table-layout: fixed; width: 100%; margin: 0; overflow: hidden; }
        .ProseMirror td, .ProseMirror th { border: 2px solid #ced4da; box-sizing: border-box; min-width: 1em; padding: 3px 5px; position: relative; vertical-align: top; }
        .ProseMirror th { background-color: #f1f3f5; font-weight: bold; text-align: left; }
        .ProseMirror img { max-width: 100%; height: auto; border-radius: 8px; }
      `}} />
    </AppLayout>
  );
}