import React, { useState } from 'react';
import StoreView from '../components/StoreView';
import AvatarBuilderView from '../components/AvatarBuilderView';
import CommunityView from '../components/CommunityView';
import ExploreView from '../components/ExploreView';
import ProfileView from '../components/ProfileView';

export default function AppEntryRouter() {
  const [currentView, setCurrentView] = useState('profile');

  const handleNavigation = (view) => {
    setCurrentView(view);
  };

  if (currentView === 'avatar_builder') return <AvatarBuilderView onNavigate={handleNavigation} />;
  if (currentView === 'community') return <CommunityView onNavigate={handleNavigation} />;
  if (currentView === 'explore') return <ExploreView onNavigate={handleNavigation} />;
  if (currentView === 'profile') return <ProfileView onNavigate={handleNavigation} />;
  
  return <StoreView onNavigate={handleNavigation} />;
}
