import { useNavigate } from 'react-router-dom';
import AppLayout from '../layout/AppLayout';
import DocumentListItem, { type DocumentSummary } from '../components/DocumentListItem';
import Login from '../components/login';

const mockDocs: DocumentSummary[] = [
  { id: '1', title: 'First Doc', updatedAt: new Date().toISOString() },
  { id: '2', title: 'Second Doc', updatedAt: new Date(Date.now() - 1000 * 60 * 100).toISOString() },
];

interface HomeProps {
  isLogged: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Home({ isLogged, setIsLoggedIn }: HomeProps) {
  const navigate = useNavigate();

  return (
    <AppLayout>
      {isLogged ? (
        <div>
          <h1 className="text-2xl font-bold mb-4">Your Documents</h1>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-gray-800">
            {mockDocs.map(doc => (
              <DocumentListItem
                key={doc.id}
                doc={doc}
                onClick={(id) => navigate(`/editor/${id}`)}
              />
            ))}
          </div>
        </div>
      ) : (
        <Login isLogged={isLogged} setIsLoggedIn={setIsLoggedIn} />
      )}
    </AppLayout>
  );
}