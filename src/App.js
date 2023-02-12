
import React, { useState } from 'react';
import Form from './component/Form';
import List from './component/List';
import './App.css';
import './main.css';

function App() {
  const [form, setForm] = useState({
    object: []
  })

  return (
    <div className="App">
      <Form form={form} setForm={setForm}/>
      <List form={form} setForm={setForm}/>
    </div>
  );
}

export default App;
