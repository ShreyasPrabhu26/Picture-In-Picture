const videoEle = document.getElementById("video");
const button = document.getElementById("mainButton");


async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoEle.srcObject = mediaStream;
        videoEle.onloadedmetadata = () => {
            videoEle.play();
        }

    } catch (err) {
        console.error(`Error : ${err}`);
    }
}

button.addEventListener("click", async () => {
    //Disable Button
    button.disabled = true;
    await videoEle.requestPictureInPicture();
    button.disabled = false;
})

selectMediaStream();

