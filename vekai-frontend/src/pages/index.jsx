import React, { useState } from 'react';
import StoreView from '../components/StoreView';
import AvatarBuilderView from '../components/AvatarBuilderView';
import CommunityView from '../components/CommunityView';
import ExploreView from '../components/ExploreView';
import ProfileView from '../components/ProfileView';

export default function AppEntryRouter() {
  const [currentView, setCurrentView] = useState('profile');

  if (currentView === 'avatar_builder') return <AvatarBuilderView onNavigate={setCurrentView} />;
  if (currentView === 'community') return <CommunityView onNavigate={setCurrentView} />;
  if (currentView === 'explore') return <ExploreView onNavigate={setCurrentView} />;
  if (currentView === 'profile') return <ProfileView onNavigate={setCurrentView} />;
  
  return <StoreView onNavigate={setCurrentView} />;
}
