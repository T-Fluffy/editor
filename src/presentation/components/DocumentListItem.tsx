export interface DocumentSummary {
  id: string;
  title: string;
  updatedAt: string;
  type?: 'text' | 'pdf' | 'image' | 'document';
  file?: File; // Optional file object for uploaded files
}

interface Props {
  doc: DocumentSummary;
  onClick: (id: string) => void;
}

const getFileIcon = (type?: string) => {
  switch (type) {
    case 'pdf':
      return '📄';
    case 'image':
      return '🖼️';
    case 'document':
      return '📝';
    case 'text':
      return '✏️';
    default:
      return '📄';
  }
};

const getTypeLabel = (type?: string) => {
  switch (type) {
    case 'pdf':
      return 'PDF';
    case 'image':
      return 'Image';
    case 'document':
      return 'Document';
    case 'text':
      return 'Text';
    default:
      return 'File';
  }
};

export default function DocumentListItem({ doc, onClick }: Props) {
  return (
    <div
      className="flex justify-between items-center p-4 bg-white rounded-lg shadow hover:shadow-md cursor-pointer border border-gray-200"
      onClick={() => onClick(doc.id)}
    >
      <div className="flex items-center space-x-3">
        <div className="text-2xl">{getFileIcon(doc.type)}</div>
        <div>
          <h3 className="text-lg font-medium text-gray-800">{doc.title}</h3>
          <div className="flex items-center space-x-2 mt-1">
            <time className="text-sm text-gray-500">
              {new Date(doc.updatedAt).toLocaleString()}
            </time>
            {doc.type && (
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                {getTypeLabel(doc.type)}
              </span>
            )}
          </div>
        </div>
      </div>
      <span className="text-gray-400 text-xl">&gt;</span>
    </div>
  );
}
