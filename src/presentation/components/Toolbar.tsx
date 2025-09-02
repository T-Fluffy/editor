import React from 'react';
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaStrikethrough,
  FaListOl,
  FaListUl,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaAlignJustify,
  FaUndo,
  FaRedo,
  FaCode,
  FaQuoteRight,
  FaParagraph
} from 'react-icons/fa';
import { Editor } from '@tiptap/react';

interface Props {
  editor: Editor | null;
}

interface ToolbarButton {
  action: () => void;
  format: string;
  icon: React.ReactNode;
  title: string;
  group?: string;
}

export function Toolbar({ editor }: Props) {
  if (!editor) return null;

  const ToolbarButton = ({ 
    action, 
    format, 
    icon, 
    title,
    isActive = false 
  }: { 
    action: () => void;
    format: string;
    icon: React.ReactNode;
    title: string;
    isActive?: boolean;
  }) => (
    <button
      onClick={action}
      className={`p-2 rounded-lg transition-all duration-200 flex items-center justify-center min-w-[40px] h-[40px] ${
        isActive 
          ? 'bg-blue-100 text-blue-600 border border-blue-200 shadow-sm' 
          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800 border border-transparent'
      }`}
      title={title}
      type="button"
    >
      {icon}
    </button>
  );

  const ToolbarSeparator = () => (
    <div className="w-px h-6 bg-gray-300 mx-1" />
  );

  const ToolbarGroup = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center space-x-1">
      {children}
    </div>
  );

  const formatButtons: ToolbarButton[] = [
    {
      action: () => editor.chain().focus().toggleBold().run(),
      format: 'bold',
      icon: <FaBold size={14} />,
      title: 'Bold',
      group: 'format'
    },
    {
      action: () => editor.chain().focus().toggleItalic().run(),
      format: 'italic',
      icon: <FaItalic size={14} />,
      title: 'Italic',
      group: 'format'
    },
    {
      action: () => editor.chain().focus().toggleUnderline().run(),
      format: 'underline',
      icon: <FaUnderline size={14} />,
      title: 'Underline',
      group: 'format'
    },
    {
      action: () => editor.chain().focus().toggleStrike().run(),
      format: 'strike',
      icon: <FaStrikethrough size={14} />,
      title: 'Strikethrough',
      group: 'format'
    },
    {
      action: () => editor.chain().focus().setParagraph().run(),
      format: 'paragraph',
      icon: <FaParagraph size={14} />,
      title: 'Paragraph',
      group: 'format'
    },
    {
      action: () => editor.chain().focus().toggleCode().run(),
      format: 'code',
      icon: <FaCode size={14} />,
      title: 'Code',
      group: 'format'
    },
    {
      action: () => editor.chain().focus().toggleBlockquote().run(),
      format: 'blockquote',
      icon: <FaQuoteRight size={14} />,
      title: 'Blockquote',
      group: 'format'
    }
  ];

  const listButtons: ToolbarButton[] = [
    {
      action: () => editor.chain().focus().toggleBulletList().run(),
      format: 'bulletList',
      icon: <FaListUl size={14} />,
      title: 'Bullet List',
      group: 'lists'
    },
    {
      action: () => editor.chain().focus().toggleOrderedList().run(),
      format: 'orderedList',
      icon: <FaListOl size={14} />,
      title: 'Numbered List',
      group: 'lists'
    }
  ];

  const alignmentButtons: ToolbarButton[] = [
    {
      action: () => editor.chain().focus().setTextAlign('left').run(),
      format: 'textAlignLeft',
      icon: <FaAlignLeft size={14} />,
      title: 'Align Left',
      group: 'alignment'
    },
    {
      action: () => editor.chain().focus().setTextAlign('center').run(),
      format: 'textAlignCenter',
      icon: <FaAlignCenter size={14} />,
      title: 'Align Center',
      group: 'alignment'
    },
    {
      action: () => editor.chain().focus().setTextAlign('right').run(),
      format: 'textAlignRight',
      icon: <FaAlignRight size={14} />,
      title: 'Align Right',
      group: 'alignment'
    },
    {
      action: () => editor.chain().focus().setTextAlign('justify').run(),
      format: 'textAlignJustify',
      icon: <FaAlignJustify size={14} />,
      title: 'Align Justify',
      group: 'alignment'
    }
  ];

  const historyButtons: ToolbarButton[] = [
    {
      action: () => editor.chain().focus().undo().run(),
      format: 'undo',
      icon: <FaUndo size={14} />,
      title: 'Undo',
      group: 'history'
    },
    {
      action: () => editor.chain().focus().redo().run(),
      format: 'redo',
      icon: <FaRedo size={14} />,
      title: 'Redo',
      group: 'history'
    }
  ];

  const allButtons = [
    ...formatButtons,
    ...listButtons,
    ...alignmentButtons,
    ...historyButtons
  ];

  return (
    <div className="flex flex-wrap items-center gap-2 p-3 bg-white border-b border-gray-200 top-0 z-50 shadow-sm">
      {/* Formatting Group */}
      <ToolbarGroup>
        {formatButtons.map((button) => (
          <ToolbarButton
            key={button.format}
            action={button.action}
            format={button.format}
            icon={button.icon}
            title={button.title}
            isActive={editor.isActive(button.format)}
          />
        ))}
      </ToolbarGroup>

      <ToolbarSeparator />

      {/* Lists Group */}
      <ToolbarGroup>
        {listButtons.map((button) => (
          <ToolbarButton
            key={button.format}
            action={button.action}
            format={button.format}
            icon={button.icon}
            title={button.title}
            isActive={editor.isActive(button.format)}
          />
        ))}
      </ToolbarGroup>

      <ToolbarSeparator />

      {/* Alignment Group */}
      <ToolbarGroup>
        {alignmentButtons.map((button) => (
          <ToolbarButton
            key={button.format}
            action={button.action}
            format={button.format}
            icon={button.icon}
            title={button.title}
            isActive={editor.isActive({ textAlign: button.format.replace('textAlign', '').toLowerCase() })}
          />
        ))}
      </ToolbarGroup>

      <ToolbarSeparator />

      {/* History Group */}
      <ToolbarGroup>
        <ToolbarButton
          action={() => editor.chain().focus().undo().run()}
          format="undo"
          icon={<FaUndo size={14} />}
          title="Undo"
          isActive={false}
        />
        <ToolbarButton
          action={() => editor.chain().focus().redo().run()}
          format="redo"
          icon={<FaRedo size={14} />}
          title="Redo"
          isActive={false}
        />
      </ToolbarGroup>

      {/* Current Format Status (optional) */}
      <div className="ml-auto flex items-center">
        <span className="text-xs text-gray-500 px-2 py-1 bg-gray-100 rounded">
          {editor.isActive('heading', { level: 1 }) && 'Heading 1'}
          {editor.isActive('heading', { level: 2 }) && 'Heading 2'}
          {editor.isActive('heading', { level: 3 }) && 'Heading 3'}
          {editor.isActive('paragraph') && 'Paragraph'}
          {editor.isActive('codeBlock') && 'Code Block'}
        </span>
      </div>
    </div>
  );
}