import './App.css';
import React, { useState } from 'react';
import Box from './components/Box';
import DisplayBox from './components/DisplayBox';

function App() {
  const [box, setBox] = useState([]);

  return (
    <div className="App">
      <h1>Box Generator</h1>
      <Box box={box} setBox={setBox} />
      <DisplayBox box={box} />

    </div>
  );
}

export default App;
