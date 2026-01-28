import NavbarComponent from "../components/NavbarComponent";
import { AppLayoutProps } from "../interfaces/layout.ui";

export default function AppLayout({ children, isZenMode }: AppLayoutProps) {
  return (
    <div className="w-screen h-screen flex flex-col bg-[#020617] text-slate-200 overflow-hidden">
      {/* Navbar: Slides out of view in Zen Mode to maximize focus */}
      <header className={`z-50 transition-transform duration-700 ease-in-out ${isZenMode ? '-translate-y-full' : 'translate-y-0'}`}>
        <NavbarComponent />
      </header>

      <main className="flex-1 relative overflow-y-auto overflow-x-hidden">
        {/* Background Ambient Glow for that futuristic depth */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className={`h-full w-full transition-all duration-700 ${isZenMode ? 'pt-0' : 'pt-4'}`}>
          {children}
        </div>
      </main>
    </div>
  );
}