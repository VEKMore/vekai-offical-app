import React, { useState } from 'react';
import DashboardHomeView from '../components/DashboardHomeView';
import StoreView from '../components/StoreView';
import CommunityView from '../components/CommunityView';
import ExploreView from '../components/ExploreView';
import ProfileView from '../components/ProfileView';

export default function AppEntryRouter() {
  const [currentView, setCurrentView] = useState('home'); // Defaults directly to your master home index page

  const handleNavigation = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="w-full min-h-screen bg-[#0e0e12] text-[#f5f5f7] font-sans flex flex-col antialiased select-none">
      
      {/* 🌐 GLOBAL HIGH FIDELITY HEADER NAVIGATION BAR */}
      <header className="w-full h-16 bg-[#070709] border-b border-white/5 px-6 flex justify-between items-center shrink-0 z-50">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-600 to-[#00ffcc] flex items-center justify-center text-black font-black text-[10px]">R</div>
            <span className="font-sans font-black text-xs tracking-[0.2em] text-gray-500">ROLEVERSE</span>
          </div>
          <nav className="flex items-center gap-6 text-xs font-bold text-gray-400 uppercase tracking-wider">
            <button onClick={() => handleNavigation('home')} className={`transition-colors cursor-pointer bg-transparent border-0 outline-none ${currentView === 'home' ? 'text-white font-black' : 'hover:text-white'}`}>Home</button>
            <button onClick={() => handleNavigation('explore')} className={`transition-colors cursor-pointer bg-transparent border-0 outline-none ${currentView === 'explore' ? 'text-white font-black' : 'hover:text-white'}`}>Explore</button>
            <button onClick={() => handleNavigation('community')} className={`transition-colors cursor-pointer bg-transparent border-0 outline-none ${currentView === 'community' ? 'text-white font-black' : 'hover:text-white'}`}>Community</button>
            <button onClick={() => handleNavigation('store')} className={`transition-colors cursor-pointer bg-transparent border-0 outline-none ${currentView === 'store' ? 'text-white font-black' : 'hover:text-white'}`}>Store</button>
            <button onClick={() => handleNavigation('profile')} className={`transition-colors cursor-pointer bg-transparent border-0 outline-none ${currentView === 'profile' ? 'text-white font-black' : 'hover:text-white'}`}>Profile</button>
          </nav>
        </div>
        <button className="text-xs font-bold text-gray-400 hover:text-white uppercase tracking-wider bg-transparent border-0 outline-none">Log Out</button>
      </header>

      {/* LOWER NAVIGATION DIVISION LAYOUT CONTROLLER */}
      <div className="w-full flex flex-1 overflow-hidden">
        
        {/* 🧭 STATIC LEFT SIDE PANEL COMPONENT MODULE */}
        <aside className="w-60 bg-[#070709] border-r border-white/5 p-6 flex flex-col justify-between shrink-0 hidden md:flex">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col overflow-hidden">
              <span className="text-xs font-black text-white truncate">testuser@example.com</span>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-0.5">Creator Status</span>
            </div>

            <nav className="flex flex-col gap-4 text-xs font-bold text-gray-400 uppercase tracking-wider mt-4">
              <button onClick={() => handleNavigation('home')} className={`text-left transition-colors cursor-pointer bg-transparent border-0 outline-none ${currentView === 'home' ? 'text-[#00ffcc]' : 'hover:text-white'}`}>✔ My Feed</button>
              <button onClick={() => handleNavigation('explore')} className={`text-left transition-colors cursor-pointer bg-transparent border-0 outline-none ${currentView === 'explore' ? 'text-[#00ffcc]' : 'hover:text-white'}`}>📋 Explore Scenes</button>
              <button onClick={() => handleNavigation('community')} className={`text-left transition-colors cursor-pointer bg-transparent border-0 outline-none ${currentView === 'community' ? 'text-[#00ffcc]' : 'hover:text-white'}`}>📍 Active Campaigns</button>
              <button onClick={() => handleNavigation('store')} className={`text-left transition-colors cursor-pointer bg-transparent border-0 outline-none ${currentView === 'store' ? 'text-[#00ffcc]' : 'hover:text-white'}`}>🛍️ Merchandise Store</button>
            </nav>

            <div className="w-full bg-[#a239ea] text-white p-5 rounded-lg mt-4 flex flex-col gap-2 shadow-lg">
              <h4 className="text-[11px] font-black tracking-widest uppercase">STEAL THE SPOTLIGHT</h4>
              <p className="text-white/80 text-[10px] leading-relaxed font-medium">Cast yourself into a new scene and climb today's leaderboard.</p>
              <button onClick={() => handleNavigation('explore')} className="text-left text-white/90 hover:text-white text-[10px] font-black tracking-wider uppercase bg-black/20 px-3 py-1.5 rounded mt-1 transition-colors self-start cursor-pointer">Cast a Scene</button>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 text-[10px] font-bold text-gray-600 uppercase tracking-wider">
            <button className="text-left hover:text-white bg-transparent border-0 outline-none cursor-pointer">Community Hub</button>
            <button className="text-left hover:text-white bg-transparent border-0 outline-none cursor-pointer">Account Settings</button>
          </div>
        </aside>

        {/* ACTIVE COMPONENT COMPILER MOUNT HUB VIEWPORT */}
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto w-full max-w-7xl mx-auto">
          {currentView === 'home' && <DashboardHomeView onNavigate={handleNavigation} />}
          {currentView === 'explore' && <ExploreView onNavigate={handleNavigation} />}
          {currentView === 'community' && <CommunityView onNavigate={handleNavigation} />}
          {currentView === 'store' && <StoreView onNavigate={handleNavigation} />}
          {currentView === 'profile' && <ProfileView onNavigate={handleNavigation} />}
        </main>

      </div>
    </div>
  );
}
