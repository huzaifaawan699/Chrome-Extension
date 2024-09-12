# Screen Recording Transcription Chrome Extension

This Chrome extension allows users to record their screen and transcribe the audio in real time using **AssemblyAI API**. It captures both video and audio streams (screen content and microphone) and provides real-time transcription of spoken content.

## Features

- **Screen recording** (using `navigator.mediaDevices.getDisplayMedia()`)
- **Audio recording** (microphone capture)
- **Real-time transcription** with AssemblyAI WebSocket API
- Simple and intuitive UI
- Playback of screen recordings in the popup
- One-click start and stop recording

## Requirements

### API
This extension uses **AssemblyAI API** for transcription. You will need:
1. Sign up for a free AssemblyAI account.
2. Obtain your API key from the AssemblyAI dashboard.

### Permissions
The extension requires the following permissions:
- `activeTab`: To interact with the currently open tab.
- `storage`: To store data locally.
- `tabCapture`: To capture media from the screen.
- `microphone`: To capture audio for transcription.

### Chrome Version
- Minimum Chrome version: 89

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/screen-recording-transcription-extension.git
