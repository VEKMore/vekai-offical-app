import React, { useState } from 'react';
import DashboardHomeView from '../components/DashboardHomeView';
import StoreView from '../components/StoreView';
import CommunityView from '../components/CommunityView';
import ExploreView from '../components/ExploreView';
import ProfileView from '../components/ProfileView';

export default function AppEntryRouter() {
  const [currentView, setCurrentView] = useState('home'); 

  const handleNavigation = (view) => {
    // If something tries to navigate to avatar_builder, fallback to home automatically
    if (view === 'avatar_builder') {
      setCurrentView('home');
    } else {
      setCurrentView(view);
    }
  };

  if (currentView === 'explore') return <ExploreView onNavigate={handleNavigation} />;
  if (currentView === 'community') return <CommunityView onNavigate={handleNavigation} />;
  if (currentView === 'profile') return <ProfileView onNavigate={handleNavigation} />;
  if (currentView === 'store') return <StoreView onNavigate={handleNavigation} />;
  
  return <DashboardHomeView onNavigate={handleNavigation} />;
}
