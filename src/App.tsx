import React, { useEffect, useState } from 'react';
import './App.css';
import { Interface } from 'readline';
import List from './components/List';
import Form from './components/Form';
import { Subs } from './types';


const INITIAL_STATE = [
  {
    nickname: "riri",
    subMonths: 5,
    avatar: "https://i.pravatar.cc/150?baby",
    description: "riri hace de moderadora"

  },
  {
    nickname: "patrick_88",
    subMonths: 9,
    avatar: "https://i.pravatar.cc/150?dapelu"
  } 
]


function App() {
  const [subs, setSub] = useState<Subs[]>([])
   
  useEffect(() => {
    setSub(INITIAL_STATE)
  },[])

  return (
    <div className="App">
      <h1>Subs Sofia01</h1>
      <List subs = {subs}/>
      <Form />
      
    </div>
  );
}


export default App;
