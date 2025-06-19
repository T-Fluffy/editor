import type { ReactNode } from 'react';
import {
  PencilSquareIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex h-screen w-screen">
      {/* Sidebar */}
      <div className="flex flex-col items-center bg-blue-900 text-white p-4 space-y-6 w-16 md:w-20 lg:w-24">
        <button
          className="p-2 hover:bg-blue-800 rounded-md"
          aria-label="New Document"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = '/editor/new';
          }}  
        >
          <PencilSquareIcon className="h-3 w-3" />
        </button>
        <button
          className="p-2 hover:bg-blue-800 rounded-md"
          aria-label="Documents List"
          onClick={( e) => { e.preventDefault(); window.location.href = '/' }}
        >
          <DocumentTextIcon className="h-3 w-3"/>
        </button>
        <button
          className="p-2 hover:bg-blue-800 rounded-md"
          aria-label="Settings"
        >
          <Cog6ToothIcon className="h-3 w-3" />
        </button>
        <div className="mt-auto">
          <button
            className="p-2 hover:bg-blue-800 rounded-md"
            aria-label="Logout"
          >
            <ArrowRightOnRectangleIcon className="h-3 w-3" />
          </button>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">{children}</div>
    </div>
  );
}
