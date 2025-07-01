import type { ReactNode } from 'react';

interface Props { children: ReactNode; }

export default function AppLayout({ children }: Props) {
  return (
    <div className="w-screen h-screen flex flex-col bg-sky-500/50">
      <header className="flex items-center justify-between bg-black px-4 py-2 border-b">
        <h2 className="text-xl font-semibold text-white">My Document</h2>
        <div className="flex space-x-2">
          <button style={{ backgroundColor: 'pink' }} className="px-3 py-1 text-sm border rounded hover:bg-blue-600">Share</button>
          <button style={{ backgroundColor: 'pink' }} className="px-3 py-1 text-sm border rounded hover:bg-gray-50">Save</button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar slot */}
        <aside className="hidden md:block w-64 bg-white border-r overflow-y-auto">
          {/* Add sidebar content here if needed */}
        </aside>

        {/* Main content area expands */}
        <main className="flex-1 overflow-auto p-4">
          {children}
        </main>
      </div>
    </div>
  );
}
