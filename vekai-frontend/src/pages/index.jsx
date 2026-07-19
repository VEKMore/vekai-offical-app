import React, { useState } from 'react';
import WebCameraComponent from '../components/WebCameraComponent';
import ScenePollComponent from '../components/ScenePollComponent';
import OverlayLayout from '../components/OverlayLayout';

// Base64 template videos hosted inside public directory
const VIDEO_TEMPLATE = "https://fals.ai";
// Point your frontend requests straight to your live backend server instance on port 3001
const BACKEND_ENDPOINT = "http://localhost:3001/api/transform-avatar";

export default function HomeStudio() {
  const [appState, setAppState] = useState('picker'); // 'picker', 'camera', 'processing', 'result'
  const [swappedVideo, setSwappedVideo] = useState(null);

  // Triggers when user takes a web snapshot profile selfie
  const handleIdentityTransformation = async (base64Image) => {
    setAppState('processing');
    
    try {
      const response = await fetch(BACKEND_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userSelfieUrl: base64Image, // Transmitting captured photo data payload
          targetVideoUrl: VIDEO_TEMPLATE
        })
      });

      const data = await response.json();
      if (data.swappedVideoUrl) {
        setSwappedVideo, data.swappedVideoUrl;
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
    <div className="w-full h-screen bg-[#0A0A0C] flex justify-center items-center overflow-hidden font-sans">
      {/* Target Canvas Restrained to a strict 9:16 mobile device container view */}
      <div className="relative w-full max-w-[430px] h-full max-h-[932px] bg-black shadow-2xl overflow-hidden">
        
        {/* STAGE 1: THE SCENE PICKER STUDIO FEED */}
        {appState === 'picker' && (
          <div className="w-full h-full relative">
            <video src={VIDEO_TEMPLATE} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            <OverlayLayout onActionPress={() => setAppState('camera')} />
          </div>
        )}

        {/* STAGE 2: BROWSER WEBCAM PROFILE HARDWARE CAPTURE */}
        {appState === 'camera' && (
          <WebCameraComponent 
            onCancel={() => setAppState('picker')} 
            onCapture={handleIdentityTransformation} 
          />
        )}

        {/* STAGE 3: RUNNING PROGRESSIVE COMPILER BLOCK */}
        {appState === 'processing' && (
          <div className="w-full h-full flex flex-col justify-center items-center p-8 text-center bg-[#0A0A0C]">
            <div className="w-12 h-12 border-4 border-[#00FFCC] border-t-transparent rounded-full animate-spin mb-6" />
            <h2 className="text-[#00FFCC] text-lg font-black tracking-widest uppercase">Compiling Identity...</h2>
            <p className="text-gray-400 text-xs mt-2 leading-relaxed">
              Mapping facial configurations onto cinematic background layouts cleanly.
            </p>
          </div>
        )}

        {/* STAGE 4: LIVE RESULT DISPLAY & PUBLIC VOTING PANEL */}
        {appState === 'result' && (
          <div className="w-full h-full relative">
            <video src={swappedVideo} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            
            {/* Top Action Back Bar */}
            <div className="absolute top-6 left-4 z-20">
              <button onClick={() => setAppState('picker')} className="bg-black/60 px-4 py-2 rounded-full text-white text-xs font-bold border border-white/10 backdrop-blur-md">
                ✕ Back to Feed
              </button>
            </div>

            {/* Bottom Interaction Overlays */}
            <div className="absolute bottom-6 left-4 right-4 z-20 flex flex-col gap-3">
              <ScenePollComponent />
              <button onClick={() => alert("Launching browser file downloader link...")} className="w-full bg-[#FF007F] text-white font-bold py-4 rounded-xl text-sm transition-transform active:scale-95 shadow-lg shadow-[#FF007F]/20">
                📲 SHARE TO TIKTOK / REELS
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
