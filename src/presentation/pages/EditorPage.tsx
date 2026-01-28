// src/presentation/pages/EditorPage.tsx
import { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';

import { Toolbar } from '../components/Toolbar';
import AppLayout from '../layout/AppLayout';

export default function EditorPage() {
  // 1. State to track if the user is typing (Zen Mode)
  const [isZenMode, setIsZenMode] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: `
      <h1>Untitled Document</h1>
      <p>Click here to start your futuristic writing experience...</p>
    `,
    // 2. Trigger Zen Mode on Focus
    onFocus: () => setIsZenMode(true),
    onBlur: () => setIsZenMode(false),
  });

  return (
    <AppLayout isZenMode={isZenMode}>
      <div className="relative min-h-screen flex flex-col items-center transition-all duration-700">
        
        {/* 3. Floating Glass Toolbar 
            - Slides up slightly and fades when in Zen Mode to stay out of the way
        */}
        <div className={`
          fixed top-10 z-50 transition-all duration-500 ease-in-out
          ${isZenMode ? 'opacity-40 hover:opacity-100 scale-95' : 'opacity-100 scale-100'}
        `}>
          <Toolbar 
            editor={editor} 
            className="rounded-2xl bg-black/20 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] px-6 py-2"
          />
        </div>

        {/* 4. The A4 Document Container 
            - The "mx-auto" and transition classes handle the Zen Mode centering
        */}
        <div className={`
          relative mt-32 mb-20 transition-all duration-1000 ease-in-out transform
          ${isZenMode ? 'scale-[1.02] shadow-[0_0_100px_-20px_rgba(59,130,246,0.15)]' : 'shadow-2xl'}
        `}>
          {editor ? (
            <div className="bg-white rounded-sm overflow-hidden border border-white/5">
              <EditorContent
                editor={editor}
                className="prose prose-slate max-w-none focus:outline-none"
                style={{
                  width: '210mm',
                  minHeight: '297mm',
                  padding: '30mm', // Standard A4 margins
                  backgroundColor: '#fff',
                  color: '#1e293b', // Slate 800
                }}
              />
            </div>
          ) : (
            <div className="w-[210mm] h-[297mm] bg-white/5 animate-pulse rounded-sm" />
          )}
          
          {/* Subtle page indicator for a high-end feel */}
          <div className="absolute -right-16 top-0 text-[10px] uppercase tracking-[0.2em] text-white/20 vertical-text hidden lg:block">
            Standard A4 / 210x297mm
          </div>
        </div>

        {/* 5. Floating Media Actions 
            - Stays at the bottom, potentially fading in Zen Mode
        */}

      </div>

      {/* Global CSS for the editor content to ensure it looks clean */}
      <style dangerouslySetInnerHTML={{ __html: `
        .ProseMirror { outline: none !important; }
        .ProseMirror h1 { font-weight: 800; font-size: 2.5rem; margin-bottom: 1.5rem; color: #0f172a; }
        .ProseMirror p { line-height: 1.7; font-size: 1.1rem; color: #334155; }
        .vertical-text { writing-mode: vertical-rl; }
      `}} />
    </AppLayout>
  );
}