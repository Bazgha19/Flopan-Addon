const button = document.getElementById('button');
const videoElement = document.getElementById('video');

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log('Errors occur', error);
  }
}

button.addEventListener('click', async () => {
  button.disabled = true;
  
  await videoElement.requestPictureInPicture();   // Start Floating Viewer
  
  button.disabled = false;
});

selectMediaStream();
