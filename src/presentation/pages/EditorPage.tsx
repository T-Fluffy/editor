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
    content: `<p>Start typing your document...</p>`,
    editorProps: {
      attributes: {
        class: 'prose prose-slate max-w-none focus:outline-none',
      },
    },
  });

  return (
    <AppLayout editor={editor}>
      {/* 1. Main Background (Dark Grey like Word/Docs workspace) */}
      <div className="relative min-h-screen flex flex-col items-center bg-[#e2e8f0] overflow-y-auto pb-20">
        
        {/* Toolbar (Fixed at top) */}
        <div className="sticky top-0 z-50 mt-4 mb-8">
          <Toolbar 
            editor={editor} 
            className="rounded-xl bg-white/90 backdrop-blur-xl border border-gray-200 shadow-xl px-4 py-2"
          />
        </div>

        {/* 2. The Editor Container (Visual Pages) */}
        <div className="editor-container shadow-2xl">
          <EditorContent editor={editor} />
        </div>
      </div>

      {/* 3. CSS Logic for Pages & Black Text */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* --- PAGE SIMULATION --- */
        .editor-container {
          width: 210mm; /* Exact A4 Width */
        }
        
        /* This is the magic part: Visual Page Breaks */
        .ProseMirror {
          min-height: 297mm; /* Start with 1 page height */
          
          /* Create the illusion of pages using a gradient:
             0mm -> 297mm : White (The Page)
             297mm -> 307mm : Grey (The Gap between pages)
             Repeats automatically */
          background-image: linear-gradient(to bottom, white 0mm, white 297mm, #e2e8f0 297mm, #e2e8f0 307mm);
          background-size: 100% 307mm; /* The height of 1 page + 1 gap */
          background-repeat: repeat-y;
          
          padding: 25mm; /* Margins */
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        /* --- TEXT COLOR (Strict Black) --- */
        .ProseMirror p, 
        .ProseMirror h1, 
        .ProseMirror h2, 
        .ProseMirror h3, 
        .ProseMirror ul, 
        .ProseMirror ol,
        .ProseMirror li,
        .ProseMirror span {
          color: #000000 !important; /* Forces strict black ink */
        }

        /* --- CLEAN UP UI --- */
        .ProseMirror:focus { outline: none; }
        
        /* Table Styles */
        .ProseMirror table { border-collapse: collapse; margin: 0; overflow: hidden; }
        .ProseMirror td, .ProseMirror th { border: 1px solid black; padding: 3px 5px; vertical-align: top; }
        
        /* Print Fixes (Hides the grey gaps when printing) */
        @media print {
          body { background: white; }
          .ProseMirror { background: white; margin: 0; box-shadow: none; }
          .sticky { display: none; } /* Hide toolbar in print */
        }
      `}} />
    </AppLayout>
  );
}