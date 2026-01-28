// src/tiptap.d.ts
declare module '@tiptap/extension-color' {
  import { Extension } from '@tiptap/core';
  export interface ColorOptions { types: string[]; }
  const Color: Extension<ColorOptions, any>;
  export default Color;
}

declare module '@tiptap/extension-highlight' {
  import { Extension } from '@tiptap/core';
  export interface HighlightOptions { multicolor: boolean; HTMLAttributes: Record<string, any>; }
  const Highlight: Extension<HighlightOptions, any>;
  export default Highlight;
}