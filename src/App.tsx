// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
        <Route path="/" element={<Home isLogged={isLogged} setIsLoggedIn={setIsLogged} />} />
        <Route path="/editor/:id" element={<EditorPage />} />
        <Route path="/viewer/:id" element={<DocumentViewer />} />
      </Routes>
    </BrowserRouter>
  );
}
