#!/bin/bash

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}===============================================${NC}"
echo -e "${BLUE}          VEKAI MVP CORE PIPELINE HEALTH SYSTEM  ${NC}"
echo -e "${BLUE}===============================================${NC}\n"

echo -e "${YELLOW}[TEST 1/2] Checking Local Express Server...${NC}"
SERVER_RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3001/)

if [ "$SERVER_RESPONSE" -eq 200 ]; then
    echo -e "${GREEN}✔ SUCCESS: Express server is online and responding smoothly.${NC}\n"
else
    echo -e "${RED}✘ CRITICAL FAILURE: Server is unreachable (HTTP $SERVER_RESPONSE).${NC}"
    echo -e "${RED}Please verify that 'npm run dev' is active and running.${NC}"
    exit 1
fi

echo -e "${YELLOW}[TEST 2/2] Triggering Test AI Face-Swap Processing Payload...${NC}"
PIPELINE_OUTPUT=$(curl -s -X POST http://localhost:3001/api/transform-avatar \
  -H "Content-Type: application/json" \
  -d '{
    "userSelfieUrl": "https://fals.ai",
    "targetVideoUrl": "https://fals.ai"
  }')

if [[ "$PIPELINE_OUTPUT" == *"swappedVideoUrl"* ]]; then
    echo -e "${GREEN}✔ SUCCESS: AI Rendering Engine responds perfectly!${NC}"
    echo -e "${GREEN}Generated Asset Payload:${NC} $PIPELINE_OUTPUT\n"
    exit 0
else
    echo -e "${RED}✘ PIPELINE ERROR: Backend did not return a valid video asset link.${NC}"
    echo -e "${RED}Output Was:${NC} $PIPELINE_OUTPUT"
    exit 1
fi
