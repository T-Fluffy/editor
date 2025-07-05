// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './presentation/pages/Home';
import EditorPage from './presentation/pages/EditorPage';
import Login from './presentation/pages/login';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor/:id" element={<EditorPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
