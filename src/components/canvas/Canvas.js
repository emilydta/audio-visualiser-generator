import { useEffect, useRef } from "react";
//import DownloadCanvas from "./DownloadCanvas";

function Canvas(props) {
    let canvasRef = useRef();
    let audio = new Audio();
    audio.src = props.audioUrl


    useEffect(() => {
        canvasRef = canvasRef.current;
        const ctx = canvasRef.getContext('2d');
        const canvas = canvasRef

        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const analyser = audioCtx.createAnalyser();
        const source = audioCtx.createMediaElementSource(audio);
        source.connect(analyser);
        analyser.connect(audioCtx.destination);
        analyser.fftSize = 2048;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        let barWidth;
        let barHeight;
        let x;

        function animate() {
            barWidth = canvas.width / bufferLength;
            x = 0;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            analyser.getByteTimeDomainData(dataArray);
            for (let i = 0; i < bufferLength; i++) {
                barHeight = dataArray[i];
                ctx.fillStyle = 'white';
                ctx.fillRect(x, barHeight, barWidth, barHeight);
                x += barWidth;
            }
            requestAnimationFrame(animate)
        }
        animate();
    })

    // <DownloadCanvas canvasRef={canvasRef}
    //     audioFile={props.audioFile}
    // />


    return (
        <div>
            <button type='button' onClick={() => audio.play()}>Play</button>
            <button type='button' onClick={() => audio.pause()}>Pause</button>
            <canvas
                ref={canvasRef}
                id="canvas"
                width="960px"
                height="540px">
            </canvas>
        </div>
    )
}

export default Canvas;