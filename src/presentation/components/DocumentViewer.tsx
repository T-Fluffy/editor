// src/presentation/pages/DocumentViewer.tsx
import { useLocation, useParams } from 'react-router-dom';
import AppLayout from '../layout/AppLayout';

export default function DocumentViewer() {
  const { id } = useParams();
  const location = useLocation();
  const document = location.state?.document;

  const renderDocument = () => {
    if (!document) {
      return (
        <div className="text-center py-12">
          <p className="text-red-500">Document not found</p>
        </div>
      );
    }

    if (document.file) {
      const fileUrl = URL.createObjectURL(document.file);

      switch (document.type) {
        case 'pdf':
          return (
            <iframe
              src={fileUrl}
              width="100%"
              height="600px"
              className="border rounded-lg"
              title={document.title}
            />
          );

        case 'image':
          return (
            <div className="text-center">
              <img
                src={fileUrl}
                alt={document.title}
                className="max-w-full max-h-96 object-contain mx-auto rounded-lg"
              />
            </div>
          );

        default:
          return (
            <div className="p-6 bg-gray-100 rounded-lg text-center">
              <p className="text-gray-600 mb-4">
                This document type cannot be previewed in the browser.
              </p>
              <a
                href={fileUrl}
                download={document.title}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                📥 Download File
              </a>
            </div>
          );
      }
    } else {
      return (
        <div className="text-center py-12">
          <p className="text-gray-500">No file content available</p>
        </div>
      );
    }
  };

  return (
    <AppLayout>
      <div className="p-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">{document?.title}</h1>
          {document?.file && (
            <a
              href={URL.createObjectURL(document.file)}
              download={document.title}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-300"
            >
              Download
            </a>
          )}
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          {renderDocument()}
        </div>
      </div>
    </AppLayout>
  );
}