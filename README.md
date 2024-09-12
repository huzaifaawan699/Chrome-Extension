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
   git clone https://github.com/huzaifaawan699/Chrome-Extension.git

2. Navigate to the project directory:
   ```bash
   cd Chrome-Extension
### 3. Load the extension into Chrome:
- Open Chrome and go to chrome://extensions/.
- Enable Developer Mode.
- Click Load unpacked and select the project directory where manifest.json is located.
- The extension will now appear in your Chrome toolbar.
### 4. API Key Configuration
To enable real-time transcription, follow these steps:

- Sign up for a free AssemblyAI account.
- Copy your API key from your [Sign up for AssemblyAI](https://www.assemblyai.com/)
  AssemblyAI dashboard.
- Open the popup.js file in the project folder.
- Find the line where the API key is referenced and replace it with your own API key:
  ```bash
  const apiKey = 'YOUR_ASSEMBLY_API_KEY';
### Usage
- Click the extension icon in the Chrome toolbar.
- In the popup window, click Start Recording.
- A screen sharing prompt will appear—select the screen or application window to capture.
- Audio from the microphone will also be captured for transcription.
- Real-time transcription will be displayed in the popup window as the recording progresses.
- To stop recording, click Stop Recording. The recording will stop, and the transcription will finalize.
### Project Structure
├── manifest.json       
├── popup.html          
├── popup.js            
├── background.js       
├── styles.css         
├── README.md          
└── icon.png            

### Explanation of Files:

- **manifest.json**: Contains the configuration of the Chrome extension including permissions, scripts, and actions.
- **popup.html**: The HTML file responsible for the extension's popup interface where users interact.
- **popup.js**: JavaScript file that handles the logic for recording screen/audio and sending data to the AssemblyAI API for transcription.
- **background.js**: Background script for handling long-running processes such as interacting with APIs in the background.
- **styles.css**: CSS file that styles the extension’s user interface for a cleaner and more user-friendly appearance.
- **icon.png**: The icon displayed in the Chrome toolbar for the extension (optional).
### Files
- `manifest.json:` Defines the permissions and background behavior of the extension.
- `popup.html:` The HTML file responsible for the popup interface where users interact with the extension.
- `popup.js:` The core JavaScript file that handles screen capture, transcription requests via AssemblyAI WebSocket API, and audio playback.
- `background.js:` A background script that handles API interactions and logic.
- `styles.css:` Defines the styles for the popup interface.
### Permissions
The extension requests the following permissions:
- `activeTab:` To interact with the currently active tab.
- `tabCapture:` To capture media from the screen.
- `storage:` To store user preferences locally.
- `microphone:` To capture audio from the user's microphone for transcription.
### Known Issues
- Permission Denial: Ensure microphone and screen capture permissions are granted when prompted.
- WebSocket Closed Error: If the WebSocket connection closes prematurely, ensure that your AssemblyAI API key is valid and that the WebSocket connection is properly established.
### Troubleshooting
If the transcription does not start:
- Verify that you have provided the correct AssemblyAI API key.
- Ensure microphone permission is enabled in your browser.
  If the screen recording preview is half-sized:
- Check the video preview size in your popup.html and ensure it is scaled correctly using CSS.

### Steps:

1. Replace `your-username` with your GitHub username in the `git clone` command and issues page URL.
2. Make sure to update the `popup.js` file with your AssemblyAI API key as mentioned in the steps.

This file is ready to be used as your project's `README.md`. It includes installation, API configuration, usage, project structure, and troubleshooting instructions.
