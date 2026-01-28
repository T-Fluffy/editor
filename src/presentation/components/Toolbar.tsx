import React from 'react';
import {
  FaBold, FaItalic, FaUnderline, 
  FaListOl, FaListUl, FaAlignLeft, FaAlignCenter, 
  FaAlignRight, FaUndo, FaRedo, FaCode, 
  FaQuoteRight, FaHeading, FaHighlighter, FaPalette
} from 'react-icons/fa';
import { Editor } from '@tiptap/react';

interface Props {
  editor: Editor | null;
  className?: string;
}

interface ToolbarButtonProps {
  action: () => void;
  icon: React.ReactNode;
  title: string;
  isActive?: boolean;
}

export function Toolbar({ editor, className }: Props) {
  if (!editor) return null;

  const ToolbarButton = ({ action, icon, title, isActive = false }: ToolbarButtonProps) => (
    <button
      onClick={action}
      className={`p-2 rounded-xl transition-all duration-300 flex items-center justify-center min-w-[36px] h-[36px] ${
        isActive 
          ? 'bg-blue-500/20 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]' 
          : 'text-gray-400 hover:bg-white/10 hover:text-white'
      }`}
      title={title}
      type="button"
    >
      {icon}
    </button>
  );

  const Separator = () => <div className="w-px h-5 bg-white/10 mx-1" />;

  return (
    <div className={`flex flex-wrap items-center gap-1.5 p-2 backdrop-blur-xl border border-white/10 shadow-2xl transition-all ${className}`}>
      
      {/* 1. History (Undo/Redo) - Moved to start for better UX */}
      <div className="flex items-center space-x-1">
        <ToolbarButton 
          action={() => editor.chain().focus().undo().run()} 
          icon={<FaUndo size={12} />} 
          title="Undo" 
        />
        <ToolbarButton 
          action={() => editor.chain().focus().redo().run()} 
          icon={<FaRedo size={12} />} 
          title="Redo" 
        />
      </div>

      <Separator />

      {/* 2. Structure (Headings) */}
      <div className="flex items-center space-x-1">
        <ToolbarButton 
          action={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} 
          icon={<div className="font-bold text-[10px]">H1</div>} 
          title="Heading 1" 
          isActive={editor.isActive('heading', { level: 1 })} 
        />
        <ToolbarButton 
          action={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} 
          icon={<div className="font-bold text-[10px]">H2</div>} 
          title="Heading 2" 
          isActive={editor.isActive('heading', { level: 2 })} 
        />
      </div>

      <Separator />

      {/* 3. Basic Styles */}
      <div className="flex items-center space-x-1">
        <ToolbarButton 
          action={() => editor.chain().focus().toggleBold().run()} 
          icon={<FaBold size={12} />} 
          title="Bold" 
          isActive={editor.isActive('bold')} 
        />
        <ToolbarButton 
          action={() => editor.chain().focus().toggleItalic().run()} 
          icon={<FaItalic size={12} />} 
          title="Italic" 
          isActive={editor.isActive('italic')} 
        />
        <ToolbarButton 
          action={() => editor.chain().focus().toggleUnderline().run()} 
          icon={<FaUnderline size={12} />} 
          title="Underline" 
          isActive={editor.isActive('underline')} 
        />
        <ToolbarButton 
          action={() => editor.chain().focus().toggleHighlight().run()} 
          icon={<FaHighlighter size={12} />} 
          title="Highlight" 
          isActive={editor.isActive('highlight')} 
        />
      </div>

      <Separator />

      {/* 4. Color Picker (Hidden Input Trick) */}
      <div className="relative flex items-center justify-center">
        <input
          type="color"
          onInput={(event: any) => editor.chain().focus().setColor(event.target.value).run()}
          value={editor.getAttributes('textStyle').color || '#ffffff'}
          className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
          title="Text Color"
        />
        <div 
            className={`p-2 rounded-xl flex items-center justify-center min-w-[36px] h-[36px] text-gray-400 hover:bg-white/10 hover:text-white transition-all`}
        >
            <FaPalette size={12} />
            {/* Show current color dot */}
            <div 
                className="w-2 h-2 rounded-full ml-1 border border-white/20" 
                style={{ backgroundColor: editor.getAttributes('textStyle').color || '#fff' }} 
            />
        </div>
      </div>

      <Separator />

      {/* 5. Lists & Quotes */}
      <div className="flex items-center space-x-1">
        <ToolbarButton 
          action={() => editor.chain().focus().toggleBulletList().run()} 
          icon={<FaListUl size={12} />} 
          title="Bullet List" 
          isActive={editor.isActive('bulletList')} 
        />
        <ToolbarButton 
          action={() => editor.chain().focus().toggleOrderedList().run()} 
          icon={<FaListOl size={12} />} 
          title="Ordered List" 
          isActive={editor.isActive('orderedList')} 
        />
        <ToolbarButton 
          action={() => editor.chain().focus().toggleBlockquote().run()} 
          icon={<FaQuoteRight size={12} />} 
          title="Quote" 
          isActive={editor.isActive('blockquote')} 
        />
      </div>

      <Separator />

      {/* 6. Alignment & Code */}
      <div className="flex items-center space-x-1">
        <ToolbarButton 
          action={() => editor.chain().focus().setTextAlign('left').run()} 
          icon={<FaAlignLeft size={12} />} 
          title="Align Left" 
          isActive={editor.isActive({ textAlign: 'left' })} 
        />
        <ToolbarButton 
          action={() => editor.chain().focus().setTextAlign('center').run()} 
          icon={<FaAlignCenter size={12} />} 
          title="Align Center" 
          isActive={editor.isActive({ textAlign: 'center' })} 
        />
        <ToolbarButton 
          action={() => editor.chain().focus().toggleCode().run()} 
          icon={<FaCode size={12} />} 
          title="Code" 
          isActive={editor.isActive('code')} 
        />
      </div>

    </div>
  );
}