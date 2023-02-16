
import React, { useState, useEffect } from 'react';
import Form from './component/Form';
import './App.css';
import './main.css';

function App() {

  const [form, setForm] = useState({
    object: [],
  })

  const [time, setTime] = useState({
    answer: true,
    object: [],
  })

  return (
    <div className="App">
      <Form form={form} setForm={setForm} time={time} setTime={setTime}/>
    </div>
  );
}

export default App;
