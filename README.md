# 📝 Editor — Collaborative Online Document Editor

**Editor** is a modern, real-time collaborative document editing platform inspired by tools like Google Docs and Notion — designed to demonstrate clean software architecture and full-stack proficiency using:

- ⚛️ React + TypeScript + Vite + Tailwind CSS (Frontend)
- 🧱 ASP.NET Core 8 + PostgreSQL + SignalR (Backend)
- 🐳 Podman for containerization

---

## 🚀 Technologies Used

### Frontend (🖥️ `Editor`)
- **React** + **TypeScript**
- **Vite** for ultra-fast bundling and dev server
- **Tailwind CSS** for utility-first styling
- **React Router** for navigation
- **TipTap (Planned)** for rich-text editing
- **React Query** for efficient data fetching and caching
- **Zod / Yup (Planned)** for schema validation

### Backend (🧠 `EditorServer`)
- **ASP.NET Core 8 Web API**
- **Entity Framework Core** with **PostgreSQL**
- **SignalR** for real-time collaboration
- **Clean Architecture**: Domain, Application, Infrastructure, WebApi layers
- **JWT Auth (Planned)** for secure login/session management
- **Podman** for containerized deployment

---

## ✨ Planned Features

### ✅ MVP (Minimum Viable Product)
- Create, edit, and delete documents
- Basic rich-text editing (headings, bold, italic, lists, etc.)
- Save and retrieve documents from backend
- Responsive UI with clean layout and sidebar navigation

### 🔁 Real-Time Collaboration (Phase 2)
- WebSocket-powered editing (via SignalR)
- Live cursors and co-author presence
- Conflict-free syncing for multiple users

### 🔐 Authentication (Phase 3)
- JWT-based authentication with secure sessions
- User login & registration (local or OAuth)
- Role-based access (owner, editor, viewer)

### 🕒 History & Offline (Phase 4+)
- Document version history and change tracking
- Offline editing with local storage sync
- Sharing documents via URL or invite

---

## 🛠️ Development

### Frontend Setup

```bash
cd Editor
npm install
npm run dev
