import type { ReactNode } from 'react';

interface Props { children: ReactNode; }

export default function AppLayout({ children }: Props) {
  return (
    <div className="w-screen h-screen flex flex-col bg-gray-100">
      <header className="flex items-center justify-between bg-white px-4 py-2 border-b">
        <h2 className="text-xl font-semibold text-gray-800">My Document</h2>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600">Share</button>
          <button className="px-3 py-1 text-sm bg-white border rounded hover:bg-gray-50">Save</button>
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
