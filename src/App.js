
import React, { useState } from 'react';
import Form from './component/Form';
import './App.css';
import './main.css';

function App() {

  const [form, setForm] = useState({
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
      <Form form={form} setForm={setForm} onTimeout={onTimeout} setonTimeout={setonTimeout} objtime={objtime} setobjtime={setobjtime}/>
    </div>
  );
}

export default App;
