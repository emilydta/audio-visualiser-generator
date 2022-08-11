function AudioForm(props) {

    function preventDefaults(e) {
        e.preventDefault()
        e.stopPropagation()
    }

    return (
        <form className="audio-form">
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
                    src={props.audioFile ? URL.createObjectURL(props.audioFile) : null}
                >
                </audio>
            </div>
            <button type="submit" onSubmit={props.submit}>Next</button>
        </form>
    )
}

export default AudioForm;