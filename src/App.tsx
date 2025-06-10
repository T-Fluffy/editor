import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./presentation/pages/Home";
import EditorPage from "./presentation/pages/EditorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor/:id" element={<EditorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
