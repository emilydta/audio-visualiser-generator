import AudioForm from './components/audioForm';
import './App.css';
import { useState } from 'react';

function App() {

  const [audioFile, setAudioFile] = useState('');

  function dropEvent(e) {
    e.preventDefault()
    e.stopPropagation()
    let files = e.dataTransfer.files
    setAudioFile(files[0].type.includes("audio") ? files[0] : audioFile)
  }

  return (
    <div className="App">
      <AudioForm
        handleChange={(e) => setAudioFile(e.target.files[0])}
        audioFile={audioFile}
        dropEvent={(e) => dropEvent(e)}
      />
    </div>
  );
}

export default App;
