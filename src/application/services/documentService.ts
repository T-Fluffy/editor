import axios from 'axios';
import type { Document } from '../../domain/models/DocumentModel';

const API = 'http://localhost:8080/api/documents';

export const getDocuments = async (): Promise<Document[]> => {
  const res = await axios.get(API);
  return res.data;
};

export const getDocument = async (id: string): Promise<Document> => {
  const res = await axios.get(`${API}/${id}`);
  return res.data;
};

export const createDocument = async (title: string): Promise<Document> => {
  const res = await axios.post(API, {
    id: crypto.randomUUID(),
    title,
    content: '',
    updatedAt: new Date().toISOString(),
  });
  return res.data;
};

export const updateDocument = async (doc: Document): Promise<void> => {
  await axios.put(`${API}/${doc.id}`, doc);
};
