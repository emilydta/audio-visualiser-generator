function AudioForm(props) {

    function preventDefaults(e) {
        e.preventDefault()
        e.stopPropagation()
    }

    return (
        <form className="audio-form" onSubmit={props.submit}>
            <div id="dropzone"
                onDragEnter={(e) => preventDefaults(e)}
                onDragOver={(e) => preventDefaults(e)}
                onDragLeave={(e) => preventDefaults(e)}
                onDrop={props.dropEvent}
            >
                <label>Upload Audio File</label>
                <input type='file'
                    style={{ color: "transparent" }}
                    title=" "
                    accept="audio/*"
                    className="audio-input"
                    onChange={props.handleChange}></input>
                <audio
                    controls
                    src={props.audioFile ? props.audioUrl : null}
                >
                </audio>
            </div>
            <p>{props.audioFile ? props.audioFile.name : null}</p>
            <button type="submit">Next</button>
        </form>
    )
}

export default AudioForm;