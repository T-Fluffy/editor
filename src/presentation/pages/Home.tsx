import { useEffect, useState } from 'react';
import { getDocuments, createDocument } from '../../application/services/documentService';
import { useNavigate } from 'react-router-dom';
import type { Document } from '../../domain/models/DocumentModel';

export default function Home() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getDocuments().then(setDocuments);
  }, []);

  const handleCreate = async () => {
    if (!title) return;
    const doc = await createDocument(title);
    navigate(`/editor/${doc.id}`);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Your Documents</h1>
      <div className="space-y-2">
        {documents.map(doc => (
          <div
            key={doc.id}
            className="p-4 border rounded cursor-pointer hover:bg-gray-100"
            onClick={() => navigate(`/editor/${doc.id}`)}
          >
            {doc.title}
          </div>
        ))}
      </div>
      <div className="mt-6">
        <input
          type="text"
          placeholder="New document title"
          className="border p-2 mr-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleCreate}>
          Create
        </button>
      </div>
    </div>
  );
}
