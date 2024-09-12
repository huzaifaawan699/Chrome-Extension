let mediaRecorder;
let chunks = [];
let assemblySocket;
const transcriptionDiv = document.getElementById('transcriptionText');

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const videoPreview = document.getElementById('videoPreview');

// AssemblyAI API key
const assemblyApiKey = '8a4a1a858d734f3b8ee640c088cea499'; // Replace with your actual API key

// Start Recording
startButton.addEventListener('click', async () => {
  try {
    const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
    const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });

    // Combine screen and microphone streams
    const combinedStream = new MediaStream([...screenStream.getTracks(), ...audioStream.getTracks()]);

    // Display screen recording preview
    videoPreview.srcObject = combinedStream;
    videoPreview.play();

    // Setup MediaRecorder
    mediaRecorder = new MediaRecorder(combinedStream);
    mediaRecorder.start();
    startButton.disabled = true;
    stopButton.disabled = false;

    // Collect recorded data
    mediaRecorder.ondataavailable = (event) => {
      chunks.push(event.data);
    };

    // Start transcription
    startTranscription();

    stopButton.addEventListener('click', () => {
      mediaRecorder.stop();
      screenStream.getTracks().forEach(track => track.stop());
      audioStream.getTracks().forEach(track => track.stop());
      stopButton.disabled = true;
      startButton.disabled = false;
      stopTranscription();
    });
  } catch (error) {
    console.error('Error starting recording:', error);
  }
});

// Start transcription using AssemblyAI WebSocket
async function startTranscription() {
  try {
    const socket = new WebSocket(`wss://api.assemblyai.com/v2/realtime/ws?sample_rate=16000`);

    assemblySocket = socket;

    socket.onopen = () => {
      console.log("Connected to AssemblyAI WebSocket");
      socket.send(JSON.stringify({ auth_token: assemblyApiKey }));
    };

    socket.onmessage = (message) => {
      const response = JSON.parse(message.data);
      if (response.text) {
        transcriptionDiv.textContent += response.text + ' ';
      }
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    mediaRecorder.ondataavailable = (event) => {
      const reader = new FileReader();
      reader.readAsArrayBuffer(event.data);
      reader.onloadend = () => {
        if (socket.readyState === WebSocket.OPEN) {
          socket.send(reader.result);
        } else {
          console.error('WebSocket is not open');
        }
      };
    };
  } catch (error) {
    console.error('Error starting transcription:', error);
  }
}

// Stop transcription
function stopTranscription() {
  if (assemblySocket) {
    assemblySocket.close();
    console.log("Transcription stopped");
  }
}
