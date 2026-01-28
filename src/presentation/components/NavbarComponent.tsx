import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaFolderOpen, FaInbox, FaCog, FaSignOutAlt, FaUserCircle,
  FaPlus, FaImage, FaFilePdf, FaTable, FaVideo
} from 'react-icons/fa';

export default function NavbarComponent() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState<'user' | 'insert' | null>(null);

  const toggleMenu = (menu: 'user' | 'insert') => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const insertOptions = [
    { label: 'Upload Image', icon: <FaImage />, action: () => console.log('Insert Image') },
    { label: 'Attach PDF', icon: <FaFilePdf />, action: () => console.log('Insert PDF') },
    { label: 'Insert Table', icon: <FaTable />, action: () => console.log('Insert Table') },
    { label: 'Embed Video', icon: <FaVideo />, action: () => console.log('Insert Video') },
  ];

  return (
    <nav className="h-16 border-b border-white/5 bg-black/40 backdrop-blur-xl px-8 flex items-center justify-between relative z-[100]">
      {/* Left: Branding */}
      <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigate('/')}>
        <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-md shadow-[0_0_20px_rgba(37,99,235,0.3)] group-hover:scale-110 transition-transform" />
        <span className="font-bold tracking-[0.2em] text-sm uppercase text-white/90">Nexus</span>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-6">
        
        {/* Quick Insert Menu (formerly MediaButtons) */}
        <div className="relative">
          <button 
            onClick={() => toggleMenu('insert')}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-all border border-blue-500/20"
          >
            <FaPlus className="text-xs" />
            <span className="text-xs font-semibold uppercase tracking-wider">Insert</span>
          </button>

          {activeMenu === 'insert' && (
            <DropdownWrapper close={() => setActiveMenu(null)}>
              <div className="p-2 w-48">
                <p className="px-3 py-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Media Assets</p>
                {insertOptions.map((opt) => (
                  <MenuButton key={opt.label} {...opt} />
                ))}
              </div>
            </DropdownWrapper>
          )}
        </div>

        {/* User Profile Menu */}
        <div className="relative">
          <button 
            onClick={() => toggleMenu('user')}
            className="text-2xl text-gray-400 hover:text-white transition-colors"
          >
            <FaUserCircle />
          </button>

          {activeMenu === 'user' && (
            <DropdownWrapper close={() => setActiveMenu(null)}>
              <div className="w-56">
                <div className="px-4 py-3 border-b border-white/5">
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest">Account</p>
                  <p className="text-sm font-medium text-white truncate">designer@nexus.io</p>
                </div>
                <div className="p-2">
                  <MenuButton label="Library" icon={<FaFolderOpen />} action={() => navigate('/')} />
                  <MenuButton label="Settings" icon={<FaCog />} action={() => navigate('/settings')} />
                  <div className="my-1 border-t border-white/5" />
                  <MenuButton label="Log Out" icon={<FaSignOutAlt />} action={() => {}} isRed />
                </div>
              </div>
            </DropdownWrapper>
          )}
        </div>
      </div>
    </nav>
  );
}

// Reusable Sub-components for a cleaner Navbar file
const DropdownWrapper = ({ children, close }: { children: React.ReactNode; close: () => void }) => (
  <>
    <div className="fixed inset-0 z-[-1]" onClick={close} />
    <div className="absolute right-0 mt-4 rounded-xl bg-[#0f172a]/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-in fade-in zoom-in duration-200 overflow-hidden">
      {children}
    </div>
  </>
);

const MenuButton = ({ label, icon, action, isRed }: any) => (
  <button
    onClick={action}
    className={`w-full flex items-center gap-3 p-2.5 rounded-lg text-sm transition-all group ${
      isRed ? 'text-red-400 hover:bg-red-500/10' : 'text-gray-400 hover:text-white hover:bg-white/5'
    }`}
  >
    <span className={`${isRed ? 'text-red-400' : 'text-gray-500 group-hover:text-blue-400'} transition-colors`}>
      {icon}
    </span>
    {label}
  </button>
);