import React, { useState } from 'react';
import WebCameraComponent from '../components/WebCameraComponent';
import ScenePollComponent from '../components/ScenePollComponent';
import OverlayLayout from '../components/OverlayLayout';
import StudioGrid from '../components/StudioGrid';
import ProfileScreen from '../components/ProfileScreen';
import BattleArenaScreen from '../components/BattleArenaScreen';

const VIDEO_TEMPLATE = "https://fals.ai";
const BACKEND_ENDPOINT = "https://railway.app";

export default function HomeStudio() {
  const [appState, setAppState] = useState('picker'); // 'picker', 'camera', 'processing', 'result'
  const [activeTab, setActiveTab] = useState('studio'); // 'studio', 'battle', 'profile'
  const [swappedVideo, setSwappedVideo] = useState(null);

  const handleIdentityTransformation = async (base64Image) => {
    setAppState('processing');
    try {
      const response = await fetch(BACKEND_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userSelfieUrl: base64Image, targetVideoUrl: VIDEO_TEMPLATE })
      });
      const data = await response.json();
      if (data.swappedVideoUrl) {
        setSwappedVideo(data.swappedVideoUrl);
        setAppState('result');
      } else {
        alert("Pipeline processing timeout. Resetting workspace.");
        setAppState('picker');
      }
    } catch (error) {
      console.error("Frontend Connection Error:", error);
      setAppState('picker');
    }
  };

  return (
    <div className="w-full h-screen bg-[#0A0A0C] flex justify-center items-center overflow-hidden font-sans antialiased selection:bg-[#00FFCC]/30">
      {/* Strict 9:16 mobile mockup device aspect-ratio constraint wrapper */}
      <div className="relative w-full max-w-[430px] h-full max-h-[932px] bg-black shadow-2xl overflow-hidden border border-white/5 flex flex-col justify-between">
        
        {/* MAIN ROUTER WINDOW VIEW CONTROLLER */}
        <div className="w-full flex-1 relative overflow-hidden">
          
          {/* TAB 1: SCENE BUILDER STUDIO VIEW */}
          {activeTab === 'studio' && (
            <div className="w-full h-full relative">
              {appState === 'picker' && (
                <div className="w-full h-full relative">
                  <StudioGrid onSelectCategory={(id) => console.log("Swapped genre category context:", id)} />
                  <video src={VIDEO_TEMPLATE} autoPlay loop muted playsInline className="w-full h-full object-cover absolute inset-0 z-0" />
                  <OverlayLayout onActionPress={() => setAppState('camera')} />
                </div>
              )}

              {appState === 'camera' && (
                <WebCameraComponent onCancel={() => setAppState('picker')} onCapture={handleIdentityTransformation} />
              )}

              {appState === 'processing' && (
                <div className="w-full h-full flex flex-col justify-center items-center p-8 text-center bg-[#0A0A0C]">
                  <div className="w-14 h-14 relative flex items-center justify-center mb-6">
                    <div className="absolute inset-0 border-4 border-[#00FFCC]/20 rounded-full" />
                    <div className="absolute inset-0 border-4 border-[#00FFCC] border-t-transparent rounded-full animate-spin" />
                  </div>
                  <h2 className="text-[#00FFCC] text-sm font-black tracking-widest uppercase">Compiling Identity...</h2>
                  <p className="text-gray-400 text-[11px] mt-2 max-w-[70%] leading-relaxed">Mapping facial landmarks cleanly onto background cinematic grids.</p>
                </div>
              )}

              {appState === 'result' && (
                <div className="w-full h-full relative">
                  <video src={swappedVideo || VIDEO_TEMPLATE} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                  <div className="absolute top-6 left-4 z-20">
                    <button onClick={() => setAppState('picker')} className="bg-black/60 px-4 py-2 rounded-full text-white text-[11px] font-bold border border-white/10 backdrop-blur-md cursor-pointer">✕ Back to Studio</button>
                  </div>
                  <div className="absolute bottom-6 left-4 right-4 z-20 flex flex-col gap-3">
                    <ScenePollComponent />
                    <button onClick={() => alert("Downloading avatar video asset stream to local roll...")} className="w-full bg-[#FF007F] text-white font-black py-4 rounded-xl text-xs tracking-widest transition-transform active:scale-95 shadow-lg shadow-[#FF007F]/20 cursor-pointer">📲 SHARE TO TIKTOK / REELS</button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: COMMUNITY BATTLE ARENA (LIVE CROWD VOTES) */}
          {activeTab === 'battle' && <BattleArenaScreen />}

          {/* TAB 3: CREATOR ACCOUNT VAULT PORTFOLIO */}
          {activeTab === 'profile' && <ProfileScreen />}

        </div>

        {/* BOTTOM GLOBAL DOCK NAVIGATION PANEL BAR */}
        {appState === 'picker' && (
          <div className="w-full bg-[#0A0A0C]/90 backdrop-blur-xl border-t border-white/5 py-4 px-6 flex justify-around items-center z-40 relative">
            <button onClick={() => setActiveTab('studio')} className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${activeTab === 'studio' ? 'text-[#00FFCC]' : 'text-gray-500'}`}>
              <span className="text-lg">🎬</span>
              <span className="text-[10px] font-black tracking-widest">STUDIO</span>
            </button>
            <button onClick={() => setActiveTab('battle')} className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${activeTab === 'battle' ? 'text-[#00FFCC]' : 'text-gray-500'}`}>
              <span className="text-lg">⚔️</span>
              <span className="text-[10px] font-black tracking-widest">ARENA</span>
            </button>
            <button onClick={() => setActiveTab('profile')} className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${activeTab === 'profile' ? 'text-[#00FFCC]' : 'text-gray-500'}`}>
              <span className="text-lg">👤</span>
              <span className="text-[10px] font-black tracking-widest">VAULT</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
