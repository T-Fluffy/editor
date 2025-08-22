import type { ReactNode } from 'react';
import NavbarComponent from '../components/NavbarComponent';
import Sidebar from '../components/SideBar';


interface Props { children: ReactNode; }

export default function AppLayout({ children }: Props) {
  return (
    <div className=" w-screen h-screen flex flex-col bg-sky-500/50">
      <NavbarComponent />
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar slot */}
        <Sidebar />
        {/* Main content area expands */}
        <main className="flex-1 overflow-auto p-4">
          {children}
        </main>
      </div>
    </div>
  );
}
