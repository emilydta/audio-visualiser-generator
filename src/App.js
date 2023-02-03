import AudioForm from './components/AudioForm';
import Canvas from './components/canvas/Canvas'
import './App.css';
import { useState } from 'react';

function App() {
  const [audioFile, setAudioFile] = useState('');
  const [audioUrl, setAudioUrl] = useState('');
  const [editorOpen, setEditorOpen] = useState(false);

  function dropEvent(e) {
    e.preventDefault()
    e.stopPropagation()
    let files = e.dataTransfer.files
    setAudioFile(files[0].type.includes("audio") ? files[0] : audioFile)
    setAudioUrl(URL.createObjectURL(files[0]))
  }

  function setAudioData(e) {
    setAudioFile(e.target.files[0])
    setAudioUrl(URL.createObjectURL(e.target.files[0]))
  }

  function submitForm(e) {
    e.preventDefault();
    if (!audioFile) {
      return
    } else {
      setEditorOpen(true);
    }
  }

  return (
    <div className="App">
      <AudioForm
        handleChange={(e) => setAudioData(e)}
        audioFile={audioFile}
        audioUrl={audioUrl}
        dropEvent={(e) => dropEvent(e)}
        submit={(e) => submitForm(e)}
      />
      {editorOpen && audioFile ?
        <Canvas
          audioUrl={audioUrl}
          audioFile={audioFile}
        /> : null}
    </div>
  );
}

export default App;
