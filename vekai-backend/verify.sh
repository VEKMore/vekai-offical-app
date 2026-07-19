#!/bin/bash

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}===============================================${NC}"
echo -e "${BLUE}          VEKAI MVP CORE PIPELINE HEALTH SYSTEM  ${NC}"
echo -e "${BLUE}===============================================${NC}\n"

# 🌟 AUTOMATIC PORT DISCOVERY NODE
echo -e "${BLUE}Scanning active server endpoints...${NC}"
TARGET_PORT=$(lsof -iTCP -sTCP:LISTEN -P -n | grep node | head -n 1 | awk -F':' '{print $2}' | awk '{print $1}')

if [ -z "$TARGET_PORT" ]; then
    echo -e "${RED}✘ CRITICAL FAILURE: No active Node.js server discovered on any port.${NC}"
    echo -e "${RED}Please ensure 'npm run dev' is running in your backend tab.${NC}"
    exit 1
fi

echo -e "${GREEN}✔ SUCCESS: Active Vekai server discovered running on Port: ${TARGET_PORT}${NC}\n"

# --- TEST 1: CORE LOCAL SERVER UPSTREAM CHECK ---
echo -e "${YELLOW}[TEST 1/2] Checking Local Express Server Status...${NC}"
SERVER_RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:${TARGET_PORT}/)

if [ "$SERVER_RESPONSE" -eq 200 ]; then
    echo -e "${GREEN}✔ SUCCESS: Express server is online and responding smoothly.${NC}\n"
else
    echo -e "${RED}✘ CRITICAL FAILURE: Server is unreachable (HTTP $SERVER_RESPONSE).${NC}"
    exit 1
fi

# --- TEST 2: AI FACE-SWAP ENGINE PIPELINE CHECK ---
echo -e "${YELLOW}[TEST 2/2] Triggering Test AI Face-Swap Processing Payload...${NC}"
echo -e "${BLUE}Sending mock assets to server pipeline (Expect 3s mock delay)...${NC}"

PIPELINE_OUTPUT=$(curl -s -X POST http://localhost:${TARGET_PORT}/api/transform-avatar \
  -H "Content-Type: application/json" \
  -d '{
    "userSelfieUrl": "https://fals.ai",
    "targetVideoUrl": "https://fals.ai"
  }')

if [[ "$PIPELINE_OUTPUT" == *"swappedVideoUrl"* ]]; then
    echo -e "${GREEN}✔ SUCCESS: AI Rendering Engine responds perfectly!${NC}"
    echo -e "${GREEN}Generated Asset Payload:${NC} $PIPELINE_OUTPUT\n"
    
    echo -e "${BLUE}===============================================${NC}"
    echo -e "${GREEN}🏁 STATUS VERIFICATION: 100% READY FOR TAILWIND FRONTEND ASSEMBLY${NC}"
    echo -e "${BLUE}===============================================${NC}"
    exit 0
else
    echo -e "${RED}✘ PIPELINE ERROR: Backend did not return a valid video asset link.${NC}"
    echo -e "${RED}Server Log Output:${NC} $PIPELINE_OUTPUT"
    exit 1
fi
