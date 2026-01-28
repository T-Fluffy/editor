import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaFileAlt, FaClock, FaSearch, FaEllipsisV } from 'react-icons/fa';
import AppLayout from '../layout/AppLayout';
import { DocumentSummary } from '../interfaces/document.ui';

export default function Home({ isLogged }: { isLogged: boolean }) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - in a real app, this comes from your domain layer
  const [documents] = useState<DocumentSummary[]>([
    { id: '1', title: 'Project Nexus Proposal', updatedAt: '2 hours ago', type: 'document' },
    { id: '2', title: 'Q1 Growth Strategy', updatedAt: 'Yesterday', type: 'document' },
    { id: '3', title: 'API Documentation', updatedAt: '3 days ago', type: 'document' },
  ]);

  const filteredDocs = documents.filter(doc => 
    doc.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              Your Library
            </h1>
            <p className="text-gray-500 text-sm mt-1">Manage and organize your micro-docs.</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative group">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
              <input 
                type="text"
                placeholder="Search documents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 w-64 transition-all"
              />
            </div>

            {/* Create New Button */}
            <button 
              onClick={() => navigate('/editor/new')}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all active:scale-95"
            >
              <FaPlus size={12} />
              New Document
            </button>
          </div>
        </div>

        {/* Document Grid */}
        {filteredDocs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDocs.map((doc) => (
              <div 
                key={doc.id}
                onClick={() => navigate(`/editor/${doc.id}`)}
                className="group relative bg-white/[0.03] border border-white/10 rounded-2xl p-5 hover:bg-white/[0.07] hover:border-blue-500/30 transition-all cursor-pointer shadow-xl"
              >
                {/* Icon & Options */}
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:scale-110 transition-transform">
                    <FaFileAlt size={20} />
                  </div>
                  <button className="text-gray-600 hover:text-white transition-colors">
                    <FaEllipsisV />
                  </button>
                </div>

                {/* Title & Info */}
                <h3 className="font-semibold text-white mb-1 truncate group-hover:text-blue-300 transition-colors">
                  {doc.title}
                </h3>
                
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <FaClock size={10} />
                  <span>Edited {doc.updatedAt}</span>
                </div>

                {/* Hover Decoration */}
                <div className="absolute inset-0 border border-blue-500/0 group-hover:border-blue-500/20 rounded-2xl transition-all pointer-events-none" />
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-20 border-2 border-dashed border-white/5 rounded-3xl">
            <div className="text-gray-600 mb-4 text-5xl opacity-20">
              <FaFileAlt />
            </div>
            <p className="text-gray-500">No documents found.</p>
          </div>
        )}
      </div>
    </AppLayout>
  );
}