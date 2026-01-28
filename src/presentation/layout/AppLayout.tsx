import NavbarComponent from "../components/NavbarComponent";
import { AppLayoutProps } from "../interfaces/layout.ui";

export default function AppLayout({ children, isZenMode, editor }: AppLayoutProps) {
  return (
    <div className="w-screen h-screen flex flex-col bg-[#020617] text-slate-200 overflow-hidden">
      <header className="z-50">
        <NavbarComponent editor={editor} />
      </header>

      <main className="flex-1 relative overflow-y-auto overflow-x-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />
        <div className={`h-full w-full transition-all duration-700 ${isZenMode ? 'pt-0' : 'pt-4'}`}>
          {children}
        </div>
      </main>
    </div>
  );
}