import React, { useEffect, useRef, useState } from 'react';
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
  const divRef = useRef<HTMLDivElement>(null) 

  useEffect(() => {
    setSub(INITIAL_STATE)
  },[])

  const handleNewSub = (newSub: Subs): void => {
    setSub (subs => [...subs, newSub])
  }

  return (
    <div className="App" ref={divRef}>
      <h1>Subs Sofia01</h1>
      <List subs = {subs}/>
      <Form onNewSub={handleNewSub}/>
      
    </div>
  );
}


export default App;
