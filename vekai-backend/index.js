import { fal } from "@fal-ai/client";
import express from "express";

const app = express();
app.use(express.json());

// Root path to confirm the server status
app.get("/", (req, res) => {
    res.status(200).json({
        status: "online",
        message: "Avatar AI Backend Pipeline is active and healthy."
    });
});

// Transformation route
app.post("/api/transform-avatar", async (req, res) => {
    const { userSelfieUrl, targetVideoUrl } = req.body;

    if (!userSelfieUrl || !targetVideoUrl) {
        return res.status(400).json({ error: "Missing identity image or base scene video." });
    }

    try {
        const result = await fal.subscribe("fal-ai/face-swap", {
            input: {
                base_image_url: userSelfieUrl,
                video_url: targetVideoUrl,
                enable_face_enhancer: true,
                fidelity_threshold: 0.85
            }
        });

        return res.status(200).json({ swappedVideoUrl: result.video.url });

    } catch (error) {
        console.error("AI Generation Error:", error);
        return res.status(500).json({ error: "Transformation failed." });
    }
});

// 🌟 DYNAMIC PORT SYSTEM TO BYPASS PORT BLOCKS
const TARGET_PORT = process.env.PORT || 3001; // Automatically shifts default off port 3000

const server = app.listen(TARGET_PORT, () => {
    console.log(`🚀 Avatar Pipeline active on Port ${server.address().port}`);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log(`⚠️ Port ${TARGET_PORT} busy, dynamically rolling to an alternative port...`);
        server.listen(0); // Forces macOS to assign a completely random open port instantly
    } else {
        console.error("Server initialization error:", err);
    }
});
// Add MOCK_MODE check to your environment parameters
const MOCK_MODE = process.env.MOCK_MODE === "true";

app.post("/api/transform-avatar", async (req, res) => {
    const { userSelfieUrl, targetVideoUrl } = req.body;

    if (!userSelfieUrl || !targetVideoUrl) {
        return res.status(400).json({ error: "Missing identity image or base scene video." });
    }

    // 🌟 MOCK MODE CHECK (Saves credits during UI layouts)
    if (MOCK_MODE) {
        console.log("⚡ Mock Mode Active: Bypassing Fal.ai pipeline to save money.");
        
        // Emulate a 3-second network processing delay for UI testing
        await new Promise(resolve => setTimeout(resolve, 3000));

        return res.status(200).json({ 
            swappedVideoUrl: "https://fals.ai" 
        });
    }

    // --- Original Paid Production Logic Below ---
    try {
        const result = await fal.subscribe("fal-ai/face-swap", {
            input: {
                base_image_url: userSelfieUrl,
                video_url: targetVideoUrl,
                enable_face_enhancer: true,
                fidelity_threshold: 0.85
            }
        });

        return res.status(200).json({ swappedVideoUrl: result.video.url });

    } catch (error) {
        console.error("AI Generation Error:", error);
        return res.status(500).json({ error: "Transformation failed." });
    }
});
