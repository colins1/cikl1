
import React, { useState } from 'react';
import Form from './component/Form';
import './App.css';
import './main.css';

function App() {

  const [ab, setab] = useState({
    object: [],
  })

  const [objtime, setobjtime] = useState({
    object: [],
  })

  
  const [onTimeout, setonTimeout] = useState({
    object: [],
  })

  return (
    <div className="App">
      <Form onTimeout={onTimeout} setonTimeout={setonTimeout} objtime={objtime} setobjtime={setobjtime} ab={ab} setab={setab}/>
    </div>
  );
}

export default App;
