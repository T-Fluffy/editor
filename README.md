# 📝 Editor — Collaborative Online Document Editor

**Editor** is a modern, real-time collaborative document editing platform inspired by tools like Google Docs and Notion — designed to demonstrate clean software architecture and full-stack proficiency using:

- ⚛️ **React** + **TypeScript** + **Vite** + **Tailwind CSS** (Frontend)
- 🧱 **ASP.NET Core 8** + **PostgreSQL** + **SignalR** (Backend)
- 🐳 **Docker / Podman** for containerization

---

## 🚀 Technologies Used

### Frontend (🖥️ `Editor`)
- **React 18** + **TypeScript**
- **Vite** for ultra-fast bundling and HMR
- **Tailwind CSS** for utility-first styling
- **TipTap** (Headless Editor Framework)
  - Custom extensions for Tables, Images, and Colors
  - Prosemirror under the hood
- **React Icons** for the UI interface
- **Docker Compose** for consistent dev environments
- **React Router** for navigation
- **TipTap (Planned)** for rich-text editing
- **React Query** for efficient data fetching and caching
- **Zod / Yup (Planned)** for schema validation

---

## ✨ Features

### ✅ Currently Implemented
- **Advanced Rich-Text Editing**:
  - Headings (H1, H2), Bold, Italic, Underline, Highlight, and Text Color.
  - Text alignment (Left, Center, Right, Justify).
- **Document Structure**:
  - **A4 Pagination Simulation**: Visual page breaks and print-ready layout.
  - **Lists**: Bullet points and numbered lists.
  - **Tables**: Create and manage tables with resizable columns and headers.
- **Media Support**:
  - Image embedding (via URL).
  - Code blocks and Blockquotes.
- **User Interface**:
  - Custom "Pro" Toolbar with History (Undo/Redo).
  - Clean, distraction-free writing environment.

### 🔁 Real-Time Collaboration (Next Step)
- WebSocket-powered editing (via SignalR)
- Live cursors and co-author presence
- Conflict-free syncing for multiple users

### 🔐 Authentication (Planned)
- JWT-based authentication
- User login & registration
- Role-based access (Owner, Editor, Viewer)

---

## 🛠️ Development Setup

### Option 1: Docker (Recommended)

The project is containerized for easy setup.

```bash
# Start the application
docker-compose up --build

# Access the app at http://localhost:5173
```
### Option 2: Local Setup

If you prefer running Node directly on your machine.
```bash
cd Editor

# Install dependencies (Legacy peer deps required for some TipTap extensions)
npm install --legacy-peer-deps

# Start the development server
npm run dev
```
### Option 3: Troubleshooting

If you encounter type errors or missing extensions after pulling updates:
```bash
# Force reinstall dependencies
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```