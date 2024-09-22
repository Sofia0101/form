import React, { useState } from 'react';
import './App.css';

function App() {
  const [sub, setSub] = useState([
    {
      nickname: "riri",
      subMonths: "5",
      avatar: "https://i.pravatar.cc/150?baby",
      description: "riri hace de moderadora"

    },
    {
      nickname: "patrick_88",
      subMonths: "9",
      avatar: "https://i.pravatar.cc/150?dapelu"
    }
  ]);

  return (
    <div className="App">
      <h1>Subs Sofia01</h1>
      <ul>
        {
        sub.map(sub => {
        return (
          <li key={sub.nickname}>
            <img src={sub.avatar} alt="avatar" />
            <h4>{sub.nickname} (<small>{sub.subMonths}</small>)</h4>
            <p>{sub.description?.substring(0, 100)}</p>
          
          </li>
        )
        })
      }
      </ul>
    </div>
  );
}

export default App;
