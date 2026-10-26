import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shuffle, Sparkles, Shirt, Palette } from 'lucide-react';

export function Header({ onSelectRandom, isLoading }) {
  const location = useLocation();
  const isMaker = location.pathname.startsWith('/creator') ||
                  location.pathname.startsWith('/maker') ||
                  location.pathname.startsWith('/avatarmaker') ||
                  location.pathname.startsWith('/avatar-maker');

  return (
    <header className="w-full border-b border-[#21262d] bg-[#0d1117]/90 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
        {/* Brand Zone */}
        <Link to="/" className="flex items-center gap-3 shrink-0 hover:opacity-95 transition-opacity">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 text-white font-black text-lg">
            <span className="tracking-tighter">RB</span>
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-bold tracking-tight text-[#f0f6fc] leading-tight">
              Roblox Outfits & Avatar Maker
            </h1>
            <p className="text-[11px] text-[#8b949e] hidden sm:block">
              Explore player creations & customize your look
            </p>
          </div>
        </Link>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-2">
          <Link
            to="/"
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              !isMaker
                ? 'bg-[#21262d] text-white shadow-sm border border-[#30363d]'
                : 'text-[#8b949e] hover:text-[#f0f6fc] hover:bg-[#161b22]'
            }`}
          >
            <Shirt className="w-3.5 h-3.5 text-cyan-400" />
            <span>Outfits Explorer</span>
          </Link>

          <Link
            to="/creator"
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              isMaker
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25'
                : 'bg-[#161b22] text-[#00a2ff] hover:bg-[#21262d] border border-[#00a2ff]/30'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Avatar Maker</span>
            <span className="text-[10px] bg-white/20 px-1.5 py-0.2 rounded-full font-bold ml-0.5">NEW</span>
          </Link>
        </nav>

        {/* Right Action */}
        <div className="flex items-center gap-2 shrink-0">
          {!isMaker && onSelectRandom && (
            <button
              onClick={onSelectRandom}
              disabled={isLoading}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#f0f6fc] bg-[#21262d] hover:bg-[#30363d] active:scale-95 disabled:opacity-50 border border-[#30363d] rounded-lg transition-all whitespace-nowrap cursor-pointer"
              title="View a random popular player"
            >
              <Shuffle className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Random Player</span>
            </button>
          )}

          {isMaker && (
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#8b949e] hover:text-white bg-[#161b22] hover:bg-[#21262d] border border-[#30363d] rounded-lg transition-colors"
            >
              <span>Back to Explorer</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
