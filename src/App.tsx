import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Home from './presentation/pages/Home';
import EditorPage from './presentation/pages/EditorPage';
import Login from './presentation/components/login';
import DocumentViewer from './presentation/components/DocumentViewer';

export default function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login isLogged={isLogged} setIsLoggedIn={setIsLogged} />} />
        
        {/* Protected Routes */}
        <Route 
          path="/" 
          element={isLogged ? <Home isLogged={isLogged} setIsLoggedIn={setIsLogged} /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/editor/:id" 
          element={isLogged ? <EditorPage /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/viewer/:id" 
          element={isLogged ? <DocumentViewer /> : <Navigate to="/login" />} 
        />
      </Routes>
    </BrowserRouter>
  );
}