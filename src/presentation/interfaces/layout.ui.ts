// src/presentation/interfaces/layout.ui.ts
import { JSX, ReactNode } from 'react';

export interface AppLayoutProps {
  children: ReactNode;
  isZenMode?: boolean;
}

export interface NavMenuOption {
  label: string;
  icon: JSX.Element;
  path?: string;
  action?: () => void;
  count?: string;
  isRed?: boolean;
}