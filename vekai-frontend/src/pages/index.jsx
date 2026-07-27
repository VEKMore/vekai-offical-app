import React, { useState } from 'react';
import DashboardHomeView from '../components/DashboardHomeView';
import ExploreView from '../components/ExploreView';
import CommunityView from '../components/CommunityView';
import AvatarBuilderView from '../components/AvatarBuilderView';
import StoreView from '../components/StoreView';
import ProfileView from '../components/ProfileView';

export default function AppEntryRouter() {
  const [currentView, setCurrentView] = useState('home'); // Sets Home view as default baseline

  const handleNavigation = (view) => {
    setCurrentView(view);
  };

  if (currentView === 'home') return <DashboardHomeView onNavigate={handleNavigation} />;
  if (currentView === 'explore') return <ExploreView onNavigate={handleNavigation} />;
  if (currentView === 'community') return <CommunityView onNavigate={handleNavigation} />;
  if (currentView === 'avatar_builder') return <AvatarBuilderView onNavigate={handleNavigation} />;
  if (currentView === 'store') return <StoreView onNavigate={handleNavigation} />;
  if (currentView === 'profile') return <ProfileView onNavigate={handleNavigation} />;
  
  return <DashboardHomeView onNavigate={handleNavigation} />;
}
