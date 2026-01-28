export type DocumentType = 'pdf' | 'image' | 'document' | 'text';

export interface DocumentSummary {
  id: string;
  title: string;
  updatedAt: string;
  type: 'pdf' | 'image' | 'document' | 'text';
  status?: 'draft' | 'published' | 'private'; 
  size?: string;
  file?: File;
}

export interface FolderGroup {
  name: string;
  items: DocumentSummary[];
}