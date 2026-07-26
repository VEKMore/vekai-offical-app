import React, { useState } from 'react';
import StoreView from '../components/StoreView';

export default function AppEntryRouter() {
  const [currentView, setCurrentView] = useState('roleverse_dashboard');

  if (currentView === 'roleverse_dashboard') {
    return <StoreView />;
  }

  return (
    <div className="w-full h-screen bg-[#0A0A0C] flex justify-center items-center text-white">
      <h1 className="text-xl font-black">VEKAI MOBILE HUB</h1>
    </div>
  );
}
