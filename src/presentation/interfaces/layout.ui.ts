// src/presentation/interfaces/layout.ui.ts
import { Editor } from '@tiptap/react';
import { JSX, ReactNode } from 'react';

export interface AppLayoutProps {
  children: ReactNode;
  isZenMode?: boolean;
  editor?: Editor | null;
}

export interface NavMenuOption {
  label: string;
  icon: JSX.Element;
  path?: string;
  action?: () => void;
  count?: string;
  isRed?: boolean;
}
export interface SideMenuOption {
  label: string;
  icon: JSX.Element;
  path?: string;
  action?: () => void;
  count?: string;
  isRed?: boolean;
}
export interface ToolbarProps {
  editor: Editor | null;
  className?: string;
} 
export interface ToolbarButtonProps {
  action: () => void;
  icon: JSX.Element;
  title: string;
  isActive?: boolean;
}
