// src/presentation/components/Toolbar.tsx
import React from 'react';
import {
  FaBold, FaItalic, FaUnderline, FaStrikethrough,
  FaListOl, FaListUl, FaAlignLeft, FaAlignCenter,
  FaAlignRight, FaAlignJustify, FaUndo, FaRedo,
  FaCode, FaQuoteRight, FaParagraph
} from 'react-icons/fa';
import { Editor } from '@tiptap/react';

// ✅ Added className to the Interface
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

  // Internal component for cleaner buttons
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
      
      {/* Text Styles */}
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
      </div>

      <Separator />

      {/* Paragraph & Code */}
      <div className="flex items-center space-x-1">
        <ToolbarButton 
          action={() => editor.chain().focus().setParagraph().run()} 
          icon={<FaParagraph size={12} />} 
          title="Paragraph" 
          isActive={editor.isActive('paragraph')} 
        />
        <ToolbarButton 
          action={() => editor.chain().focus().toggleCode().run()} 
          icon={<FaCode size={12} />} 
          title="Code" 
          isActive={editor.isActive('code')} 
        />
      </div>

      <Separator />

      {/* Alignment */}
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
      </div>

      <Separator />

      {/* History */}
      <div className="flex items-center space-x-1 ml-auto">
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
    </div>
  );
}