
import React, { useState } from 'react';
import ListItem from './component/Child';
import List from './component/Form';
import './App.css';
import './main.css';

function App() {

  let [az, setza] = useState('')

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
      <List onTimeout={onTimeout} setonTimeout={setonTimeout} objtime={objtime} setobjtime={setobjtime} ab={ab} setab={setab} az={az} setza={setza}>{(item) => <ListItem onTimeout={onTimeout} setonTimeout={setonTimeout} objtime={objtime} setobjtime={setobjtime} ab={ab} setab={setab} key={item}>{item}</ListItem>}</List>
    </div>
  );
}

export default App;
