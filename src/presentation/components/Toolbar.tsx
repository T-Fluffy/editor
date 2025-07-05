import React from 'react';
import { FaBold, FaItalic, FaUnderline, FaStrikethrough, FaListOl, FaListUl, FaAlignLeft, FaAlignCenter, FaAlignRight } from 'react-icons/fa';
import { Editor } from '@tiptap/react';


interface Props { editor: Editor | null; }

export function Toolbar({ editor }: Props) {
  if (!editor) return null;

  const btn = (action: () => any, format: string, icon: React.ReactNode) => {
    const isActive = editor.isActive(format);
    return (
      <button
        onClick={() => action().run()}
        className={`p-2 mx-1 rounded transition-colors ${
          isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-200'
        }`}
        title={format}
      >
        {icon}
      </button>
    );
  };

  return (
    <div className="flex flex-wrap items-center gap-1 sm:gap-2 p-2 bg-gray-50 border-b sticky top-0 z-10">
      {btn(() => editor.chain().focus().toggleBold(), 'bold', <FaBold />)}
      {btn(() => editor.chain().focus().toggleItalic(), 'italic', <FaItalic />)}
      {/* Make sure the Underline extension is added to your Editor setup for this to work */}
      {btn(
        () => editor.chain().focus()['toggleUnderline']?.(),
        'underline',
        <FaUnderline />
      )}
      {btn(() => editor.chain().focus().toggleStrike(), 'strike', <FaStrikethrough />)}
      <div className="hidden sm:block border-l h-6 mx-2" />
      {btn(() => editor.chain().focus().toggleBulletList(), 'bulletList', <FaListUl />)}
      {btn(() => editor.chain().focus().toggleOrderedList(), 'orderedList', <FaListOl />)}
      <div className="hidden sm:block border-l h-6 mx-2" />
      {btn(
      () =>editor.chain().focus().setTextAlign('left'),
      'textAlignLeft',
      <FaAlignLeft />
      )}
      {btn(
      () => editor.chain().focus().setTextAlign('center'),
      'textAlignCenter',
      <FaAlignCenter />
      )}
      {btn(
      () => editor.chain().focus().setTextAlign('right'),
      'textAlignRight',
      <FaAlignRight />
      )}
    </div>
  );
}
