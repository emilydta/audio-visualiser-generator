import { useState } from "react";

function DownloadCanvas(props) {
    const [downloadRequested, setDownloadRequested] = useState(false);
    const [blobUrl, setBlobUrl] = useState('');
    const downloadMedia = async () => {
        setDownloadRequested(true);
        const offscreenCanvas = new OffscreenCanvas(960, 540);
        const offscreenCtx = offscreenCanvas.getContext('2d');
        offscreenCtx.fillStyle = 'white';
        offscreenCtx.fillRect(0, 0, 100, 100);
        const response = await offscreenCanvas.convertToBlob();
        let responseUrl = URL.createObjectURL(response)
        setBlobUrl(responseUrl);
        console.log(responseUrl)
    }

    // const frame = downloadMedia();
    // console.log(frame)

    return (
        <div className="download-container">
            <button type="button" onClick={() => downloadMedia()}>Download</button>
            {downloadRequested ? <a href={blobUrl} download>Download Ready, click here</a> : null}
        </div>
    )
}

export default DownloadCanvas;