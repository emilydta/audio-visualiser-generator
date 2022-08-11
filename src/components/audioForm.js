function AudioForm(props) {
    return (
        <form className="audio-form">
            <label>Upload Audio File</label>
            <input type='file' accept="audio/*" placeholder="" className="audio-input" onChange={props.handleChange}></input>
            <audio
                controls
                src={props.audioFile ? URL.createObjectURL(props.audioFile) : null}
            >
            </audio>
            <button type="submit" onSubmit={props.submit}>Next</button>
        </form>
    )
}

export default AudioForm;