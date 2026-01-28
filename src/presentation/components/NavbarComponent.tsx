import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Editor } from '@tiptap/react';
import { 
  FaFolderOpen, FaCog, FaSignOutAlt, FaUserCircle,
  FaImage, FaFilePdf, FaTable, FaVideo,
  FaChevronCircleUp, FaChevronCircleDown 
} from 'react-icons/fa';

// ✅ This interface is crucial to fix the 'IntrinsicAttributes' error
interface NavbarProps {
  editor?: Editor | null;
}

export default function NavbarComponent({ editor }: NavbarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState<'user' | 'insert' | null>(null);

  const isEditing = location.pathname.includes('/editor/');

  const toggleMenu = (menu: 'user' | 'insert') => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  // Insert Actions
  const addImage = () => {
    const url = window.prompt('Enter image URL');
    if (url && editor) editor.chain().focus().setImage({ src: url }).run();
    setActiveMenu(null);
  };

  const addTable = () => {
    if (editor) editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
    setActiveMenu(null);
  };

  const insertOptions = [
    { label: 'Insert Image', icon: <FaImage />, action: addImage },
    { label: 'Insert Table', icon: <FaTable />, action: addTable },
    { label: 'Attach PDF', icon: <FaFilePdf />, action: () => {} },
    { label: 'Embed Video', icon: <FaVideo />, action: () => {} },
  ];
 
  return (
    <nav className="h-16 border-b border-white/5 bg-black/40 backdrop-blur-xl px-8 flex items-center justify-between relative z-[100]">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigate('/')}>
          <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-md shadow-[0_0_20px_rgba(37,99,235,0.3)] group-hover:scale-110 transition-transform" />
          <span className="font-bold tracking-[0.2em] text-sm uppercase text-white/90">Micro-Doc</span>
        </div>

        {isEditing && <div className="h-6 w-px bg-white/10" />}

        {isEditing && (
          <div className="relative">
            <button 
              onClick={() => toggleMenu('insert')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all border shadow-sm ${
                activeMenu === 'insert' 
                ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' 
                : 'bg-white/5 text-gray-400 hover:text-white border-white/10'
              }`}
            >
              {activeMenu === 'insert' ? <FaChevronCircleUp /> : <FaChevronCircleDown />}
              <span className="text-[11px] font-bold uppercase tracking-wider">Insert</span>
            </button>

            {activeMenu === 'insert' && (
              <DropdownWrapper close={() => setActiveMenu(null)} align="left">
                <div className="p-2 w-48">
                  <p className="px-3 py-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest text-center border-b border-white/5 mb-1">Editor Tools</p>
                  {insertOptions.map((opt) => (
                    <MenuButton key={opt.label} {...opt} />
                  ))}
                </div>
              </DropdownWrapper>
            )}
          </div>
        )}
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <button onClick={() => toggleMenu('user')} className="text-2xl text-gray-400 hover:text-white transition-colors">
            <FaUserCircle />
          </button>
          {activeMenu === 'user' && (
            <DropdownWrapper close={() => setActiveMenu(null)} align="right">
              <div className="w-56">
                <div className="px-4 py-3 border-b border-white/5">
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest text-center">Account</p>
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

// Sub-components kept internal for brevity
const DropdownWrapper = ({ children, close, align = 'right' }: any) => (
  <>
    <div className="fixed inset-0 z-[-1]" onClick={close} />
    <div className={`absolute mt-4 rounded-xl bg-[#0b1120]/98 backdrop-blur-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] animate-in fade-in zoom-in duration-200 overflow-hidden ${align === 'left' ? 'left-0' : 'right-0'}`}>
      {children}
    </div>
  </>
);

const MenuButton = ({ label, icon, action, isRed }: any) => (
  <button onClick={action} className={`w-full flex items-center gap-3 p-2.5 rounded-lg text-sm transition-all group ${isRed ? 'text-red-400 hover:bg-red-500/10' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
    <span className={`${isRed ? 'text-red-400' : 'text-gray-500 group-hover:text-blue-400'} transition-colors`}>{icon}</span>
    {label}
  </button>
);