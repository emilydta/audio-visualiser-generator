import AudioForm from './components/audioForm';
import './App.css';
import { useState } from 'react';

function App() {

  const [audioFile, setAudioFile] = useState();

  return (
    <div className="App">
      <AudioForm
        handleChange={(e) => setAudioFile(e.target.files[0])}
        audioFile={audioFile}
      />  
    </div>
  );
}

export default App;
