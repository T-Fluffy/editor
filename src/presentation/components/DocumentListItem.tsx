
export interface DocumentSummary {
  id: string;
  title: string;
  updatedAt: string;
}

interface Props {
  doc: DocumentSummary;
  onClick: (id: string) => void;
}

export default function DocumentListItem({ doc, onClick }: Props) {
  return (
    <div
      className="flex justify-between items-center p-4 bg-blue-100 rounded-lg shadow hover:bg-blue-200 cursor-pointer"
      onClick={() => onClick(doc.id)}
    >
      <div>
        <h3 className="text-lg font-medium">{doc.title}</h3>
        <time className="text-sm text-gray-500">{new Date(doc.updatedAt).toLocaleString()}</time>
      </div>
      <span className="text-gray-400">&gt;</span>
    </div>
  );
}
