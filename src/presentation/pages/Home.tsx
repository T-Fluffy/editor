import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AppLayout from '../layout/AppLayout';
import DocumentListItem, { type DocumentSummary } from '../components/DocumentListItem';
import Login from '../components/login';

interface HomeProps {
  isLogged: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Home({ isLogged, setIsLoggedIn }: HomeProps) {
  const navigate = useNavigate();
  const [documents, setDocuments] = useState<DocumentSummary[]>([
    { 
      id: '1', 
      title: 'First Document', 
      updatedAt: new Date().toISOString(), 
      type: 'text' 
    },
    { 
      id: '2', 
      title: 'Second Document', 
      updatedAt: new Date(Date.now() - 1000 * 60 * 100).toISOString(), 
      type: 'text' 
    },
  ]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    Array.from(files).forEach((file) => {
      const fileType = file.type;
      let type: DocumentSummary['type'] = 'document';
      
      if (fileType.includes('pdf')) type = 'pdf';
      else if (fileType.includes('image')) type = 'image';
      else if (fileType.includes('text')) type = 'text';

      const newDoc: DocumentSummary = {
        id: Date.now().toString(),
        title: file.name,
        updatedAt: new Date().toISOString(),
        type: type,
        file: file
      };
      
      setDocuments(prev => [...prev, newDoc]);
      
      // Store file in localStorage for persistence (optional)
      storeFileInLocalStorage(newDoc);
    });
  };

  const storeFileInLocalStorage = (doc: DocumentSummary) => {
    if (!doc.file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      const fileData = {
        id: doc.id,
        title: doc.title,
        type: doc.type,
        data: e.target?.result,
        updatedAt: doc.updatedAt
      };
      
      const existingFiles = JSON.parse(localStorage.getItem('uploadedFiles') || '[]');
      const updatedFiles = [...existingFiles, fileData];
      localStorage.setItem('uploadedFiles', JSON.stringify(updatedFiles));
    };
    reader.readAsDataURL(doc.file);
  };

  const handleDocumentClick = (docId: string) => {
    const doc = documents.find(d => d.id === docId);
    if (!doc) return;

    if (doc.type === 'text') {
      navigate(`/editor/${doc.id}`);
    } else {
      // For non-text files, open in viewer
      navigate(`/viewer/${doc.id}`, { state: { document: doc } });
    }
  };

  return (
    <AppLayout>
      {isLogged ? (
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Your Documents</h1>
            
            {/* Upload Button */}
            <label className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors">
              <input
                type="file"
                multiple
                accept=".pdf,.doc,.docx,.txt,image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              📁 Upload Files
            </label>
          </div>

          <div className="grid gap-4 grid-cols-1">
            {documents.map(doc => (
              <DocumentListItem
                key={doc.id}
                doc={doc}
                onClick={handleDocumentClick}
              />
            ))}
            
            {documents.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                <p className="text-lg">No documents yet</p>
                <p className="text-sm">Upload your first file to get started</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <Login isLogged={isLogged} setIsLoggedIn={setIsLoggedIn} />
      )}
    </AppLayout>
  );
}